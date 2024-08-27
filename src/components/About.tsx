import React, { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import { HomeBanner } from "./BannerImage";
import { SlideContent, useSlideAnimation } from "./Sliders";
import { ThemeContext } from "../ThemeContext";
import forwards from "../styles/images/forwards.svg";
import forwards1 from "../styles/images/forwards1.svg";
import { useTranslatedPaths } from "../helpers/use-translated-paths";
import { useThemeStyles } from "../helpers/use-theme-styles";

const About = () => {
  const slideRef = useRef<HTMLDivElement>(null);
  const { t, i18n } = useTranslation();

  useSlideAnimation(slideRef, "bottom");
  const { about } = useTranslatedPaths(t("header.links.about.url"));

  const { theme } = useContext(ThemeContext);
  const isDarkTheme = theme === "dark";
  const {
    textColor,
  } = useThemeStyles(theme);

  return (
    <div className="hero-container container pt-5 pb-4 pt-md-6">
      <div className="hero-column col-md-10 mx-auto">
        <h1 className={`hero-title mb-4 text-gray`}>
          {t("about.title")}
        </h1>
        <div className="d-flex gap-2">
          <img
            src={isDarkTheme ? forwards : forwards1}
            className="img-fluid"
            alt="services"
            style={{ width: "1.8rem", height: "1.8rem" }}
          />
          <h3
            className={`text-uppercase value-title mb-4 text-start ${textColor}`}
          >
            {t("about.subText")}
          </h3>
        </div>
        <div className="banner banner-image banner-image-right col-12">
          <div className="banner-row d-flex col-auto col-md-12 position-relative">
            <HomeBanner className="home-banner-img" />
            <div className="banner-body">
              <SlideContent
                from="left"
                className="banner-text"
                slideElement={
                  <>
                    <p className={`mb-4 mb-md-5 body-text text-start fw-normal ${textColor}`}>
                      {t("home.hero.text")}
                    </p>
                    <Link
                      className=" btn btn-lg bt-icon btn-primary linked-btn text-uppercase"
                      to={`/${i18n.language}${about}`}
                    >
                      {t("home.links.about")}
                      <FontAwesomeIcon
                        icon={faArrowRightLong}
                        className=" "
                        fixedWidth
                      />
                    </Link>
                  </>
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
