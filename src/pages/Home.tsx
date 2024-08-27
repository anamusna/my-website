import React, { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightLong,
  faDotCircle,
} from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import { SlideContent } from "../components/Sliders";
import { useScrollToDiv, useBackToTop } from "../helpers/back-to-top";
import { useThemeStyles } from "../helpers/use-theme-styles";
import About from "../components/About";
import {
  ColophonSocialMedia,
  SocialMedia,
  SocialMediaItems,
} from "../components/ColophonSocialMedia";
import Blog from "./Blog";
import Contact from "./Contact";
import WhatIOffer from "./Services";
import Processes from "./Processes";
import Technologies from "./Technologies";
import CarouselComponent from "../components/CarouselMulti";
import { WordFlick } from "../components/TypeAnimation";

import Background from "../styles/images/background.jpg";
import { ThemeContext } from "../ThemeContext";
import { Link } from "react-router-dom";
import { Testimonial } from "../pages/Testimonials";
import { useTranslatedPaths } from "../helpers/use-translated-paths";

import forwards from "../styles/images/forwards.svg";
import forwards1 from "../styles/images/forwards1.svg";

import { defaultResponsive } from "../styles/responsive";

import Fabi from "../styles/images/testimony/fabi.jpeg";
import Lea from "../styles/images/testimony/lea.jpeg";
import Gregor from "../styles/images/testimony/gregor.jpeg";
import Nora from "../styles/images/testimony/nora.jpeg";
import Daphne from "../styles/images/testimony/daphne.jpeg";
import Thomas from "../styles/images/testimony/thomas.jpeg";
import Seb from "../styles/images/testimony/seb.jpeg";
import Fuku from "../styles/images/testimony/fuku.jpeg";
import Annika from "../styles/images/testimony/annika.jpeg";

