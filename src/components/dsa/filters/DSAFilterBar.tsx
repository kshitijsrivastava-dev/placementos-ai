import type { DsaFilterBarState } from "@/hooks/dsa/types";
import { DSAAdvancedFilters } from "./DSAAdvancedFilters";
import { DSACoreFilters } from "./DSACoreFilters";
import { DSAFilterToolbar } from "./DSAFilterToolbar";
import { DSAListControls } from "./DSAListControls";

export function DSAFilterBar({
  filters,
  resultCount,
  totalCount,
  bookmarkCount,
  hasActiveFilters,
  hasActiveAdvancedFilters,
  advancedFilterCount,
  companyOptions,
  onSearchChange,
  onToggleDifficulty,
  onToggleStatus,
  onBookmarkedOnlyChange,
  onToggleCompany,
  onToggleImportanceTier,
  onSortByChange,
  pageSize,
  onPageSizeChange,
  onClear,
}: DsaFilterBarState & { pageSize: number; onPageSizeChange: (pageSize: number) => void }) {
  return (
    <div className="space-y-4">
      <DSAFilterToolbar
        filters={filters}
        bookmarkCount={bookmarkCount}
        onSearchChange={onSearchChange}
        onBookmarkedOnlyChange={onBookmarkedOnlyChange}
      />

      <div className="flex flex-col xl:flex-row xl:items-center gap-3 xl:gap-4">
        <div className="flex-1 min-w-0">
          <DSACoreFilters
            filters={filters}
            onToggleDifficulty={onToggleDifficulty}
            onToggleStatus={onToggleStatus}
          />
        </div>
        <DSAListControls
          sortBy={filters.sortBy}
          pageSize={pageSize}
          onSortByChange={onSortByChange}
          onPageSizeChange={onPageSizeChange}
        />
      </div>

      <DSAAdvancedFilters
        filters={filters}
        companyOptions={companyOptions}
        hasActiveAdvancedFilters={hasActiveAdvancedFilters}
        advancedFilterCount={advancedFilterCount}
        hasActiveFilters={hasActiveFilters}
        onToggleCompany={onToggleCompany}
        onToggleImportanceTier={onToggleImportanceTier}
        onClear={onClear}
      />

      <p className="text-[11px] font-mono text-muted-foreground">
        Showing <span className="text-foreground font-semibold">{resultCount}</span> of{" "}
        {totalCount} problems
      </p>
    </div>
  );
}
