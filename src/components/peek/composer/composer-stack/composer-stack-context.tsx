import { createContext } from "react";
import { ComposeItem, ComposerStackState } from "../config";

export type ComposerStackContextValue = {
  stack: ComposerStackState;
  push: (item: ComposeItem) => void;
  pop: (count?: number) => void;
  replace: (nextStack: ComposerStackState) => void;
  clear: () => void;
};

export const ComposerStackContext = createContext<ComposerStackContextValue>({
  stack: [],
  push: () => undefined,
  pop: () => undefined,
  replace: () => undefined,
  clear: () => undefined,
});
