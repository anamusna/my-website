import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import { HashLink } from "react-router-hash-link";
import { ColophonSocialMedia } from "./ColophonSocialMedia";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="colophon border-top">
        <div className="footer-colophon d-flex">
          <div className="footer-colophon-text text-white order-0">
            {t("footer.text")} <span className="text-danger">&hearts;</span>{" "}
            {t("footer.subText")} Ansumana Darboe
          </div>
          <div className="order-1">
            <ul className="footer-colophon-social text-white">
              {ColophonSocialMedia}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export const LinkItems = () => {
  const { t, i18n } = useTranslation();

  /* 
      data-bs-toggle="collapse"
                  data-bs-target={`#collapse`}
                  aria-expanded="false"
                  aria-controls={`collapse`}
  */
  const menuContent: any[] = [
    { label: `${t("about.title")}`, url: "#about" },
    { label: `${t(`about.skillTitle`)}`, url: "#technologies" },
    { label: `${t(`serviceTitle`)}`, url: "#services" },
    { label: `${t(`about.experienceTitle`)}`, url: "#experience" },
    {
      label: `${t("header.links.testimonials.label")}`,
      url: `${i18n.language}/testimonials`,
    },
  ];

  const linkItems = menuContent.map((item) => {
    return (
      <HashLink
      className={`link-text btn btn-sm hero-title text-uppercase text-underline`}
      to={`/${item.url}`}
      key={item.label}
    >
      {item.label}
    </HashLink>
    );
  });

  return (
    <p className="text-md-center">
      {linkItems}
    </p>
  );
};

export const FooterMain = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="footer">
      <div className="footer-main py-5">
        <div className="col-md-10 mx-auto container">
          <div className="d-none text-center d-md-flex mx-auto justify-content-center mb-4">
            <LinkItems />
          </div>
          <div className="col-md-6 mx-auto text-center">
            <p className="testimonial-title footer-title text-center text-white mb-5">
              {t("footer.title")}
            </p>
            <div className="hero-button-container d-flex mx-auto justify-content-center">
              <Link
                className="btn btn-lg btn-icon btn-primary text-uppercase"
                to={`/${i18n.language}/contact`}
              >
                {t("footer.button")}
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className=""
                  size="xs"
                  fixedWidth
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
