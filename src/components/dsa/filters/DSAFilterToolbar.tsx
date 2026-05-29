import { Bookmark, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import type { DSAFilters } from "@/types/dsa";

type DSAFilterToolbarProps = {
  filters: DSAFilters;
  bookmarkCount: number;
  onSearchChange: (search: string) => void;
  onBookmarkedOnlyChange: (bookmarkedOnly: boolean) => void;
};

export function DSAFilterToolbar({
  filters,
  bookmarkCount,
  onSearchChange,
  onBookmarkedOnlyChange,
}: DSAFilterToolbarProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground pointer-events-none" />
        <input
          type="search"
          value={filters.search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search problems, tags, companies…"
          className="w-full h-11 sm:h-10 pl-10 pr-4 rounded-xl bg-surface border border-border text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-colors"
        />
      </div>

      <button
        type="button"
        onClick={() => onBookmarkedOnlyChange(!filters.bookmarkedOnly)}
        className={cn(
          "inline-flex items-center justify-center gap-2 h-11 sm:h-10 px-4 rounded-xl border text-sm font-medium transition-colors shrink-0 touch-manipulation",
          filters.bookmarkedOnly
            ? "bg-primary/10 text-primary border-primary/30"
            : "bg-surface border-border text-muted-foreground hover:bg-surface-hover hover:text-foreground",
        )}
      >
        <Bookmark className={cn("size-4", filters.bookmarkedOnly && "fill-current")} />
        Saved
        <span className="font-mono text-[10px] opacity-80">({bookmarkCount})</span>
      </button>
    </div>
  );
}
