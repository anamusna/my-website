import type { Theme } from "../context/EnvironmentContext";

/** Screen reader confirmation when theme changes (not conveyed by motion alone). */
export const THEME_ANNOUNCEMENTS: Record<Theme, string> = {
  light: "Light mode enabled",
  dark: "Dark mode enabled",
};
