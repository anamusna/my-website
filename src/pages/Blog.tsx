import React, { useContext, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarWeek, faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faReadme } from "@fortawesome/free-brands-svg-icons";
import { SlideContent, useSlideAnimation } from "../components/Sliders";
import forwards from "../styles/images/forwards.svg";
import forwards1 from "../styles/images/forwards1.svg";
import { useBackToTop } from "../helpers/back-to-top";
import { ThemeContext } from "../ThemeContext";

interface BlogPost {
  title: string;
  text: string;
  image: string;
  url: string;
  time: string;
  date: string;
}

const Blog= () => {
  const { t } = useTranslation();
  const slideRef = useRef<HTMLDivElement>(null);
  const [visiblePosts, setVisiblePosts] = useState(3);
  const { theme } = useContext(ThemeContext);

  const blogPosts: BlogPost[] = t("blogs", { returnObjects: true });

  const isDarkTheme = theme === "dark";
  const textColor = isDarkTheme ? "text-white" : "text-black";
  const heroTitleColor = "text-gray";

  const handleLoadMore = () => {
    setVisiblePosts((prevVisiblePosts) => prevVisiblePosts + 3);
  };

  useSlideAnimation(slideRef, "bottom");

  return (
    <div className="page-blog hero-container container mt-5">
      <div className="mx-auto col-md-10">
        <h1 className={`hero-title ${heroTitleColor}`}>{t("blogTitle")}</h1>
        <div className="d-flex gap-4 pt-md-4">
          <img
            src={isDarkTheme ? forwards : forwards1}
            className="img-fluid"
            alt="blogs"
            style={{ width: "1.8rem", height: "1.8rem" }}
          />
          <h3 className={`text-uppercase value-title mb-4 mb-md-5 text-start ${textColor}`}>
            {t("blogSubtitle")}
          </h3>
        </div>
        <div className="row d-flex mb-4">
          {blogPosts.slice(0, visiblePosts).map((blog, index) => (
            <BlogPostCard blog={blog} key={`${blog.title}_${index}`} />
          ))}
        </div>
        {visiblePosts < blogPosts.length && (
          <div className="text-center mb-5 mb-md-6">
            <button className="btn btn-outline-primary linked-btn" onClick={handleLoadMore}>
              {t("loadMore")}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

interface BlogPostCardProps {
  blog: BlogPost;
}

const BlogPostCard = ({ blog } : BlogPostCardProps) => {
  const { t } = useTranslation();
  const slideRef = useRef<HTMLDivElement>(null);
  const { theme } = useContext(ThemeContext);

  const isDarkTheme = theme === "dark";
  const textColor = isDarkTheme ? "text-white" : "text-black";
  const hoverBackground = isDarkTheme ? "hover-black" : "hover-white";

  useSlideAnimation(slideRef, "bottom");

  return (
    <SlideContent
      className="col-12 col-md-4 mb-4"
      from="bottom"
      slideElement={
        <a className="link" href={blog.url} target="_blank" rel="noreferrer">
          <div className={`card mx-auto ${hoverBackground}`}>
            <div className="d-none d-md-flex">
              <img
                className="img-fluid card-img-top w-100"
                src={require(`../styles/images/blog/${blog.image}`)}
                alt={blog.image}
              />
            </div>
            <div className="card-body">
              <p className={`h3 text-bolder text-wrap mb-4 text-start ${textColor}`}>
                {t(blog.title)}{" "}
                <FontAwesomeIcon
                  icon={faUpRightFromSquare}
                  className="text-secondary-1"
                  fixedWidth
                  size="xs"
                />
              </p>
              <div className="card-text">
                <p className={`fw-normal text-wrap ${textColor}`}>
                  {t(blog.text)}
                </p>
                <div className="d-flex flex-row justify-content-between">
                  <small>
                    <FontAwesomeIcon icon={faReadme} fixedWidth size="1x" />{" "}
                    {t(blog.time)} min {t("home.read")}
                  </small>
                  <small>
                    <FontAwesomeIcon icon={faCalendarWeek} fixedWidth size="1x" />{" "}
                    {t(blog.date)}
                  </small>
                </div>
              </div>
            </div>
          </div>
        </a>
      }
    />
  );
};

export const Blogs = () => {
  const slideRef = useRef<HTMLDivElement>(null);
  const [divRef] = useBackToTop();

  useSlideAnimation(slideRef, "bottom");

  return (
    <div className="position-relative mt-6" ref={divRef}>
      <div className="hero pt-5 col-12">
        <Blog />
      </div>
    </div>
  );
};

export default Blog;
