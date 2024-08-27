import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { SlideContent } from "../components/Sliders";
import { ThemeContext } from "../ThemeContext";
import { useThemeStyles } from "../helpers/use-theme-styles";

import development from "../styles/images/development.svg";
import app from "../styles/images/app.svg";
import cloud from "../styles/images/cloud.svg";
import complex from "../styles/images/complex.svg";
import database from "../styles/images/database.svg";
import forwards from "../styles/images/forwards.svg";
import forwards1 from "../styles/images/forwards1.svg";
import optimization from "../styles/images/optimization.svg";

interface Service {
  title: string;
  text: string;
}

interface ServiceImages {
  [key: string]: string;
}

const WhatIOffer = () => {
  const { t } = useTranslation();
  const services: Service[] = t("services", { returnObjects: true });

  const serviceImages: ServiceImages = {
    development,
    app,
    cloud,
    database,
    optimization,
    complex,
  };

  const { theme } = useContext(ThemeContext);
  const themeStyles = useThemeStyles(theme);

  const isDarkTheme = theme === "dark";

  return (
    <div className="services container hero-container pt-5 pb-5 pt-md-6 pb-md-6" id="services">
      <div className="col-12 col-md-10 mx-auto">
        <div>
          <h1 className={`hero-title mb-4 text-gray`}>
            {t("serviceTitle")}
          </h1>
          <div className="d-flex gap-2 text-start">
            <img
              src={isDarkTheme ? forwards : forwards1}
              className="img-fluid"
              alt="services"
              style={{ width: "1.8rem", height: "1.8rem" }}
            />
            <h3 className={`text-uppercase value-title mb-4 mb-md-5 text-start ${themeStyles.textColor}`}>
              {t("serviceText")}
            </h3>
          </div>

          <div className="row">
            {services.map((service, index) => (
              <SlideContent
                className="col-md-4 mb-4"
                from="left"
                key={service.title}
                slideElement={
                  <div className={`card h-100 border pt-3 box-shadow-xl ${themeStyles.backgroundColor} ${themeStyles.borderColor}`}>
                    <div className="card-head flex-column mx-auto">
                      <img
                        src={serviceImages[Object.keys(serviceImages)[index]]}
                        className="card-img-top img-fluid"
                        alt="services"
                      />
                      <h3 className={`text-center heading ${themeStyles.textColor}`}>
                        {service.title}
                      </h3>
                    </div>
                    <div className="d-flex card-body flex-column">
                      <p className={`text-start body-text text-md-center ${themeStyles.textColor}`}>
                        {service.text}
                      </p>
                    </div>
                  </div>
                }
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIOffer;
