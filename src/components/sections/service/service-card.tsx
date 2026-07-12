import { ServiceColorScheme } from "constants/service-colors";
import { Service } from "data/services";
import { AnimatePresence, motion } from "motion/react";
import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getServiceDetailPath } from "utils/slugify";
import { SURFACE_CARD_ICON, SURFACE_CARD_INTERACTIVE } from "../../../tailwind/styles/surfaceCard";
import { TEXT_CARD_TITLE } from "../../../tailwind/styles/textTokens";
import MarkdownRenderer from "../../elements/markdown-renderer";

const spring = {
  type: "spring" as const,
  stiffness: 380,
  damping: 30,
  mass: 0.7,
};

export type { ServiceColorScheme } from "constants/service-colors";

interface ServiceSchemeTokens {
  headerBg: string;
  topAccent: string;
  iconGlow: string;
  border: string;
  hoverBorder: string;
  titleHover: string;
  decorTR: string;
  decorBL: string;
  cta: string;
  chip: string;
}

const SERVICE_SCHEMES: Record<ServiceColorScheme, ServiceSchemeTokens> = {
  "blue-cyan": {
    headerBg: "from-blue-500/25 via-cyan-500/15 to-blue-500/5",
    topAccent: "from-blue-500 via-cyan-400 to-sky-500",
    iconGlow: "from-blue-500/30 via-cyan-400/20 to-transparent",
    border: "border-blue-400/30 dark:border-blue-500/35",
    hoverBorder: "hover:border-cyan-400/50 dark:hover:border-cyan-400/45",
    titleHover: "group-hover:text-blue-600 dark:group-hover:text-cyan-400",
    decorTR: "from-blue-500/20 via-cyan-400/12 to-transparent",
    decorBL: "from-cyan-400/15 via-blue-500/10 to-transparent",
    cta: "from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500",
    chip: "text-blue-700 dark:text-cyan-300 bg-blue-500/12 dark:bg-cyan-400/12 border-blue-400/30 dark:border-cyan-400/30",
  },
  "pink-rose": {
    headerBg: "from-pink-500/25 via-rose-500/15 to-pink-500/5",
    topAccent: "from-pink-500 via-rose-400 to-fuchsia-500",
    iconGlow: "from-pink-500/30 via-rose-400/20 to-transparent",
    border: "border-pink-400/30 dark:border-pink-500/35",
    hoverBorder: "hover:border-rose-400/50 dark:hover:border-rose-400/45",
    titleHover: "group-hover:text-pink-600 dark:group-hover:text-rose-400",
    decorTR: "from-pink-500/20 via-rose-400/12 to-transparent",
    decorBL: "from-rose-400/15 via-pink-500/10 to-transparent",
    cta: "from-pink-600 to-rose-600 hover:from-pink-500 hover:to-rose-500",
    chip: "text-pink-700 dark:text-rose-300 bg-pink-500/12 dark:bg-rose-400/12 border-pink-400/30 dark:border-rose-400/30",
  },
  "yellow-orange": {
    headerBg: "from-amber-500/25 via-orange-500/15 to-amber-500/5",
    topAccent: "from-amber-500 via-orange-400 to-yellow-500",
    iconGlow: "from-amber-500/30 via-orange-400/20 to-transparent",
    border: "border-amber-400/30 dark:border-amber-500/35",
    hoverBorder: "hover:border-orange-400/50 dark:hover:border-orange-400/45",
    titleHover: "group-hover:text-amber-600 dark:group-hover:text-orange-400",
    decorTR: "from-amber-500/20 via-orange-400/12 to-transparent",
    decorBL: "from-orange-400/15 via-amber-500/10 to-transparent",
    cta: "from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500",
    chip: "text-amber-800 dark:text-orange-300 bg-amber-500/12 dark:bg-orange-400/12 border-amber-400/30 dark:border-orange-400/30",
  },
  "purple-indigo": {
    headerBg: "from-purple-500/25 via-indigo-500/15 to-purple-500/5",
    topAccent: "from-purple-500 via-indigo-400 to-violet-500",
    iconGlow: "from-purple-500/30 via-indigo-400/20 to-transparent",
    border: "border-purple-400/30 dark:border-purple-500/35",
    hoverBorder: "hover:border-indigo-400/50 dark:hover:border-indigo-400/45",
    titleHover: "group-hover:text-purple-600 dark:group-hover:text-indigo-400",
    decorTR: "from-purple-500/20 via-indigo-400/12 to-transparent",
    decorBL: "from-indigo-400/15 via-purple-500/10 to-transparent",
    cta: "from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500",
    chip: "text-purple-700 dark:text-indigo-300 bg-purple-500/12 dark:bg-indigo-400/12 border-purple-400/30 dark:border-indigo-400/30",
  },
  "emerald-green": {
    headerBg: "from-emerald-500/25 via-green-500/15 to-emerald-500/5",
    topAccent: "from-emerald-500 via-green-400 to-teal-500",
    iconGlow: "from-emerald-500/30 via-green-400/20 to-transparent",
    border: "border-emerald-400/30 dark:border-emerald-500/35",
    hoverBorder: "hover:border-green-400/50 dark:hover:border-green-400/45",
    titleHover: "group-hover:text-emerald-600 dark:group-hover:text-green-400",
    decorTR: "from-emerald-500/20 via-green-400/12 to-transparent",
    decorBL: "from-green-400/15 via-emerald-500/10 to-transparent",
    cta: "from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500",
    chip: "text-emerald-800 dark:text-green-300 bg-emerald-500/12 dark:bg-green-400/12 border-emerald-400/30 dark:border-green-400/30",
  },
  "teal-blue": {
    headerBg: "from-teal-500/25 via-sky-500/15 to-teal-500/5",
    topAccent: "from-teal-500 via-sky-400 to-blue-500",
    iconGlow: "from-teal-500/30 via-sky-400/20 to-transparent",
    border: "border-teal-400/30 dark:border-teal-500/35",
    hoverBorder: "hover:border-sky-400/50 dark:hover:border-sky-400/45",
    titleHover: "group-hover:text-teal-600 dark:group-hover:text-sky-400",
    decorTR: "from-teal-500/20 via-sky-400/12 to-transparent",
    decorBL: "from-sky-400/15 via-teal-500/10 to-transparent",
    cta: "from-teal-600 to-sky-600 hover:from-teal-500 hover:to-sky-500",
    chip: "text-teal-800 dark:text-sky-300 bg-teal-500/12 dark:bg-sky-400/12 border-teal-400/30 dark:border-sky-400/30",
  },
};

