import React from "react";
import { P } from "tailwind/components/elements/Typography";
import { SURFACE_CARD_ICON } from "tailwind/styles/surfaceCard";
import { TEXT_CARD_TITLE, TEXT_DETAIL_SECTION_TITLE } from "tailwind/styles/textTokens";
import { ProjectSectionProps } from "../../types/project-section-props";

export const ProjectTechnicalInsightsSection: React.FC<ProjectSectionProps> = ({
  project,
}) => (
  <section className="relative">
    <div className="flex items-center gap-2 mb-3 sm:mb-4">
      <div className={`w-7 h-7 sm:w-8 sm:h-8 ${SURFACE_CARD_ICON}`}>
        <svg
          className="w-4 h-4 text-teal-600 dark:text-teal-400"
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
      <h2 className={TEXT_DETAIL_SECTION_TITLE}>Technical Insights</h2>
    </div>

    <div className="space-y-3 sm:space-y-4">
      {project.technicalInsights.map((insight, index) => (
        <div
          key={insight.title}
          className="surface-card surface-card--interactive border border-light-border/55 dark:border-dark-border/40 border-l-2 border-l-teal-500/40 dark:border-l-teal-400/40 rounded-lg p-3 sm:p-4"
        >
          <h3 className={`${TEXT_CARD_TITLE} text-teal-700 dark:text-teal-300 mb-2`}>
            {index + 1}. {insight.title}
          </h3>
          <P className="text-sm sm:text-base text-body leading-relaxed">
            {insight.description}
          </P>
        </div>
      ))}
    </div>
  </section>
);
