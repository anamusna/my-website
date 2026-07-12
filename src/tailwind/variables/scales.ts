type ScaleSize = {
  name: string;
  value: number;
};

const phi = (1 + Math.sqrt(5)) / 2;

const generateScales = (
  proportion: number,
  start: number,
  sizes: ScaleSize[]
): any => {
  const values: any = {};
  for (let i = 0; i < sizes.length; i++) {
    const value = start * Math.pow(proportion, sizes[i].value);
    const multiplier = Math.pow(10, 4);
    const truncatedValue = Math.floor(value * multiplier) / multiplier;
    values[sizes[i].name] = `${truncatedValue}rem`;
  }
  return values;
};

const sizes: ScaleSize[] = [
  { name: "2xs", value: -3 },
  { name: "xs", value: -2 },
  { name: "sm", value: -1 },
  { name: "md", value: 0 },
  { name: "lg", value: 1 },
  { name: "xl", value: 2 },
  { name: "2xl", value: 3 },
  { name: "3xl", value: 4 },
  { name: "4xl", value: 5 },
  { name: "5xl", value: 6 },
];

const spacers = generateScales(phi, 1, sizes);
const fontSizes = generateScales(1.25, 1, sizes);
const lineHeights = {
  md: "1",
  lg: "1.2",
  xl: "1.4",
};

export { spacers, fontSizes, lineHeights };
