interface BreakPoints {
  [key: string]: number;
}

interface BreakPointUp {
  [key: string]: string;
}

export const breakpoints: BreakPoints = {
  xs: 480,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};

export const breakpointUp: BreakPointUp = Object.keys(breakpoints).reduce((accumulator, key) => {
  return { ...accumulator, [key]: `@media (min-width: ${breakpoints[key]}px)` };
}, {});

