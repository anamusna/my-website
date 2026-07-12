import React, {
  useCallback,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";
import { ComposerPortalsContext } from "./context";
import type { ComposerPortalName } from "./types";

type Props = {
  children: ReactNode;
};

export function ComposerPortals({ children }: Props) {
  const [mounted, setMounted] = useState<ComposerPortalName[]>([]);
  const banner = useRef<HTMLDivElement>(null);
  const footer = useRef<HTMLDivElement>(null);
  const title = useRef<HTMLDivElement>(null);
  const toolbar = useRef<HTMLDivElement>(null);

  const portals = useMemo(
    () => ({
      banner,
      footer,
      title,
      toolbar,
    }),
    [],
  );

  const renderToPortal = useCallback(
    (name: ComposerPortalName, node: ReactNode) => {
      const portal = portals[name];
      const isMounted = mounted.includes(name);

      if (!isMounted || !portal.current) {
        return null;
      }

      return createPortal(node, portal.current);
    },
    [mounted, portals],
  );

  return (
    <ComposerPortalsContext.Provider
      value={{ portals, renderToPortal, setMounted }}
    >
      {children}
    </ComposerPortalsContext.Provider>
  );
}
