import React from "react";
import { ImageProps } from "../../types/elements/image";

const Image: React.FC<ImageProps> = ({
  src,
  alt,
  fluid = false,
  theme = "light",
  align = "center",
  className = "",
  picture = false,
  size = "md",
}) => {
  const sizeClasses = {
    thumbnail: "w-1/4 h-auto",
    sm: "w-2/5 h-auto",
    md: "w-3/5 h-auto",
    lg: "w-full h-auto",
    xl: "w-screen h-[600px] object-cover",
  };

  const alignClasses = {
    left: "float-left",
    right: "float-right",
    center: "mx-auto",
    none: "",
  };

  const imageSizeClass = sizeClasses[size] || "w-auto h-auto";
  const imageAlignClass = alignClasses[align] || "";

  const imageClassName = `${
    fluid ? "w-full" : ""
  } block object-cover ${imageSizeClass} ${imageAlignClass} ${className}`;

  return picture ? (
    <picture>
      <source srcSet={src} type="image/webp" />
      <img src={src} alt={alt || "Image"} className={imageClassName} />
    </picture>
  ) : (
    <img src={src} alt={alt || "Image"} className={imageClassName} />
  );
};

export default Image;
