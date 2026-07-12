import { containerWidths } from "tailwind/variables/containers";

export interface ContainerProps {
  children?: React.ReactNode;
  size?: keyof typeof containerWidths;
  style?: React.CSSProperties;
  className?: string;
  theme?: "light" | "dark";
}
