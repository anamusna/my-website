import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useTranslation } from "react-i18next";

interface SocialMediaItem {
  name: string;
  label: string;
  icon: any;
  href: string;
}

function Footer() {
  const { t } = useTranslation();

  const SocialMediaItems: SocialMediaItem[] = [
    {
      name: "linkedin",
      label: "Linkedin",
      icon: faLinkedin,
      href: "https://www.linkedin.com/in/ansumana-darboe",
    },
    {
      name: "github",
      label: "Github",
      icon: faGithub,
      href: "https://github.com/anamusna",
    },
  ];

  const ColophonSocialMedia = SocialMediaItems.map((item) => {
    return (
      <li key={`colophonSocialMedia-${item.name}`}>
        <a
          className="text-white"
          href={item.href}
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            aria-label={item.label}
            fixedWidth
            className=""
            icon={item.icon}
            size="xl"
          />
        </a>
      </li>
    );
  });

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

export const FooterMain = () => {
  const { t } = useTranslation();

  return (
    <div className="footer">
      <div className="footer-main py-6">
        <div className="col-md-10 mx-auto container">
          <div className="col-md-6 mx-auto">
            <p className="testimonial-title footer-title text-center text-white mb-5">
              {t("footer.title")}
            </p>
            <div className="hero-button-container d-flex mx-auto justify-content-center">
              <Link
                className="btn btn-icon btn-primary text-uppercase"
                to="/contact"
              >
                {t("footer.button")}
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="bg-white text-primary rounded-circle mt-1 "
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
