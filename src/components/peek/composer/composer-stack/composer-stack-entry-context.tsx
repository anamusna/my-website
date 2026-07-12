import { createContext } from "react";
import type { ComposeItem } from "../config";

export type ComposerStackEntryContextValue = {
  entry: ComposeItem;
};

export const ComposerStackEntryContext =
  createContext<ComposerStackEntryContextValue | null>(null);
