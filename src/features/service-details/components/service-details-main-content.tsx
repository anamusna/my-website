import {
  ClientUseCaseSection,
  ExpectedOutcomesSection,
  HowItWorksSection,
  SpecificationsSection,
  WhyItMattersSection,
} from "components/sections/service/service-sections";
import { LAYOUT_STYLES } from "data/heroData";
import { ExtendedService } from "data/services";
import React from "react";
import { SURFACE_CARD_ICON } from "tailwind/styles/surfaceCard";
import { parseServiceDescription } from "utils/parseServiceDescription";

type ServiceDetailsMainContentProps = {
  service: ExtendedService;
};

export const ServiceDetailsMainContent: React.FC<
  ServiceDetailsMainContentProps
> = ({ service }) => (
  <>
    <section className="relative" aria-labelledby="service-overview">
      <header className={LAYOUT_STYLES.SECTION_HEADER}>
        <div className={`${LAYOUT_STYLES.SECTION_ICON} ${SURFACE_CARD_ICON}`}>
          <svg
            className="w-3 h-3 sm:w-3.5 sm:h-3.5 lg:w-4 lg:h-4 text-indigo-600 dark:text-indigo-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
        </div>
        <h2
          id="service-overview"
          className={`${LAYOUT_STYLES.SECTION_TITLE} text-heading`}
        >
          Service Overview
        </h2>
      </header>

      <article>
        <div
          className={`${LAYOUT_STYLES.CARD_PADDING} surface-card border border-light-border/55 dark:border-dark-border/40 rounded-lg`}
        >
          <div className="leading-relaxed font-light max-w-none">
            {parseServiceDescription(service.fullDescription)}
          </div>
        </div>
      </article>
    </section>

    {service.whyItMatters.length > 0 && (
      <WhyItMattersSection reasons={service.whyItMatters} />
    )}

    {service.howItWorks.length > 0 && (
      <HowItWorksSection steps={service.howItWorks} />
    )}

    {service.specifications.length > 0 && (
      <SpecificationsSection specifications={service.specifications} />
    )}

    {service.outcomes.length > 0 && (
      <ExpectedOutcomesSection outcomes={service.outcomes} />
    )}

    {service.clientsUseCase && (
      <ClientUseCaseSection useCase={service.clientsUseCase} />
    )}

    {service.nonFunctionalProperties.length > 0 && (
      <section className="relative" aria-labelledby="non-functional-properties">
        <header className="flex items-center gap-2 mb-2 sm:mb-3">
          <div className={`w-7 h-7 sm:w-8 sm:h-8 ${SURFACE_CARD_ICON}`}>
            <svg
              className="w-4 h-4 text-emerald-600 dark:text-emerald-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h2
            id="non-functional-properties"
            className={`${LAYOUT_STYLES.SECTION_TITLE} text-heading`}
          >
            Technical Quality
          </h2>
        </header>

        <article>
          <div
            className={`${LAYOUT_STYLES.CARD_PADDING} surface-card border border-light-border/55 dark:border-dark-border/40 rounded-lg`}
          >
            <div className="grid gap-2 sm:gap-3">
              {service.nonFunctionalProperties.map((property) => (
                <div
                  key={property}
                  className="flex items-start gap-3 p-2 sm:p-3 surface-card rounded-lg border border-light-border/50 dark:border-dark-border/40"
                >
                  <div className="w-2 h-2 bg-emerald-500 dark:bg-emerald-400 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-body leading-relaxed">{property}</span>
                </div>
              ))}
            </div>
          </div>
        </article>
      </section>
    )}

    {(service.pricingModel.length > 0 || service.typicalTimeline.length > 0) && (
      <section className="relative" aria-labelledby="pricing-timeline">
        <header className="flex items-center gap-2 mb-2 sm:mb-3">
          <div className={`w-7 h-7 sm:w-8 sm:h-8 ${SURFACE_CARD_ICON}`}>
            <svg
              className="w-4 h-4 text-blue-600 dark:text-blue-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
              />
            </svg>
          </div>
          <h2
            id="pricing-timeline"
            className={`${LAYOUT_STYLES.SECTION_TITLE} text-heading`}
          >
            Pricing & Timeline
          </h2>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {service.pricingModel.length > 0 && (
            <article className="p-3 sm:p-4 surface-card border border-light-border/55 dark:border-dark-border/40 rounded-lg">
              <h3 className="font-semibold text-heading mb-2 sm:mb-3">
                Pricing Model
              </h3>
              <div className="space-y-2">
                {service.pricingModel.map((model) => (
                  <div key={model} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-indigo-500 dark:bg-indigo-400 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-body">{model}</span>
                  </div>
                ))}
              </div>
            </article>
          )}

          {service.typicalTimeline.length > 0 && (
            <article className="p-3 sm:p-4 surface-card border border-light-border/55 dark:border-dark-border/40 rounded-lg">
              <h3 className="font-semibold text-heading mb-2 sm:mb-3">
                Typical Timeline
              </h3>
              <div className="space-y-2">
                {service.typicalTimeline.map((phase) => (
                  <div key={phase} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-indigo-500 dark:bg-indigo-400 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-body">{phase}</span>
                  </div>
                ))}
              </div>
            </article>
          )}
        </div>
      </section>
    )}
  </>
);
