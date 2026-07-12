import clsx from "clsx";
import React from "react";

export type SectionDividerTone =
  | "amber"
  | "blue"
  | "cyan"
  | "emerald"
  | "green"
  | "yellow"
  | "violet"
  | "purple"
  | "indigo"
  | "neutral"
  | "pink"
  | "teal";

export type SectionDividerPlacement = "bottom" | "top" | "static";
export type SectionDividerWidth = "container" | "full";

interface SectionDividerProps {
  className?: string;
  placement?: SectionDividerPlacement;
  tone?: SectionDividerTone;
  width?: SectionDividerWidth;
}

const dividerToneClasses: Record<SectionDividerTone, string> = {
  amber: "via-amber-500/30 dark:via-amber-300/40",
  blue: "via-blue-500/30 dark:via-blue-300/40",
  cyan: "via-cyan-500/30 dark:via-cyan-300/40",
  yellow: "via-yellow-500/30 dark:via-yellow-300/40",
  emerald: "via-emerald-500/30 dark:via-emerald-300/40",
  green: "via-green-500/30 dark:via-green-300/40",
  violet: "via-violet-500/30 dark:via-violet-300/40",
  purple: "via-purple-500/25 dark:via-purple-300/35",
  indigo: "via-indigo-500/30 dark:via-indigo-300/40",
  neutral: "via-gray-300/80 dark:via-gray-600/80",
  pink: "via-pink-500/25 dark:via-pink-300/35",
  teal: "via-teal-500/30 dark:via-teal-300/40",
};

const markerToneClasses: Record<SectionDividerTone, string> = {
  amber: "bg-amber-500/60 shadow-amber-500/25 dark:bg-amber-300/70",
  blue: "bg-blue-500/60 shadow-blue-500/25 dark:bg-blue-300/70",
  cyan: "bg-cyan-500/60 shadow-cyan-500/25 dark:bg-cyan-300/70",
  yellow: "bg-yellow-500/60 shadow-yellow-500/25 dark:bg-yellow-300/70",
  emerald: "bg-emerald-500/60 shadow-emerald-500/25 dark:bg-emerald-300/70",
  green: "bg-green-500/60 shadow-green-500/25 dark:bg-green-300/70",
  violet: "bg-violet-500/60 shadow-violet-500/25 dark:bg-violet-300/70",
  purple: "bg-purple-500/55 shadow-purple-500/25 dark:bg-purple-300/65",
  indigo: "bg-indigo-500/60 shadow-indigo-500/25 dark:bg-indigo-300/70",
  neutral: "bg-gray-400/70 shadow-gray-400/20 dark:bg-gray-500/80",
  pink: "bg-pink-500/55 shadow-pink-500/25 dark:bg-pink-300/65",
  teal: "bg-teal-500/60 shadow-teal-500/25 dark:bg-teal-300/70",
};

const glowToneClasses: Record<SectionDividerTone, string> = {
  amber: "bg-amber-500/10 dark:bg-amber-300/10",
  blue: "bg-blue-500/10 dark:bg-blue-300/10",
  cyan: "bg-cyan-500/10 dark:bg-cyan-300/10",
  yellow: "bg-yellow-500/10 dark:bg-yellow-300/10",
  emerald: "bg-emerald-500/10 dark:bg-emerald-300/10",
  green: "bg-green-500/10 dark:bg-green-300/10",
  violet: "bg-violet-500/10 dark:bg-violet-300/10",
  purple: "bg-purple-500/8 dark:bg-purple-300/10",
  indigo: "bg-indigo-500/10 dark:bg-indigo-300/10",
  neutral: "bg-gray-400/10 dark:bg-gray-500/10",
  pink: "bg-pink-500/8 dark:bg-pink-300/10",
  teal: "bg-teal-500/10 dark:bg-teal-300/10",
};

const placementClasses: Record<SectionDividerPlacement, string> = {
  bottom: "absolute bottom-0 left-0 right-0",
  top: "absolute left-0 right-0 top-0",
  static: "relative",
};

const widthClasses: Record<SectionDividerWidth, string> = {
  container: "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8",
  full: "w-full",
};

const SectionDivider: React.FC<SectionDividerProps> = React.memo(
  ({ className, placement = "bottom", tone = "blue", width = "container" }) => {
    return (
      <div
        aria-hidden="true"
        className={clsx(
          "pointer-events-none",
          placementClasses[placement],
          className,
        )}
      >
        <div className={clsx("relative mb-1", widthClasses[width])}>
          <div
            className={clsx(
              "h-[4px] w-full bg-gradient-to-r from-transparent to-transparent",
              dividerToneClasses[tone],
            )}
          />
          <div
            className={clsx(
              "absolute left-1/2 top-1/2 h-6 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full blur-xl",
              glowToneClasses[tone],
            )}
          />
          <div
            className={clsx(
              "absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full shadow-sm",
              markerToneClasses[tone],
            )}
          />
        </div>
      </div>
    );
  },
);

SectionDivider.displayName = "SectionDivider";

export default SectionDivider;
