import { Bookmark, Search, X } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Difficulty, DSAFilters, QuestionStatus } from "@/types/dsa";

const DIFFICULTIES: Difficulty[] = ["Easy", "Medium", "Hard"];
const STATUSES: { value: QuestionStatus; label: string }[] = [
  { value: "solved", label: "Solved" },
  { value: "attempted", label: "Attempted" },
  { value: "reviewing", label: "Reviewing" },
  { value: "unsolved", label: "Not started" },
];

export function DSAFilterBar({
  filters,
  resultCount,
  totalCount,
  bookmarkCount,
  hasActiveFilters,
  onSearchChange,
  onToggleDifficulty,
  onToggleStatus,
  onBookmarkedOnlyChange,
  onClear,
}: {
  filters: DSAFilters;
  resultCount: number;
  totalCount: number;
  bookmarkCount: number;
  hasActiveFilters: boolean;
  onSearchChange: (q: string) => void;
  onToggleDifficulty: (d: Difficulty) => void;
  onToggleStatus: (s: QuestionStatus) => void;
  onBookmarkedOnlyChange: (v: boolean) => void;
  onClear: () => void;
}) {
  return (
    <div className="space-y-4">
      <div className="flex flex-col lg:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground pointer-events-none" />
          <input
            type="search"
            value={filters.search}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search problems, tags, companies…"
            className="w-full h-10 pl-10 pr-4 rounded-xl bg-surface border border-border text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-colors"
          />
        </div>
        <button
          type="button"
          onClick={() => onBookmarkedOnlyChange(!filters.bookmarkedOnly)}
          className={cn(
            "inline-flex items-center justify-center gap-2 h-10 px-4 rounded-xl border text-sm font-medium transition-colors shrink-0",
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

      <div className="flex flex-wrap items-center gap-2">
        <span className="text-[10px] font-mono uppercase text-muted-foreground mr-1">
          Difficulty
        </span>
        {DIFFICULTIES.map((d) => {
          const active = filters.difficulties.includes(d);
          return (
            <button
              key={d}
              type="button"
              onClick={() => onToggleDifficulty(d)}
              className={cn(
                "text-xs font-mono px-3 py-1.5 rounded-lg border transition-colors",
                active
                  ? d === "Easy"
                    ? "bg-success/10 text-success border-success/30"
                    : d === "Medium"
                      ? "bg-warning/10 text-warning border-warning/30"
                      : "bg-destructive/10 text-destructive border-destructive/30"
                  : "border-border text-muted-foreground hover:bg-surface-hover",
              )}
            >
              {d}
            </button>
          );
        })}

        <span className="w-px h-5 bg-border mx-1 hidden sm:block" />

        <span className="text-[10px] font-mono uppercase text-muted-foreground mr-1">
          Status
        </span>
        {STATUSES.map(({ value, label }) => {
          const active = filters.statuses.includes(value);
          return (
            <button
              key={value}
              type="button"
              onClick={() => onToggleStatus(value)}
              className={cn(
                "text-xs font-mono px-3 py-1.5 rounded-lg border transition-colors",
                active
                  ? "bg-primary/10 text-primary border-primary/30"
                  : "border-border text-muted-foreground hover:bg-surface-hover",
              )}
            >
              {label}
            </button>
          );
        })}

        {hasActiveFilters && (
          <button
            type="button"
            onClick={onClear}
            className="inline-flex items-center gap-1 text-xs font-mono text-muted-foreground hover:text-foreground ml-auto sm:ml-2 transition-colors"
          >
            <X className="size-3" />
            Clear filters
          </button>
        )}
      </div>

      <p className="text-[11px] font-mono text-muted-foreground">
        Showing{" "}
        <span className="text-foreground font-semibold">{resultCount}</span> of{" "}
        {totalCount} problems
      </p>
    </div>
  );
}
