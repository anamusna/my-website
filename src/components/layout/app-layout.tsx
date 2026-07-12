import BackButton from "components/elements/back-button";
import { ComposerStack } from "components/peek/composer/composer-stack/composer-stack";
import { resolvePageId, shouldShowDock } from "data/pageNavigation";
import React, { useRef } from "react";
import { useLocation } from "react-router-dom";
import { SpotlightSearchProvider } from "../../hooks/useSpotlightSearch";
import SpotlightChatbot from "components/spotlight/spotlight-chatbot";
import BottomDock from "./bottom-dock";
import Footer from "./footer";
import Header from "./header";
import ScrollToTopButton from "./scroll-to-top-button";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const chatLauncherRef = useRef<HTMLButtonElement>(null);
  const pageId = resolvePageId(location.pathname);

  return (
    <ComposerStack>
      <SpotlightSearchProvider>
        <div className="relative flex min-h-screen w-full flex-col">
          <Header />
          <BackButton position="top-left" />
          <SpotlightChatbot launcherRef={chatLauncherRef} />
          <main className="flex-grow">{children}</main>
          <div className="hidden md:block">
            <ScrollToTopButton />
          </div>
          {pageId && shouldShowDock(pageId) && (
            <BottomDock pageId={pageId} launcherRef={chatLauncherRef} />
          )}
          <Footer />
        </div>
      </SpotlightSearchProvider>
    </ComposerStack>
  );
};

export default Layout;
