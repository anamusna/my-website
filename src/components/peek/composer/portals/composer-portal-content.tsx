import React, { type ReactNode } from "react";
import { useComposerPortals } from "./use-composer-portals";
import type { ComposerPortalName } from "./types";

type Props = {
  name: ComposerPortalName;
  children: ReactNode;
};

/** Portals content into drawer chrome slots from nested composer components. */
export function ComposerPortalContent({ name, children }: Props) {
  const { renderToPortal } = useComposerPortals();
  return <>{renderToPortal(name, children)}</>;
}
