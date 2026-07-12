export type CaseStudyLinkSource = {
  id: string;
  hasDetailLink?: boolean;
  caseStudyHref?: string;
  caseStudyLinkLabel?: string;
};

export type CaseStudyLink = {
  href: string;
  label: string;
};

export function getCaseStudyLink(
  source: CaseStudyLinkSource,
): CaseStudyLink | null {
  if (source.hasDetailLink) {
    return {
      href: `/projects/${source.id}`,
      label: "View Case Study",
    };
  }

  if (source.caseStudyHref) {
    return {
      href: source.caseStudyHref,
      label: source.caseStudyLinkLabel ?? "View on career page",
    };
  }

  return null;
}
