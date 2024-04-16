import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import { SlideContent, useSlideAnimation } from "../components/Sliders";
import forwards from "../styles/images/forwards.svg";
import { useBackToTop } from "../helpers/back-to-top";
import Avatar from "../components/Avatar";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FooterMain } from "../components/Footer";

const Blog = () => {
  const { t } = useTranslation();
  const slideRef = useRef<HTMLDivElement>(null);

  const blogPosts: any[] = t("blogs", { returnObjects: true });

  useSlideAnimation(slideRef, "bottom");

  return (
    <div className="page-blog hero-container container mt-5">
      <div className="mx-auto">
        <div className="d-flex gap-4 pt-md-4">
          <img
            src={forwards}
            className="img-fluid"
            alt="blogs"
            style={{ width: "1.8rem", height: "1.8rem" }}
          />
          <h3 className="text-uppercase value-title mb-4 mb-md-5 text-start">
            {t(`blogTitle`)}
          </h3>
        </div>
        {blogPosts.map((blog, index) => {
          return (
            <SlideContent
              key={blog.title}
              className="mb-md-0 col-12"
              from="bottom"
              slideElement={
                <a
                  key={index}
                  className="link "
                  href={blog.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div
                    className="banner banner-image banner-image-left shadow"
                    key={index}
                  >
                    <div className="banner-row mx-auto">
                      <div className="col-12 col-md-4 d-none d-md-flex">
                        <img
                          className="img-fluid h-100"
                          src={require(`../styles/images/blog/${blog.image}`)}
                          alt={blog.image}
                          style={{
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            minHeight: "14rem",
                          }}
                        />
                      </div>
                      <div className="banner-body">
                        <div className="banner-text">
                          <h3 className="value-title mb-4 mb-md-5 text-start">
                            {t(blog.title)}
                          </h3>

                          <p className="fw-normal"> {t(blog.text)}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              }
            />
          );
        })}
      </div>
    </div>
  );
};

export const Blogs = () => {
  const slideRef = useRef<HTMLDivElement>(null);

  const [divRef, goToTop] = useBackToTop();

  useSlideAnimation(slideRef, "bottom");

  return (
    <div className="position-relative mt-6" ref={divRef}>
      <div className="hero pt-5">
        <Blog />
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
export default Blog;
