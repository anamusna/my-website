import React, { useContext, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDotCircle, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import BannerImage from "../components/BannerImage";
import { SlideContent, useSlideAnimation } from "../components/Sliders";
import { useScrollToDiv } from "../helpers/back-to-top";
import Background from "../styles/images/background.jpg";
import { SocialMedia, SocialMediaItems } from "../components/ColophonSocialMedia";
import { ThemeContext } from "../ThemeContext";
import { useThemeStyles } from "../helpers/use-theme-styles";

import forwards from "../styles/images/forwards.svg";
import forwards1 from "../styles/images/forwards1.svg";

const About = () => {
  const [sectionRefs, goToSection] = useScrollToDiv();
  const { theme } = useContext(ThemeContext);
  const { backgroundColor, opacityBackground, borderColor, textColor } = useThemeStyles(theme);

  const location = useLocation();

  useEffect(() => {
    const div = sectionRefs.about.current;

    if (!location.hash && div) {
      div.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, []);
  
  return (
    <div className={`page-about mt-5 ${backgroundColor}`} ref={sectionRefs.about}>
      <section
        className={`hero-wrapper page-about hero hero-headline hero-lg position-relative ${opacityBackground}`}
        style={{
          backgroundImage: `url(${Background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className={`overlay ${opacityBackground}`}></div>
        <div className="content">
          <Heading />
        </div>
      </section>
      <section>
        <Bio />
      </section>
      <section className="page-home hero-holder mb-5">
        <div className="mt-auto mb-md-4 mx-auto d-flex flex-row text-center align-items-center justify-content-center">
          <button
            onClick={() => goToSection("about")}
            className={`scroll-button slide-content slide-content-from-avatar ${borderColor}`}
          >
            <div className="slide-content-from-avatar align-self-end">
              <FontAwesomeIcon
                icon={faDotCircle}
                className={`pt-2 align-self-end text-end ${textColor}`}
                fixedWidth
                size="xs"
              />
            </div>
          </button>
        </div>
      </section>
    </div>
  );
};

const Heading = () => {
  const { t, i18n } = useTranslation();
  const slideRef = useRef<HTMLDivElement>(null);
  const { theme } = useContext(ThemeContext);
  const { backgroundColor, textColor } = useThemeStyles(theme);

  const summary: string[] = t("about.summary", { returnObjects: true });
  const offers: string[] = t("about.offers", { returnObjects: true });

  const cvLink =
    i18n.language === "de"
      ? "https://drive.google.com/file/d/1_L5NbGdANHJCJEg7Oh__r9yHH2goSsYJ/view?usp=sharing"
      : "https://drive.google.com/file/d/1JScDayvwjoDI4koNPrE84D8N7kE7H5qH/view?usp=sharing";

  useSlideAnimation(slideRef, "bottom");

  return (
    <div className="hero-container col-12">
      <div
        className={`hero-row col-md-10 mx-auto row d-flex justify-content-center align-items-center rounded-4 ${backgroundColor}`}
      >
        <SlideContent
          className="hero-body overlay-content"
          from="left"
          slideElement={
            <div className="slide-content-from-bottom mt-md-4" ref={slideRef}>
              <h1 className={`hero-title title text-center mb-4 ${textColor}`}>
                {t("home.links.about")}
              </h1>
              <BannerImage className="rounded-circle col-md-4 mx-auto mb-4" />
              <div className="mb-4">
                <ul className={`d-flex justify-content-center list-unstyled gap-4 ${textColor}`}>
                  {SocialMediaItems.map((item, index) => (
                    <SocialMedia key={index} item={item} index={index} />
                  ))}
                </ul>
              </div>
              <div className={`text-start body-text fw-normal ${textColor}`}>
                {summary.map((text, index) => (
                  <p key={index}>{t(text)}</p>
                ))}
                <p>{t("serviceText")}:</p>
                <ul>
                  {offers.map((text, index) => (
                    <li key={index} className={textColor}>
                      <span className="fw-bold">{t(text.split(":")[0])}:</span>
                      <span> {t(text.split(":").slice(1).join(":"))}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-4 resume text-start">
                <a
                  className="btn btn-lg bt-icon btn-outline-primary text-uppercase linked-btn"
                  href={cvLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  {t("about.cv")}
                  <FontAwesomeIcon icon={faEyeSlash} fixedWidth />
                </a>
              </div>
            </div>
          }
        />
      </div>
    </div>
  );
};

const Bio = () => {
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);
  const { textColor, horizontalColor } = useThemeStyles(theme);

  const longBio: Array<{ title: string; description: string[] }> = t("info", { returnObjects: true });
  const slideRef = useRef<HTMLDivElement>(null);
  useSlideAnimation(slideRef, "bottom");

  return (
    <div className="container hero-container py-5 py-md-6">
      <div className="col-md-10 mx-auto row slide-content-from-bottom" ref={slideRef} id="about">
        {longBio.map((bioItem, index) => (
          <div key={index}>
            <div className="d-flex gap-2">
              <img
                src={theme === "dark" ? forwards : forwards1}
                className="img-fluid"
                alt="services"
                style={{ width: "1.8rem", height: "1.8rem" }}
              />
              <h3 className={`text-uppercase value-title mb-4 text-start ${textColor}`}>
                {t(bioItem.title)}
              </h3>
            </div>
            {bioItem.description.map((item, itemIndex) => (
              <p key={itemIndex} className={textColor}>
                {item.startsWith("- ") ? (
                  <ul className={textColor}>
                    <li>
                      <span className="fw-bold">{t(item.replace("- ", "").split(":")[0])}:</span>
                      <span> {t(item.split(":").slice(1).join(":"))}</span>
                    </li>
                  </ul>
                ) : item.startsWith("* ") ? (
                  <h4 className={`fw-bold ${textColor}`}>{t(item.replace("* ", ""))}</h4>
                ) : (
                  t(item)
                )}
              </p>
            ))}
            <div className={`my-4 horizontal-line mx-auto row ${horizontalColor}`}></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
