import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Routes from "./Routes";
import "./styles/main.scss";

const App = () => {
  const location = useLocation();
  const { i18n } = useTranslation();
  const divRef = useRef<HTMLDivElement>(null);
  const languageFromPath = window.location.pathname.split("/")[1];

  useEffect(() => {
    const div = divRef.current;
    i18n.changeLanguage(languageFromPath);

    if (!location.hash && !location.state?.scrollTo && div) {
      div.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [location, i18n, languageFromPath]);

  return (
    <div ref={divRef}
    >
      <Routes />
    </div>
  );
};

export default App;
