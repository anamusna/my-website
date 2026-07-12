import React from "react";
import { P } from "tailwind/components/elements/Typography";
import { SURFACE_CARD_ICON } from "tailwind/styles/surfaceCard";
import { TEXT_CARD_TITLE, TEXT_DETAIL_SECTION_TITLE } from "tailwind/styles/textTokens";
import { ProjectSectionProps } from "../../types/project-section-props";

const ChallengeList: React.FC<{
  title: string;
  items: string[];
  accentClass: string;
}> = ({ title, items, accentClass }) => (
  <div>
    <h3 className={`${TEXT_CARD_TITLE} mb-3 sm:mb-4`}>{title}</h3>
    <div className="space-y-3">
      {items.map((challenge) => (
        <div
          key={challenge}
          className={`surface-card surface-card--interactive border border-light-border/55 dark:border-dark-border/40 border-l-2 ${accentClass} rounded-lg p-3 sm:p-4`}
        >
          <P className="text-sm sm:text-base text-body leading-relaxed">
            {challenge}
          </P>
        </div>
      ))}
    </div>
  </div>
);

export const ProjectTechnicalChallengesSection: React.FC<ProjectSectionProps> = ({
  project,
}) => {
  if (
    !project.technicalChallengesOvercome?.length &&
    !project.technicalChallenges?.length
  ) {
    return null;
  }

  return (
    <section className="relative">
      <div className="flex items-center gap-2 mb-3 sm:mb-4">
        <div className={`w-7 h-7 sm:w-8 sm:h-8 ${SURFACE_CARD_ICON}`}>
          <svg
            className="w-4 h-4 text-rose-600 dark:text-rose-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
            />
          </svg>
        </div>
        <h2 className={TEXT_DETAIL_SECTION_TITLE}>Technical Challenges</h2>
      </div>

      <div className="space-y-6 sm:space-y-8">
        {project.technicalChallengesOvercome && (
          <ChallengeList
            title="Challenges I Overcame"
            items={project.technicalChallengesOvercome}
            accentClass="border-l-rose-500/40 dark:border-l-rose-400/40"
          />
        )}

        {project.technicalChallenges && (
          <ChallengeList
            title="Ongoing Technical Challenges"
            items={project.technicalChallenges}
            accentClass="border-l-purple-500/40 dark:border-l-purple-400/40"
          />
        )}
      </div>
    </section>
  );
};
