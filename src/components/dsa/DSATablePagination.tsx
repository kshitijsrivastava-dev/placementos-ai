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
      <p className="text-[11px] font-mono text-muted-foreground text-center sm:text-left">
        Page <span className="text-foreground font-medium">{page} / {pageCount}</span>
        {" "}· showing <span className="text-foreground font-medium">{pageItemCount}</span> of{" "}
        {filteredCount}
      </p>

      <div className="flex items-center gap-2 w-full sm:w-auto">
        <button
          type="button"
          onClick={goToPreviousPage}
          disabled={!canGoPrevious}
          className="flex-1 sm:flex-none h-11 sm:h-9 px-4 rounded-xl border border-border bg-surface text-sm text-muted-foreground hover:bg-surface-hover hover:text-foreground disabled:opacity-50 disabled:cursor-not-allowed transition-colors touch-manipulation"
        >
          Previous
        </button>
        <button
          type="button"
          onClick={goToNextPage}
          disabled={!canGoNext}
          className="flex-1 sm:flex-none h-11 sm:h-9 px-4 rounded-xl border border-border bg-surface text-sm text-muted-foreground hover:bg-surface-hover hover:text-foreground disabled:opacity-50 disabled:cursor-not-allowed transition-colors touch-manipulation"
        >
          Next
        </button>
      </div>
    </div>
  );
}
