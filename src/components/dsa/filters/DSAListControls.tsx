import {
  DSA_PAGE_SIZE_OPTIONS,
  DSA_SORT_OPTIONS,
} from "@/lib/dsa/filter-config";
import type { DSAFilters } from "@/types/dsa";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type DSAListControlsProps = {
  sortBy: DSAFilters["sortBy"];
  pageSize: number;
  onSortByChange: (sortBy: DSAFilters["sortBy"]) => void;
  onPageSizeChange: (pageSize: number) => void;
};

export function DSAListControls({
  sortBy,
  pageSize,
  onSortByChange,
  onPageSizeChange,
}: DSAListControlsProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-2 items-stretch sm:items-center shrink-0 w-full sm:w-auto">
      <div className="sm:min-w-[180px] flex-1 sm:flex-none">
        <Select value={sortBy} onValueChange={onSortByChange}>
          <SelectTrigger className="h-11 sm:h-10 rounded-xl bg-surface border-border">
            <SelectValue placeholder="Sort" />
          </SelectTrigger>
          <SelectContent>
            {DSA_SORT_OPTIONS.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="sm:min-w-[140px] flex-1 sm:flex-none">
        <Select value={String(pageSize)} onValueChange={(value) => onPageSizeChange(Number(value))}>
          <SelectTrigger className="h-11 sm:h-10 rounded-xl bg-surface border-border">
            <SelectValue placeholder="Rows" />
          </SelectTrigger>
          <SelectContent>
            {DSA_PAGE_SIZE_OPTIONS.map((size) => (
              <SelectItem key={size} value={String(size)}>
                {size} rows
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
