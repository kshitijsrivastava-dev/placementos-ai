import { filterQuestions } from "./question-utils";
import { sortDsaQuestions } from "./sort-questions";
import type { DSAFilters, DSAQuestion } from "@/types/dsa";

export type DsaQueryInput = {
  questions: DSAQuestion[];
  filters: DSAFilters;
  bookmarkedIds: Set<string>;
};

export type DsaQueryResult = {
  filtered: DSAQuestion[];
  sorted: DSAQuestion[];
};

/**
 * Client-side filter + sort pipeline.
 * Replace this module's internals with API calls when backend is ready.
 */
export function applyDsaQuery({
  questions,
  filters,
  bookmarkedIds,
}: DsaQueryInput): DsaQueryResult {
  const filtered = filterQuestions(questions, filters, bookmarkedIds);
  const sorted = sortDsaQuestions(filtered, filters.sortBy);
  return { filtered, sorted };
}
