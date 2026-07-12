import AnimatedCTAButton from "components/elements/animated-cta-button";
import { SECTION_VARIANTS, SECTION_VIEWPORT } from "constants/section-motion";
import { getServiceColorScheme } from "constants/service-colors";
import { homePageContent } from "data/homePage";
import { motion } from "motion/react";
import React, { useMemo } from "react";
import { serviceIcons, services } from "../../../data/services";
import SectionHeader from "../../elements/section-header";
import ServiceCard from "../service/service-card";

const springTransition = {
  type: "spring" as const,
  stiffness: 380,
  damping: 30,
  mass: 0.7,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: springTransition },
};

const loadMorePanelVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { ...springTransition, delay: 0.05 },
  },
};

const Services: React.FC = () => {
  const { servicesTeaser } = homePageContent;

  const visibleServices = useMemo(
    () => services.slice(0, servicesTeaser.previewCount),
    [servicesTeaser.previewCount],
  );

  return (
    <section className="relative py-8 sm:pt-12 md:pt-16 overflow-hidden">
      <motion.div
        className="container max-w-7xl relative z-10 mx-auto px-4 sm:px-6 lg:px-8"
        variants={SECTION_VARIANTS}
        initial="hidden"
        whileInView="visible"
        viewport={SECTION_VIEWPORT}
      >
        <div className="text-center">
          <SectionHeader
            badge={{
              text: servicesTeaser.badge,
              icon: (
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  />
                </svg>
              ),
              iconAnimation: false,
            }}
            description={servicesTeaser.description}
            highlightText={servicesTeaser.highlightText}
          />
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6 mb-6 sm:mb-8 lg:mb-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={SECTION_VIEWPORT}
          layout
        >
          {visibleServices.map((service) => (
            <motion.div
              key={service.title}
              layout
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={SECTION_VIEWPORT}
              className="min-h-0"
            >
              <ServiceCard
                service={service}
                icon={serviceIcons[service.title]}
                colorScheme={getServiceColorScheme(service.title)}
                shouldAnimate={false}
                enableNavigation={true}
                maxSpecifications={5}
                showTools={true}
                ariaLabel={`View details for ${service.title}`}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-8 sm:mt-10 flex justify-center"
          variants={loadMorePanelVariants}
          initial="hidden"
          whileInView="visible"
          viewport={SECTION_VIEWPORT}
        >
          <AnimatedCTAButton
            text={servicesTeaser.deepLink.text}
            href={servicesTeaser.deepLink.href}
            colorScheme="indigo-violet"
            size="sm"
            showIcon={true}
            iconPosition="right"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Services;
