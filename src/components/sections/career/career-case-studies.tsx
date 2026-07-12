import { SECTION_VIEWPORT } from "constants/section-motion";
import { careerPageContent } from "data/careerPage";
import { getCareerCaseStudyHighlights } from "data/workShowcase";
import HighlightCard from "./highlight-card";
import { motion } from "motion/react";
import React, { useMemo } from "react";
import AnimatedCTAButton from "../../elements/animated-cta-button";
import SectionHeader from "../../elements/section-header";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 380,
      damping: 30,
      mass: 0.7,
    },
  },
};

const CareerCaseStudies: React.FC = () => {
  const { caseStudies } = careerPageContent;
  const highlights = useMemo(() => getCareerCaseStudyHighlights(), []);

  return (
    <section
      id="career-case-studies"
      className="relative scroll-mt-24 py-6 sm:py-8 md:py-12 lg:py-16 overflow-hidden"
    >
      <div className="container max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <SectionHeader
          badge={{
            text: caseStudies.badge,
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
                  d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                />
              </svg>
            ),
            iconAnimation: false,
          }}
          description={caseStudies.description}
          highlightText={caseStudies.highlightText}
        />

        <motion.div
          className="mt-6 sm:mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-4 md:gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={SECTION_VIEWPORT}
        >
          {highlights.map((highlight, index) => (
            <motion.div
              key={`${highlight.id}-${highlight.period}`}
              variants={cardVariants}
            >
              <HighlightCard
                highlight={highlight}
                index={index}
                toneIndex={index}
                shouldAnimate={false}
                animationDelay={0}
                maxMetrics={4}
                showTechnologies={true}
                className="h-full"
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-6 sm:mt-8 md:mt-10 text-center"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={SECTION_VIEWPORT}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <AnimatedCTAButton
            text={caseStudies.viewAllLabel}
            href={caseStudies.viewAllHref}
            colorScheme="indigo-violet"
            size="sm"
            showIcon={true}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default CareerCaseStudies;
