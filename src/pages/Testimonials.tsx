import React from "react";
import { useTranslation } from "react-i18next";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import Avatar from "../components/Avatar";
import { FooterMain } from "../components/Footer";
import { SlideContent } from "../components/Sliders";
import { useBackToTop } from "../helpers/back-to-top";

const Testimonials = () => {
  const [divRef, goToTop] = useBackToTop();
  const { t } = useTranslation();

  const testimonials: any[] = t("testimonials.groupTwo", {
    returnObjects: true,
  });
  const testimonies: any[] = t("testimonials.groupOne", {
    returnObjects: true,
  });

  return (
    <div className="page-testimonials mt-5" ref={divRef}>
      <div className="hero py-5 py-md-6">
        <div className="hero-container ">
          <div className="col-md-10 mx-auto">
            <div className="mx-auto col-md-4 text-center">
              <h1 className="title text-center">{t(`testimonials.title`)}</h1>
              {/*  <h4 className="fw-boldest">
              {t(`testimonials.subtitle`)}
            </h4> */}
              <p className="mb-4  mb-md-5">{t(`testimonials.text`)}</p>
            </div>
            <div className="row my-4">
              <div className="col-md-6">
                {testimonials.map((testimonial: any, index: number) => (
                  <div className="slide-content-wrapper" key={testimonial.name}>
                    <SlideContent
                      //className="bg-primary"
                      slideElement={<Testimonial testimonial={testimonial} />}
                      from="left"
                    />
                  </div>
                ))}
              </div>
              <div className="col-md-6">
                {testimonies.map((testimonial: any, index: number) => (
                  <div className="slide-content-wrapper" key={testimonial.name}>
                    <SlideContent
                      //className="bg-secondary"
                      slideElement={<Testimonial testimonial={testimonial} />}
                      from="right"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
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
      <FooterMain />
    </div>
  );
};

export const Testimonial = ({ testimonial }: { testimonial: any }) => {
  return (
    <div className="row mx-md-3 mx-auto mb-4" key={testimonial.name}>
      <div className="hero-body pt-4 bg-gray-3 rounded-4 position-relative">
        <p className="body-text">“{testimonial.testimony}”</p>
      </div>
      <div className="mb-4 text-start">
        <div className="text-start arrow-down mb-2 ms-5"></div>
        <div className="d-flex mx-4 align-items-center gap-4">
          <small className="fw-bold">{testimonial.name}</small>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
