import clsx from "clsx";
import React, { ReactNode } from "react";
import { useEnvironmentSettings } from "../../../context/EnvironmentContext";
import {
  fontSizeMap,
  leadingMap,
  TypographyProps,
} from "../../../tailwind/types/elements/typography";

export const Typography: React.FC<TypographyProps> = ({
  as: Tag = "p",
  size = "md",
  weight = "normal",
  className,
  style,
  children,
  leading,
  ...props
}) => {
  const { fontSize } = useEnvironmentSettings();

  const weightClasses: any = {
    normal: "font-normal",
    bold: "font-bold",
    medium: "font-medium",
    light: "font-light",
  };

  const dynamicFontSizeClass =
    fontSizeMap[fontSize || size]?.[Tag as string] || "";

  return (
    <Tag
      className={clsx(
        dynamicFontSizeClass,
        weightClasses[weight],
        leadingMap[leading as string],
        className
      )}
      style={style}
      {...props}
    >
      {children}
    </Tag>
  );
};

const createTypographyElement =
  (element: keyof JSX.IntrinsicElements): React.FC<TypographyProps> =>
  ({ size, weight, className, style, children, ...props }) =>
    (
      <Typography
        as={element}
        size={size}
        weight={weight}
        className={className}
        style={style}
        {...props}
      >
        {children}
      </Typography>
    );

/* export const H1 = createTypographyElement("h1");
export const H2 = createTypographyElement("h2");
export const H3 = createTypographyElement("h3");
export const H4 = createTypographyElement("h4");
export const H5 = createTypographyElement("h5"); */
export const Label = createTypographyElement("label");
export const P = createTypographyElement("p");

export const Link: React.FC<{
  href: string;
  underline?: boolean;
  children: ReactNode;
  color?: string;
  className?: string;
  onClick?: () => void;
  size?: string;
  target?: string;
}> = ({
  href,
  children,
  className,
  color,
  underline,
  onClick,
  size = "sm",
  target,
  ...props
}) => (
  <a
    href={href}
    onClick={onClick}
    className={clsx(
      `text-blue-600 hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-600`,
      underline && "text-underline underline",
      fontSizeMap[size]?.a || "",
      color,
      className
    )}
    rel={`${target === "_blank" ? "noopener noreferrer" : ""}`}
    target={target}
  >
    {children}
  </a>
);

export const Small: React.FC<{
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  fontSize?: TypographyProps["size"];
}> = ({ children, className, onClick, fontSize = "xs", ...props }) => (
  <small
    className={clsx(
      `block text-sm font-normal`,
      fontSizeMap[fontSize]?.small || "",
      className
    )}
    onClick={onClick}
  >
    {children}
  </small>
);
