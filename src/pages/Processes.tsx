import React from "react";
import { useTranslation } from "react-i18next";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import Avatar from "../components/Avatar";
import { FooterMain } from "../components/Footer";
import { useBackToTop } from "../helpers/back-to-top";
import code from "../styles/images/code.svg";
import deployment from "../styles/images/deployment.svg";
import documentation from "../styles/images/documentation.svg";
import lightbulb from "../styles/images/light-bulb.svg";
import planning from "../styles/images/planning.svg";
import review from "../styles/images/review.svg";

const projectWorkProcessImages: any = {
  lightbulb,
  planning,
  code,
  documentation,
  review,
  deployment,
};

const projectWorkProcessKeys = Object.keys(projectWorkProcessImages);

const Process = () => {
  const [divRef, goToTop] = useBackToTop();

  return (
    <div className="page-about mt-5" ref={divRef}>
      <Processes />
      <div className="mb-4 mx-auto d-flex flex-row text-center align-items-center justify-content-center">
        <div onClick={goToTop} role="button">
          <Avatar
            iconColor="secondary"
            icon={faArrowUp}
            size={"md"}
            dot={false}
            iconClassName="text-center mx-auto"
            className="label text-center mx-auto"
          />
        </div>
      </div>
      <FooterMain />
    </div>
  );
};

export const Processes = () => {
  const { t } = useTranslation();
  const processText: any[] = t("process.text", { returnObjects: true });

  const projectWorkProcesses: any[] = t("process.processes", {
    returnObjects: true,
  });
  
  return (
    <div className="hero mb-4" id="my-process">
      <div className="hero-container col-md-10 mx-auto">
        <div className="mx-auto">
          <h3 className="about-title mb-4 text-start">{t("process.title")}</h3>
          <div className="mb-4">
            {processText.map((process, index) => (
              <p className="testimonial-text" key={index}>{process}</p>
            ))}
          </div>
          <div className="row d-flex justify-content-center">
            {projectWorkProcesses.map((process, index) => (
              <div className="mb-4 col-md-4" key={process.title}>
                <div className="card shadow rounded-4 h-100">
                  <div className="d-flex bg-gradient-full justify-content-between align-items-center p-2">
                    <div className="col-10 col-md-10 mb-0">
                      <h3 className="card-title text-start">{process.title}</h3>
                    </div>
                    <img
                      className="process-img img-fluid col-2 col-md-2 mx-auto"
                      alt="process-img"
                      style={{
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                      src={projectWorkProcessImages[projectWorkProcessKeys[index]]}
                    />
                  </div>

                  <div className="card-body">
                    <p className="card-text">{process.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
