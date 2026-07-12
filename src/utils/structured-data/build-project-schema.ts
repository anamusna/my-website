import { SITE_URL } from "data/site-config";
import { Project } from "types/project";

export function buildProjectSchema(project: Project) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.summary,
    url: `${SITE_URL}/projects/${project.id}`,
    author: {
      "@type": "Person",
      name: "Ansumana Darboe",
      url: SITE_URL,
    },
    about: project.problem,
    keywords: project.techStack.join(", "),
    image: project.visuals?.screenshots?.[0]
      ? `${SITE_URL}${project.visuals.screenshots[0]}`
      : `${SITE_URL}/images/ansu.jpg`,
  };
}
