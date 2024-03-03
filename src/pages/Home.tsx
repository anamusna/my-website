import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUp,
  faChevronRight,
  faCircle,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import { Processes } from "./Processes";
import Avatar from "../components/Avatar";
import { useBackToTop } from "../helpers/back-to-top";
import CarouselComponent from "../components/CarouselMulti";
import { FooterMain } from "../components/Footer";
import { SlideContent } from "../components/Sliders";
import YoutubeEmbed from "../components/Youtube";
import development from "../styles/images/development.svg";
import app from "../styles/images/app.svg";
import cloud from "../styles/images/cloud.svg";
import complex from "../styles/images/complex.svg";
import database from "../styles/images/database.svg";
import optimization from "../styles/images/optimization.svg";
import ProfileImage from "../styles/images/ansu-bw-bg.png";
import { responsive } from "../styles/responsive";

const Home = () => {
  const [divRef, goToTop] = useBackToTop();

  return (
    <div className="page-home mt-5 position-relative" ref={divRef}>
      <Hero />
      <div className="hero-holder bg-white">
        <AboutMe />
        <Technologies />
        <WhatIOffer />
        <Experience />
        <Testimonials />
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
    </div>
  );
};

const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className="hero-holder position-relative">
      <div className="d-none d-md-block home-background" id="welcome-section">
        <div className="forest" />
        <div className="moon" />
      </div>
      <div className="container hero-container pt-5 pt-md-7">
        <div className="col-md-10 mx-auto hero-banner banner banner-image mx-auto banner-image-right ">
          <div className="mb-md-4 row banner-row mx-auto h-100">
            <BannerImage />
            <div className="banner-body mb-4">
              <div className="work px-md-4 d-flex gap-4 mt-md-auto">
                <div className="text-md-start bg-success-1 badge rounded-4 mb-4 mb-md-0">
                  <span className="polygon">
                    <FontAwesomeIcon icon={faCircle} className="" fixedWidth />
                  </span>
                  <label className="badge-label text-success">
                    {t("home.work")}
                  </label>
                </div>
                <div className="location-text text-start mb-4 mb-md-0">
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className=""
                    fixedWidth
                  />
                  {t("home.location")}
                </div>
              </div>
              <SlideContentWrapper />
            </div>
          </div>
          <div className="d-none horizontal-line bg-gray-2 col-12 col-md-10"></div>
        </div>
      </div>
    </div>
  );
};

const BannerImage = () => {
  const { t } = useTranslation();

  return (
    <SlideContent
      className="banner-img img-fluid order-1 order-md-0 mx-auto"
      from="up"
      slideElement={
        <>
          <div className="d-none d-md-block">
            <h3 className="home-hero-text text-md-start text-center lh-1">
              {t("home.hero.title")}
            </h3>
            <h1 className="ms-md-5 home-hero-text title text-center text-md-start">
              Ansu
            </h1>
          </div>
          <div className="">
            <img className="img-fluid w-100" src={ProfileImage} alt="" />
          </div>
        </>
      }
    />
  );
};

const SlideContentWrapper = () => {
  const { t } = useTranslation();

  return (
    <SlideContent
      className="slide-content-wrapper"
      from="left"
      slideElement={
        <div className="">
          <div className="home-hero-text px-md-4 d-block d-md-none text-md-start mb-4">
            <h3 className="home-hero-text title text-start">
              {t("home.hero.title")}
            </h3>
            <h1 className="home-hero-text title text-center text-md-start">
              Ansu
            </h1>
          </div>
          <div className="mt-md-auto mb-4">
            <p className="home-hero-text body-text fw-normal ">
              {t("home.hero.text")}
            </p>
          </div>
        </div>
      }
    />
  );
};

