import { SECTION_VARIANTS, SECTION_VIEWPORT } from "constants/section-motion";
import { getServiceColorScheme } from "constants/service-colors";
import { motion } from "motion/react";
import React from "react";
import AnimatedCTAButton from "../components/elements/animated-cta-button";
import SectionHeader from "../components/elements/section-header";
import ServiceCard from "../components/sections/service/service-card";
import ServicesHeroCarousel from "../components/sections/service/services-hero-carousel";
import { servicesPageContent } from "../data/services-page";
import { serviceIcons, services } from "../data/services";

const Services: React.FC = () => {
  return (
    <div className="relative min-h-screen overflow-hidden ">
      <main className="relative z-20 w-full">
        <section className="relative overflow-hidden">
          <ServicesHeroCarousel className="w-full h-full" />
        </section>

        <motion.section
          id="services-overview"
          className="relative py-8 sm:py-12 md:py-16 bg-light-background-alt dark:bg-dark-background-alt"
          variants={SECTION_VARIANTS}
          initial="hidden"
          whileInView="visible"
          viewport={SECTION_VIEWPORT}
        >
          <div className="container relative z-10 mx-auto max-w-7xl px-3 sm:px-4 lg:px-6">
            <SectionHeader
              badge={{
                text: "Engineering Services",
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
              title="Services for products that need to work"
              description={servicesPageContent.servicesTeaser.description}
              highlightText={servicesPageContent.servicesTeaser.highlightText}
              className="mb-6 sm:mb-8 lg:mb-10"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
              {services.map((service) => (
                <ServiceCard
                  key={service.title}
                  service={service}
                  icon={serviceIcons[service.title]}
                  colorScheme={getServiceColorScheme(service.title)}
                  shouldAnimate={false}
                  isNavigable={true}
                  enableNavigation={true}
                  maxSpecifications={5}
                  showTools={true}
                  ariaLabel={`Learn more about ${service.title}`}
                />
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          id="services-career-link"
          className="relative py-8 sm:py-12 md:py-16"
          variants={SECTION_VARIANTS}
          initial="hidden"
          whileInView="visible"
          viewport={SECTION_VIEWPORT}
        >
          <div className="container relative z-10 mx-auto px-4 max-w-3xl text-center">
            <SectionHeader
              badge={{
                text: servicesPageContent.careerCrossLink.badge,
                iconAnimation: false,
              }}
              title={servicesPageContent.careerCrossLink.title}
              description={servicesPageContent.careerCrossLink.description}
              highlightText={servicesPageContent.careerCrossLink.highlightText}
              className="mb-6 sm:mb-8"
            />
            <AnimatedCTAButton
              text={servicesPageContent.careerCrossLink.cta.text}
              href={servicesPageContent.careerCrossLink.cta.href}
              colorScheme="indigo-violet"
              size="sm"
              showIcon={true}
            />
          </div>
        </motion.section>
      </main>
    </div>
  );
};

export default Services;
