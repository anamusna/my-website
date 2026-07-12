import { useContext } from "react";
import { ComposerStackEntryContext } from "./composer-stack-entry-context";

export function useComposerStackEntry() {
  const context = useContext(ComposerStackEntryContext);

  if (!context) {
    throw new Error(
      "useComposerStackEntry must be used within ComposerStackEntry",
    );
  }

  return context;
}
