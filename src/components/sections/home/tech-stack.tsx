import { SECTION_RISE_VARIANTS, SECTION_VIEWPORT } from "constants/section-motion";
import CategoriesOverview from "./categories-overview";
import { homePageContent } from "data/homePage";
import { technologies } from "data/technologies";
import { motion } from "motion/react";
import React from "react";
import AnimatedCTAButton from "../../elements/animated-cta-button";
import SectionHeader from "../../elements/section-header";

const springTransition = {
  type: "spring" as const,
  stiffness: 380,
  damping: 30,
  mass: 0.7,
};

const sectionVariants = SECTION_RISE_VARIANTS;

const contentVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { ...springTransition, delay: 0.15 },
  },
};

interface TechStackProps {
  skills: {
    description: string;
  };
}

const TechStack: React.FC<TechStackProps> = ({ skills }) => {
  const { techStackTeaser } = homePageContent;

  return (
    <section className="relative py-8 sm:py-10 md:py-12 overflow-hidden">
      <div className="container max-w-7xl relative z-10 mx-auto px-3 sm:px-4 lg:px-6">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={SECTION_VIEWPORT}
        >
          <SectionHeader
            badge={{
              text: "What I work with",
              // text: "Technology Stack",
              icon: (
                <svg
                  className="w-5 h-5 mr-2 animate-spin"
                  style={{ animationDuration: "4s" }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              ),
              iconAnimation: false,
            }}
            // title="What I work with"
            description={skills.description}
          />
        </motion.div>

        <motion.div
          variants={contentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={SECTION_VIEWPORT}
        >
          <CategoriesOverview
            categories={technologies}
            variant="compact"
            useHighlightSurfaces
            showIcons={false}
            showTooltips={false}
            animationDelay={120}
            staggerDelay={80}
          />
        </motion.div>

        <motion.div
          className="mt-6 sm:mt-8 flex justify-center"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={SECTION_VIEWPORT}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <AnimatedCTAButton
            text={techStackTeaser.deepLink.text}
            href={techStackTeaser.deepLink.href}
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

export default TechStack;
