import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { HashLink } from "react-router-hash-link";
import { ThemeContext } from "../ThemeContext";
import { SocialMediaItems } from "./ColophonSocialMedia";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useThemeStyles } from "../helpers/use-theme-styles";

type ThemeContextType = {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
};

const Footer = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  const { theme } = useContext<ThemeContextType>(ThemeContext);

  const isDarkTheme = theme === "dark";
  const { backgroundColor, textColor } = useThemeStyles(theme);
  const borderTopColor = isDarkTheme ? "border-top-white" : "border-top-black";

  return (
    <footer className={`footer ${backgroundColor}`}>
      <div className={`colophon border-top ${borderTopColor}`}>
        <div className="footer-colophon d-flex">
          <div className={`footer-colophon-text order-0 ${textColor}`}>
            &copy; {year} {t("footer.text")}{" "}
            <span className="text-danger">&hearts;</span> {t("footer.subText")}{" "}
            Ansumana Darboe
          </div>
          <div className="order-1">
            <ul className="footer-colophon-social text-white">
              {SocialMediaItems.map((item) => (
                <li key={item.name}>
                  <a
                    className={textColor}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={item.label}
                  >
                    <FontAwesomeIcon icon={item.icon} size="xl" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export const LinkItems = () => {
  const { t, i18n } = useTranslation();

  const { theme } = useContext<ThemeContextType>(ThemeContext);
  
  const {  textColor } = useThemeStyles(theme);

  const menuContent = [
    {
      label: t("about.title"),
      url: `${i18n.language}${t("header.links.about.url")}#about`,
    },
    {
      label: t("about.skillTitle"),
      url: `${i18n.language}${t("header.links.about.url")}#technologies`,
    },
    { label: t("serviceTitle"), url: "#services" },
    {
      label: t("about.experienceTitle"),
      url: `${i18n.language}${t("header.links.about.url")}#experience`,
    },
    {
      label: t("header.links.testimonials.label"),
      url: `${i18n.language}${t("header.links.testimonials.url")}`,
    },
  ];

  return (
    <p className={`text-md-center ${textColor}`}>
      {menuContent.map((item) => (
        <HashLink
          className={`text-underline link-text btn btn-sm hero-title text-uppercase ${textColor}`}
          to={`/${item.url}`}
          key={item.label}
        >
          {item.label}
        </HashLink>
      ))}
    </p>
  );
};

export default Footer;
