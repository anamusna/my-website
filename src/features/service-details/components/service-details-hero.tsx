import HeroHeader from "components/elements/hero-header";
import { LAYOUT_STYLES } from "data/heroData";
import { ExtendedService } from "data/services";
import React from "react";
import {
  PAGE_HEADER_ON_IMAGE_GREETING,
  PAGE_HEADER_ON_IMAGE_SUBTITLE,
  PAGE_HEADER_ON_IMAGE_TITLE,
} from "tailwind/styles/pageHeader";

type ServiceDetailsHeroProps = {
  service: ExtendedService;
};

export const ServiceDetailsHero: React.FC<ServiceDetailsHeroProps> = ({
  service,
}) => (
  <div className="relative h-[22vh] sm:h-[24vh] lg:h-[28vh] overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/20" />
    <div className="absolute inset-0 flex items-center overflow-hidden">
      <div className={LAYOUT_STYLES.CONTENT_CONTAINER}>
        <div className="w-full mx-auto max-w-3xl py-2 sm:py-4">
          <HeroHeader
            greeting="Service Details"
            title={service.title}
            subtitle={service.text}
            alignment="center"
            greetingClassName={PAGE_HEADER_ON_IMAGE_GREETING}
            titleClassName={PAGE_HEADER_ON_IMAGE_TITLE}
            subtitleClassName={`${PAGE_HEADER_ON_IMAGE_SUBTITLE} mx-auto max-w-2xl`}
            icon={
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            }
          />
        </div>
      </div>
    </div>
  </div>
);