const AboutMe = () => {
  const { t } = useTranslation();
  const longBio: any[] = t("about.longBio.text", { returnObjects: true });

  return (
    <div className="container hero-container mb-4 pt-md-5">
      <div className="row my-4">
        <div className="col-md-10 mx-auto ">
          {/*    <h3 className="text-uppercase value-title mb-4 mb-md-5 text-center">
            {t(`about.title`)}
            </h3> */}
          <p className="text-black home-hero-text body-text fw-normal mb-5">
            {t("home.about.text")}
          </p>
        </div>

        <div className="col-12 col-md-10 mx-auto mb-4 mb-md-5">
          <div className="accordion accordion-flush" id="skill">
            <div className="accordion-item">
              <h3
                className="value-title text-center accordion-header"
                id={`#heading`}
              >
                <button
                  className="h3 accordion-button collapsed text-start"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse`}
                  aria-expanded="false"
                  aria-controls={`collapse`}
                >
                  {t("about.longBio.title")}
                </button>
              </h3>

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
      <div className="horizontal-line bg-gray-2 col-12 col-md-10"></div>
    </div>
  );
};

const Technologies = () => {
  const { t } = useTranslation();
  const technologies: any[] = t("about.tools", { returnObjects: true });

  return (
    <div className="container hero-container pt-4 pt-md-5">
      <div className="row mb-4">
        <div className="col-md-10 mx-auto">
          <h3 className="text-uppercase value-title mb-4 mb-md-5 text-center">
            {t(`about.skillTitle`)}
          </h3>

          <div className="d-flex flex-wrap mb-4 mb-md-5">
            {technologies.map((technology, index) => (
              <div key={index} className="gap-4 m-1">
                <div className="about-badge text-start badge rounded-1 mb-1">
                  {t(technology)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="horizontal-line bg-gray-2 col-12 col-md-10"></div>
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
    <div className="services">
      <div className="container hero-container mb-4 mt-md-6">
        <div className="row mb-4 my-5 mb-md-5">
          <h3 className="text-uppercase value-title mb-4 mb-md-5 text-center">
            {t("serviceTitle")}
          </h3>
          <div className="hero-row col-md-10 mx-auto">
            {services.map((service: any, index) => (
              <div className="col-md-4" key={service.title}>
                <div className="card h-100">
                  <div className="card-head flex-column mx-auto">
                    <img
                      src={serviceImages[serviceKeys[index]]}
                      className="card-img-top img-fluid"
                      alt="services"
                    />
                    <h4 className="text-uppercase fw-boldest text-center text-gray">
                      {service.title}
                    </h4>
                  </div>
                  <div className="d-flex card-body">
                    <p className="text-start text-md-center ">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="horizontal-line bg-gray-2 col-12 col-md-10"></div>
      </div>
    </div>
  );
};

const Experience = () => {
  const { t } = useTranslation();
  const experiences: any[] = t("about.experience", { returnObjects: true });

  return (
    <div className="container hero-container mb-4 pt-4 pt-md-5">
      <div className="row mb-4">
        <h3 className="text-uppercase value-title mb-4 mb-md-5 text-center">
          {t("about.experienceTitle")}
        </h3>
        <div className="col-md-10 mx-auto mb-md-4">
          <div className="bg-gray-3 rounded-4 mb-4 p-1 p-md-4 pt-md-5">
            {experiences.map((experience) => (
              <>
                <div className="mx-auto d-flex flex-md-row">
                  <div className="col-12 d-flex flex-column flex-md-row">
                    <div className="order-1 order-md-0 col-md-3">
                      <h3 className="company-text fw-normal mb-4">
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
                      <li className="card-text">
                        <p className="">{t(`${description}`)}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="col-11 col-md-12 horizontal-line bg-gray-2 d-md-flex mb-4 mx-auto"></div>
              </>
            ))}
          </div>
        </div>
      </div>
      <div className="horizontal-line bg-gray-2 col-12 col-md-10 mt-4"></div>
    </div>
  );
};

const Testimonials = () => {
  const { t } = useTranslation();
  const testimonials: any[] = t("testimonials.groupOne", {
    returnObjects: true,
  });

  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  const handleAfterChange = (previousSlide: number, state: any) => {
    console.log(
      `Changed from slide ${previousSlide} to slide ${state.currentSlide}`
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonialIndex(
        (prevIndex) => (prevIndex + 1) % testimonials?.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials, currentTestimonialIndex]);

  return (
    <div className="container mt-md-5">
      <div className="col-md-10 mx-auto banner banner-features">
        <div className="hero-row row">
          <div className="col-12 col-md-10 mx-auto d-flex justify-content-between mt-4 mb-4 p-2">
            <h3 className="text-uppercase value-title text-black text-start">
              {t("testimonials.title")}
            </h3>
            <div className="hero-button-container d-none d-md-block">
              <Link
                className="btn bt-icon btn-outline-primary text-uppercase"
                to="/testimonials"
              >
                {t("testimonials.button")}
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="bg-primary home-hero-text rounded-circle mt-1 "
                  fixedWidth
                  size="xs"
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
              {testimonials &&
                testimonials.map((testimonial, i) => (
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
              className="btn btn-outline-primary text-uppercase d-md-none"
              to="/testimonials"
            >
              {t("testimonials.button")}
              <FontAwesomeIcon
                icon={faChevronRight}
                className="bg-primary text-white home-hero-text rounded-circle mt-1 "
                fixedWidth
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="horizontal-line bg-gray-2 col-12 col-md-10"></div>
    </div>
  );
};

export default Home;
