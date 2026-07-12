import { ProjectDetailTab } from "../hooks/use-project-details";

export function getProjectTabProgress(
  tabs: ProjectDetailTab[],
  activeTabId: string,
): number {
  if (tabs.length === 0) {
    return 0;
  }

  const activeIndex = tabs.findIndex((tab) => tab.id === activeTabId);
  return ((activeIndex + 1) / tabs.length) * 100;
}

export function getAdjacentProjectTabId(
  tabs: ProjectDetailTab[],
  activeTabId: string,
  direction: "previous" | "next",
): string {
  if (tabs.length === 0) {
    return activeTabId;
  }

  const currentIndex = tabs.findIndex((tab) => tab.id === activeTabId);
  const safeIndex = currentIndex >= 0 ? currentIndex : 0;

  if (direction === "previous") {
    const previousIndex =
      safeIndex > 0 ? safeIndex - 1 : tabs.length - 1;
    return tabs[previousIndex].id;
  }

  const nextIndex = safeIndex < tabs.length - 1 ? safeIndex + 1 : 0;
  return tabs[nextIndex].id;
}
