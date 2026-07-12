import React from "react";
import { createPortal } from "react-dom";

type PeekPortalProps = {
  children: React.ReactNode;
  container?: HTMLElement | null;
};

function getPeekPortalRoot(): HTMLElement | null {
  if (typeof document === "undefined") return null;
  return document.getElementById("peek-portal");
}

export const PeekPortal: React.FC<PeekPortalProps> = ({
  children,
  container,
}) => {
  const target = container ?? getPeekPortalRoot();
  if (!target) return null;
  return createPortal(children, target);
};
