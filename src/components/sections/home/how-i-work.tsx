import { SECTION_VIEWPORT } from "constants/section-motion";
import { homePageContent } from "data/homePage";
import { howIWorkSection, type HowIWorkPrincipleId } from "data/howIWork";
import { motion } from "motion/react";
import React, { useMemo } from "react";
import { SURFACE_CARD_INTERACTIVE } from "../../../tailwind/styles/surfaceCard";
import AnimatedCTAButton from "../../elements/animated-cta-button";
import SectionHeader from "../../elements/section-header";

const principleColors: Record<
  HowIWorkPrincipleId,
  {
    accent: string;
    border: string;
    index: string;
    bar: string;
  }
> = {
  "real-users": {
    accent: "text-blue-600 dark:text-blue-400",
    border:
      "border-blue-200/40 dark:border-blue-500/25 hover:border-blue-400/50 dark:hover:border-blue-400/40",
    index: "text-blue-500/70 dark:text-blue-400/70",
    bar: "from-blue-500 via-indigo-400 to-cyan-500",
  },
  modernize: {
    accent: "text-emerald-600 dark:text-emerald-400",
    border:
      "border-emerald-200/40 dark:border-emerald-500/25 hover:border-emerald-400/50 dark:hover:border-emerald-400/40",
    index: "text-emerald-500/70 dark:text-emerald-400/70",
    bar: "from-emerald-500 via-teal-400 to-cyan-500",
  },
  measure: {
    accent: "text-purple-600 dark:text-purple-400",
    border:
      "border-purple-200/40 dark:border-purple-500/25 hover:border-purple-400/50 dark:hover:border-purple-400/40",
    index: "text-purple-500/70 dark:text-purple-400/70",
    bar: "from-purple-500 via-violet-400 to-indigo-500",
  },
  maintain: {
    accent: "text-amber-600 dark:text-amber-400",
    border:
      "border-amber-200/40 dark:border-amber-500/25 hover:border-amber-400/50 dark:hover:border-amber-400/40",
    index: "text-amber-500/70 dark:text-amber-400/70",
    bar: "from-amber-500 via-orange-400 to-yellow-500",
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 16, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 350,
      damping: 28,
    },
  },
};

const HowIWork: React.FC = () => {
  const { howIWorkTeaser } = homePageContent;
  const previewPrinciples = useMemo(
    () =>
      howIWorkSection.principles.slice(0, howIWorkTeaser.previewCount),
    [howIWorkTeaser.previewCount],
  );

  return (
    <section className="relative py-6 sm:py-8 md:py-12 lg:py-16 overflow-hidden">
      <div className="container max-w-7xl relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={{
            text: howIWorkSection.badge,
            icon: (
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                />
              </svg>
            ),
            iconAnimation: false,
          }}
          description={howIWorkSection.description}
          highlightText={howIWorkSection.highlightText}
        />

        <motion.ol
          className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={SECTION_VIEWPORT}
          aria-label="How I work principles"
        >
          {previewPrinciples.map((principle) => {
            const colors = principleColors[principle.id];

            return (
              <motion.li
                key={principle.id}
                variants={cardVariants}
                whileHover={{ y: -3, scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className={`${SURFACE_CARD_INTERACTIVE} group relative overflow-hidden p-4 sm:p-5 lg:p-6 transform-gpu ${colors.border}`}
              >
                <div
                  className={`absolute top-0 left-0 h-0.5 sm:h-1 w-full bg-gradient-to-r ${colors.bar} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                  aria-hidden
                />

                <div className="flex items-start gap-3 sm:gap-4 min-w-0">
                  <span
                    className={`flex-shrink-0 text-xs sm:text-sm font-bold tabular-nums tracking-wider pt-0.5 ${colors.index}`}
                    aria-hidden
                  >
                    {principle.index}
                  </span>
                  <div className="min-w-0 space-y-2">
                    <p
                      className={`text-base sm:text-lg font-semibold leading-snug ${colors.accent}`}
                    >
                      {principle.title}
                    </p>
                    <p className="text-sm sm:text-base text-body leading-relaxed">
                      {principle.detail}
                    </p>
                  </div>
                </div>
              </motion.li>
            );
          })}
        </motion.ol>

        <motion.div
          className="mt-6 sm:mt-8 flex justify-center"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={SECTION_VIEWPORT}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <AnimatedCTAButton
            text={howIWorkTeaser.deepLink.text}
            href={howIWorkTeaser.deepLink.href}
            colorScheme="indigo-violet"
            size="sm"
            showIcon={true}
            iconPosition="right"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HowIWork;