export interface ServiceCardProps {
  service: Service;
  icon?: React.ReactNode;
  colorScheme?: ServiceColorScheme;
  className?: string;
  shouldAnimate?: boolean;
  onClick?: (serviceTitle: string) => void;
  enableNavigation?: boolean;
  navigationPath?: string;
  ariaLabel?: string;
  maxSpecifications?: number;
  showTools?: boolean;
  isNavigable?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  icon,
  colorScheme = "blue-cyan",
  className = "",
  shouldAnimate = false,
  onClick,
  enableNavigation = true,
  navigationPath,
  ariaLabel,
  maxSpecifications = 5,
  showTools = true,
  isNavigable = false,
}) => {
  const navigate = useNavigate();
  const [deliverablesOpen, setDeliverablesOpen] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);

  const scheme = SERVICE_SCHEMES[colorScheme];

  const serviceDetailPath = navigationPath ?? getServiceDetailPath(service.title);

  const handleNavigate = useCallback(() => {
    if (onClick) {
      onClick(service.title);
    } else if (enableNavigation) {
      navigate(serviceDetailPath);
    }
  }, [onClick, enableNavigation, navigate, service.title, serviceDetailPath]);

  const cardSurface = [
    SURFACE_CARD_INTERACTIVE,
    "dark:bg-dark-background",
    "relative flex flex-col h-full",
    scheme.border,
    scheme.hoverBorder,
    shouldAnimate ? "cursor-pointer" : "",
    className,
  ].join(" ");

  return (
    <article
      className={cardSurface}
      role={enableNavigation || onClick ? "button" : undefined}
      tabIndex={enableNavigation || onClick ? 0 : undefined}
      aria-label={ariaLabel || `Learn more about ${service.title}`}
      onClick={handleNavigate}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleNavigate();
        }
      }}
    >
      {/* Header */}
      <div className="relative p-3 sm:p-4 border-b border-light-border/55 dark:border-dark-border/40">
        <div className="relative flex items-center gap-3 sm:gap-4">
          <div
            className={`${SURFACE_CARD_ICON} flex h-10 w-10 flex-shrink-0 sm:h-12 sm:w-12 items-center justify-center`}
          >
            {icon ?? (
              <span className="leading-none text-lg sm:text-xl" aria-hidden>
                {service.icon}
              </span>
            )}
          </div>

          <div className="flex min-w-0 flex-1 flex-col justify-center">
            <h3 className={`${TEXT_CARD_TITLE} leading-snug line-clamp-2`}>
              {service.title}
            </h3>
          </div>
        </div>
      </div>

      {/* Body */}
      <div
        className="flex-1 p-3 sm:p-4 space-y-2 sm:space-y-3"
        onClick={(e) => e.stopPropagation()}
      >
        <MarkdownRenderer
          content={service.text}
          className="text-sm text-body leading-relaxed line-clamp-4"
        />
        {/*  <p className="text-xs sm:text-sm text-muted leading-snug line-clamp-2">
          {service.description}
        </p> */}

        {service.specifications && service.specifications.length > 0 && (
          <motion.div className="space-y-1" layout>
            <motion.button
              type="button"
              onClick={() => setDeliverablesOpen((o) => !o)}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center justify-between gap-2 px-3 py-2 rounded-lg bg-purple-50/90 dark:bg-purple-950/35 border border-purple-200/80 dark:border-purple-800/50 group/toggle cursor-pointer hover:bg-purple-50 dark:hover:bg-purple-950/50 transition-colors duration-200"
            >
              <motion.div
                className="flex items-center gap-2 min-w-0"
                whileHover={{ x: 2 }}
              >
                <span className="text-sm flex-shrink-0 text-purple-600 dark:text-purple-400">
                  ✓
                </span>
                <span className="text-xs sm:text-sm font-semibold text-purple-800 dark:text-purple-300 truncate">
                  What You Get
                </span>
                <span className="flex-shrink-0 text-xs font-semibold px-1.5 py-0.5 rounded-full bg-purple-100 dark:bg-purple-900/60 text-purple-700 dark:text-purple-300">
                  {Math.min(service.specifications.length, maxSpecifications)}
                </span>
              </motion.div>
              <motion.svg
                animate={{ rotate: deliverablesOpen ? 180 : 0 }}
                transition={spring}
                className="w-4 h-4 flex-shrink-0 text-purple-600 dark:text-purple-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M19 9l-7 7-7-7"
                />
              </motion.svg>
            </motion.button>

            <AnimatePresence initial={false}>
              {deliverablesOpen && (
                <motion.ul
                  key="what-you-get"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={spring}
                  className="overflow-hidden space-y-0.5 pt-1"
                >
                  {service.specifications
                    .slice(0, maxSpecifications)
                    .map((spec, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -6 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ ...spring, delay: i * 0.06 }}
                        className="flex items-start gap-2 p-1.5 sm:p-2 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors duration-200"
                      >
                        <span className="mt-0.5 flex-shrink-0 text-purple-600 dark:text-purple-400">
                          <svg
                            className="w-3.5 h-3.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </span>
                        <MarkdownRenderer
                          content={spec}
                          className="text-sm text-body leading-relaxed"
                        />
                      </motion.li>
                    ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </motion.div>
        )}

        {showTools && service.tools && service.tools.length > 0 && (
          <motion.div className="space-y-1" layout>
            <motion.button
              type="button"
              onClick={() => setToolsOpen((o) => !o)}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center justify-between gap-2 px-3 py-2 rounded-lg bg-gray-50/90 dark:bg-gray-800/60 border border-gray-200/80 dark:border-gray-700/60 group/toggle cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
            >
              <motion.div
                className="flex items-center gap-2 min-w-0"
                whileHover={{ x: 2 }}
              >
                <span className="text-sm flex-shrink-0">🛠</span>
                <span className="text-xs sm:text-sm font-semibold text-body truncate">
                  Tools & Stack
                </span>
                <span className="flex-shrink-0 text-xs font-semibold px-1.5 py-0.5 rounded-full bg-gray-200/80 dark:bg-gray-700/80 text-body">
                  {service.tools.length}
                </span>
              </motion.div>
              <motion.svg
                animate={{ rotate: toolsOpen ? 180 : 0 }}
                transition={spring}
                className="w-4 h-4 flex-shrink-0 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M19 9l-7 7-7-7"
                />
              </motion.svg>
            </motion.button>

            <AnimatePresence initial={false}>
              {toolsOpen && (
                <motion.div
                  key="tools-stack"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={spring}
                  className="overflow-hidden pt-1"
                >
                  <motion.div
                    className="flex flex-wrap gap-1.5 sm:gap-2"
                    initial="hidden"
                    animate="visible"
                    variants={{
                      hidden: {},
                      visible: { transition: { staggerChildren: 0.04 } },
                    }}
                  >
                    {service.tools.map((tool, i) => (
                      <motion.span
                        key={`${tool}-${i}`}
                        variants={{
                          hidden: { opacity: 0, scale: 0.9 },
                          visible: { opacity: 1, scale: 1, transition: spring },
                        }}
                        className={`inline-flex items-center px-2 sm:px-2.5 py-0.5 sm:py-1 text-xs sm:text-sm font-medium rounded-md border ${scheme.chip}`}
                      >
                        {tool}
                      </motion.span>
                    ))}
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </div>

      {isNavigable && (enableNavigation || onClick) && (
        <div
          className="p-3 sm:p-4 pt-0 bg-white/50 dark:bg-gray-900/40"
          onClick={(e) => e.stopPropagation()}
        >
          <motion.button
            type="button"
            onClick={handleNavigate}
            transition={spring}
            className="w-full inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 min-h-[44px] text-sm font-medium text-white bg-indigo-600 dark:bg-indigo-500 hover:bg-indigo-700 dark:hover:bg-indigo-600 rounded-lg transition-colors"
          >
            <span>View Details</span>
            <svg
              className="w-3.5 h-3.5 sm:w-4 sm:h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </motion.button>
        </div>
      )}
    </article>
  );
};

export default ServiceCard;
