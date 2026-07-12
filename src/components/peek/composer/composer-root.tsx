import React from "react";
import { ComposerDrawer } from "./composer-drawer";
import { ComposerStackEntry } from "./composer-stack/composer-stack-entry";
import { useComposerStack } from "./composer-stack/use-composer-stack";

/** Renders the active composer drawer — mirrors PVS `TimelineComposer` (top of stack). */
export function ComposerRoot() {
  const { stack } = useComposerStack();
  const topIndex = stack.length - 1;
  const entry = stack[topIndex];

  if (!entry || entry.as === "dialog") {
    return null;
  }

  return (
    <ComposerStackEntry index={topIndex} key={`${entry.type}-${topIndex}`}>
      <ComposerDrawer />
    </ComposerStackEntry>
  );
}
