import { motion } from "motion/react";
import React from "react";
import { SPOTLIGHT_ENTRIES } from "data/about/spotlightData";
import { SpotlightResult } from "hooks/useSpotlightSearch";

interface ChatSuggestionsProps {
  suggestions: SpotlightResult[];
  onSelectSuggestion: (result: SpotlightResult) => void;
}

const entryById = Object.fromEntries(SPOTLIGHT_ENTRIES.map((e) => [e.id, e]));

const toResult = (e: (typeof SPOTLIGHT_ENTRIES)[number]): SpotlightResult => ({
  id: e.id,
  title: e.title,
  description: e.description,
  category: e.category,
  icon: e.icon,
  response: e.response,
});

interface QuestionGroup {
  label: string;
  dot: string;
  labelColor: string;
  hoverClasses: string;
  ids: string[];
}

const GROUPS: QuestionGroup[] = [
  {
    label: "Background & Origins",
    dot: "bg-amber-400 dark:bg-amber-500",
    labelColor: "text-amber-700 dark:text-amber-400",
    hoverClasses:
      "hover:border-amber-200/80 hover:bg-amber-50/60 dark:hover:border-amber-500/25 dark:hover:bg-amber-500/8",
    ids: [
      "background-roots",
      "story-community-lesson",
      "story-first-code",
      "story-berlin-arrival",
      "journey-football",
      "journey-teaching",
    ],
  },
  {
    label: "Career",
    dot: "bg-blue-400 dark:bg-blue-500",
    labelColor: "text-blue-700 dark:text-blue-400",
    hoverClasses:
      "hover:border-blue-200/80 hover:bg-blue-50/60 dark:hover:border-blue-500/25 dark:hover:bg-blue-500/8",
    ids: [
      "journey-summary",
      "journey-accountax",
      "journey-berlin",
      "journey-teaching-to-tech",
    ],
  },
  {
    label: "Projects",
    dot: "bg-violet-400 dark:bg-violet-500",
    labelColor: "text-violet-700 dark:text-violet-400",
    hoverClasses:
      "hover:border-violet-200/80 hover:bg-violet-50/60 dark:hover:border-violet-500/25 dark:hover:bg-violet-500/8",
    ids: [
      "projects-overview",
      "project-quincy",
      "project-zula",
      "project-innit",
      "project-propstack",
      "project-buildy",
    ],
  },
  {
    label: "Skills & Craft",
    dot: "bg-emerald-400 dark:bg-emerald-500",
    labelColor: "text-emerald-700 dark:text-emerald-400",
    hoverClasses:
      "hover:border-emerald-200/80 hover:bg-emerald-50/60 dark:hover:border-emerald-500/25 dark:hover:bg-emerald-500/8",
    ids: [
      "skills-core",
      "skills-leadership",
      "skills-cloud",
      "focus-performance",
      "focus-healthcare",
      "focus-impact",
    ],
  },
  {
    label: "Values & Life",
    dot: "bg-rose-400 dark:bg-rose-500",
    labelColor: "text-rose-700 dark:text-rose-400",
    hoverClasses:
      "hover:border-rose-200/80 hover:bg-rose-50/60 dark:hover:border-rose-500/25 dark:hover:bg-rose-500/8",
    ids: [
      "values-approach",
      "values-beyond-code",
      "values-sharing",
      "general-languages",
      "general-industries",
    ],
  },
];

const ChevronRight: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg
    className={className}
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M6 4l4 4-4 4" />
  </svg>
);

const TOTAL_QUESTIONS = GROUPS.reduce((sum, g) => sum + g.ids.length, 0);

const ChatSuggestions: React.FC<ChatSuggestionsProps> = ({
  onSelectSuggestion,
}) => (
  <div className="flex h-full flex-col gap-3">
    {/* ── Header ── */}
    <motion.div
      className="flex flex-col items-center gap-2 pt-1 text-center"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.28, ease: "easeOut" }}
    >
      <motion.div
        className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-emerald-200/70 shadow-md dark:border-emerald-500/35"
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 480,
          damping: 28,
          delay: 0.06,
        }}
      >
        <img
          src="/images/ansu.jpg"
          alt="Ansu"
          className="h-full w-full object-cover"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.14, duration: 0.22 }}
        className="space-y-0.5"
      >
        <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-100">
          Ask me anything
        </h3>
        <p className="text-[10px] font-medium uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
          {TOTAL_QUESTIONS} questions across {GROUPS.length} topics
        </p>
      </motion.div>
    </motion.div>

    {/* ── Divider ── */}
    <motion.div
      className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent dark:via-slate-700"
      initial={{ scaleX: 0, opacity: 0 }}
      animate={{ scaleX: 1, opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.35 }}
    />

    {/* ── Scrollable question groups ── */}
    <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-slate-200 dark:scrollbar-thumb-slate-700">
      <div className="space-y-5 pb-3">
        {GROUPS.map((group, groupIdx) => {
          const entries = group.ids.map((id) => entryById[id]).filter(Boolean);
          if (!entries.length) return null;

          return (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.1 + groupIdx * 0.07,
                duration: 0.28,
                ease: "easeOut",
              }}
            >
              {/* Section label */}
              <div className="mb-2 flex items-center gap-2">
                <span
                  className={`h-1.5 w-1.5 flex-none rounded-full ${group.dot}`}
                />
                <span
                  className={`text-[10px] font-bold uppercase tracking-[0.14em] ${group.labelColor}`}
                >
                  {group.label}
                </span>
                <span className="flex-1 border-t border-slate-100 dark:border-slate-800" />
              </div>

              {/* Question rows */}
              <div className="space-y-1">
                {entries.map((entry, rowIdx) => {
                  const result = toResult(entry);
                  return (
                    <motion.button
                      key={entry.id}
                      type="button"
                      onClick={() => onSelectSuggestion(result)}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.14 + groupIdx * 0.07 + rowIdx * 0.025,
                        duration: 0.2,
                        ease: "easeOut",
                      }}
                      whileHover={{ x: 2 }}
                      whileTap={{ scale: 0.985 }}
                      className={[
                        "group w-full rounded-xl border border-slate-100/80 bg-white/60 px-3 py-2.5",
                        "text-left transition-all duration-150",
                        "dark:border-slate-700/50 dark:bg-slate-800/30",
                        "hover:shadow-sm",
                        group.hoverClasses,
                      ].join(" ")}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-[12.5px] font-medium leading-snug text-slate-700 dark:text-slate-200 group-hover:text-slate-900 dark:group-hover:text-white">
                            {entry.title}
                          </p>
                          <p className="mt-0.5 line-clamp-1 text-[11px] leading-snug text-slate-400 dark:text-slate-500">
                            {entry.description}
                          </p>
                        </div>
                        <ChevronRight className="mt-0.5 h-3.5 w-3.5 flex-none text-slate-300 transition-colors group-hover:text-slate-500 dark:text-slate-600 dark:group-hover:text-slate-400" />
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  </div>
);

export default React.memo(ChatSuggestions);
