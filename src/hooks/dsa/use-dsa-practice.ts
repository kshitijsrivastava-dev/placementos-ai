import { useMemo } from "react";
import { DSA_QUESTIONS, DSA_TOPICS, getTopicById } from "@/data/dsa-mock";
import {
  computeCompanyStats,
  computeGlobalStats,
  computeTopicProgress,
} from "@/lib/dsa/question-utils";
import {
  getAdvancedDsaFilterCount,
  hasActiveAdvancedDsaFilters,
} from "@/lib/dsa/filter-helpers";
import { useDsaBookmarks } from "./use-dsa-bookmarks";
import { useDsaFilters } from "./use-dsa-filters";
import { useDsaQuery } from "./use-dsa-query";
import { useDsaTable } from "./use-dsa-table";
import type { DsaPracticeState } from "./types";

export function useDsaPractice(): DsaPracticeState {
  const filterHook = useDsaFilters();
  const { bookmarkedIds, bookmarkCount, toggleBookmark } = useDsaBookmarks();

  const topicProgress = useMemo(
    () => computeTopicProgress(DSA_TOPICS, DSA_QUESTIONS),
    [],
  );

  const globalStats = useMemo(() => computeGlobalStats(DSA_QUESTIONS), []);
  const companyOptions = useMemo(() => computeCompanyStats(DSA_QUESTIONS), []);

  const { filtered, sorted } = useDsaQuery({
    questions: DSA_QUESTIONS,
    filters: filterHook.filters,
    bookmarkedIds,
  });

  const table = useDsaTable({
    questions: sorted,
    filteredCount: filtered.length,
    paginationResetKey: filterHook.paginationResetKey,
    bookmarkedIds,
    selectedCompanies: filterHook.filters.companies,
    onToggleBookmark: toggleBookmark,
    onToggleCompany: filterHook.toggleCompany,
  });

  const selectedTopicName = useMemo(() => {
    if (filterHook.filters.topicId === "all") return null;
    return getTopicById(filterHook.filters.topicId)?.name ?? null;
  }, [filterHook.filters.topicId]);

  const filterActions = {
    setSearch: filterHook.setSearch,
    setTopic: filterHook.setTopic,
    toggleDifficulty: filterHook.toggleDifficulty,
    toggleStatus: filterHook.toggleStatus,
    setBookmarkedOnly: filterHook.setBookmarkedOnly,
    toggleCompany: filterHook.toggleCompany,
    toggleImportanceTier: filterHook.toggleImportanceTier,
    setSortBy: filterHook.setSortBy,
    clearFilters: filterHook.clearFilters,
  };

  const filterBar = {
    filters: filterHook.filters,
    resultCount: filtered.length,
    totalCount: DSA_QUESTIONS.length,
    bookmarkCount,
    hasActiveFilters: filterHook.hasActiveFilters,
    hasActiveAdvancedFilters: hasActiveAdvancedDsaFilters(filterHook.filters),
    advancedFilterCount: getAdvancedDsaFilterCount(filterHook.filters),
    companyOptions,
    ...filterActions,
  };

  return {
    filters: filterHook.filters,
    filterBar,
    table,
    topicProgress,
    globalStats,
    selectedTopicName,
    ...filterActions,
    bookmarkedIds,
    bookmarkCount,
    filteredQuestions: filtered,
    pagedQuestions: table.questions,
    page: table.pagination.page,
    pageSize: table.pagination.pageSize,
    pageCount: table.pagination.pageCount,
    pageItemCount: table.pagination.pageItemCount,
    companyOptions,
    totalQuestions: DSA_QUESTIONS.length,
    setPage: table.pagination.setPage,
    setPageSize: table.pagination.setPageSize,
    toggleBookmark,
    hasActiveFilters: filterHook.hasActiveFilters,
  };
}
