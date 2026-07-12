import { createContext } from "react";
import type { ReactNode, RefObject } from "react";
import type { ComposerPortalName } from "./types";

export type ComposerPortalsContextValue = {
  portals: Record<ComposerPortalName, RefObject<HTMLDivElement>>;
  renderToPortal: (name: ComposerPortalName, node: ReactNode) => ReactNode;
  setMounted: React.Dispatch<React.SetStateAction<ComposerPortalName[]>>;
};

export const ComposerPortalsContext =
  createContext<ComposerPortalsContextValue | null>(null);
