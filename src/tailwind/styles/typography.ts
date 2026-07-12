import { fontSizes, lineHeights } from "../variables/scales"

export const fontSizeMap: { [key in "sm" | "md" | "lg"]: { [size: string]: string } } =
{
  sm: {
    h1: `${fontSizes["3xl"]}rem`,
    h2: `${fontSizes["2xl"]}rem`,
    h3: `${fontSizes["xl"]}rem`,
    h4: `${fontSizes["lg"]}rem`,
    h5: `${fontSizes["md"]}rem`,
    h6: `${fontSizes["sm"]}rem`,
    body: `${fontSizes["sm"]}rem`,
    label: `${fontSizes["xs"]}rem`,
    small: `${fontSizes["2xs"]}rem`,
  },
  md: {
    h1: `${fontSizes["4xl"]}rem`,
    h2: `${fontSizes["3xl"]}rem`,
    h3: `${fontSizes["2xl"]}rem`,
    h4: `${fontSizes["xl"]}rem`,
    h5: `${fontSizes["lg"]}rem`,
    h6: `${fontSizes["md"]}rem`,
    body: `${fontSizes["md"]}rem`,
    label: `${fontSizes["sm"]}rem`,
    small: `${fontSizes["xs"]}rem`,
  },
  lg: {
    h1: `${fontSizes["5xl"]}rem`,
    h2: `${fontSizes["4xl"]}rem`,
    h3: `${fontSizes["3xl"]}rem`,
    h4: `${fontSizes["2xl"]}rem`,
    h5: `${fontSizes["xl"]}rem`,
    h6: `${fontSizes["lg"]}rem`,
    body: `${fontSizes["lg"]}rem`,
    label: `${fontSizes["md"]}rem`,
    small: `${fontSizes["sm"]}rem`,
  },
};
