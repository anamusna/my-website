import { LAYOUT_STYLES } from "data/heroData";
import React from "react";
import { SURFACE_CARD_ICON, SURFACE_CARD_STICKY } from "tailwind/styles/surfaceCard";
import { Project } from "types/project";

type ProjectTechStackBarProps = {
  project: Project;
};

export const ProjectTechStackBar: React.FC<ProjectTechStackBarProps> = ({
  project,
}) => (
  <div className={SURFACE_CARD_STICKY}>
    <div className={`${LAYOUT_STYLES.CONTENT_CONTAINER} min-w-0`}>
      <div className="py-1.5 sm:py-2 min-w-0">
        <div
          role="list"
          aria-label={`${project.title} tech stack`}
          className="flex w-full min-w-0 max-w-full flex-nowrap items-center gap-1.5 sm:gap-2 overflow-x-auto overflow-y-hidden overscroll-x-contain scroll-smooth touch-pan-x scrollbar-hide pr-2 sm:pr-3 [-webkit-overflow-scrolling:touch]"
        >
          {project.techStack.map((tech, index) => (
            <span
              key={tech}
              role="listitem"
              className={`group relative shrink-0 px-2 py-1 ${SURFACE_CARD_ICON} text-sm font-medium text-body rounded-lg hover:border-indigo-300/50 dark:hover:border-indigo-400/50 hover:text-indigo-600 dark:hover:text-indigo-400 surface-card--interactive cursor-default whitespace-nowrap`}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <span className="relative z-10">{tech}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 via-violet-500/3 to-purple-500/5 dark:from-indigo-400/8 dark:via-violet-400/5 dark:to-purple-400/8 rounded-lg sm:rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
);
