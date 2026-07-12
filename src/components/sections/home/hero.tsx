import { SECTION_VARIANTS, SECTION_VIEWPORT } from "constants/section-motion";
import { ABOUT_HERO_STYLES } from "data/aboutHeroData";
import { motion } from "motion/react";
import React, { memo, useMemo } from "react";
import { HERO_CONFIG, HERO_CONTENT, HERO_STYLES } from "../../../data/heroData";
import { personalInfo } from "../../../data/personalInfo";
import {
  PAGE_HEADER_HERO_SUBTITLE,
  PAGE_HEADER_HERO_TITLE,
  PAGE_HEADER_SECTION_EYEBROW,
} from "../../../tailwind/styles/pageHeader";
import CTAButtons from "../../elements/cta-buttons";
import HeroImage from "./hero-image";
import HeroTerminal from "./hero-terminal";

const springTransition = {
  type: "spring" as const,
  stiffness: 380,
  damping: 30,
  mass: 0.7,
};

const leftColumnVariants = {
  hidden: { opacity: 0, x: -24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { ...springTransition, delay: 0.1 },
  },
};

const HeroIntro: React.FC = memo(() => (
  <header className="space-y-3 sm:space-y-4">
    <p className={PAGE_HEADER_SECTION_EYEBROW}>{personalInfo.role}</p>
    <h1 className={`${PAGE_HEADER_HERO_TITLE} text-heading`}>
      {HERO_CONTENT.TITLE}
    </h1>
    <p className={`${PAGE_HEADER_HERO_SUBTITLE} max-w-xl`}>
      {HERO_CONTENT.SUBTITLE}
    </p>
    <p className="text-sm sm:text-base text-muted leading-relaxed max-w-lg">
      {HERO_CONTENT.GREETING}
    </p>
    <div className="pt-1 sm:pt-2">
      <CTAButtons
        primaryButton={{
          text: HERO_CONTENT.CTA_BUTTONS.PRIMARY.text,
          href: HERO_CONTENT.CTA_BUTTONS.PRIMARY.href,
        }}
        secondaryButton={{
          text: HERO_CONTENT.CTA_BUTTONS.SECONDARY.text,
          href: HERO_CONTENT.CTA_BUTTONS.SECONDARY.href,
        }}
        colorScheme="default"
        variant="default"
        layout="horizontal"
        spacing="normal"
        showIcons={true}
        glowEffect={false}
        shimmerEffect={false}
        particleEffect={false}
        hoverLift={false}
        animationDelay={false}
        alignment="left"
      />
    </div>
  </header>
));

HeroIntro.displayName = "HeroIntro";

const Hero: React.FC = memo(() => {
  const containerClasses = useMemo(
    () =>
      `${ABOUT_HERO_STYLES.CONTAINER_BASE} py-8 md:py-10 lg:py-12 px-2 sm:px-6 md:px-4 lg:px-5`,
    [],
  );

  const gridClasses = useMemo(
    () =>
      `${HERO_STYLES.GRID_WRAPPER} ${HERO_CONFIG.SPACING.GRID_GAP} items-start`,
    [],
  );

  return (
    <div>
      <div className={containerClasses}>
        <div className={gridClasses}>
          <motion.div
            className={`${HERO_STYLES.TEXT_COLUMN} flex flex-col gap-6 lg:gap-8`}
            variants={leftColumnVariants}
            initial="hidden"
            whileInView="visible"
            viewport={SECTION_VIEWPORT}
          >
            <HeroIntro />
            <HeroTerminal />
          </motion.div>

          <motion.div
            className={HERO_STYLES.IMAGE_COLUMN}
            variants={SECTION_VARIANTS}
            initial="hidden"
            whileInView="visible"
            viewport={SECTION_VIEWPORT}
          >
            <HeroImage
              showStats={false}
              className="w-full max-w-sm sm:max-w-md lg:max-w-lg mx-auto lg:mx-0 lg:ml-auto"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
});

Hero.displayName = "Hero";

export default Hero;
