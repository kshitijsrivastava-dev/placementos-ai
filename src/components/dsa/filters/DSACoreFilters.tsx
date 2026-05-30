import { cn } from "@/lib/utils";
import {
  DSA_DIFFICULTY_OPTIONS,
  DSA_STATUS_OPTIONS,
} from "@/lib/dsa/filter-config";
import type { Difficulty, DSAFilters, QuestionStatus } from "@/types/dsa";
import { FilterChipGroup } from "./FilterChipGroup";

const difficultyActiveClass: Record<Difficulty, string> = {
  Easy: "bg-success/10 text-success border-success/30",
  Medium: "bg-warning/10 text-warning border-warning/30",
  Hard: "bg-destructive/10 text-destructive border-destructive/30",
};

type DSACoreFiltersProps = {
  filters: DSAFilters;
  onToggleDifficulty: (difficulty: Difficulty) => void;
  onToggleStatus: (status: QuestionStatus) => void;
};

export function DSACoreFilters({
  filters,
  onToggleDifficulty,
  onToggleStatus,
}: DSACoreFiltersProps) {
  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
      <FilterChipGroup label="Difficulty">
        {DSA_DIFFICULTY_OPTIONS.map((difficulty) => {
          const active = filters.difficulties.includes(difficulty);
          return (
            <button
              key={difficulty}
              type="button"
              onClick={() => onToggleDifficulty(difficulty)}
              aria-pressed={active}
              className={cn(
                "text-xs font-mono px-3 py-2 sm:py-1.5 rounded-lg border transition-colors touch-manipulation",
                active
                  ? difficultyActiveClass[difficulty]
                  : "border-border text-muted-foreground hover:bg-surface-hover",
              )}
            >
              {difficulty}
            </button>
          );
        })}
      </FilterChipGroup>

      <span className="hidden sm:block w-px h-5 bg-border" aria-hidden />

      <FilterChipGroup label="Status">
        {DSA_STATUS_OPTIONS.map(({ value, label }) => {
          const active = filters.statuses.includes(value);
          return (
            <button
              key={value}
              type="button"
              onClick={() => onToggleStatus(value)}
              aria-pressed={active}
              className={cn(
                "text-xs font-mono px-3 py-2 sm:py-1.5 rounded-lg border transition-colors touch-manipulation",
                active
                  ? "bg-primary/10 text-primary border-primary/30"
                  : "border-border text-muted-foreground hover:bg-surface-hover",
              )}
            >
              {label}
            </button>
          );
        })}
      </FilterChipGroup>
    </div>
  );
}
