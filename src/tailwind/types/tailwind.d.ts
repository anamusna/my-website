import "tailwindcss/tailwind-config";
import { FontSize } from "./tailwind/types/fontSize";

declare module "tailwindcss/tailwind-config" {
  export interface Theme {
    colors: {
      light: {
        primary: string;
        secondary: string;
        text: string;
        background: string;
      };
      dark: {
        primary: string;
        secondary: string;
        text: string;
        background: string;
      };
      royal: {
        primary: string;
        dark: string;
      };
      navy: {
        primary: string;
        hover: string;
      };
      red: {
        primary: string;
      };
      grey: {
        primary: string;
        dividers: string;
        hover: string;
      };
      bg: {
        dark: string;
        light: string;
      };
      black: string;
      white: string;
    };
    fontSize: {
      '2xs': string;
      xs: string;
      sm: string;
      base: string;
      md: string;
      lg: string;
      xl: string;
      '2xl': string;
      '3xl': string;
      '4xl': string;
      '5xl': string;
    };
  }
}

