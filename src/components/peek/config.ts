export const PEEK_DRAWER_WIDTH = {
  quarter: "25%",
  third: "33.333%",
  half: "50%",
  full: "100%",
} as const;

export type PeekDrawerWidth =
  (typeof PEEK_DRAWER_WIDTH)[keyof typeof PEEK_DRAWER_WIDTH];

export type PeekFractionWidth = "quarter" | "third" | "half";

const PEEK_FRACTION_WIDTH_VALUES = new Set<PeekDrawerWidth>([
  PEEK_DRAWER_WIDTH.quarter,
  PEEK_DRAWER_WIDTH.third,
  PEEK_DRAWER_WIDTH.half,
]);

export function isPeekFractionWidth(
  width: PeekDrawerWidth,
): width is
  | typeof PEEK_DRAWER_WIDTH.quarter
  | typeof PEEK_DRAWER_WIDTH.third
  | typeof PEEK_DRAWER_WIDTH.half {
  return PEEK_FRACTION_WIDTH_VALUES.has(width);
}

function isPeekWidthKey(
  width: PeekFractionWidth | PeekDrawerWidth,
): width is PeekFractionWidth {
  return width === "quarter" || width === "third" || width === "half";
}

export function toPeekDrawerWidth(
  width: PeekFractionWidth | PeekDrawerWidth,
): PeekDrawerWidth {
  if (isPeekWidthKey(width)) {
    return PEEK_DRAWER_WIDTH[width];
  }

  return width;
}

export function resolvePeekAnimateWidth(
  width: PeekDrawerWidth,
  isLargeScreen: boolean,
): PeekDrawerWidth {
  if (!isLargeScreen && isPeekFractionWidth(width)) {
    return PEEK_DRAWER_WIDTH.full;
  }

  return width;
}

export const PEEK_LARGE_SCREEN_MIN_PX = 1024;

export { SECTION_VARIANTS as PEEK_SECTION_VARIANTS } from "../../constants/section-motion";
