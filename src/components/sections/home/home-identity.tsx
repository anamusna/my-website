import { SECTION_VIEWPORT } from "constants/section-motion";
import { homePageContent } from "data/homePage";
import { motion } from "motion/react";
import React from "react";
import { Link } from "react-router-dom";
import { SURFACE_CARD_INTERACTIVE } from "../../../tailwind/styles/surfaceCard";
import { TEXT_BODY, TEXT_MUTED } from "../../../tailwind/styles/textTokens";
import AnimatedCTAButton from "../../elements/animated-cta-button";
import SectionHeader from "../../elements/section-header";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

const HomeIdentity: React.FC = () => {
  const { identity } = homePageContent;

  return (
    <section className="relative py-6 sm:py-8 md:py-12 lg:py-16 overflow-hidden">
      <div className="container max-w-7xl relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={{
            text: identity.badge,
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
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            ),
            iconAnimation: false,
          }}
          description={identity.description}
          highlightText={identity.highlightText}
        />

        <div className="mt-6 sm:mt-8 grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 lg:gap-6 lg:items-stretch">
          <motion.div
            className={`${SURFACE_CARD_INTERACTIVE} flex flex-col justify-center p-6 sm:p-8 md:p-10 border-indigo-200/40 dark:border-indigo-500/25 min-h-[280px] lg:min-h-0`}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={SECTION_VIEWPORT}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-3 sm:mb-4">
              Why teams hire me
            </p>
            <h3 className="text-xl sm:text-2xl lg:text-[1.75rem] xl:text-3xl font-bold text-heading leading-snug tracking-tight mb-4 sm:mb-5">
              {identity.headline}
            </h3>
            <p className={`${TEXT_BODY} text-base sm:text-lg lg:text-xl leading-relaxed`}>
              {identity.summary}
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col gap-3 sm:gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={SECTION_VIEWPORT}
          >
            <p
              className={`${TEXT_MUTED} text-sm sm:text-base font-medium px-1`}
            >
              {identity.threadsLabel}
            </p>
            <ul
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 sm:gap-4 flex-1"
              aria-label="Domains and projects"
            >
              {identity.threads.map((thread) => (
                <motion.li key={thread.label} variants={itemVariants}>
                  <Link
                    to={thread.href}
                    className={`${SURFACE_CARD_INTERACTIVE} group flex items-start gap-3 sm:gap-4 p-4 sm:p-5 md:p-6 border-violet-200/35 dark:border-violet-500/25 hover:border-indigo-400/50 dark:hover:border-indigo-400/40 min-h-[44px] transition-colors`}
                  >
                    <span
                      className="text-2xl sm:text-3xl flex-shrink-0 leading-none pt-0.5"
                      aria-hidden
                    >
                      {thread.emoji}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-base sm:text-lg font-semibold text-heading leading-snug group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                        {thread.label}
                      </span>
                      <span
                        className={`${TEXT_MUTED} block mt-1 text-sm sm:text-base leading-relaxed`}
                      >
                        {thread.detail}
                      </span>
                    </span>
                    <span
                      className="flex-shrink-0 text-indigo-500/0 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors mt-1"
                      aria-hidden
                    >
                      →
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          className="mt-6 sm:mt-8 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-4"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={SECTION_VIEWPORT}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <AnimatedCTAButton
            text={identity.primaryCta.text}
            href={identity.primaryCta.href}
            colorScheme="indigo-violet"
            size="sm"
            showIcon={true}
          />
          <AnimatedCTAButton
            text={identity.secondaryCta.text}
            href={identity.secondaryCta.href}
            colorScheme="indigo-violet"
            size="sm"
            variant="outline"
            showIcon={true}
            iconPosition="right"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HomeIdentity;
