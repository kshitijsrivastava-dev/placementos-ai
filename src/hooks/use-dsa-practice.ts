import { useCallback, useEffect, useMemo, useState } from "react";
import { DSA_QUESTIONS, DSA_TOPICS } from "@/data/dsa-mock";
import {
  computeCompanyStats,
  computeGlobalStats,
  computeTopicProgress,
  filterQuestions,
  importanceWeight,
} from "@/lib/dsa-utils";
import type {
  Difficulty,
  DSAFilters,
  ImportanceTier,
  QuestionStatus,
} from "@/types/dsa";

const BOOKMARKS_KEY = "placementos-dsa-bookmarks";

function readBookmarks(): Set<string> {
  try {
    const raw = localStorage.getItem(BOOKMARKS_KEY);
    if (!raw) return new Set();
    const parsed = JSON.parse(raw) as string[];
    return new Set(Array.isArray(parsed) ? parsed : []);
  } catch {
    return new Set();
  }
}

const DEFAULT_FILTERS: DSAFilters = {
  topicId: "all",
  difficulties: [],
  statuses: [],
  search: "",
  bookmarkedOnly: false,
  companies: [],
  importanceTiers: [],
  sortBy: "most-asked",
};

export function useDsaPractice() {
  const [filters, setFilters] = useState<DSAFilters>(DEFAULT_FILTERS);
  const [bookmarkedIds, setBookmarkedIds] = useState<Set<string>>(readBookmarks);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(12);

  const topicProgress = useMemo(
    () => computeTopicProgress(DSA_TOPICS, DSA_QUESTIONS),
    [],
  );

  const globalStats = useMemo(() => computeGlobalStats(DSA_QUESTIONS), []);

  const filteredQuestions = useMemo(
    () => filterQuestions(DSA_QUESTIONS, filters, bookmarkedIds),
    [filters, bookmarkedIds],
  );

  const sortedQuestions = useMemo(() => {
    const list = [...filteredQuestions];
    list.sort((a, b) => {
      switch (filters.sortBy) {
        case "most-asked":
          return (
            b.askedScore - a.askedScore ||
            b.acceptance - a.acceptance ||
            a.title.localeCompare(b.title)
          );
        case "most-important":
          return (
            importanceWeight(b.importanceTier) -
              importanceWeight(a.importanceTier) ||
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
  }, [filteredQuestions, filters.sortBy]);

  const pageCount = useMemo(() => {
    return Math.max(1, Math.ceil(sortedQuestions.length / pageSize));
  }, [sortedQuestions.length, pageSize]);

  useEffect(() => {
    // Keep page within bounds when filters change.
    setPage(1);
  }, [
    filters.topicId,
    filters.search,
    filters.bookmarkedOnly,
    filters.difficulties,
    filters.statuses,
    filters.companies,
    filters.importanceTiers,
    filters.sortBy,
  ]);

  useEffect(() => {
    if (page > pageCount) setPage(pageCount);
  }, [page, pageCount]);

  const pagedQuestions = useMemo(() => {
    const start = (page - 1) * pageSize;
    return sortedQuestions.slice(start, start + pageSize);
  }, [page, pageSize, sortedQuestions]);

  const companyOptions = useMemo(() => {
    const all = computeCompanyStats(DSA_QUESTIONS);
    return all;
  }, []);

  const toggleBookmark = useCallback((id: string) => {
    setBookmarkedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      localStorage.setItem(BOOKMARKS_KEY, JSON.stringify([...next]));
      return next;
    });
  }, []);

  const setTopic = useCallback((topicId: string | "all") => {
    setFilters((f) => ({ ...f, topicId }));
  }, []);

  const setSearch = useCallback((search: string) => {
    setFilters((f) => ({ ...f, search }));
  }, []);

  const toggleDifficulty = useCallback((difficulty: Difficulty) => {
    setFilters((f) => {
      const has = f.difficulties.includes(difficulty);
      return {
        ...f,
        difficulties: has
          ? f.difficulties.filter((d) => d !== difficulty)
          : [...f.difficulties, difficulty],
      };
    });
  }, []);

  const toggleStatus = useCallback((status: QuestionStatus) => {
    setFilters((f) => {
      const has = f.statuses.includes(status);
      return {
        ...f,
        statuses: has
          ? f.statuses.filter((s) => s !== status)
          : [...f.statuses, status],
      };
    });
  }, []);

  const setBookmarkedOnly = useCallback((bookmarkedOnly: boolean) => {
    setFilters((f) => ({ ...f, bookmarkedOnly }));
  }, []);

  const toggleCompany = useCallback((company: string) => {
    setFilters((f) => {
      const has = f.companies.includes(company);
      return {
        ...f,
        companies: has
          ? f.companies.filter((c) => c !== company)
          : [...f.companies, company],
      };
    });
  }, []);

  const toggleImportanceTier = useCallback((tier: ImportanceTier) => {
    setFilters((f) => {
      const has = f.importanceTiers.includes(tier);
      return {
        ...f,
        importanceTiers: has
          ? f.importanceTiers.filter((t) => t !== tier)
          : [...f.importanceTiers, tier],
      };
    });
  }, []);

  const setSortBy = useCallback((sortBy: DSAFilters["sortBy"]) => {
    setFilters((f) => ({ ...f, sortBy }));
  }, []);

  const setPageSizeSafe = useCallback((size: number) => {
    setPageSize(size);
    setPage(1);
  }, []);

  const clearFilters = useCallback(() => {
    setFilters(DEFAULT_FILTERS);
  }, []);

  const hasActiveFilters =
    filters.topicId !== "all" ||
    filters.difficulties.length > 0 ||
    filters.statuses.length > 0 ||
    filters.search.trim() !== "" ||
    filters.bookmarkedOnly ||
    filters.companies.length > 0 ||
    filters.importanceTiers.length > 0;

  return {
    filters,
    bookmarkedIds,
    topicProgress,
    globalStats,
    filteredQuestions,
    sortedQuestions,
    pagedQuestions,
    page,
    pageSize,
    pageCount,
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
    setPageSize: setPageSizeSafe,
    clearFilters,
    hasActiveFilters,
  };
}
