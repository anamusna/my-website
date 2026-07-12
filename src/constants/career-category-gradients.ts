export type CareerCategory =
  | "startup"
  | "corporate"
  | "leadership"
  | "growth";

type GradientVariant = "primary" | "secondary" | "accent";

const CAREER_CATEGORY_GRADIENTS: Record<
  CareerCategory,
  Record<GradientVariant, string>
> = {
  startup: {
    primary:
      "from-emerald-500/12 via-teal-500/10 to-cyan-500/8 dark:from-emerald-400/18 dark:via-teal-400/15 dark:to-cyan-400/12",
    secondary:
      "from-emerald-400/8 to-teal-500/6 dark:from-emerald-300/12 dark:to-teal-400/10",
    accent:
      "from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400",
  },
  corporate: {
    primary:
      "from-blue-500/12 via-indigo-500/10 to-purple-500/8 dark:from-blue-400/18 dark:via-indigo-400/15 dark:to-purple-400/12",
    secondary:
      "from-blue-400/8 to-indigo-500/6 dark:from-blue-300/12 dark:to-indigo-400/10",
    accent:
      "from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400",
  },
  leadership: {
    primary:
      "from-amber-500/12 via-orange-500/10 to-red-500/8 dark:from-amber-400/18 dark:via-orange-400/15 dark:to-red-400/12",
    secondary:
      "from-amber-400/8 to-orange-500/6 dark:from-amber-300/12 dark:to-orange-400/10",
    accent:
      "from-amber-600 to-orange-600 dark:from-amber-400 dark:to-orange-400",
  },
  growth: {
    primary:
      "from-purple-500/12 via-pink-500/10 to-rose-500/8 dark:from-purple-400/18 dark:via-pink-400/15 dark:to-rose-400/12",
    secondary:
      "from-purple-400/8 to-pink-500/6 dark:from-purple-300/12 dark:to-pink-400/10",
    accent:
      "from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400",
  },
};

export function getCareerCategoryGradient(
  category: string = "corporate",
  variant: GradientVariant = "primary",
): string {
  const gradients =
    CAREER_CATEGORY_GRADIENTS[category as CareerCategory] ??
    CAREER_CATEGORY_GRADIENTS.corporate;

  return gradients[variant];
}
