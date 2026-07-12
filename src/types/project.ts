export type ProjectRole =
  | "Frontend"
  | "Backend"
  | "Full-Stack"
  | "Mobile"
  | "DevOps"
  | "System Network Administrator";

export interface TechnicalInsight {
  title: string;
  description: string;
}

export interface ProjectOutcome {
  impact: string;
  businessResults: string[];
}

export interface Project {
  id: string;
  title: string;
  summary: string;
  description: string;
  image: string;
  profile: string;
  metrics?: {
    primary: string;
    secondary: string;
  };
  technicalInsights: TechnicalInsight[];
  outcome: ProjectOutcome;
  role: ProjectRole;
  tags: string[];
  techStack: string[];
  achievements: string[];
  problem: string;
  solution: string[];
  measurableResults?: {
    impact: string;
    businessResults: string[];
    metrics: {
      loadTimeReduction: string;
      accessFlexibility: string;
      dataSecurity: string;
    };
  };
  visuals?: {
    diagrams?: string[];
    screenshots: string[];
  };
  link: string;
  websiteUrl?: string;
  hasDetailLink?: boolean;
  caseStudyHref?: string;
  caseStudyLinkLabel?: string;
  lessonsLearned?: string[];
  technicalChallengesOvercome?: string[];
  technicalChallenges?: string[];
}
