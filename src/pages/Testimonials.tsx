import React from "react";
import { useTranslation } from "react-i18next";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import Avatar from "../components/Avatar";
import BannerImage from "../components/BannerImage";
import { FooterMain } from "../components/Footer";
import { SlideContent } from "../components/Sliders";
import { useBackToTop } from "../helpers/back-to-top";
import ProfileImage from "../styles/images/ansu.jpg";

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
          <div className="mx-auto">
            <div className="mx-auto col-md-4 text-center">
              <h1 className="title text-center mb-4">
                {t(`testimonials.title`)}
              </h1>
              <BannerImage image={ProfileImage} />
              <p className="mb-4 mb-md-5 page-testimonials-subtitle">{t(`testimonials.text`)}</p>
            </div>

            <div className="row my-4">
              <div className="mx-auto col-md-6">
                {testimonials.map((testimonial: any, index: number) => (
                  <SlideContent
                    key={testimonial.name}
                    //className="bg-primary"
                    slideElement={<Testimonial testimonial={testimonial} />}
                    from="left"
                  />
                ))}
              </div>
              <div className="mx-auto col-md-6">
                {testimonies.map((testimonial: any, index: number) => (
                  <SlideContent
                    key={testimonial.name}
                    //className="bg-secondary"
                    slideElement={<Testimonial testimonial={testimonial} />}
                    from="right"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="slide-content  mb-4 mx-auto d-flex flex-row text-center align-items-center justify-content-center">
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
  );
};

export const Testimonial = ({ testimonial }: { testimonial: any }) => {
  return (
    <div className="row mx-md-3 mx-auto mb-4" key={testimonial.name}>
      <div className="hero-body pt-3 bg-gray-3 rounded-4 position-relative">
        <p className="body-text">&ldquo;{testimonial.testimony}&rdquo;</p>
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
