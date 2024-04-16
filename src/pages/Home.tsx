import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUp,
  faChevronRight,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import Avatar from "../components/Avatar";
import BannerImage from "../components/BannerImage";
import CarouselComponent from "../components/CarouselMulti";
import { ColophonSocialMedia } from "../components/ColophonSocialMedia";
import YoutubeEmbed from "../components/Youtube";
import { SlideContent, useSlideAnimation } from "../components/Sliders";
import { FooterMain } from "../components/Footer";
import { useBackToTop } from "../helpers/back-to-top";
import { useTranslatedPaths } from "../helpers/use-translated-paths";
import { responsive } from "../styles/responsive";
import development from "../styles/images/development.svg";
import app from "../styles/images/app.svg";
import cloud from "../styles/images/cloud.svg";
import code from "../styles/images/code.svg";
import complex from "../styles/images/complex.svg";
import database from "../styles/images/database.svg";
import deployment from "../styles/images/deployment.svg";
import documentation from "../styles/images/documentation.svg";
import forwards from "../styles/images/forwards.svg";
import lightbulb from "../styles/images/light-bulb.svg";
import optimization from "../styles/images/optimization.svg";
import planning from "../styles/images/planning.svg";
import review from "../styles/images/review.svg";
import Work from "../components/Work";
import useHeaderBackgroundChange from "../helpers/use-header-scroll";
import Blog from "./Blog";

const Home = () => {
  const [divRef, goToTop] = useBackToTop();

  return (
    <div className="page-home mt-5 position-relative" ref={divRef}>
      <Hero />
      <div className="hero-holder slide-content">
        <AboutMe />
        <Technologies />
        <WhatIOffer />
        <Experience />
        <Testimonials />
        <Processes />
        <Blog />
        <div className="mb-4 mx-auto d-flex flex-row text-center align-items-center justify-content-center">
          <div
            onClick={goToTop}
            role="button"
            className="p-md-4 slide-content-from-avatar"
          >
            <Avatar
              iconColor=""
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
    </div>
  );
};

const Hero = () => {
  return (
    <div className="hero-holder position-relative bg-gradient-horizontal">
      <div className="container hero-container pt-4 pt-md-6">
        <div className="mx-auto hero-banner banner banner-image mx-auto banner-image-right">
          <div className="mb-md-4 row banner-row mx-auto h-100">
            <BannerImage withWork />;
            <SlideContentWrapper />
          </div>
        </div>
      </div>
    </div>
  );
};

const SlideContentWrapper = () => {
  const { t } = useTranslation();

  return (
    <SlideContent
      className="slide-content-wrapper home-hero-text-wrapper banner-body"
      from="left"
      slideElement={
        <div className="d-flex flex-column h-100">
          <div className="px-md-4 text-md-start mb-4 animated-hero">
            <div className="d-flex d-md-none">
              <Work />
            </div>
            <h3 className="text-start">{t("home.hero.title")}</h3>
            <h1 className="ms-md-5 home-hero-text title text-center text-md-start">
              Ansu
            </h1>
          </div>
          <div className="mb-4 mt-auto justify-items-center">
            <p className="home-hero-text hero-text">{t("home.hero.text")}</p>
          </div>
          <ul className="d-none d-md-flex text-secondary m-auto d-flex list-unstyled mb-4 mb-md-0 gap-4">
            {ColophonSocialMedia}
          </ul>
        </div>
      }
    />
  );
};

