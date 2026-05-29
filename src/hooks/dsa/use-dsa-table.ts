import { useCallback, useMemo } from "react";
import { usePagination } from "@/hooks/use-pagination";
import type { DSAQuestion } from "@/types/dsa";
import type { DsaTablePagination, DsaTableState } from "./types";

type UseDsaTableOptions = {
  questions: DSAQuestion[];
  filteredCount: number;
  paginationResetKey: string;
  bookmarkedIds: Set<string>;
  selectedCompanies: string[];
  onToggleBookmark: (id: string) => void;
  onToggleCompany: (company: string) => void;
  initialPageSize?: number;
};

export function useDsaTable({
  questions,
  filteredCount,
  paginationResetKey,
  bookmarkedIds,
  selectedCompanies,
  onToggleBookmark,
  onToggleCompany,
  initialPageSize = 12,
}: UseDsaTableOptions): DsaTableState {
  const {
    page,
    pageSize,
    pageCount,
    pageItemCount,
    setPage,
    setPageSize,
    paginate,
  } = usePagination({
    totalItems: questions.length,
    initialPageSize,
    resetPageKey: paginationResetKey,
  });

  const pagedQuestions = useMemo(() => paginate(questions), [paginate, questions]);

  const goToPreviousPage = useCallback(() => {
    setPage(Math.max(1, page - 1));
  }, [page, setPage]);

  const goToNextPage = useCallback(() => {
    setPage(Math.min(pageCount, page + 1));
  }, [page, pageCount, setPage]);

  const pagination: DsaTablePagination = {
    page,
    pageSize,
    pageCount,
    pageItemCount,
    setPage,
    setPageSize,
    goToPreviousPage,
    goToNextPage,
    canGoPrevious: page > 1,
    canGoNext: page < pageCount,
  };

  return {
    questions: pagedQuestions,
    filteredCount,
    bookmarkedIds,
    selectedCompanies,
    onToggleBookmark,
    onToggleCompany,
    pagination,
  };
}
