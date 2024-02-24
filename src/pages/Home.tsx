import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faCircle, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import { HashLink } from "react-router-hash-link";
import CarouselComponent from "../components/CarouselMulti";
import { FooterMain } from "../components/Footer";
import { PictureSlide, SlideContent } from "../components/Sliders";
import ProfileImage from "../styles/images/ansu-bw-bg.png";
import { responsive } from "../styles/responsive";

const Home = () => {
  return (
    <div className="page-home mt-5 position-relative">
      <Hero />
      <div className="hero-holder bg-white">
        <Process />
        <Testimonials />
        <FooterMain />
      </div>
    </div>
  );
};

const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className="hero-holder position-relative">
      <div className="home-background" id="welcome-section">
        <div className="forest" />
        <div className="moon" />
      </div>
      <div className="container py-5 py-md-6">
        <div className={`banner banner-image mx-auto banner-image-right`}>
          <div className="banner-row mx-auto">
            <PictureSlide
              className="banner-img img-fluid order-1 order-md-0 mt-md-4"
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
                  <img
                    style={{
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                    src={ProfileImage}
                    className="img-fluid w-100 p-md-5"
                    alt=""
                  />
                </>
              }
              from="up"
            />
            <div className="banner-body">
              <div className="">
                <div className="work px-md-4 d-flex gap-4 mt-md-auto">
                  <div className="text-md-start bg-success-1 badge rounded-4 mb-4 mb-md-0">
                    <span className="blink">
                      <FontAwesomeIcon
                        icon={faCircle}
                        className=""
                        fixedWidth
                      />
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
              </div>
              <SlideContent
                className="d-flex align-items-center justify-content-center flex-column"
                slideElement={
                  <div className="col-12  ">
                    <div className="home-hero-text px-md-4 d-block d-md-none text-start">
                      <h3 className="home-hero-text title text-start">
                        {t("home.hero.title")}
                      </h3>
                      <h1 className="home-hero-text title text-center text-md-start">
                        Ansu
                      </h1>
                    </div>

                    <div className="home-hero-text banner-text mt-md-auto mb-md-4">
                      <h3 className="home-hero-text testimonial-text fw-normal mb-4">
                        {t("home.hero.text")}
                      </h3>
                      <div className="hero-button-container d-flex flex-column flex-md-row mx-auto text-md-start gap-4 mb-4 mb-md-0">
                        <Link
                          className="btn btn-icon btn-gradient text-uppercase text-start"
                          to="/about"
                        >
                          {t("about.title")}
                          <FontAwesomeIcon
                            icon={faChevronRight}
                            size="xs"
                            className="bg-white text-primary rounded-circle mt-1 "
                            fixedWidth
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                }
                from="left"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Process = () => {
  const { t } = useTranslation();

  return (
    <div className="row py-5 bg-gray-3">
      <div className="banner banner-features container">
        <div className="hero-row row col-md-8 mx-auto">
          <div className="mx-auto">
            <div className="d-flex flex-column mt-4 mb-4 mx-auto">
              <h2 className="value-title text-black text-start mb-4">
                {t("process.title")}
              </h2>
              <p className="testimonial-text text-start mb-4">
                {t("process.subText")}
                {/*  I begin by thoroughly grasping the project requirements. I then break down tasks, giving priority to crucial aspects, and plan collaborative sprints for development. Continuous integration and iterative development are key, ensuring adaptability. I strongly believe in regular reviews and feedback to enhance efficiency, fostering a dynamic and successful project completion. */}
              </p>
            </div>
          </div>
          <div className="hero-button-container d-flex mx-auto justify-content-center align-items-center">
            <HashLink
              to="/about#my-process"
              className="btn btn-icon btn-outline-primary text-uppercase "
              scroll={(el) =>
                el.scrollIntoView({ behavior: "smooth", block: "end" })
              }
            >
              {t("process.button")}
              <FontAwesomeIcon
                icon={faChevronRight}
                className="bg-primary home-hero-text rounded-circle mt-1 "
                size="xs"
                fixedWidth
              />
            </HashLink>
          </div>
        </div>
      </div>
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
    <div className="row text-start py-5">
      <div className="col-12 col-md-8 mx-auto d-flex justify-content-between mt-4 mb-4 p-2">
        <h2 className="value-title text-black text-start">
          {t("testimonials.title")}
        </h2>
        <div className="hero-button-container  d-none d-md-block">
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

      <CarouselComponent
        responsive={responsive}
        autoPlay={true}
        deviceType="desktop"
        className="col-md-8 mb-4"
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
            <div key={testimonial.name} className={`mx-auto mb-4 px-1 px-md-4`}>
              <div className="banner banner-shadow rounded-4 p-1 p-md-2">
                <div className="gap-4 d-flex bg-gray-2 rounded-4 p-2">
                  <p className="testimonial-text">
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

      <div className="d-flex mx-auto justify-content-center align-items-center">
        <Link
          className="btn btn-outline-primary text-uppercase d-md-none"
          to="/testimonials"
        >
          {t("testimonials.button")}
          <FontAwesomeIcon
            icon={faChevronRight}
            className="bg-primary home-hero-text rounded-circle mt-1 "
            fixedWidth
          />
        </Link>
      </div>
    </div>
  );
};

export default Home;
