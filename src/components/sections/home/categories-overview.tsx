import { AnimatePresence, motion } from "motion/react";
import React, { useState } from "react";
import Tooltip from "tailwind/components/elements/Tooltip";
import { TechnologyIcons } from "components/icons/technology-icons";
import {
  getHighlightToneSlot,
  HIGHLIGHT_CHIP_BORDER_HOVER,
  HIGHLIGHT_CHIP_LABEL_HOVER,
  HIGHLIGHT_DECOR_BL,
  HIGHLIGHT_DECOR_TR,
  HIGHLIGHT_SURFACE_BORDERS,
  HIGHLIGHT_SURFACE_HOVER_BORDERS,
  HIGHLIGHT_TITLE_HOVER,
  HIGHLIGHT_TOP_ACCENT,
} from "constants/highlight-surface-tones";
import {
  SURFACE_CARD_BASE,
  SURFACE_CARD_INTERACTIVE,
} from "tailwind/styles/surfaceCard";

const spring = {
  type: "spring" as const,
  stiffness: 340,
  damping: 28,
  mass: 0.7,
};

interface TechItem {
  name: string;
  icon: string;
  description?: string;
}

interface Category {
  title: string;
  description: string;
  items: TechItem[];
}

interface CategoriesOverviewProps {
  categories: Category[];
  className?: string;
  gridCols?: string;
  showIcons?: boolean;
  showTooltips?: boolean;
  variant?: "default" | "compact" | "premium";
  accentColor?: "blue" | "purple" | "green" | "orange" | "pink" | "teal";
  /** When true, each category card uses rotating `career-highlight-*` surfaces from tailwind.config.js. */
  useHighlightSurfaces?: boolean;
  animationDelay?: number;
  staggerDelay?: number;
}

