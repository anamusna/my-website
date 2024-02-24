import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Avatar from "../components/Avatar";
import { FooterMain } from "../components/Footer";
import { SlideContent } from "../components/Sliders";
import YoutubeEmbed from "../components/Youtube";
import { Processes } from "./Processes";
import ProfilImage from "../styles/images/profile.jpeg";
import { useTranslation } from "react-i18next";
import { useBackToTop } from "../helpers/back-to-top";

const About = () => {
  const [divRef, goToTop] = useBackToTop();

  return (
    <div className="page-about mt-5" ref={divRef}>
      <Hero />
      <div className="container mt-4 mt-md-5">
        <AboutMe />
        <Technologies />
        <Experience />
        <div className="mt-5">
          <Processes />
        </div>
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
      </div>
      <FooterMain />
    </div>
  );
};

const Hero = () => {
  const { t, i18n } = useTranslation();
  const cvLink =
    i18n.language === "en"
      ? "https://drive.google.com/file/d/1ZB-_BnMUkZ2SkVRiTqLT8bp9Hor2pY3n/view"
      : "https://drive.google.com/file/d/1vCylqSyaEULhvzRqlKBbF_W6_Tm-AChf/view";

  return (
    <div className="hero-holder pt-5 pt-md-6 bg-gradient-horizontal">
      <div className="page-about-hero hero py-md-7">
        <div className="hero-container">
          <div className="hero-row col-md-10">
            <div className="hero-body col-md-8 mb-4 mb-md-0 mx-0">
              <h1 className="title text-md-start text-center">
                {t("about.title")}
              </h1>
              <p className="body-text fw-normal mb-4 me-md-">
                {t("about.shortBio.text")}
              </p>
              <div className="hero-button-container d-flex gap-3 mx-auto mx-md-0">
                <a
                  className="btn btn-outline-primary text-uppercase bg-white text-black"
                  href={cvLink}
                  target="_blank"
                  rel="noreferrer"
                  download
                >
                  {t("about.cv")}
                  <FontAwesomeIcon
                    icon={faEyeSlash}
                    className="bg-primary text-white rounded-circle mt-1 "
                    fixedWidth
                  />
                </a>
              </div>
            </div>
            <div className="mt-0 my-4 d-flex col-md-4">
              <SlideContent
                //className="bg-primary"
                slideElement={
                  <img
                    className="rounded-4 img-fluid"
                    alt="ansumana"
                    src={ProfilImage}
                  ></img>
                }
                from="up"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const AboutMe = () => {
  const { t } = useTranslation();
  const longBio: any[] = t("about.longBio.text", { returnObjects: true });

  return (
    <div className="row mb-4 mb-md-5">
      <div className="col-12 col-md-10 mx-auto">
        <div className="accordion accordion-flush" id="skill">
          <div className="accordion-item">
            <h2 className="value-title accordion-header" id={`#heading`}>
              <button
                className="h2 accordion-button collapsed text-start"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse`}
                aria-expanded="false"
                aria-controls={`collapse`}
              >
                {t("about.longBio.title")}
              </button>
            </h2>

            <div
              id={`collapse`}
              className="accordion-collapse collapse"
              aria-labelledby={`heading`}
              data-bs-parent="#skill"
            >
              <div className="accordion-body">
                <div>
                  {longBio.map((text, index) => (
                    <p key={index} className="body-text">
                      {t(text)}
                    </p>
                  ))}
                </div>
                <div className="position-relative mt-4 flex-column col-md-10 mx-auto">
                  <p className="mb-4 text-start text-md-center">
                    {t("about.youtube")}
                  </p>
                  <YoutubeEmbed embedId="nhw-uRjtiPI" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Technologies = () => {
  const { t } = useTranslation();
  const technologies: any[] = t("about.tools", { returnObjects: true });

  return (
    <section className="hero mb-4 mt-md-5">
      <div className="hero-container col-md-10 mx-auto">
        <div className="mb-4 mb-md-5">
          <h2 className="value-title ">{t(`about.skillTitle`)}</h2>
        </div>
        <div className="d-flex flex-wrap">
          {technologies.map((technology, index) => (
            <div key={index} className="gap-4 m-1">
              <div className="about-badge text-start badge rounded-1 mb-1">
                {t(technology)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Experience = () => {
  const { t } = useTranslation();
  const experiences: any[] = t("about.experience", { returnObjects: true });

  return (
    <div className="hero-holder mt-5">
      <div className="hero mb-4">
        <div className="hero-container col-md-10 mx-auto">
          <div className="mx-auto my-md-4">
            <h2 className="value-title  mb-4 mb-md-5 text-start">
              {t("about.experienceTitle")}
            </h2>
            <div className="row bg-gray-3 rounded-4 p-1 p-md-4 pt-md-5">
              {experiences.map((experience) => (
                <>
                  <div className="mx-auto d-flex flex-md-row">
                    <div className="col-12 d-flex flex-column flex-md-row">
                      <div className="order-1 order-md-0 col-md-3">
                        <h3 className="fw-normal">
                          {t(`${experience.company}`)}
                        </h3>
                      </div>
                      <div className="order-0 order-md-1 col-md-9">
                        <h3 className="value-title">
                          {t(`${experience.position}`)}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-9 offset-md-3 mb-4">
                    <ul>
                      {experience.description.map((description: any) => (
                        <li className="card-text">{t(`${description}`)}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="col-11 col-md-12 horizontal-line bg-black d-md-flex mb-4 mx-auto"></div>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
