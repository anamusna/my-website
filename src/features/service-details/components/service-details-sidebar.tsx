import { ToolsSection } from "components/sections/service/service-sections";
import { LAYOUT_STYLES } from "data/heroData";
import { ExtendedService } from "data/services";
import React from "react";
import { SURFACE_CARD_ICON } from "tailwind/styles/surfaceCard";
import { TEXT_DETAIL_SECTION_TITLE } from "tailwind/styles/textTokens";

type ServiceDetailsSidebarProps = {
  service: ExtendedService;
};

export const ServiceDetailsSidebar: React.FC<ServiceDetailsSidebarProps> = ({
  service,
}) => (
  <aside className="lg:col-span-1">
    <div className="sticky top-20 space-y-3 sm:space-y-4">
      {service.tools.length > 0 && <ToolsSection tools={service.tools} />}

      {service.successMetrics.length > 0 && (
        <div
          className={`${LAYOUT_STYLES.CARD_PADDING} surface-card border border-light-border/55 dark:border-dark-border/40 rounded-lg`}
        >
          <div className={LAYOUT_STYLES.SECTION_HEADER}>
            <div className={`${LAYOUT_STYLES.SECTION_ICON} ${SURFACE_CARD_ICON}`}>
              <svg
                className="w-4 h-4 text-green-600 dark:text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </div>
            <h2 className={`${TEXT_DETAIL_SECTION_TITLE} text-base sm:text-lg`}>
              Success Metrics
            </h2>
          </div>

          <div className="space-y-2 sm:space-y-3">
            {service.successMetrics.map((metric) => (
              <div
                key={metric}
                className="p-2 sm:p-3 surface-card rounded-lg text-body border border-light-border/55 dark:border-dark-border/40"
              >
                {metric}
              </div>
            ))}
          </div>
        </div>
      )}

      {service.industryFit.length > 0 && (
        <div
          className={`${LAYOUT_STYLES.CARD_PADDING} surface-card border border-light-border/55 dark:border-dark-border/40 rounded-lg`}
        >
          <div className={LAYOUT_STYLES.SECTION_HEADER}>
            <div className={`${LAYOUT_STYLES.SECTION_ICON} ${SURFACE_CARD_ICON}`}>
              <svg
                className="w-4 h-4 text-purple-600 dark:text-purple-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
            </div>
            <h2 className={`${TEXT_DETAIL_SECTION_TITLE} text-base sm:text-lg`}>
              Industry Fit
            </h2>
          </div>

          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {service.industryFit.map((industry) => (
              <span
                key={industry}
                className="inline-flex items-center min-h-[32px] px-2 sm:px-2.5 py-1 sm:py-1.5 surface-card rounded-md text-sm font-medium border border-light-border/55 dark:border-dark-border/40 text-body"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  </aside>
);
