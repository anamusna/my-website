import React from "react";

export const useBackToTop = () => {
  const divRef = React.useRef<HTMLDivElement | null>(null);

  const goToTop = () => {
    if (divRef.current) {
      divRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return [divRef, goToTop] as const;
};
