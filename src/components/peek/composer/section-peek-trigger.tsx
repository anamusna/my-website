import { useComposer } from "./use-composer";
import type { ComposeItem } from "./config";
import React, { type ReactNode } from "react";

export type SectionPeekData = {
  sectionId: string;
  sectionLabel: string;
};

type SectionPeekTriggerProps = {
  sectionId: string;
  sectionLabel: string;
  composerType?: string;
  className?: string;
  children?: ReactNode;
  data?: Record<string, unknown>;
};

export function SectionPeekTrigger({
  sectionId,
  sectionLabel,
  composerType = "sample-peek-section",
  className,
  children,
  data,
}: SectionPeekTriggerProps) {
  const { composer } = useComposer();

  const handleOpen = () => {
    const entry: Omit<ComposeItem<SectionPeekData>, "intent"> = {
      type: composerType,
      as: "drawer",
      data: {
        sectionId,
        sectionLabel,
        ...data,
      },
    };

    composer.create(entry);
  };

  return (
    <button
      type="button"
      data-cy={`open-section-peek-${sectionId}`}
      onClick={handleOpen}
      className={
        className ??
        "rounded-full border border-indigo-200 bg-white/90 px-4 py-2 text-sm font-medium text-indigo-700 shadow-sm transition hover:border-indigo-300 hover:bg-indigo-50 dark:border-indigo-400/30 dark:bg-gray-900/80 dark:text-indigo-300 dark:hover:bg-indigo-400/10"
      }
    >
      {children ?? `Open ${sectionLabel} peek`}
    </button>
  );
}
