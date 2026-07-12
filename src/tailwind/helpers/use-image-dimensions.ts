export const getImageWidth = (size: string) => {
  switch (size) {
    case "thumbnail":
      return "20%";
    case "sm":
      return "25%";
    case "md":
      return "50%";
    case "lg":
      return "100%";
    case "xl":
      return "100vw";
    default:
      return "auto";
  }
};

export const getImageHeight = (size: string) => {
  switch (size) {
    case "thumbnail":
      return "20%";
    case "sm":
      return "25%";
    case "md":
      return "50%";
    case "lg":
      return "100%";
    case "xl":
      return "600px";
    default:
      return "auto";
  }
};
