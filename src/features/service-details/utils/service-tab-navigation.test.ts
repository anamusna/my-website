import { getAdjacentServiceTabId, getServiceTabProgress } from "features/service-details/utils/service-tab-navigation";

describe("service tab navigation", () => {
  const tabs = [
    { id: "web-development", label: "Web Development" },
    { id: "mobile-apps", label: "Mobile Apps" },
    { id: "consulting", label: "Consulting" },
  ];

  it("calculates tab progress from active tab", () => {
    expect(getServiceTabProgress(tabs, "web-development")).toBeCloseTo(33.33, 1);
    expect(getServiceTabProgress(tabs, "consulting")).toBe(100);
  });

  it("wraps to the previous tab at the start of the list", () => {
    expect(getAdjacentServiceTabId(tabs, "web-development", "previous")).toBe(
      "consulting",
    );
  });

  it("wraps to the next tab at the end of the list", () => {
    expect(getAdjacentServiceTabId(tabs, "consulting", "next")).toBe(
      "web-development",
    );
  });
});
