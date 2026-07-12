import { getCaseStudyLink } from "./get-case-study-link";

describe("getCaseStudyLink", () => {
  it("returns project detail link when hasDetailLink is true", () => {
    expect(getCaseStudyLink({ id: "zula", hasDetailLink: true })).toEqual({
      href: "/projects/zula",
      label: "View Case Study",
    });
  });

  it("returns career fallback when case study is private", () => {
    expect(
      getCaseStudyLink({
        id: "quincy",
        hasDetailLink: false,
        caseStudyHref: "/career#career-leadership",
        caseStudyLinkLabel: "View on career timeline",
      }),
    ).toEqual({
      href: "/career#career-leadership",
      label: "View on career timeline",
    });
  });

  it("returns null when no public or fallback link exists", () => {
    expect(getCaseStudyLink({ id: "quincy", hasDetailLink: false })).toBeNull();
  });
});
