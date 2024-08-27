import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

export const useTranslatedPaths = (path?: string) => {
  const { i18n } = useTranslation();
  const location = useLocation();
  const pathname = location.pathname;

  const languageFromPath = pathname.split('/')[1] || 'en'; // Default to 'en' if no language is found

  const newPathname = `/${languageFromPath}${pathname.substring(languageFromPath.length + 1)}`;

  const contactUrl = languageFromPath === 'de' ? '/kontakt' : '/contact';
  const testimonialsUrl = languageFromPath === 'de' ? '/referenzen' : '/testimonials';
  const aboutUrl = languageFromPath === 'de' ? '/über' : '/about';

  useEffect(() => {
    if (i18n.language !== languageFromPath) {
      i18n.changeLanguage(languageFromPath);
    }
  }, [i18n, languageFromPath]);

  return {
    contact: contactUrl,
    testimonials: testimonialsUrl,
    about: aboutUrl,
    url: newPathname
  };
};
