import * as i18next from "i18next";
import XHR from "i18next-xhr-backend";
import "intl-pluralrules";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import de from "./locales/de.json";
import en from "./locales/en.json";

const namespace = "ansumana";

const loadLocales = (i18nInstance: i18next.i18n) => {
  i18nInstance.addResourceBundle("en", namespace, en);
  i18nInstance.addResourceBundle("de", namespace, de);
};

const options: any = {
  supportedLngs: ["en", "de"],
  //lng: "en" || "de",
  ns: namespace,
  defaultNS: namespace,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  debug: false,
  detection: {
    order: ["path", "querystring", "navigator"],
    lookupQuerystring: "lng",
    lookupCookie: "i18next",
    lookupLocalStorage: "i18nextLng",
    lookupSessionStorage: "i18nextLng",
    lookupFromPathIndex: 0,
    lookupFromSubdomainIndex: 0,
    convertDetectedLanguage: "Iso15897",
    whitelist: ["en", "de"],
    checkWhitelist: true,
    caches: ["localStorage", "cookie"],
  },
  react: {
    useSuspense: false,
  },
  returnEmptyString: false,
};

const i18nInstance = i18next.createInstance();

i18nInstance
  .use(XHR)
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    ...options,
    detection: {
      ...options.detection,
    },
  });

loadLocales(i18nInstance);

export default i18nInstance;
