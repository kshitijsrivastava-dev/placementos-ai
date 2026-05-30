import { cn } from "@/lib/utils";
import {
  DSA_DIFFICULTY_OPTIONS,
  DSA_STATUS_OPTIONS,
} from "@/lib/dsa/filter-config";
import type { Difficulty, DSAFilters, QuestionStatus } from "@/types/dsa";
import { FilterChipGroup } from "./FilterChipGroup";

const difficultyActiveClass: Record<Difficulty, string> = {
  Easy: "bg-success/5 text-success/90 border-border",
  Medium: "bg-warning/5 text-warning/90 border-border",
  Hard: "bg-destructive/5 text-destructive/90 border-border",
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
                  ? "bg-subtle text-foreground border-border"
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
