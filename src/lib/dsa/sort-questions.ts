import { importanceWeight } from "./question-utils";
import type { DSAFilters, DSAQuestion } from "@/types/dsa";

export function sortDsaQuestions(
  questions: DSAQuestion[],
  sortBy: DSAFilters["sortBy"],
): DSAQuestion[] {
  const list = [...questions];

  list.sort((a, b) => {
    switch (sortBy) {
      case "most-asked":
        return (
          b.askedScore - a.askedScore ||
          b.acceptance - a.acceptance ||
          a.title.localeCompare(b.title)
        );
      case "most-important":
        return (
          importanceWeight(b.importanceTier) - importanceWeight(a.importanceTier) ||
          b.askedScore - a.askedScore ||
          b.acceptance - a.acceptance
        );
      case "highest-acceptance":
        return b.acceptance - a.acceptance || b.askedScore - a.askedScore;
      case "recently-attempted":
        return a.lastAttemptedDaysAgo - b.lastAttemptedDaysAgo;
    }
  });

  return list;
}
