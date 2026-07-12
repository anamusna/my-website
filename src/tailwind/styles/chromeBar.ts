/**
 * Shared header/footer chrome on warm page background (#f6f2ee).
 * Visual tokens: index.css `.glass` and `--light-*` variables.
 */
export const CHROME_BAR_BASE =
  "backdrop-blur-xl transition-colors duration-500 ease-out";

/** Scrolled header + footer dock */
export const CHROME_BAR_GLASS = [
  CHROME_BAR_BASE,
  "glass ring-1 ring-light-border/70 dark:ring-dark-border/60 shadow-lg",
].join(" ");

/** Header at top of page — blends into light-background */
export const CHROME_BAR_TOP_FADE = [
  CHROME_BAR_BASE,
  "border-b border-light-border/25 dark:border-dark-border/30",
  "bg-gradient-to-b from-light-background/95 via-light-background/60 to-transparent",
  "dark:from-gray-900/95 dark:via-gray-900/55 dark:to-transparent",
].join(" ");

export const CHROME_BAR_BORDER_TOP =
  "border-t border-light-border/50 dark:border-dark-border/40";

export const CHROME_BAR_BORDER_BOTTOM =
  "border-b border-light-border/50 dark:border-dark-border/40";

/** Nav / chip on chrome bars */
export const CHROME_CHIP = [
  "border backdrop-blur-sm shadow-sm",
  "bg-light-elevated/90 dark:bg-dark-surface/80",
  "border-light-border/55 dark:border-dark-border/45",
].join(" ");

export const CHROME_CHIP_ACTIVE = [
  CHROME_CHIP,
  "text-indigo-700 dark:text-indigo-300",
  "bg-orange-50/80 dark:bg-indigo-400/20",
  "border-orange-200/60 dark:border-indigo-400/35",
].join(" ");

export const CHROME_CHIP_HOVER = [
  "hover:text-orange-700 dark:hover:text-indigo-400",
  "hover:bg-light-elevated dark:hover:bg-dark-surface",
  "hover:border-orange-300/50 dark:hover:border-indigo-400/30",
].join(" ");

export const CHROME_SHIMMER =
  "bg-light-border/60 dark:bg-dark-border/50";

export const CHROME_ORB_WARM_A =
  "bg-gradient-to-br from-orange-300/14 via-amber-200/10 to-transparent dark:from-orange-500/12 dark:via-amber-500/8";

export const CHROME_ORB_WARM_B =
  "bg-gradient-to-tr from-rose-300/12 via-orange-200/10 to-transparent dark:from-rose-500/12 dark:via-orange-400/8";
