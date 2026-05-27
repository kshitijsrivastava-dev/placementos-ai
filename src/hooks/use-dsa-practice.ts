import { useCallback, useMemo, useState } from "react";
import { DSA_QUESTIONS, DSA_TOPICS } from "@/data/dsa-mock";
import {
  computeGlobalStats,
  computeTopicProgress,
  filterQuestions,
} from "@/lib/dsa-utils";
import type { Difficulty, DSAFilters, QuestionStatus } from "@/types/dsa";

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
};

export function useDsaPractice() {
  const [filters, setFilters] = useState<DSAFilters>(DEFAULT_FILTERS);
  const [bookmarkedIds, setBookmarkedIds] = useState<Set<string>>(readBookmarks);

  const topicProgress = useMemo(
    () => computeTopicProgress(DSA_TOPICS, DSA_QUESTIONS),
    [],
  );

  const globalStats = useMemo(() => computeGlobalStats(DSA_QUESTIONS), []);

  const filteredQuestions = useMemo(
    () => filterQuestions(DSA_QUESTIONS, filters, bookmarkedIds),
    [filters, bookmarkedIds],
  );

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

  const clearFilters = useCallback(() => {
    setFilters(DEFAULT_FILTERS);
  }, []);

  const hasActiveFilters =
    filters.topicId !== "all" ||
    filters.difficulties.length > 0 ||
    filters.statuses.length > 0 ||
    filters.search.trim() !== "" ||
    filters.bookmarkedOnly;

  return {
    filters,
    bookmarkedIds,
    topicProgress,
    globalStats,
    filteredQuestions,
    totalQuestions: DSA_QUESTIONS.length,
    toggleBookmark,
    setTopic,
    setSearch,
    toggleDifficulty,
    toggleStatus,
    setBookmarkedOnly,
    clearFilters,
    hasActiveFilters,
  };
}
