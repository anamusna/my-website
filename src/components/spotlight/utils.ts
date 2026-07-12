import { SpotlightCategory, SPOTLIGHT_CATEGORY_ORDER } from "../../data/about/spotlightData";
import { SpotlightResult } from "../../hooks/useSpotlightSearch";

export const computeOrderedCategoryKeys = (
  groupedResults: Record<SpotlightCategory, SpotlightResult[]>,
  results: SpotlightResult[]
): SpotlightCategory[] => {
  const priorityCategories: SpotlightCategory[] = [];

  results.forEach((result) => {
    if (
      !priorityCategories.includes(result.category) &&
      (groupedResults[result.category]?.length || 0) > 0
    ) {
      priorityCategories.push(result.category);
    }
  });

  SPOTLIGHT_CATEGORY_ORDER.forEach((category) => {
    if (
      !priorityCategories.includes(category) &&
      (groupedResults[category]?.length || 0) > 0
    ) {
      priorityCategories.push(category);
    }
  });

  return priorityCategories;
};
