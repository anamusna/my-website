import React from "react";
import { P } from "tailwind/components/elements/Typography";
import { SURFACE_CARD_ICON } from "tailwind/styles/surfaceCard";
import { TEXT_DETAIL_SECTION_TITLE } from "tailwind/styles/textTokens";
import { ProjectSectionProps } from "../../types/project-section-props";

export const ProjectSolutionSection: React.FC<ProjectSectionProps> = ({
  project,
}) => (
  <section className="relative">
    <div className="flex items-center gap-2 mb-3 sm:mb-4">
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
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      </div>
      <h2 className={TEXT_DETAIL_SECTION_TITLE}>Our Solution</h2>
    </div>

    <div className="space-y-3 sm:space-y-4">
      {project.solution.map((solutionPoint) => (
        <div
          key={solutionPoint}
          className="surface-card surface-card--interactive border border-light-border/55 dark:border-dark-border/40 border-l-2 border-l-emerald-500/40 dark:border-l-emerald-400/40 rounded-lg p-3 sm:p-4"
        >
          <P className="text-sm sm:text-base text-body leading-relaxed">
            {solutionPoint}
          </P>
        </div>
      ))}
    </div>
  </section>
);
