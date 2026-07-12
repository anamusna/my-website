import { useContext } from "react";
import { ComposerStackContext } from "./composer-stack-context";

export function useComposerStack() {
  return useContext(ComposerStackContext);
}