const CategoriesOverview: React.FC<CategoriesOverviewProps> = ({
  categories,
  className = "",
  gridCols = "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  showIcons = true,
  showTooltips = true,
  variant = "default",
  accentColor = "blue",
  useHighlightSurfaces = false,
  animationDelay = 160,
  staggerDelay = 100,
}) => {
  // Accent color mapping
  const getAccentColors = () => {
    switch (accentColor) {
      case "purple":
        return {
          gradient:
            "from-purple-400 via-indigo-500 to-purple-600 dark:from-purple-300 dark:via-indigo-400 dark:to-purple-400",
          hover: "group-hover:text-purple-600 dark:group-hover:text-purple-400",
          border: "hover:border-purple-400/20 dark:hover:border-purple-300/20",
          itemHover:
            "group-hover/tech:text-purple-600 dark:group-hover/tech:text-purple-400",
          itemBorder:
            "hover:border-purple-400/20 dark:hover:border-purple-300/20",
          decorative: "from-purple-400/6 to-transparent dark:from-purple-300/6",
          decorative2:
            "from-indigo-500/4 to-transparent dark:from-indigo-400/4",
        };
      case "green":
        return {
          gradient:
            "from-green-400 via-emerald-500 to-green-600 dark:from-green-300 dark:via-emerald-400 dark:to-green-400",
          hover: "group-hover:text-green-600 dark:group-hover:text-green-400",
          border: "hover:border-green-400/20 dark:hover:border-green-300/20",
          itemHover:
            "group-hover/tech:text-green-600 dark:group-hover/tech:text-green-400",
          itemBorder:
            "hover:border-green-400/20 dark:hover:border-green-300/20",
          decorative: "from-green-400/6 to-transparent dark:from-green-300/6",
          decorative2:
            "from-emerald-500/4 to-transparent dark:from-emerald-400/4",
        };
      case "orange":
        return {
          gradient:
            "from-orange-400 via-amber-500 to-orange-600 dark:from-orange-300 dark:via-amber-400 dark:to-orange-400",
          hover: "group-hover:text-orange-600 dark:group-hover:text-orange-400",
          border: "hover:border-orange-400/20 dark:hover:border-orange-300/20",
          itemHover:
            "group-hover/tech:text-orange-600 dark:group-hover/tech:text-orange-400",
          itemBorder:
            "hover:border-orange-400/20 dark:hover:border-orange-300/20",
          decorative: "from-orange-400/6 to-transparent dark:from-orange-300/6",
          decorative2: "from-amber-500/4 to-transparent dark:from-amber-400/4",
        };
      case "pink":
        return {
          gradient:
            "from-pink-400 via-rose-500 to-pink-600 dark:from-pink-300 dark:via-rose-400 dark:to-pink-400",
          hover: "group-hover:text-pink-600 dark:group-hover:text-pink-400",
          border: "hover:border-pink-400/20 dark:hover:border-pink-300/20",
          itemHover:
            "group-hover/tech:text-pink-600 dark:group-hover/tech:text-pink-400",
          itemBorder: "hover:border-pink-400/20 dark:hover:border-pink-300/20",
          decorative: "from-pink-400/6 to-transparent dark:from-pink-300/6",
          decorative2: "from-rose-500/4 to-transparent dark:from-rose-400/4",
        };
      case "teal":
        return {
          gradient:
            "from-teal-400 via-cyan-500 to-teal-600 dark:from-teal-300 dark:via-cyan-400 dark:to-teal-400",
          hover: "group-hover:text-teal-600 dark:group-hover:text-teal-400",
          border: "hover:border-teal-400/20 dark:hover:border-teal-300/20",
          itemHover:
            "group-hover/tech:text-teal-600 dark:group-hover/tech:text-teal-400",
          itemBorder: "hover:border-teal-400/20 dark:hover:border-teal-300/20",
          decorative: "from-teal-400/6 to-transparent dark:from-teal-300/6",
          decorative2: "from-cyan-500/4 to-transparent dark:from-cyan-400/4",
        };
      default: // blue
        return {
          gradient:
            "from-blue-400 via-indigo-500 to-purple-600 dark:from-blue-300 dark:via-indigo-400 dark:to-purple-400",
          hover: "group-hover:text-blue-600 dark:group-hover:text-blue-400",
          border: "hover:border-blue-400/20 dark:hover:border-blue-300/20",
          itemHover:
            "group-hover/tech:text-blue-600 dark:group-hover/tech:text-blue-400",
          itemBorder: "hover:border-blue-400/20 dark:hover:border-blue-300/20",
          decorative: "from-blue-400/6 to-transparent dark:from-blue-300/6",
          decorative2:
            "from-indigo-500/4 to-transparent dark:from-indigo-400/4",
        };
    }
  };

  const accentColors = getAccentColors();

  // Variant-specific styling
  const getVariantStyles = () => {
    switch (variant) {
      case "compact":
        return {
          container: "mt-8 sm:mt-12",
          card: "rounded-xl sm:rounded-2xl",
          header: "px-4 sm:px-5 py-3 sm:py-4",
          content: "p-3 sm:p-4",
          gap: "gap-2 sm:gap-3",
          title: "text-base sm:text-lg",
          description: "text-sm",
          item: "px-2 py-1.5 text-sm",
          icon: "h-3 w-3",
        };
      case "premium":
        return {
          container: "mt-16 sm:mt-20",
          card: "rounded-3xl sm:rounded-[2rem]",
          header: "px-6 sm:px-8 py-5 sm:py-6",
          content: "p-5 sm:p-6",
          gap: "gap-4 sm:gap-5",
          title: "text-xl sm:text-2xl",
          description: "text-base",
          item: "px-4 py-3 text-sm",
          icon: "h-5 w-5",
        };
      default:
        return {
          container: "mt-12 sm:mt-16",
          card: "rounded-2xl sm:rounded-3xl",
          header: "px-5 sm:px-6 py-4 sm:py-5",
          content: "p-4 sm:p-5",
          gap: "gap-3 sm:gap-4",
          title: "text-lg sm:text-xl",
          description: "text-sm",
          item: "px-3 py-2 text-sm",
          icon: "h-4 w-4",
        };
    }
  };

  const variantStyles = getVariantStyles();

  const [openCategories, setOpenCategories] = useState<Record<number, boolean>>(
    {},
  );
  const toggleCategory = (index: number) =>
    setOpenCategories((prev) => ({ ...prev, [index]: !prev[index] }));
  const isCategoryOpen = (index: number) => Boolean(openCategories[index]);

  return (
    <div className={`${variantStyles.container} ${className}`}>
      <div className={`grid ${gridCols} gap-6 sm:gap-8`}>
        {categories.map((category, index) => {
          const toneSlot = useHighlightSurfaces
            ? getHighlightToneSlot(index)
            : null;

          const cardSurface =
            toneSlot === null
              ? `${SURFACE_CARD_INTERACTIVE} ${variantStyles.card} ${accentColors.border}`
              : [
                  SURFACE_CARD_INTERACTIVE,
                  variantStyles.card,
                  "bg-white dark:bg-dark-surface",
                  HIGHLIGHT_SURFACE_BORDERS[toneSlot],
                  HIGHLIGHT_SURFACE_HOVER_BORDERS[toneSlot],
                ].join(" ");

          const headerSurface =
            toneSlot === null
              ? `relative w-full text-left ${variantStyles.header} border-b border-white/4 dark:border-gray-700/8 bg-gradient-to-br from-white/2 to-transparent dark:from-gray-800/4 dark:to-transparent focus:outline-none`
              : `relative w-full text-left ${variantStyles.header} border-b border-black/[0.06] dark:border-white/[0.08] bg-gradient-to-br from-white/35 to-transparent dark:from-white/[0.06] dark:to-transparent focus:outline-none`;

          const topAccentGradient =
            toneSlot === null
              ? accentColors.gradient
              : HIGHLIGHT_TOP_ACCENT[toneSlot];

          const titleHover =
            toneSlot === null
              ? accentColors.hover
              : HIGHLIGHT_TITLE_HOVER[toneSlot];

          const chipBorderHover =
            toneSlot === null
              ? accentColors.itemBorder
              : HIGHLIGHT_CHIP_BORDER_HOVER[toneSlot];

          const chipLabelHover =
            toneSlot === null
              ? accentColors.itemHover
              : HIGHLIGHT_CHIP_LABEL_HOVER[toneSlot];

          const decorBr =
            toneSlot === null
              ? accentColors.decorative
              : HIGHLIGHT_DECOR_TR[toneSlot];
          const decorTl =
            toneSlot === null
              ? accentColors.decorative2
              : HIGHLIGHT_DECOR_BL[toneSlot];

          return (
            <motion.div
              key={category.title}
              className={cardSurface}
              whileHover={{ y: -4, scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              transition={spring}
            >
              {/* Category header — toggle trigger */}
              <button
                onClick={() => toggleCategory(index)}
                className={headerSurface}
              >
                <div
                  className={`absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r ${topAccentGradient} transition-transform duration-500 origin-left ${
                    isCategoryOpen(index)
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-50"
                  }`}
                />

                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3
                      className={`${variantStyles.title} font-bold text-heading ${titleHover} transition-colors duration-500 mb-1`}
                    >
                      {category.title}
                    </h3>
                    <p
                      className={`${variantStyles.description} text-body leading-relaxed`}
                    >
                      {category.description}
                    </p>
                  </div>
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 flex-shrink-0 mt-1 text-gray-500 dark:text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    animate={{ rotate: isCategoryOpen(index) ? 180 : 0 }}
                    transition={spring}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </motion.svg>
                </div>
              </button>

              {/* Technology grid */}
              <AnimatePresence initial={false}>
                {isCategoryOpen(index) && (
                  <motion.div
                    key="tech-grid"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={spring}
                  >
                    <div className={variantStyles.content}>
                      <div className={`flex flex-wrap ${variantStyles.gap}`}>
                        {category.items.map((item, itemIdx) => {
                          const IconComponent = showIcons
                            ? TechnologyIcons[item.icon]
                            : null;

                          const itemContent = (
                            <motion.div
                              className={`group/tech relative flex items-center gap-2 ${
                                toneSlot === null
                                  ? "bg-white/8 dark:bg-gray-800/20 border border-white/10 dark:border-gray-700/20 hover:bg-white/12 dark:hover:bg-gray-800/30"
                                  : "bg-white/14 dark:bg-white/[0.06] border border-black/[0.06] dark:border-white/[0.1] hover:bg-white/22 dark:hover:bg-white/[0.1]"
                              } backdrop-blur-sm rounded-xl ${variantStyles.item} ${chipBorderHover} transition-colors duration-300 cursor-pointer`}
                              initial={{ opacity: 0, y: 6, scale: 0.88 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              transition={{ ...spring, delay: itemIdx * 0.04 }}
                              whileHover={{ y: -2, scale: 1.08 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              {IconComponent && (
                                <img
                                  src={IconComponent}
                                  alt={item.name}
                                  className={`${variantStyles.icon} object-contain transition-all duration-300 group-hover/tech:scale-110 group-hover/tech:rotate-2`}
                                />
                              )}
                              <span
                                className={`font-medium text-body ${chipLabelHover} transition-colors duration-300`}
                              >
                                {item.name}
                              </span>
                            </motion.div>
                          );

                          return showTooltips ? (
                            <Tooltip
                              key={item.name}
                              content={item.name}
                              size="sm"
                              position="top"
                            >
                              {itemContent}
                            </Tooltip>
                          ) : (
                            <div key={item.name}>{itemContent}</div>
                          );
                        })}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default CategoriesOverview;