const Home = () => {
  const [divRef, goToTop] = useBackToTop();
  const [sectionRefs, goToSection] = useScrollToDiv();
  const { t, i18n } = useTranslation();

  const { theme } = useContext(ThemeContext);
  const {
    background,
    backgroundColor,
    backgroundVariant,
    contactBackground,
    textColor,
    horizontalColor,
    serviceBackground,
    borderColor,
  } = useThemeStyles(theme);

  const horizontalLine = () => (
    <div
      className={`horizontal-line shadow col-11 col-md-9 mx-auto row ${horizontalColor}`}
    ></div>
  );

  return (
    <div
      className={`page-home mt-md-5 mt-4 position-relative ${backgroundColor}`}
      ref={divRef}
    >
      <section
        id={`${t("header.links.home.url")}`}
        className={`hero-wrapper d-flex flex-column ${backgroundVariant}`}
        ref={sectionRefs.home}
      >
        <div className="hero-holder position-relative hero-headline">
          <div className="container hero-container">
            <div className="col-md-10 mx-auto banner banner-image mx-auto banner-image-right">
              <div className="row banner-row mx-auto h-100">
                <SlideContent
                  className="mt-4 mt-md-5 col-md-10 mx-auto mx-md-0"
                  from="left"
                  slideElement={
                    <div className="d-flex flex-column h-100">
                      <div
                        className={`h3 text-start d-flex text-wrap flex-wrap ${textColor}`}
                      >
                        {t("home.hero.title")}{" "}
                        <h1 className={`ms-2 title mt-md-4 ${textColor}`}>
                          Ansu
                        </h1>
                      </div>
                      <div className="mt-md-auto">
                        <p
                          className={`mb-5 home-hero-text hero-text ${textColor}`}
                        >
                          {t("home.tagline")}
                        </p>
                      </div>
                      <ul
                        className={`d-flex list-unstyled gap-4 ${textColor}`}
                      >
                        {SocialMediaItems.map((item, index) => (
                          <SocialMedia key={index} item={item} index={index} />
                        ))}
                      </ul>
                    </div>
                  }
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mb-n1 container col-md-10 mx-auto mt-auto d-flex flex-wrap align-items-center">
          <div className="service all position-relative row">
            <div
              className={`d-none d-md-flex service-element lefter text-center position-relative ${serviceBackground}`}
            >
              <div className={`text text-center ${textColor}`}>
                {t("home.services.frontend")}
              </div>
            </div>
            <div
              className={`d-none d-md-flex service-element left text-center position-relative ${serviceBackground}`}
            >
              <div className={`text text-center ${textColor}`}>
                {t("home.services.backend")}
              </div>
            </div>
            <div
              className={`service-element center text-center position-relative ${serviceBackground}`}
            >
              <WordFlick />
              <div
                className={`d-none d-md-inline  text text-center ${textColor}`}
              >
                {t("home.services.software")}
              </div>
            </div>
            <div
              className={`d-none d-md-flex service-element right text-center position-relative ${serviceBackground}`}
            >
              <div className={`text text-center ${textColor}`}>
                {t("home.services.ui/ux")}
              </div>
            </div>
            <div
              className={`d-none d-md-flex service-element righter text-center position-relative ${serviceBackground}`}
            >
              <div className={`text text-center ${textColor}`}>
                {t("home.services.cloud")}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id={`${t("header.links.about.url")}`}
        className={background}
        ref={sectionRefs.about}
      >
        <About />
      </section>

      <section
        id={`${t("header.links.services.url")}`}
        className={backgroundColor}
        ref={sectionRefs.services}
      >
        {horizontalLine()}
        <WhatIOffer />
      </section>
      <section
        id={`${t("header.links.technologies.url")}`}
        className={background}
        ref={sectionRefs.technologies}
      >
        {horizontalLine()}
        <Technologies />
      </section>
      <section
        id={`${t("header.links.process.url")}`}
        ref={sectionRefs.process}
      >
        {horizontalLine()}
        <Processes />
      </section>
      <section
        id={`${t("header.links.testimonials.url")}`}
        className={background}
        ref={sectionRefs.testimonials}
      >
        {horizontalLine()}
        <Testimonials />
      </section>

      <section id="blog" ref={sectionRefs.blog}>
        {horizontalLine()}
        <Blog />
      </section>

      <section className="hero-holder mb-5">
        <div className="mt-auto mb-md-4 mx-auto d-flex flex-row text-center align-items-center justify-content-center">
          <button
            onClick={() => goToSection("home")}
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

      <section
        className={`page-about hero hero-headline hero-lg position-relative py-md-4 rounded-top-5`}
        id={`${t("header.links.contact.url")}`}
        ref={sectionRefs.contact}
        style={{
          backgroundImage: `url(${Background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className={`overlay ${contactBackground}`}></div>
        <div className="content">
          <Contact />
        </div>
      </section>
    </div>
  );
};

const Testimonials = () => {
  const { t, i18n } = useTranslation();
  const testimonialsArray: any[] = t("testimonials.group", {
    returnObjects: true,
  });
  const { testimonials } = useTranslatedPaths(
    t("header.links.testimonials.url")
  );

  const { theme } = useContext(ThemeContext);
  const themeStyles = useThemeStyles(theme);

  const testimonialGroupImages: any = {
    Lea,
    Nora,
    Thomas,
    Fuku,
    Annika,
    Fabi,
    Gregor,
    Daphne,
    Seb,
  };

  const testimonialGroup1Keys = Object.keys(testimonialGroupImages);

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
  }, [testimonialsArray]);

  return (
    <div
      className={`container pt-5 pb-4 ${themeStyles.background}`}
      id="testimonials"
    >
      <div className={`col-md-10 mx-auto banner banner-features `}>
        <div className="col-12 mx-auto d-flex flex-column mb-4">
          <h1 className={`hero-title mb-4 text-gray`}>
            {t("testimonials.title")}
          </h1>
          <div className="d-flex gap-2 mb-4">
            <img
              src={themeStyles.isDarkTheme ? forwards : forwards1}
              className="img-fluid"
              alt="services"
              style={{ width: "1.8rem", height: "1.8rem" }}
            />
            <h3
              className={`text-uppercase value-title text-start ${themeStyles.textColor}`}
            >
              {t("testimonials.subtitle")}
            </h3>
          </div>
        </div>

        <div className="row d-flex">
          <SlideContent
            from="left"
            slideElement={
              <CarouselComponent
                responsive={defaultResponsive}
                autoPlay={true}
                deviceType="desktop"
                className="mx-auto"
                wrapperClass="gap-4"
                autoPlaySpeed={5000}
                ssr={true}
                infinite={true}
                customTransition="transform 300ms ease-in-out"
                transitionDuration={500}
                showDotsOutside={true}
                showDots={true}
                partialVisible={true}
                centerMode={true}
                afterChange={handleAfterChange}
                arrows={true}
              >
                {testimonialsArray &&
                  testimonialsArray.map((testimonial, index) => (
                    <Testimonial
                      testimonial={testimonial}
                      key={testimonial.name}
                      className="px-3"
                      image={
                        testimonialGroupImages[testimonialGroup1Keys[index]]
                      }
                    />
                  ))}
              </CarouselComponent>
            }
          />

          <div className="d-flex mt-4 mx-auto justify-content-center align-items-center">
            <Link
              className={`btn btn-lg bt-icon btn-outline-primary linked-btn text-uppercase ${themeStyles.textColor}`}
              to={`/${i18n.language}${testimonials}`}
            >
              {t("testimonials.button")}
              <FontAwesomeIcon icon={faArrowRightLong} fixedWidth />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
