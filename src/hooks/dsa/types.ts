import type { CompanyStats, DSAFilters, DSAGlobalStats, DSAQuestion, TopicProgress } from "@/types/dsa";
import type { Difficulty, ImportanceTier, QuestionStatus } from "@/types/dsa";

export type DsaFilterActions = {
  setSearch: (search: string) => void;
  setTopic: (topicId: string | "all") => void;
  toggleDifficulty: (difficulty: Difficulty) => void;
  toggleStatus: (status: QuestionStatus) => void;
  setBookmarkedOnly: (bookmarkedOnly: boolean) => void;
  toggleCompany: (company: string) => void;
  toggleImportanceTier: (tier: ImportanceTier) => void;
  setSortBy: (sortBy: DSAFilters["sortBy"]) => void;
  clearFilters: () => void;
};

export type DsaFilterBarState = DsaFilterActions & {
  filters: DSAFilters;
  resultCount: number;
  totalCount: number;
  bookmarkCount: number;
  hasActiveFilters: boolean;
  hasActiveAdvancedFilters: boolean;
  advancedFilterCount: number;
  companyOptions: CompanyStats[];
};

export type DsaTablePagination = {
  page: number;
  pageSize: number;
  pageCount: number;
  pageItemCount: number;
  setPage: (page: number) => void;
  setPageSize: (size: number) => void;
  goToPreviousPage: () => void;
  goToNextPage: () => void;
  canGoPrevious: boolean;
  canGoNext: boolean;
};

export type DsaTableState = {
  questions: DSAQuestion[];
  filteredCount: number;
  bookmarkedIds: Set<string>;
  selectedCompanies: string[];
  onToggleBookmark: (id: string) => void;
  onToggleCompany: (company: string) => void;
  pagination: DsaTablePagination;
};

export type DsaPracticeState = {
  filters: DSAFilters;
  filterBar: DsaFilterBarState;
  table: DsaTableState;
  topicProgress: TopicProgress[];
  globalStats: DSAGlobalStats;
  selectedTopicName: string | null;
} & DsaFilterActions & {
  bookmarkedIds: Set<string>;
  bookmarkCount: number;
  filteredQuestions: DSAQuestion[];
  pagedQuestions: DSAQuestion[];
  page: number;
  pageSize: number;
  pageCount: number;
  pageItemCount: number;
  companyOptions: CompanyStats[];
  totalQuestions: number;
  setPage: (page: number) => void;
  setPageSize: (size: number) => void;
  toggleBookmark: (id: string) => void;
  hasActiveFilters: boolean;
};
