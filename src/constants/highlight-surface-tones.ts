/**
 * Shared tonal surfaces for `career-highlight-*` backgrounds in tailwind.config.js.
 * Keep class strings literal so Tailwind JIT includes them.
 */

export const HIGHLIGHT_SURFACE_BACKGROUNDS = [
  "bg-career-highlight-0 dark:bg-career-highlight-0-dark",
  "bg-career-highlight-1 dark:bg-career-highlight-1-dark",
  "bg-career-highlight-2 dark:bg-career-highlight-2-dark",
  "bg-career-highlight-3 dark:bg-career-highlight-3-dark",
  "bg-career-highlight-4 dark:bg-career-highlight-4-dark",
  "bg-career-highlight-5 dark:bg-career-highlight-5-dark",
] as const;

export const HIGHLIGHT_SURFACE_BORDERS = [
  "border-royal-200/45 dark:border-royal-700/35",
  "border-navy-200/50 dark:border-navy-700/35",
  "border-violet-200/50 dark:border-violet-600/35",
  "border-cyan-200/45 dark:border-cyan-800/40",
  "border-orange-200/55 dark:border-orange-800/45",
  "border-grey-light-200/90 dark:border-grey-dark-300/45",
] as const;

export const HIGHLIGHT_SURFACE_HOVER_BORDERS = [
  "hover:border-royal-400/55 dark:hover:border-royal-500/45",
  "hover:border-navy-400/55 dark:hover:border-navy-500/45",
  "hover:border-violet-400/55 dark:hover:border-violet-500/45",
  "hover:border-cyan-400/50 dark:hover:border-cyan-500/45",
  "hover:border-orange-400/55 dark:hover:border-orange-500/45",
  "hover:border-grey-light-400/70 dark:hover:border-grey-dark-400/55",
] as const;

export const HIGHLIGHT_TOP_ACCENT = [
  "from-royal-500 via-royal-400 to-indigo-500",
  "from-navy-500 via-blue-500 to-cyan-600",
  "from-violet-600 via-purple-500 to-fuchsia-500",
  "from-cyan-600 via-teal-500 to-emerald-500",
  "from-orange-500 via-amber-500 to-orange-600",
  "from-slate-500 via-grey-light-500 to-slate-600",
] as const;

export const HIGHLIGHT_ICON_GLOW = [
  "from-royal-500/20 via-royal-400/12 to-indigo-500/10",
  "from-navy-500/20 via-blue-500/12 to-cyan-500/10",
  "from-violet-500/20 via-purple-500/12 to-fuchsia-500/10",
  "from-cyan-500/20 via-teal-500/12 to-emerald-500/10",
  "from-orange-500/20 via-amber-500/12 to-orange-600/10",
  "from-slate-500/15 via-grey-light-500/10 to-slate-600/10",
] as const;

export const HIGHLIGHT_DECOR_TR = [
  "from-royal-500/12 via-indigo-500/8 to-transparent",
  "from-navy-500/12 via-cyan-500/8 to-transparent",
  "from-violet-500/12 via-fuchsia-500/8 to-transparent",
  "from-cyan-500/12 via-teal-500/8 to-transparent",
  "from-orange-500/12 via-amber-500/8 to-transparent",
  "from-slate-500/10 via-grey-light-500/8 to-transparent",
] as const;

export const HIGHLIGHT_DECOR_BL = [
  "from-violet-500/10 via-purple-500/8 to-transparent",
  "from-cyan-500/10 via-navy-500/8 to-transparent",
  "from-fuchsia-500/10 via-violet-500/8 to-transparent",
  "from-emerald-500/10 via-cyan-500/8 to-transparent",
  "from-amber-500/10 via-orange-500/8 to-transparent",
  "from-grey-light-500/10 via-slate-500/8 to-transparent",
] as const;

/** Category / card title hover */
export const HIGHLIGHT_TITLE_HOVER = [
  "group-hover:text-royal-700 dark:group-hover:text-royal-400",
  "group-hover:text-navy-700 dark:group-hover:text-navy-400",
  "group-hover:text-violet-700 dark:group-hover:text-violet-400",
  "group-hover:text-cyan-700 dark:group-hover:text-cyan-400",
  "group-hover:text-orange-700 dark:group-hover:text-orange-400",
  "group-hover:text-slate-700 dark:group-hover:text-slate-300",
] as const;

/** Tech chip label hover */
export const HIGHLIGHT_CHIP_LABEL_HOVER = [
  "group-hover/tech:text-royal-700 dark:group-hover/tech:text-royal-400",
  "group-hover/tech:text-navy-700 dark:group-hover/tech:text-navy-400",
  "group-hover/tech:text-violet-700 dark:group-hover/tech:text-violet-400",
  "group-hover/tech:text-cyan-700 dark:group-hover/tech:text-cyan-400",
  "group-hover/tech:text-orange-700 dark:group-hover/tech:text-orange-400",
  "group-hover/tech:text-slate-700 dark:group-hover/tech:text-slate-300",
] as const;

/** Tech chip border hover */
export const HIGHLIGHT_CHIP_BORDER_HOVER = [
  "hover:border-royal-400/35 dark:hover:border-royal-500/30",
  "hover:border-navy-400/35 dark:hover:border-navy-500/30",
  "hover:border-violet-400/35 dark:hover:border-violet-500/30",
  "hover:border-cyan-400/35 dark:hover:border-cyan-500/30",
  "hover:border-orange-400/35 dark:hover:border-orange-500/30",
  "hover:border-slate-400/40 dark:hover:border-slate-500/35",
] as const;

export const HIGHLIGHT_TONE_COUNT = HIGHLIGHT_SURFACE_BACKGROUNDS.length;

export function getHighlightToneSlot(
  toneIndex: number | undefined,
): number | null {
  if (toneIndex === undefined) return null;
  const n = HIGHLIGHT_TONE_COUNT;
  return ((toneIndex % n) + n) % n;
}
