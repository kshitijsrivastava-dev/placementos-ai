import { useCallback, useMemo, useState } from "react";
import { DEFAULT_DSA_FILTERS } from "@/lib/dsa/constants";
import { getDsaPaginationResetKey, hasActiveDsaFilters } from "@/lib/dsa/filter-helpers";
import { toggleArrayItem } from "@/lib/state/toggle-array-item";
import type { Difficulty, DSAFilters, ImportanceTier, QuestionStatus } from "@/types/dsa";

export function useDsaFilters() {
  const [filters, setFilters] = useState<DSAFilters>(DEFAULT_DSA_FILTERS);

  const paginationResetKey = useMemo(
    () => getDsaPaginationResetKey(filters),
    [filters],
  );

  const setTopic = useCallback((topicId: string | "all") => {
    setFilters((current) => ({ ...current, topicId }));
  }, []);

  const setSearch = useCallback((search: string) => {
    setFilters((current) => ({ ...current, search }));
  }, []);

  const toggleDifficulty = useCallback((difficulty: Difficulty) => {
    setFilters((current) => ({
      ...current,
      difficulties: toggleArrayItem(current.difficulties, difficulty),
    }));
  }, []);

  const toggleStatus = useCallback((status: QuestionStatus) => {
    setFilters((current) => ({
      ...current,
      statuses: toggleArrayItem(current.statuses, status),
    }));
  }, []);

  const setBookmarkedOnly = useCallback((bookmarkedOnly: boolean) => {
    setFilters((current) => ({ ...current, bookmarkedOnly }));
  }, []);

  const toggleCompany = useCallback((company: string) => {
    setFilters((current) => ({
      ...current,
      companies: toggleArrayItem(current.companies, company),
    }));
  }, []);

  const toggleImportanceTier = useCallback((tier: ImportanceTier) => {
    setFilters((current) => ({
      ...current,
      importanceTiers: toggleArrayItem(current.importanceTiers, tier),
    }));
  }, []);

  const setSortBy = useCallback((sortBy: DSAFilters["sortBy"]) => {
    setFilters((current) => ({ ...current, sortBy }));
  }, []);

  const clearFilters = useCallback(() => {
    setFilters(DEFAULT_DSA_FILTERS);
  }, []);

  const hasActiveFilters = useMemo(() => hasActiveDsaFilters(filters), [filters]);

  return {
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
  };
}
