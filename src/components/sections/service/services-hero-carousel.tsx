import { SECTION_VARIANTS, SECTION_VIEWPORT } from "constants/section-motion";
import {
  getServiceColorScheme,
  SERVICE_CAROUSEL_TOKENS,
} from "constants/service-colors";
import AnimatedCTAButton from "components/elements/animated-cta-button";
import { motion } from "motion/react";
import React, { useMemo } from "react";
import { getServiceDetailPath } from "utils/slugify";
import { serviceIcons, services } from "../../../data/services";
import { P } from "../../../tailwind/components/elements/Typography";
import Carousel, {
  CarouselItem,
} from "../../../tailwind/components/layout/Carousel";
import { PAGE_HEADER_HERO_TITLE } from "../../../tailwind/styles/pageHeader";
import { SURFACE_CARD_ICON } from "../../../tailwind/styles/surfaceCard";

interface ServicesHeroCarouselProps {
  className?: string;
  onServiceSelect?: (serviceTitle: string) => void;
}

const ServicesHeroCarousel: React.FC<ServicesHeroCarouselProps> = ({
  className = "",
  onServiceSelect,
}) => {
  const carouselItems: CarouselItem[] = useMemo(() => {
    return services.map((service) => {
      const carouselTokens =
        SERVICE_CAROUSEL_TOKENS[getServiceColorScheme(service.title)];

      return {
        id: service.title,
        content: (
          <div className="relative h-full overflow-hidden">
            <div
              className={`absolute inset-0 -z-10 bg-gradient-to-br ${carouselTokens.gradient} dark:opacity-80`}
              aria-hidden="true"
            />

            <div className="relative z-10 h-full flex items-center">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
                  <div className="space-y-4 sm:space-y-5 text-center lg:text-left">
                    <div className="flex justify-center lg:justify-start">
                      <div
                        className={`${SURFACE_CARD_ICON} w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full`}
                      >
                        <span
                          className="text-3xl sm:text-4xl lg:text-5xl"
                          aria-hidden="true"
                        >
                          {serviceIcons[service.title]}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-2 sm:space-y-3">
                      <h1
                        className={`${PAGE_HEADER_HERO_TITLE} text-heading`}
                      >
                        {service.title}
                      </h1>

                      <P className="text-base sm:text-lg lg:text-xl text-body max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
                        {service.text}
                      </P>
                    </div>

                    <div className="flex flex-wrap gap-1.5 sm:gap-2 justify-center lg:justify-start">
                      {service.tags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1.5 text-sm font-medium bg-white/60 dark:bg-dark-surface/80 text-body rounded-full border border-light-border/60 dark:border-dark-border/50"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="pt-2 sm:pt-3 flex justify-center lg:justify-start">
                      <AnimatedCTAButton
                        text="Learn More"
                        href={getServiceDetailPath(service.title)}
                        onClick={() => onServiceSelect?.(service.title)}
                        colorScheme="indigo-violet"
                        size="md"
                        showIcon={true}
                      />
                    </div>
                  </div>

                  <div className="hidden lg:flex items-center justify-center">
                    <div className="surface-card rounded-2xl p-8 border border-light-border/55 dark:border-dark-border/40 text-center max-w-sm w-full">
                      <div className="text-4xl lg:text-5xl mb-3" aria-hidden="true">
                        {serviceIcons[service.title]}
                      </div>
                      <p className="text-sm font-medium text-muted">
                        {service.tags.length} technologies
                      </p>
                      <div className="mt-4 flex flex-wrap justify-center gap-2">
                        {service.tags.slice(0, 6).map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 text-xs font-medium rounded-full border border-light-border/60 dark:border-dark-border/50 text-body"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-4 hidden md:block md:left-1/2 md:-translate-x-1/2 z-20">
              <button
                type="button"
                onClick={() => {
                  const servicesSection =
                    document.getElementById("services-overview");
                  servicesSection?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
                className="flex flex-col items-center gap-1 min-h-[44px] px-3 py-2 surface-card rounded-xl border border-light-border/55 dark:border-dark-border/40 text-sm font-medium text-muted hover:text-heading transition-colors duration-300"
                aria-label="Scroll to services section"
              >
                <span>View All</span>
                <svg
                  className="w-3 h-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </button>
            </div>
          </div>
        ),
      };
    });
  }, [onServiceSelect]);

  return (
    <motion.div
      variants={SECTION_VARIANTS}
      initial="hidden"
      whileInView="visible"
      viewport={SECTION_VIEWPORT}
      className={`relative w-full max-w-full ${className}`}
    >
      <Carousel
        items={carouselItems}
        interval={8000}
        rounded={false}
        autoPlay={true}
        showControls={false}
        className="w-full h-[26rem] md:h-[26rem] lg:h-[32rem]"
        showIndicators={false}
      />
    </motion.div>
  );
};

export default ServicesHeroCarousel;
