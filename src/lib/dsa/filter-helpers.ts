import { DEFAULT_DSA_FILTERS } from "./constants";
import type { DSAFilters } from "@/types/dsa";

export function hasActiveDsaFilters(filters: DSAFilters): boolean {
  return (
    filters.topicId !== DEFAULT_DSA_FILTERS.topicId ||
    filters.difficulties.length > 0 ||
    filters.statuses.length > 0 ||
    filters.search.trim() !== "" ||
    filters.bookmarkedOnly ||
    filters.companies.length > 0 ||
    filters.importanceTiers.length > 0
  );
}

/** Filter fields that should reset pagination when changed. */
export function getDsaPaginationResetKey(filters: DSAFilters): string {
  return [
    filters.topicId,
    filters.search,
    filters.bookmarkedOnly,
    filters.difficulties.join(","),
    filters.statuses.join(","),
    filters.companies.join(","),
    filters.importanceTiers.join(","),
    filters.sortBy,
  ].join("|");
}
