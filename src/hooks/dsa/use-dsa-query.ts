import { useMemo } from "react";
import { applyDsaQuery } from "@/lib/dsa/query-pipeline";
import type { DSAQuestion } from "@/types/dsa";
import type { DSAFilters } from "@/types/dsa";

type UseDsaQueryOptions = {
  questions: DSAQuestion[];
  filters: DSAFilters;
  bookmarkedIds: Set<string>;
};

export function useDsaQuery({ questions, filters, bookmarkedIds }: UseDsaQueryOptions) {
  return useMemo(
    () => applyDsaQuery({ questions, filters, bookmarkedIds }),
    [questions, filters, bookmarkedIds],
  );
}
