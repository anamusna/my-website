import React, { useContext, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarPlus, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useTranslation } from "react-i18next";
import { useSlideAnimation } from "../components/Sliders";
import { ThemeContext } from "../ThemeContext";
import { useThemeStyles } from "../helpers/use-theme-styles";

const Contact = () => {
  const { t } = useTranslation();
  const contactText: string[] = t("contact.text", { returnObjects: true });

  const slideLeftRef = useRef<HTMLDivElement>(null);
  const slideRightRef = useRef<HTMLDivElement>(null);
  useSlideAnimation(slideLeftRef, "left");
  useSlideAnimation(slideRightRef, "right");

  const { theme } = useContext(ThemeContext);
  const {
    textColor,
    horizontalColor,
  } = useThemeStyles(theme);

  return (
    <div className="hero pt-5 position-relative hero-container container">
      <div className="mb-4 col-md-10 mx-auto">
        <div className="row mx-auto">
          <h1 className={`title text-center text-md-start mb-4 ${textColor}`}>
            {t("footer.button")}
          </h1>
          <div className="col-12 flex-column flex-md-row d-md-flex d-flex justify-content-center align-items-center">
            <div
              className="col-md-5 mb-4 slide-content slide-content-from-left"
              ref={slideLeftRef}
            >
              {contactText.map((text, index) => (
                <p key={index} className={`body-text ${textColor}`}>
                  {t(text)}
                </p>
              ))}
            </div>
            <div
              className="col-md-7 mb-4 mb-md-5 flex-column slide-content slide-content-from-right"
              ref={slideRightRef}
            >
              <div className="col-md-10 hero-button-container d-flex flex-column ms-md-auto text-md-start gap-4 mb-4 mb-md-0">
                <label className={textColor}>{t("contact.subText")}</label>
                <ContactButton
                  href="https://calendly.com/darboe/connect-chat"
                  icon={faCalendarPlus}
                  label={t("contact.meeting")}
                />
                <div className={`horizontal-line col-12 ${horizontalColor}`}></div>
                <ContactButton
                  href="https://www.linkedin.com/in/ansumana-darboe"
                  icon={faLinkedin}
                  label={t("contact.linkedin")}
                />
                <ContactButton
                  href="mailto:darboe@posteo.net"
                  icon={faEnvelope}
                  label={t("contact.email")}
                />
                <ContactButton
                  href="https://github.com/anamusna"
                  icon={faGithub}
                  label={t("contact.github")}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface ContactButtonProps {
  href: string;
  icon: any;
  label: string;
}

const ContactButton = ({ href, icon, label } : ContactButtonProps) => {
  return (
    <a
      className="btn btn-sm btn-icon btn-gradient text-uppercase text-start"
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {label}
      <FontAwesomeIcon icon={icon} className="text-white mt-1" fixedWidth />
    </a>
  );
};

export default Contact;
