import React from "react";
import { useComposerStackEntry } from "./composer-stack/use-composer-stack-entry";
import { getComposerRegistryEntry } from "./registry";
import type { ComposerSwitchProps } from "./props";

export type { ComposerSwitchProps } from "./props";

export function ComposerSwitch({ onClose }: ComposerSwitchProps) {
  const { entry } = useComposerStackEntry();
  const registryEntry = getComposerRegistryEntry(entry.type);
  const Composer = registryEntry?.component;

  if (!Composer) {
    return null;
  }

  return <Composer onClose={onClose} />;
}
