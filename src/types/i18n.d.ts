import "i18next";
import { namespace } from "../i18n";
import en from "../locales/en.json";

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: typeof namespace;
   // resources: (typeof any)["en"];
    returnNull: false;
    keySeparator: ".";
    nsSeparator: ":";
  }
}

declare module "react-i18next" {
  interface CustomTypeOptions {
    defaultNS: typeof namespace;
    //resources: (typeof resources)["en"];
    returnNull: false;
    keySeparator: ".";
    nsSeparator: ":";
  }
}

export type TranslationKeys = keyof typeof en;
