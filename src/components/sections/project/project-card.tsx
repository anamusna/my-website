import { projectCardImages } from "data/projects";
import React, { useMemo, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { getCaseStudyLink } from "utils/get-case-study-link";
import { P } from "../../../tailwind/components/elements/Typography";
import { SURFACE_CARD_INTERACTIVE } from "../../../tailwind/styles/surfaceCard";
import { TEXT_BODY, TEXT_CARD_TITLE } from "../../../tailwind/styles/textTokens";
import { Project } from "types/project";

interface ProjectCardProps {
  project: Project;
  className?: string;
}

const METRIC_BADGE =
  "px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm border border-white/15 bg-black/45 text-white/95";

const ProjectCard: React.FC<ProjectCardProps> = ({ project, className }) => {
  const projectImage = projectCardImages[project.image];
  const [showAllTags, setShowAllTags] = useState(false);
  const caseStudyLink = useMemo(() => getCaseStudyLink(project), [project]);

  const toggleTags = () => {
    setShowAllTags(!showAllTags);
  };

  const titleContent = (
    <h3
      className={`${TEXT_CARD_TITLE} group-hover:text-primary-light dark:group-hover:text-primary-dark transition-colors`}
    >
      {project.title}
    </h3>
  );

  const imageOverlay = (
    <div className="relative h-52 sm:h-56 overflow-hidden rounded-t-xl">
      <img
        src={projectImage}
        alt={project.title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/20 to-transparent" />

      <div className="absolute top-3 left-3 sm:top-4 sm:left-4 flex flex-wrap gap-2">
        {project.tags.slice(0, 2).map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-1 text-xs sm:text-sm text-white/95 bg-black/45 backdrop-blur-sm rounded-full border border-white/15"
          >
            {tag}
          </span>
        ))}
        {project.tags.length > 2 && (
          <span className="px-2.5 py-1 text-xs sm:text-sm text-white/95 bg-black/45 backdrop-blur-sm rounded-full border border-white/15">
            +{project.tags.length - 2}
          </span>
        )}
      </div>

      <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 flex justify-between gap-2 text-white">
        <span className={METRIC_BADGE}>{project.metrics?.primary || "N/A"}</span>
        <span className={METRIC_BADGE}>
          {project.metrics?.secondary || "N/A"}
        </span>
      </div>
    </div>
  );

  return (
    <article
      className={`${SURFACE_CARD_INTERACTIVE} h-full flex flex-col ${className ?? ""}`}
    >
      {caseStudyLink ? (
        <RouterLink to={caseStudyLink.href} className="block">
          {imageOverlay}
        </RouterLink>
      ) : (
        imageOverlay
      )}

      <div className="flex flex-col flex-1 p-5 sm:p-6 space-y-4">
        <div className="space-y-2">
          {caseStudyLink ? (
            <RouterLink to={caseStudyLink.href}>{titleContent}</RouterLink>
          ) : (
            titleContent
          )}

          <P className={`${TEXT_BODY} text-muted line-clamp-2`}>
            {project.summary}
          </P>
        </div>

        <div className="space-y-3 mt-auto">
          <button
            type="button"
            onClick={toggleTags}
            className="flex items-center justify-between w-full min-h-[44px] text-left text-sm font-medium text-body hover:text-primary-light dark:hover:text-primary-dark transition-colors duration-200"
            aria-expanded={showAllTags}
          >
            <span>Tech Stack ({project.tags.length})</span>
            <svg
              className={`w-4 h-4 transform transition-transform duration-200 ${
                showAllTags ? "rotate-180" : "rotate-0"
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              showAllTags ? "h-full opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="flex flex-wrap gap-2 pt-1">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 text-sm font-medium bg-gray-100 dark:bg-gray-800 text-body rounded-full border border-gray-200 dark:border-gray-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {caseStudyLink && (
          <RouterLink
            to={caseStudyLink.href}
            className="inline-flex items-center gap-2 min-h-[44px] text-primary-light dark:text-primary-dark group-hover:gap-3 transition-all duration-300"
          >
            {caseStudyLink.label}
            <span
              className="text-lg transform group-hover:translate-x-1 transition-transform duration-300"
              aria-hidden="true"
            >
              →
            </span>
          </RouterLink>
        )}
      </div>
    </article>
  );
};

export default ProjectCard;
