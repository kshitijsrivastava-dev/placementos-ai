import { useCallback, useEffect, useMemo, useState } from "react";
import {
  clampPage,
  getPageCount,
  getPageItemCount,
  paginateSlice,
} from "@/lib/pagination";

type UsePaginationOptions = {
  totalItems: number;
  initialPageSize?: number;
  /** When this value changes, the current page resets to 1. */
  resetPageKey?: string;
};

export function usePagination({
  totalItems,
  initialPageSize = 12,
  resetPageKey,
}: UsePaginationOptions) {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSizeState] = useState(initialPageSize);

  const pageCount = useMemo(
    () => getPageCount(totalItems, pageSize),
    [totalItems, pageSize],
  );

  useEffect(() => {
    setPage(1);
  }, [resetPageKey]);

  useEffect(() => {
    setPage((current) => clampPage(current, pageCount));
  }, [pageCount]);

  const setPageSize = useCallback((size: number) => {
    setPageSizeState(size);
    setPage(1);
  }, []);

  const pageItemCount = useMemo(
    () => getPageItemCount(page, pageSize, totalItems),
    [page, pageSize, totalItems],
  );

  const paginate = useCallback(
    <T,>(items: T[]) => paginateSlice(items, page, pageSize),
    [page, pageSize],
  );

  return {
    page,
    pageSize,
    pageCount,
    pageItemCount,
    setPage,
    setPageSize,
    paginate,
  };
}
