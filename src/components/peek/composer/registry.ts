import type { ComponentType } from "react";
import type { PeekFractionWidth } from "../config";
import type { ComposerSwitchProps } from "./props";

export type ComposerRegistryEntry = {
  component: ComponentType<ComposerSwitchProps>;
  drawerWidth?: PeekFractionWidth;
  label?: string;
  replaceTopDrawerOnCreate?: boolean;
};

/** Register portfolio composers here — mirrors PVS `use-composer-switch` map. */
export const composerRegistry: Record<string, ComposerRegistryEntry> = {};

export function getComposerRegistryEntry(
  type: string,
): ComposerRegistryEntry | undefined {
  return composerRegistry[type];
}

export function registerComposer(
  type: string,
  entry: ComposerRegistryEntry,
): void {
  composerRegistry[type] = entry;
}
