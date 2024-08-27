import React, { type Dispatch, type SetStateAction } from 'react';

export const isThemeDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

const defaultTheme = isThemeDark ? 'dark' : 'light';

export const initialThemeState = {
  theme: defaultTheme,
  setTheme: (() => null) as Dispatch<SetStateAction<string>>,
};

export const ThemeContext = React.createContext(initialThemeState);
