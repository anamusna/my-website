import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarPlus, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  const ContactText: any[] = t("contact.text", { returnObjects: true });

  return (
    <div className="page-contact mt-5 position-relative">
      <div className="container pt-5">
        <div className="hero-holder mt-5">
          <div className="hero mb-4 mb-md-6">
            <div className="col-md-10 mx-auto">
              <h1 className="title text-start mb-4">{t("footer.button")}</h1>
              <div className="contact-content col-12 flex-column flex-md-row d-md-flex  d-flex justify-content-center align-items-center">
                <div className="col-md-7 mb-4 mb-md-5">
                  {ContactText.map((text) => (
                    <p key={text} className="about-text">{t(text)}</p>
                  ))}
                </div>
                <div className="col-md-5 mb-4 mb-md-5 flex-column">
                  <div className="col-md-10 hero-button-container d-flex flex-column ms-md-auto text-md-start gap-4 mb-4 mb-md-0">
                    <label>{t("contact.subText")}</label>
                    <a
                      className="btn btn-sm btn-icon btn-gradient text-uppercase text-start"
                      href="https://calendly.com/darboe/connect-chat"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {t("contact.meeting")}
                      <FontAwesomeIcon
                        icon={faCalendarPlus}
                        className="text-white mt-1"
                        fixedWidth
                      />
                    </a>
                    <div className="horizontal-line bg-black col-12"></div>
                    <a
                      className="btn btn-sm btn-icon btn-gradient text-uppercase text-start"
                      href="https://www.linkedin.com/in/ansumana-darboe"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {t("contact.linkedin")}
                      <FontAwesomeIcon
                        icon={faLinkedin}
                        className="text-white mt-1 "
                        fixedWidth
                      />
                    </a>
                    <a
                      className="btn btn-sm btn-icon btn-gradient text-uppercase text-start"
                      href="mailto:darboe@posteo.net"
                    >
                      {t("contact.email")}
                      <FontAwesomeIcon
                        icon={faEnvelope}
                        className="text-white mt-1"
                        fixedWidth
                      />
                    </a>
                    <a
                      className="btn btn-sm btn-icon btn-gradient text-uppercase text-start"
                      href="https://github.com/anamusna"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {t("contact.github")}
                      <FontAwesomeIcon
                        icon={faGithub}
                        className="text-white mt-1"
                        fixedWidth
                      />
                    </a>
                    <label className="text-underline" htmlFor="">
                      {" "}
                      <FontAwesomeIcon
                        icon={faPhone}
                        className="text-primary mt-1"
                        fixedWidth
                      />
                      <a
                        className="ps-3 text-secondary"
                        href="tel:+4917634481549"
                      >
                        +49 176 34481549
                      </a>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
