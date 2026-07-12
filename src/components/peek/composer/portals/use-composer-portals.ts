import { useContext } from "react";
import { ComposerPortalsContext } from "./context";

export function useComposerPortals() {
  const context = useContext(ComposerPortalsContext);

  if (!context) {
    throw new Error("useComposerPortals must be used within ComposerPortals");
  }

  return context;
}
