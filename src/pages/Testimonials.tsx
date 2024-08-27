import React, { useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import Avatar from "../components/Avatar";
import BannerImage from "../components/BannerImage";
import { SlideContent } from "../components/Sliders";
import { useBackToTop } from "../helpers/back-to-top";
import { useThemeStyles } from "../helpers/use-theme-styles";
import { ThemeContext } from "../ThemeContext";

import ProfileImage from "../styles/images/ansu.jpg";
import Fabi from "../styles/images/testimony/fabi.jpeg";
import Lea from "../styles/images/testimony/lea.jpeg";
import Gregor from "../styles/images/testimony/gregor.jpeg";
import Nora from "../styles/images/testimony/nora.jpeg";
import Daphne from "../styles/images/testimony/daphne.jpeg";
import Thomas from "../styles/images/testimony/thomas.jpeg";
import Seb from "../styles/images/testimony/seb.jpeg";
import Fuku from "../styles/images/testimony/fuku.jpeg";
import Annika from "../styles/images/testimony/annika.jpeg";

interface TestimonialData {
  name: string;
  testimony: string;
}

const Testimonials = () => {
  const [divRef, goToTop] = useBackToTop();
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);
  const themeStyles = useThemeStyles(theme);

  const testimonialGroup1Images: any = {
    Fabi,
    Gregor,
    Daphne,
    Seb,
  };

  const testimonialGroup2Images: any = {
    Lea,
    Nora,
    Thomas,
    Fuku,
    Annika,
  };

  const testimonialsGroup1: TestimonialData[] = t("testimonials.groupOne", {
    returnObjects: true,
  });

  const testimonialsGroup2: TestimonialData[] = t("testimonials.groupTwo", {
    returnObjects: true,
  });

  const testimonialGroup1Keys = Object.keys(testimonialGroup1Images);
  const testimonialGroup2Keys = Object.keys(testimonialGroup2Images);

  useEffect(() => {
    divRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [divRef]);

  return (
    <div
      className={`page-testimonials mt-5 ${themeStyles.background}`}
      ref={divRef}
    >
      <div className={`hero py-5 py-md-6 ${themeStyles.background}`}>
        <div className="hero-container col-md-10 mx-auto">
          <div
            className={`mx-auto col-md-4 text-center ${themeStyles.textColor}`}
          >
            <h1 className={`title text-center mb-4 ${themeStyles.textColor}`}>
              {t("testimonials.title")}
            </h1>
            <BannerImage image={ProfileImage} />
            <p className={`mb-4 mb-md-5 h6 ${themeStyles.textColor}`}>
              {t("testimonials.text")}
            </p>
          </div>
          <div className="row my-4">
            <div className="mx-auto col-md-6">
              {testimonialsGroup2.map((testimonial, index: number) => (
                <SlideContent
                  key={testimonial.name}
                  slideElement={
                    <Testimonial
                      testimonial={testimonial}
                      image={
                        testimonialGroup1Images[testimonialGroup1Keys[index]]
                      }
                    />
                  }
                  from="left"
                />
              ))}
            </div>
            <div className="mx-auto col-md-6">
              {testimonialsGroup1.map((testimonial, index: number) => (
                <SlideContent
                  key={testimonial.name}
                  slideElement={
                    <Testimonial
                      testimonial={testimonial}
                      image={
                        testimonialGroup2Images[testimonialGroup2Keys[index]]
                      }
                    />
                  }
                  from="right"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface TestimonialProps {
  testimonial: TestimonialData;
  image: string;
  className?: string;
}

export const Testimonial = ({
  testimonial,
  image,
  className,
}: TestimonialProps) => {
  const { theme } = useContext(ThemeContext);
  const themeStyles = useThemeStyles(theme);

  return (
    <div className={`mb-4 testimonial ${className}} key={testimonial.name}`}>
      <div className="mx-md-2 testimonial-body testimony rounded-4 mt-4">
        <div
          className={`hero-body p-3 rounded-4 position-relative ${themeStyles.testimonialBackground}`}
        >
          <FontAwesomeIcon
            className={`text-secondary mt-md-n5 ${themeStyles.textColor}`}
            size="3x"
            icon={faQuoteLeft}
          />
          <p className={`body-text text-start ${themeStyles.textColor}`}>
            {testimonial.testimony}
          </p>
        </div>
        <div className={`text-start ${themeStyles.textColor}`}>
          <div
            className={`arrow-down testimony-arrow text-start mb-2 ms-5 ${themeStyles.testimonialBorderColor}`}
          ></div>
          <div className="d-flex flex-column ms-5">
            <Avatar image={image} size="md" dot={false} className="mb-2" />
            <small className={`testimony-name mb-3 ${themeStyles.labelColor}`}>
              {testimonial.name}
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
