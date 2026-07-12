import { projects } from "data/projects";
import { Project } from "types/project";

export function getVisibleProjects(): Project[] {
  return projects.filter((project) => project.hasDetailLink === true);
}
