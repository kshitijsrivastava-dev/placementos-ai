import type { DsaTablePagination } from "@/hooks/dsa/types";

type DSATablePaginationProps = {
  pagination: DsaTablePagination;
  filteredCount: number;
};

export function DSATablePagination({ pagination, filteredCount }: DSATablePaginationProps) {
  const { page, pageCount, pageItemCount, goToPreviousPage, goToNextPage, canGoPrevious, canGoNext } =
    pagination;

  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
      <p className="text-[11px] font-mono text-muted-foreground">
        Page <span className="text-foreground font-semibold">{page} / {pageCount}</span>
        {" "}· showing <span className="text-foreground font-semibold">{pageItemCount}</span> of{" "}
        {filteredCount}
      </p>

      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={goToPreviousPage}
          disabled={!canGoPrevious}
          className="h-9 px-4 rounded-xl border border-border bg-surface text-muted-foreground hover:bg-surface-hover hover:text-foreground disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          Previous
        </button>
        <button
          type="button"
          onClick={goToNextPage}
          disabled={!canGoNext}
          className="h-9 px-4 rounded-xl border border-border bg-surface text-muted-foreground hover:bg-surface-hover hover:text-foreground disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          Next
        </button>
      </div>
    </div>
  );
}
