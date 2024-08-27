import React, { useContext, useRef } from "react";
import { useTranslation } from "react-i18next";
import { SlideContent, useSlideAnimation } from "../components/Sliders";
import { ThemeContext } from "../ThemeContext";
import { useThemeStyles } from "../helpers/use-theme-styles"; 

import code from "../styles/images/code.svg";
import deployment from "../styles/images/deployment.svg";
import documentation from "../styles/images/documentation.svg";
import forwards from "../styles/images/forwards.svg";
import forwards1 from "../styles/images/forwards1.svg";
import lightbulb from "../styles/images/light-bulb.svg";
import planning from "../styles/images/planning.svg";
import review from "../styles/images/review.svg";

const Processes = () => {
  const slideRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);

  const themeStyles = useThemeStyles(theme);

  useSlideAnimation(slideRef, "bottom");

  const projectWorkProcesses: string[] = t("process.processes", { returnObjects: true });
  const projectWorkProcessImages = {
    lightbulb,
    planning,
    code,
    documentation,
    review,
    deployment,
  };

  return (
    <div className={`hero-container container py-5 py-md-6 `} id="process" ref={slideRef}>
      <div className="col-md-10 mx-auto">
        <div className="text-start">
          <h1 className={`hero-title mb-4 text-gray`}>
            {t("process.title")}
          </h1>
          <div className="d-flex gap-2 text-start">
            <img
              src={themeStyles.isDarkTheme ? forwards : forwards1}
              className="img-fluid"
              alt="services"
              style={{ width: "1.8rem", height: "1.8rem" }}
            />
            <h3 className={`text-uppercase value-title mb-4 ${themeStyles.textColor}`}>
              {t("process.subTitle")}
            </h3>
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          {projectWorkProcesses.map((process: any, index: number) => (
            <SlideContent
              key={process.title}
              className="col-12 col-md-4 mb-4"
              from="left"
              slideElement={
                <div className={`card h-100 p-2 px-md-4 pt-md-4 w-100 box-shadow-xl ${themeStyles.borderColor} ${themeStyles.backgroundColor}`}>
                  <div className="d-flex gap-4 align-items-center mb-4">
                    <div className={`p-2 rounded-circle ${themeStyles.background}`}>
                      <img
                        className="process-img img-fluid"
                        alt="process"
                        style={{ backgroundSize: "cover", backgroundPosition: "center" }}
                        src={projectWorkProcessImages[Object.keys(projectWorkProcessImages)[index]as keyof typeof projectWorkProcessImages]}
                      />
                    </div>
                    <div className="col-8 mb-0">
                      <h3 className={`value-title text-start ${themeStyles.textColor}`}>
                        {process.title}
                      </h3>
                    </div>
                  </div>
                  <div>
                    <p className={`${themeStyles.textColor}`}>
                      {process.text}
                    </p>
                  </div>
                </div>
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Processes;
