import { experiences } from "data/experiences";
import { projects } from "data/projects";
import { getCaseStudyLink } from "utils/get-case-study-link";

export type CareerJourneyEntry = {
  id: string | undefined;
  period: string;
  role: string;
  company: string;
  location: string;
  icon: string;
  description: string;
  achievements: string[];
  category: string;
  caseStudyLink: ReturnType<typeof getCaseStudyLink> | null;
};

export function mapCareerJourney(): CareerJourneyEntry[] {
  return (
    experiences?.map((experience) => {
      const linkedProject = experience.id
        ? projects.find((project) => project.id === experience.id)
        : undefined;

      return {
        id: experience.id,
        period: experience.period,
        role: experience.role ?? "",
        company: experience.company,
        location: experience.location,
        icon: experience.icon,
        description: experience.responsibilities[0] || "",
        achievements: experience.achievements,
        category: experience.category?.[0] || "leadership",
        caseStudyLink: linkedProject
          ? getCaseStudyLink(linkedProject)
          : null,
      };
    }) ?? []
  );
}
