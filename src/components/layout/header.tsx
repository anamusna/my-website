import clsx from "clsx";
import SocialLinks from "components/elements/social-links";
import ThemeToggle from "components/layout/theme-toggle";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "../../context/LanguageContext";
import {
  getHeaderHref,
  isHeaderNavActive,
  PRIMARY_HEADER_NAV,
} from "../../data/header";

import {
  CHROME_BAR_BASE,
  CHROME_BAR_BORDER_BOTTOM,
  CHROME_BAR_GLASS,
  CHROME_BAR_TOP_FADE,
  CHROME_CHIP,
  CHROME_CHIP_ACTIVE,
  CHROME_CHIP_HOVER,
} from "../../tailwind/styles/chromeBar";
import { DeviceType, getDeviceType } from "../../utils/device-type";

const HeaderContent: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isInitialRender, setIsInitialRender] = useState(true);
  const [screenSize, setScreenSize] = useState<{
    width: number;
    height: number;
    orientation: "portrait" | "landscape";
  }>({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
    orientation:
      typeof window !== "undefined" && window.innerWidth > window.innerHeight
        ? "landscape"
        : "portrait",
  });

  const location = useLocation();
  const { language } = useTranslation();
  // const {  openSpotlight} = useSpotlightSearch();

  const navigation = PRIMARY_HEADER_NAV.map((item) => ({
    name: item.label,
    href: getHeaderHref(item.url),
    url: item.url,
    highlight: item.highlight ?? false,
  }));

  const deviceType: DeviceType = getDeviceType(screenSize);
  const getHeaderHeight = () => {
    switch (deviceType) {
      case "mobile-xs":
        return "h-[56px]";
      case "mobile":
      case "mobile-large":
        return "h-[60px]";
      case "mobile-landscape":
        return "h-[52px]"; // Shorter for landscape mobile
      case "tablet":
        return "h-[68px]";
      case "tablet-landscape":
        return "h-[50px]"; // Shorter for landscape tablet
      case "laptop":
        return "h-[72px]";
      case "desktop":
        return "h-[78px]";
      case "desktop-large":
        return "h-[80px]";
      default:
        return "h-[68px]";
    }
  };

  const getLogoSize = () => {
    switch (deviceType) {
      case "mobile-xs":
        return "w-7 h-7";
      case "mobile":
      case "mobile-large":
        return "w-8 h-8";
      case "mobile-landscape":
        return "w-7 h-7"; // Smaller for landscape
      case "tablet":
      case "tablet-landscape":
        return "w-9 h-9";
      case "laptop":
        return "w-10 h-10";
      case "desktop":
      case "desktop-large":
        return "w-11 h-11";
      default:
        return "w-8 h-8";
    }
  };

  useEffect(() => {
    setIsScrolled(window.scrollY > 20);
    setIsInitialRender(false);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
        orientation: (window.innerWidth > window.innerHeight
          ? "landscape"
          : "portrait") as "landscape" | "portrait",
      });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
    };
  }, []);

  return (
    <>
      <header
        className={clsx(
          "fixed top-0 left-0 right-0 z-[60]",
          !isInitialRender && "duration-500",
          getHeaderHeight(),
          CHROME_BAR_BASE,
        deviceType === "mobile-xs"
          ? "px-3"
          : deviceType === "mobile"
            ? "px-4"
            : deviceType === "mobile-large"
              ? "px-4"
              : deviceType === "mobile-landscape"
                ? "px-4"
                : deviceType === "tablet"
                  ? "px-6"
                  : deviceType === "tablet-landscape"
                    ? "px-6"
                    : "px-4",
        isScrolled
          ? clsx(CHROME_BAR_GLASS, CHROME_BAR_BORDER_BOTTOM)
          : CHROME_BAR_TOP_FADE,
      )}
    >
      <nav className="relative h-full">
        <div className="container mx-auto h-full max-w-7xl sm:px-6 md:px-4 lg:px-5">
          <div className="flex items-center gap-1.5 sm:gap-2 h-full min-w-0 w-full">
            {/* Enhanced Logo/Name with ultra-responsive design */}
            <Link
              to="/"
              className="group relative flex items-center gap-2 sm:gap-3 flex-shrink-0 min-w-0 max-w-[min(100%,10.5rem)] xs:max-w-none"
            >
              <img
                src="/logo.png"
                alt="Ansu Darboe"
                className={clsx("relative object-cover", getLogoSize())}
              />

              {/* Enhanced Name and Title with responsive display */}
              {/*   <div className="relative min-w-0 flex-1">
                <h3 className={clsx("font-bold truncate", getNameTextSize())}>
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 dark:from-indigo-400 dark:via-violet-400 dark:to-purple-400 animate-crystalline-shimmer bg-[length:200%_100%]">
                    {getDisplayName()}
                  </span>
                </h3>

                {shouldShowSubtitle() && (
                  <span
                    className={clsx(
                      "text-light-text/50 dark:text-dark-text/50 group-hover:text-light-text dark:group-hover:text-dark-text transition-colors duration-500 block truncate",
                      deviceType === "mobile" || deviceType === "mobile-large"
                        ? "text-xs"
                        : deviceType === "tablet"
                          ? "text-xs"
                          : deviceType === "tablet-landscape"
                            ? "text-xs"
                            : "text-xs",
                    )}
                  >
                    {language === "en"
                      ? deviceType === "tablet" ||
                        deviceType === "tablet-landscape"
                        ? "Software Engineer"
                        : "Senior Software Engineer"
                      : deviceType === "tablet" ||
                          deviceType === "tablet-landscape"
                        ? "Software Entwickler"
                        : "Senior Software Entwickler"}
                  </span>
                )}
              </div> */}
            </Link>

            {/* Equal flex spacers center SocialLinks between logo and nav+theme */}
            <div className="flex-1 basis-0 min-w-0 shrink" aria-hidden="true" />

            <div className="shrink-0 pointer-events-auto z-10">
              <SocialLinks
                variant="header"
                spacing="compact"
                showHashnode={false}
                className="gap-1.5 sm:gap-3"
              />
            </div>

            <div className="flex-1 basis-0 min-w-0 shrink" aria-hidden="true" />

            <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3 shrink-0 min-w-0 z-20">
              <div className="min-w-0 max-w-full overflow-x-auto scrollbar-hide py-1 -my-1 flex justify-end">
                <div className="flex items-center gap-1 sm:gap-2 md:gap-4 lg:gap-6 shrink-0">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={clsx(
                        "group relative shrink-0 px-2 sm:px-3 py-2.5 sm:py-2 text-xs sm:text-sm md:text-base font-medium transition-all duration-300 whitespace-nowrap rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-royal-primary/50 inline-flex items-center sm:min-h-0",
                        isHeaderNavActive(location.pathname, item.url)
                          ? CHROME_CHIP_ACTIVE
                          : clsx(
                              CHROME_CHIP,
                              CHROME_CHIP_HOVER,
                              item.highlight
                                ? "text-indigo-700 dark:text-indigo-300 font-semibold"
                                : "text-light-text/85 dark:text-dark-text/85",
                            ),
                      )}
                    >
                      <span className="relative">
                        {item.name}
                        <div
                          className={clsx(
                            "absolute -bottom-1 left-0 h-0.5 w-full bg-indigo-600 dark:bg-indigo-400 transition-transform duration-300 origin-left",
                            isHeaderNavActive(location.pathname, item.url)
                              ? "scale-x-100"
                              : "scale-x-0 group-hover:scale-x-100",
                          )}
                        />
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
              <div className="shrink-0">
                <ThemeToggle />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
    {/* Reserves space so fixed header does not cover page content */}
    <div aria-hidden className={clsx("w-full shrink-0", getHeaderHeight())} />
    </>
  );
};

const Header: React.FC = () => <HeaderContent />;

export default Header;
