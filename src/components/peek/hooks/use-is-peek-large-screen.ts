import { useEffect, useState } from "react";
import { PEEK_LARGE_SCREEN_MIN_PX } from "../config";

export function useIsPeekLargeScreen(): boolean {
  const query = `(min-width: ${PEEK_LARGE_SCREEN_MIN_PX}px)`;
  const [isLargeScreen, setIsLargeScreen] = useState(() => {
    if (typeof window === "undefined") return true;
    return window.matchMedia(query).matches;
  });

  useEffect(() => {
    const media = window.matchMedia(query);
    const onChange = (event: MediaQueryListEvent) => {
      setIsLargeScreen(event.matches);
    };

    setIsLargeScreen(media.matches);
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, [query]);

  return isLargeScreen;
}
