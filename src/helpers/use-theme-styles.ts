type ThemeStyles = {
  isDarkTheme: boolean;
  background: string;
  backgroundColor: string;
  opacityBackground: string;
  textColor: string;
  horizontalColor: string;
  borderColor: string;
  contactBackground: string;
  backgroundVariant: string;
  serviceBackground: string;
  testimonialBackground: string;
  testimonialBorderColor: string;
  testimonBackground: string;
  labelColor: string;
};

export const useThemeStyles = (theme: string): ThemeStyles => {
  const isDarkTheme = theme === "dark";

  const darkThemeClasses = {
    background: "bg-dark",
    backgroundColor: "bg-black",
    opacityBackground: "opacity-black",
    textColor: "text-white",
    horizontalColor: "bg-dark",
    borderColor: "border-white",
    contactBackground: "opacity-black",
    backgroundVariant: "bg-black",
    serviceBackground: "bg-dark",
    testimonialBackground: "bg-black",
    testimonialBorderColor: "arrow-black",
    testimonBackground: "bg-white",
    labelColor: "text-gray",
  };

  const lightThemeClasses = {
    background: "bg-white",
    backgroundColor: "bg-white",
    opacityBackground: "opacity-white",
    textColor: "text-black",
    horizontalColor: "bg-gray-2",
    borderColor: "border-dark",
    contactBackground: "opacity-white",
    backgroundVariant: "bg-gradient-horizontal",
    serviceBackground: "bg-white",
    testimonialBackground: "bg-gray-2",
    testimonialBorderColor: "arrow-white",
    testimonBackground: "bg-gray-2",
    labelColor: "text-gray",
  };

  return {
    isDarkTheme,
    ...(isDarkTheme ? darkThemeClasses : lightThemeClasses),
  };
};
