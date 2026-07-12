import React, { createContext, useContext, useState } from 'react';
import en from '../locales/en.json';
import de from '../locales/de.json';

// Helper type to get all possible paths to string values in an object
type PathsToStringProps<T> = T extends string
  ? []
  : {
      [K in Extract<keyof T, string>]: [K, ...PathsToStringProps<T[K]>]
    }[Extract<keyof T, string>];

// Convert paths array to dot notation string
type PathsToString<T> = T extends (infer U)[]
  ? U extends string
    ? U
    : U extends any[]
    ? U['length'] extends 1
      ? U[0]
      : `${U[0]}.${PathsToString<U extends [any, ...infer Rest] ? Rest : never>}`
    : never
  : never;

// Get all possible translation keys
type TranslationKey = PathsToString<PathsToStringProps<typeof en>>;

type LanguageContextType = {
  language: 'en' | 'de';
  setLanguage: (lang: 'en' | 'de') => void;
  t: (key: string) => string; // Changed from TranslationKey to string for flexibility
};

const translations = {
  en,
  de,
} as const;

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  t: () => '',
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<'en' | 'de'>('en');

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      if (value === undefined) return key;
      value = value[k];
    }
    
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslation = () => useContext(LanguageContext);

// Helper function to check if a key exists in translations
export const isValidTranslationKey = (key: string): boolean => {
  const keys = key.split('.');
  let value: any = en;
  
  for (const k of keys) {
    if (value === undefined || !(k in value)) return false;
    value = value[k];
  }
  
  return true;
}; 
