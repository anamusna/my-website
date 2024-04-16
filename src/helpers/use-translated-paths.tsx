import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

export const useTranslatedPaths = (path?: string) => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const pathname = location.pathname;

  const languageFromPath = pathname.split('/')[1];
  const url = window.location.pathname.substring(3);
  const newPathname = `/${languageFromPath}${pathname.substring(3)}`;
  
  const contactUrl = languageFromPath === 'de' ? '/kontakt' : '/contact';
  const testimonialUrl = languageFromPath === 'de' ? '/referenzen' : '/testimonials';

  useEffect(() => {
    i18n.changeLanguage(languageFromPath);
  }, [i18n, languageFromPath, path, pathname]);
  
  return {
    contact: contactUrl,
    testimonials: testimonialUrl,
    url: newPathname
/*     contactUrl: contact,
    testimonialUrl: testimonials */
  };
};
