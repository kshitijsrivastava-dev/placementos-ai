import { useMemo } from "react";
import { DSA_QUESTIONS, DSA_TOPICS } from "@/data/dsa-mock";
import {
  computeCompanyStats,
  computeGlobalStats,
  computeTopicProgress,
  filterQuestions,
} from "@/lib/dsa/question-utils";
import { sortDsaQuestions } from "@/lib/dsa/sort-questions";
import { usePagination } from "@/hooks/use-pagination";
import { useDsaBookmarks } from "./use-dsa-bookmarks";
import { useDsaFilters } from "./use-dsa-filters";

export function useDsaPractice() {
  const {
    filters,
    paginationResetKey,
    hasActiveFilters,
    setTopic,
    setSearch,
    toggleDifficulty,
    toggleStatus,
    setBookmarkedOnly,
    toggleCompany,
    toggleImportanceTier,
    setSortBy,
    clearFilters,
  } = useDsaFilters();

  const { bookmarkedIds, bookmarkCount, toggleBookmark } = useDsaBookmarks();

  const topicProgress = useMemo(
    () => computeTopicProgress(DSA_TOPICS, DSA_QUESTIONS),
    [],
  );

  const globalStats = useMemo(() => computeGlobalStats(DSA_QUESTIONS), []);

  const companyOptions = useMemo(() => computeCompanyStats(DSA_QUESTIONS), []);

  const filteredQuestions = useMemo(
    () => filterQuestions(DSA_QUESTIONS, filters, bookmarkedIds),
    [filters, bookmarkedIds],
  );

  const sortedQuestions = useMemo(
    () => sortDsaQuestions(filteredQuestions, filters.sortBy),
    [filteredQuestions, filters.sortBy],
  );

  const {
    page,
    pageSize,
    pageCount,
    pageItemCount,
    setPage,
    setPageSize,
    paginate,
  } = usePagination({
    totalItems: sortedQuestions.length,
    initialPageSize: 12,
    resetPageKey: paginationResetKey,
  });

  const pagedQuestions = useMemo(
    () => paginate(sortedQuestions),
    [paginate, sortedQuestions],
  );

  return {
    filters,
    bookmarkedIds,
    bookmarkCount,
    topicProgress,
    globalStats,
    filteredQuestions,
    sortedQuestions,
    pagedQuestions,
    page,
    pageSize,
    pageCount,
    pageItemCount,
    companyOptions,
    totalQuestions: DSA_QUESTIONS.length,
    setPage,
    toggleBookmark,
    setTopic,
    setSearch,
    toggleDifficulty,
    toggleStatus,
    setBookmarkedOnly,
    toggleCompany,
    toggleImportanceTier,
    setSortBy,
    setPageSize,
    clearFilters,
    hasActiveFilters,
  };
}
