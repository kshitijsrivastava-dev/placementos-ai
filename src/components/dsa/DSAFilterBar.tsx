import { Bookmark, Search, X } from "lucide-react";
import { cn } from "@/lib/utils";
import type {
  Difficulty,
  DSAFilters,
  ImportanceTier,
  QuestionStatus,
} from "@/types/dsa";
import type { CompanyStats } from "@/types/dsa";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const DIFFICULTIES: Difficulty[] = ["Easy", "Medium", "Hard"];
const IMPORTANCE_TIERS: ImportanceTier[] = [
  "Must Do",
  "Very Important",
  "High Frequency",
];
const STATUSES: { value: QuestionStatus; label: string }[] = [
  { value: "solved", label: "Solved" },
  { value: "attempted", label: "Attempted" },
  { value: "reviewing", label: "Reviewing" },
  { value: "unsolved", label: "Not started" },
];

function CompanyChip({
  company,
  count,
  active,
  onClick,
}: {
  company: string;
  count: number;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "text-[10px] font-mono px-2 py-1 rounded-lg border transition-colors whitespace-nowrap",
        active
          ? "bg-primary/10 text-primary border-primary/30"
          : "bg-surface border-border text-muted-foreground hover:bg-surface-hover hover:text-foreground",
      )}
    >
      {company} <span className="opacity-70">({count})</span>
    </button>
  );
}

export function DSAFilterBar({
  filters,
  resultCount,
  totalCount,
  bookmarkCount,
  hasActiveFilters,
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
}: {
  filters: DSAFilters;
  resultCount: number;
  totalCount: number;
  bookmarkCount: number;
  hasActiveFilters: boolean;
  companyOptions: CompanyStats[];
  onSearchChange: (q: string) => void;
  onToggleDifficulty: (d: Difficulty) => void;
  onToggleStatus: (s: QuestionStatus) => void;
  onBookmarkedOnlyChange: (v: boolean) => void;
  onToggleCompany: (company: string) => void;
  onToggleImportanceTier: (tier: ImportanceTier) => void;
  onSortByChange: (sortBy: DSAFilters["sortBy"]) => void;
  pageSize: number;
  onPageSizeChange: (pageSize: number) => void;
  onClear: () => void;
}) {
  const topCompanies = companyOptions.slice(0, 8);
  const otherCompanies = companyOptions.slice(8);

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
          <Bookmark
            className={cn("size-4", filters.bookmarkedOnly && "fill-current")}
          />
          Saved
          <span className="font-mono text-[10px] opacity-80">
            ({bookmarkCount})
          </span>
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

        <div className="flex-1" />

        <div className="flex flex-col sm:flex-row gap-2 items-stretch sm:items-center">
          <div className="min-w-[180px]">
            <Select value={filters.sortBy} onValueChange={onSortByChange}>
              <SelectTrigger className="h-10 rounded-xl bg-surface border-border">
                <SelectValue placeholder="Sort" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="most-asked">Most Asked</SelectItem>
                <SelectItem value="most-important">Must Do First</SelectItem>
                <SelectItem value="highest-acceptance">
                  Highest Acceptance
                </SelectItem>
                <SelectItem value="recently-attempted">
                  Recently Attempted
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="min-w-[140px]">
            <Select value={String(pageSize)} onValueChange={(v) => onPageSizeChange(Number(v))}>
              <SelectTrigger className="h-10 rounded-xl bg-surface border-border">
                <SelectValue placeholder="Rows" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="10">10 rows</SelectItem>
                <SelectItem value="12">12 rows</SelectItem>
                <SelectItem value="20">20 rows</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <span className="text-[10px] font-mono uppercase text-muted-foreground mr-1">
          Popular Companies
        </span>

        {topCompanies.map((c) => (
          <CompanyChip
            key={c.company}
            company={c.company}
            count={c.questionCount}
            active={filters.companies.includes(c.company)}
            onClick={() => onToggleCompany(c.company)}
          />
        ))}

        {otherCompanies.length > 0 && (
          <Popover>
            <PopoverTrigger asChild>
              <button
                type="button"
                className="text-xs font-mono px-3 py-1.5 rounded-lg border border-border text-muted-foreground bg-surface hover:bg-surface-hover hover:text-foreground transition-colors"
              >
                +{otherCompanies.length} more
              </button>
            </PopoverTrigger>
            <PopoverContent className="w-80 p-3">
              <div className="flex items-center justify-between mb-2">
                <div className="text-xs font-mono text-muted-foreground">
                  Filter companies
                </div>
                <div className="text-[10px] font-mono text-muted-foreground">
                  Selected: {filters.companies.length}
                </div>
              </div>
              <div className="space-y-2 max-h-[280px] overflow-auto pr-1">
                {companyOptions.map((c) => {
                  const active = filters.companies.includes(c.company);
                  return (
                    <CompanyChip
                      key={c.company}
                      company={c.company}
                      count={c.questionCount}
                      active={active}
                      onClick={() => onToggleCompany(c.company)}
                    />
                  );
                })}
              </div>
            </PopoverContent>
          </Popover>
        )}

        <span className="w-px h-5 bg-border mx-1 hidden sm:block" />

        <span className="text-[10px] font-mono uppercase text-muted-foreground mr-1">
          Prep Priority
        </span>
        {IMPORTANCE_TIERS.map((tier) => {
          const active = filters.importanceTiers.includes(tier);
          return (
            <button
              key={tier}
              type="button"
              onClick={() => onToggleImportanceTier(tier)}
              className={cn(
                "text-xs font-mono px-3 py-1.5 rounded-lg border transition-colors",
                active
                  ? tier === "Must Do"
                    ? "bg-destructive/10 text-destructive border-destructive/30"
                    : tier === "Very Important"
                      ? "bg-warning/10 text-warning border-warning/30"
                      : "bg-success/10 text-success border-success/30"
                  : "border-border text-muted-foreground hover:bg-surface-hover",
              )}
            >
              {tier}
            </button>
          );
        })}

        {hasActiveFilters && (
          <button
            type="button"
            onClick={onClear}
            className="inline-flex items-center gap-1 text-xs font-mono text-muted-foreground hover:text-foreground ml-auto transition-colors"
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
