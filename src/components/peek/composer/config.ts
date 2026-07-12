import type { PeekFractionWidth } from "../config";

export type ComposerIntent = "create" | "edit" | "followup" | "view";

export type ComposeItem<T = unknown> = {
  type: string;
  intent: ComposerIntent;
  as?: "drawer" | "dialog";
  drawerWidth?: PeekFractionWidth;
  data?: T;
  entryId?: string;
};

export type ComposerStackState = ComposeItem[];

export function isComposerIntent(value: string): value is ComposerIntent {
  return ["create", "edit", "followup", "view"].includes(value);
}
