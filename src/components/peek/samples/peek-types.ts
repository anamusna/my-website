import type { PeekFractionWidth } from "../config";

export type PeekSampleType = {
  type: string;
  label: string;
  drawerWidth: PeekFractionWidth;
  description: string;
};

export const PEEK_SAMPLE_TYPES: readonly PeekSampleType[] = [
  {
    type: "sample-peek-quarter",
    label: "Quarter peek",
    drawerWidth: "quarter",
    description: "Quarter-width drawer.",
  },
  {
    type: "sample-peek-third",
    label: "Third peek",
    drawerWidth: "third",
    description: "One-third width drawer.",
  },
  {
    type: "sample-peek-half",
    label: "Half peek",
    drawerWidth: "half",
    description: "One-half width drawer.",
  },
] as const;

export type PeekSampleTypeId = (typeof PEEK_SAMPLE_TYPES)[number]["type"];
