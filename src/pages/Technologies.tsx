import React, { useContext, useRef } from "react";
import { useTranslation } from "react-i18next";
import { SlideContent, useSlideAnimation } from "../components/Sliders";

import forwards from "../styles/images/forwards.svg";
import forwards1 from "../styles/images/forwards1.svg";

import { ThemeContext } from "../ThemeContext";
import { useThemeStyles } from "../helpers/use-theme-styles";

const Technologies = () => {
  const slideRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  const technologies: any[] = t("technologies", { returnObjects: true });
  const { theme, setTheme } = useContext(ThemeContext);
  const themeStyles = useThemeStyles(theme);

  const isDarkTheme = !!(theme === "dark");

  useSlideAnimation(slideRef, "bottom");

  return (
    <div className="container hero-container py-5 py-md-6" id="technologies">
      <div className="col-12 col-md-10 mx-auto">
        <h1 className={`hero-title mb-4 text-gray`}>{t(`about.skillTitle`)}</h1>
        <div className="d-flex gap-2 mb-4">
          <img
            src={isDarkTheme ? forwards : forwards1}
            className="img-fluid"
            alt="services"
            style={{ width: "1.8rem", height: "1.8rem" }}
          />
          <h3
            className={`text-uppercase value-title text-start ${themeStyles.textColor}`}
          >
            {t(`about.skillSubtext`)}
          </h3>
        </div>

        <div className="row  mx-auto d-flex " ref={slideRef}>
          {technologies.map((technology, index) => (
            <div className="col-auto mb-4" key={technology.title}>
              <h4 className="fw-boldest text-gray mb-2">{technology.title}</h4>
              <div className="d-flex flex-wrap mb-2 gap-3">
                {technology.tools.map((tool: any, toolIndex: number) => (
                  <SlideContent
                    from="left"
                    key={`${tool.name}_${toolIndex}`}
                    className="technology d-flex text-center flex-wrap about-badge gap-2 text-start badge rounded-1 align-items-center"
                    slideElement={
                      <>
                        <img
                          className="technology-image img-fluid"
                          alt="technology"
                          style={{
                            width: "1.5rem",
                            height: "1.5rem",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                          }}
                          src={require(`../styles/images/technologies/${tool.image}`)}
                        />
                        <p className={`technology-text my-1 ${themeStyles}`}>
                          {t(tool.name)}
                        </p>
                      </>
                    }
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technologies;
