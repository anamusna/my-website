import * as i18next from "i18next";
import "intl-pluralrules";
import { initReactI18next } from "react-i18next";
import de from "./locales/de.json";
import en from "./locales/en.json";

const namespace = "ansumana";

const loadLocales = (i18nInstance: i18next.i18n) => {
  i18nInstance.addResourceBundle("en", namespace, en);
  i18nInstance.addResourceBundle("de", namespace, de);
};

const options: i18next.InitOptions = {
  lng: "en",
  ns: namespace,
  defaultNS: namespace,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  detection: {
    order: ["querystring", "navigator"],
    lookupQuerystring: "lng",
  },
  react: {
    useSuspense: false,
  },
  returnEmptyString: false,
};

const i18nInstance = i18next.createInstance();

i18nInstance.use(initReactI18next).init(options);

loadLocales(i18nInstance);

export default i18nInstance;