const AboutMe = () => {
  const { t } = useTranslation();
  const longBio: any[] = t("about.longBio.text", { returnObjects: true });
  const slideRef = useRef<HTMLDivElement>(null);
  useSlideAnimation(slideRef, "bottom");

  return (
    <div
      className="container hero-container mb-4 pt-4 pt-md-5 slide-content-from-bottom"
      ref={slideRef}
      id="about"
    >
      <div className="row my-md-4">
        <div className="row mx-auto ">
          <p className="text-black home-hero-text body-text fw-normal mb-5">
            {t("home.about.text")}
          </p>
        </div>

        <div className="row col-12 mx-auto mb-4 mb-md-5">
          <div className="accordion accordion-flush" id="skill">
            <div className="accordion-item">
              <h3
                className="value-title text-center accordion-header"
                id={`#heading`}
              >
                <button
                  className="text-uppercase h3 accordion-button collapsed text-start"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse`}
                  aria-expanded="false"
                  aria-controls={`collapse`}
                >
                  {t("about.title")}
                </button>
              </h3>

              <div
                id={`collapse`}
                className="accordion-collapse collapse"
                aria-labelledby={`heading`}
                data-bs-parent="#skill"
              >
                <div className="accordion-body">
                  {longBio.map((text, index) => (
                    <p key={index} className="body-text">
                      {t(text)}
                    </p>
                  ))}
                  <div className="position-relative mt-4 flex-column col-md-10 mx-auto">
                    <p className="mb-4 text-start body-text text-md-center">
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
      <div className="horizontal-line row bg-gray-2 col-10 col-md-12"></div>
    </div>
  );
};

const Technologies = () => {
  const slideRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  const technologies: any[] = t("technologies", { returnObjects: true });

  useSlideAnimation(slideRef, "bottom");

  return (
    <div className="container hero-container pt-4 mt-md-5" id="technologies">
      <div className="row mb-4">
        <div className="col-12 mx-auto">
          <div className="d-flex gap-4">
            <img
              src={forwards}
              className="img-fluid"
              alt="services"
              style={{ width: "1.8rem", height: "1.8rem" }}
            />
            <h3 className="text-uppercase value-title mb-4 mb-md-5 text-start">
              {t(`about.skillTitle`)}
            </h3>
          </div>

          <div
            className="col-12 row  mx-auto d-flex mb-4 slide-content-from-bottom"
            ref={slideRef}
          >
            {technologies.map((technology, index) => (
              <div className="col-auto mb-md-4" key={technology.title}>
                <label className="fw-boldest">{technology.title}</label>
                <div className="d-flex flex-wrap mb-2 gap-2">
                  {technology.tools.map((tool: any, toolIndex: number) => (
                    <div
                      key={toolIndex}
                      className="technology d-flex text-center flex-wrap about-badge gap-2 text-start badge rounded-1 align-items-center"
                    >
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
                      <p className="technology-text my-1">{t(tool.name)}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="horizontal-line row bg-gray-2 col-10 col-md-12"></div>
    </div>
  );
};

const WhatIOffer = () => {
  const { t } = useTranslation();
  const services: any[] = t("services", {
    returnObjects: true,
  });

  const serviceImages: any = {
    development,
    app,
    cloud,
    database,
    optimization,
    complex,
  };

  const serviceKeys = Object.keys(serviceImages);

  return (
    <div className="services" id="services">
      <div className="container hero-container mb-4 mt-md-6">
        <div className="mb-4 my-5 mb-md-5">
          <div className="mx-auto">
            <div className="ms-2 ms-md-4 d-flex gap-4">
              <img
                src={forwards}
                className="img-fluid"
                alt="services"
                style={{ width: "1.8rem", height: "1.8rem" }}
              />
              <h3 className="text-uppercase value-title mb-4 mb-md-5 text-start">
                {t("serviceTitle")}
              </h3>
            </div>

            <div className="hero-row">
              {services.map((service: any, index) => (
                <SlideContent
                  className="col-md-4"
                  from="bottom"
                  key={service.title}
                  slideElement={
                    <div className="card h-100">
                      <div className="card-head flex-column mx-auto">
                        <img
                          src={serviceImages[serviceKeys[index]]}
                          className="card-img-top img-fluid"
                          alt="services"
                        />
                        <h3 className="value-title text-center">
                          {service.title}
                        </h3>
                      </div>
                      <div className="d-flex card-body">
                        <p className="text-start body-text text-md-center ">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  }
                />
              ))}
            </div>
          </div>
        </div>
        <div className="horizontal-line row bg-gray-2 col-10 col-md-12"></div>
      </div>
    </div>
  );
};

const Experience = () => {
  const { t, i18n } = useTranslation();
  const experiences: any[] = t("about.experience", { returnObjects: true });
  const slideRef = useRef<HTMLDivElement>(null);
  useSlideAnimation(slideRef, "bottom");

  const cvLink =
    i18n.language === "de"
      ? "https://drive.google.com/file/d/1_L5NbGdANHJCJEg7Oh__r9yHH2goSsYJ/view?usp=sharing"
      : "https://drive.google.com/file/d/1JScDayvwjoDI4koNPrE84D8N7kE7H5qH/view?usp=sharing";

  return (
    <div className="container hero-container pt-4 pt-md-5" id="experience">
      <div className="row mb-4">
        <div className="">
          <div className="d-flex gap-4 mb-4 mb-md-5">
            <img
              src={forwards}
              className="img-fluid"
              alt="services"
              style={{ width: "1.8rem", height: "1.8rem" }}
            />
            <h3 className="text-uppercase value-title text-start">
              {t("about.experienceTitle")}
            </h3>
          </div>
          <div className="mb-4 mb-md-5">
            <div className="bg-gray-3 rounded-4 mb-4 pt-4 px-md-4 pt-md-5 pb-md-1">
              {experiences.map((experience, index) => (
                <div className="experience mb-md-5" key={experience.company}>
                  <div className="mx-auto d-flex flex-md-row">
                    <div className="px-1 px-md-2 col-12 d-flex flex-column flex-md-row align-items-md-center">
                      <div className="order-1 order-md-0 col-md-3">
                        <h3 className="p-md-2 company-text fw-normal mb-4">
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
                  <SlideContent
                    className="description ps-2 p-2 pt-md-4 col-md-9 offset-md-3 mb-4"
                    from="bottom"
                    slideElement={
                      <div className="">
                        <ul className="">
                          {experience.description.map((description: any) => (
                            <li className="card-text" key={description}>
                              <p className="body-text ">
                                {t(`${description}`)}
                              </p>
                            </li>
                          ))}
                        </ul>
                      </div>
                    }
                  />
                </div>
              ))}
            </div>
            <div className="resume text-center">
              <a
                className="btn btn-lg bt-icon btn-outline-primary text-uppercase"
                href={cvLink}
                target="_blank"
                rel="noreferrer"
              >
                {t("about.cv")}
                <FontAwesomeIcon
                  icon={faEyeSlash}
                  className=""
                  fixedWidth
                  //size="xs"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="horizontal-line bg-gray-2 col-10 col-md-12 mt-4"></div>
    </div>
  );
};

const Testimonials = () => {
  const { t, i18n } = useTranslation();
  const testimonialsArray: any[] = t("testimonials.groupOne", {
    returnObjects: true,
  });

  const { testimonials } = useTranslatedPaths(
    t("header.links.testimonials.url")
  );

  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  const handleAfterChange = (previousSlide: number, state: any) => {
    console.log(
      `Changed from slide ${previousSlide} to slide ${state.currentSlide}`
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonialIndex(
        (prevIndex) => (prevIndex + 1) % testimonialsArray?.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonialsArray, currentTestimonialIndex]);

  return (
    <div className="container mt-md-5" id="testimonials">
      <div className="mx-auto banner banner-features">
        <div className="hero-row row">
          <div className="col-12 mx-auto d-flex justify-content-between mt-4 mb-4 p-2">
            <div className="d-flex gap-4">
              <img
                src={forwards}
                className="img-fluid"
                alt="services"
                style={{ width: "1.8rem", height: "1.8rem" }}
              />
              <h3 className="text-uppercase value-title text-black text-start">
                {t("testimonials.title")}
              </h3>
            </div>

            <div className="hero-button-container d-none d-md-block">
              <Link
                className="btn btn-lg bt-icon btn-outline-primary text-uppercase"
                to={`/${i18n.language}${testimonials}`}
              >
                {t("testimonials.button")}
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className=""
                  fixedWidth
                  size="2xs"
                />
              </Link>
            </div>
          </div>

          <div className="d-flex mb-4">
            <CarouselComponent
              responsive={responsive}
              autoPlay={true}
              deviceType="desktop"
              className=""
              autoPlaySpeed={5000}
              ssr={true}
              infinite={true}
              customTransition="transform 300ms ease-in-out"
              transitionDuration={500}
              showDotsOutside={false}
              showDots={true}
              partialVisible={true}
              centerMode={true}
              afterChange={handleAfterChange}
            >
              {testimonialsArray &&
                testimonialsArray.map((testimonial, i) => (
                  <div key={testimonial.name} className={`mx-auto mb-4 px-1`}>
                    <div className="banner banner-shadow rounded-4 p-2 p-md-4">
                      <div className="gap-4 d-flex bg-gray-3 rounded-4 p-2">
                        <p className="body-text">
                          “{t(`testimonials.groupOne.${i}.testimony`)}”
                        </p>
                      </div>
                      <div className="text-start">
                        <div className="text-end arrow-down mb-2 ms-6"></div>
                        <div className="d-flex mx-5 align-items-center gap-4">
                          <div className="label">
                            {t(`testimonials.groupOne.${i}.name`)}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </CarouselComponent>
          </div>
          <div className="d-flex mx-auto justify-content-center align-items-center">
            <Link
              className="btn btn-lg bt-icon btn-outline-primary text-uppercase d-md-none"
              to={`/${i18n.language}${testimonials}`}
            >
              {t("testimonials.button")}
              <FontAwesomeIcon icon={faChevronRight} className=" " fixedWidth />
            </Link>
          </div>
        </div>
      </div>
      <div className="horizontal-line bg-gray-2 mx-auto col-10 col-md-12"></div>
    </div>
  );
};

const Processes = () => {
  const slideRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();
  const processText: any[] = t("process.text", { returnObjects: true });

  useSlideAnimation(slideRef, "bottom");

  const projectWorkProcesses: any[] = t("process.processes", {
    returnObjects: true,
  });

  const projectWorkProcessImages: any = {
    lightbulb,
    planning,
    code,
    documentation,
    review,
    deployment,
  };

  const projectWorkProcessKeys = Object.keys(projectWorkProcessImages);

  return (
    <div className="container hero-container mt-5 mt-md-6 mb-4" id="process">
      <div className="row mb-4 my-md-5" id="my-process">
        <div className="row mx-auto ">
          <div className="d-flex gap-4">
            <img
              src={forwards}
              className="img-fluid"
              alt="services"
              style={{ width: "1.8rem", height: "1.8rem" }}
            />
            <h3 className="text-uppercase value-title mb-4 mb-md-5 text-start">
              {t("process.title")}
            </h3>
          </div>
          <div className="mb-4 mb-md-5">
            {processText.map((process, index) => (
              <p className="body-text" key={index}>
                {process}
              </p>
            ))}
          </div>
          <div className="row d-flex justify-content-center">
            {projectWorkProcesses.map((process, index) => (
              <SlideContent
                key={process.title}
                className="col-md-4 mb-4"
                from="bottom"
                slideElement={
                  <div className="card h-100">
                    <div className="d-flex gap-4  align-items-center mb-4">
                      <div className="bg-gray-2 p-2 rounded-circle">
                        <img
                          className="process-img img-fluid"
                          alt="process-img"
                          style={{
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                          }}
                          src={
                            projectWorkProcessImages[
                              projectWorkProcessKeys[index]
                            ]
                          }
                        />
                      </div>
                      <div className="col-8 mb-0">
                        <h3 className="value-title text-start">
                          {process.title}
                        </h3>
                      </div>
                    </div>
                    <div className="">
                      <p className="">{process.text}</p>
                    </div>
                  </div>
                }
              />
            ))}
          </div>
        </div>
      </div>
      <div className="horizontal-line row bg-gray-2 col-10 col-md-12"></div>
    </div>
  );
};

export default Home;
