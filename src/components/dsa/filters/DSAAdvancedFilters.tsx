import { ChevronDown, X } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  DSA_IMPORTANCE_OPTIONS,
  DSA_TOP_COMPANY_CHIP_COUNT,
} from "@/lib/dsa/filter-config";
import type { CompanyStats, DSAFilters, ImportanceTier } from "@/types/dsa";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CompanyFilterChip } from "./CompanyFilterChip";
import { FilterChipGroup } from "./FilterChipGroup";

const tierActiveClass: Record<ImportanceTier, string> = {
  "Must Do": "bg-destructive/5 text-destructive/90 border-border",
  "Very Important": "bg-warning/5 text-warning/90 border-border",
  "High Frequency": "bg-success/5 text-success/90 border-border",
};

type DSAAdvancedFiltersProps = {
  filters: DSAFilters;
  companyOptions: CompanyStats[];
  hasActiveAdvancedFilters: boolean;
  advancedFilterCount: number;
  hasActiveFilters: boolean;
  onToggleCompany: (company: string) => void;
  onToggleImportanceTier: (tier: ImportanceTier) => void;
  onClear: () => void;
};

export function DSAAdvancedFilters({
  filters,
  companyOptions,
  hasActiveAdvancedFilters,
  advancedFilterCount,
  hasActiveFilters,
  onToggleCompany,
  onToggleImportanceTier,
  onClear,
}: DSAAdvancedFiltersProps) {
  const topCompanies = companyOptions.slice(0, DSA_TOP_COMPANY_CHIP_COUNT);
  const otherCompanies = companyOptions.slice(DSA_TOP_COMPANY_CHIP_COUNT);

  return (
    <Collapsible defaultOpen={hasActiveAdvancedFilters} className="space-y-3">
      <div className="flex flex-wrap items-center gap-2">
        <CollapsibleTrigger asChild>
          <button
            type="button"
            className="group inline-flex items-center gap-2 text-xs font-mono px-3 py-2 sm:py-1.5 rounded-lg border border-border bg-surface text-muted-foreground hover:bg-surface-hover hover:text-foreground transition-colors touch-manipulation"
          >
            Advanced filters
            {advancedFilterCount > 0 && (
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-subtle text-muted-foreground border border-border">
                {advancedFilterCount}
              </span>
            )}
            <ChevronDown className="size-3.5 transition-transform group-data-[state=open]:rotate-180" />
          </button>
        </CollapsibleTrigger>

        {hasActiveFilters && (
          <button
            type="button"
            onClick={onClear}
            className="inline-flex items-center gap-1 text-xs font-mono text-muted-foreground hover:text-foreground sm:ml-auto py-1.5 transition-colors touch-manipulation"
          >
            <X className="size-3" />
            Clear filters
          </button>
        )}
      </div>

      <CollapsibleContent className="space-y-3">
        <FilterChipGroup label="Popular Companies">
          {topCompanies.map((company) => (
            <CompanyFilterChip
              key={company.company}
              company={company.company}
              count={company.questionCount}
              active={filters.companies.includes(company.company)}
              onClick={() => onToggleCompany(company.company)}
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
                  <div className="text-xs font-mono text-muted-foreground">Filter companies</div>
                  <div className="text-[10px] font-mono text-muted-foreground">
                    Selected: {filters.companies.length}
                  </div>
                </div>
                <div className="space-y-2 max-h-[280px] overflow-auto pr-1">
                  {companyOptions.map((company) => (
                    <CompanyFilterChip
                      key={company.company}
                      company={company.company}
                      count={company.questionCount}
                      active={filters.companies.includes(company.company)}
                      onClick={() => onToggleCompany(company.company)}
                    />
                  ))}
                </div>
              </PopoverContent>
            </Popover>
          )}
        </FilterChipGroup>

        <FilterChipGroup label="Prep Priority">
          {DSA_IMPORTANCE_OPTIONS.map((tier) => {
            const active = filters.importanceTiers.includes(tier);
            return (
              <button
                key={tier}
                type="button"
                onClick={() => onToggleImportanceTier(tier)}
                aria-pressed={active}
                className={cn(
                  "text-xs font-mono px-3 py-2 sm:py-1.5 rounded-lg border transition-colors touch-manipulation",
                  active
                    ? tierActiveClass[tier]
                    : "border-border text-muted-foreground hover:bg-surface-hover",
                )}
              >
                {tier}
              </button>
            );
          })}
        </FilterChipGroup>
      </CollapsibleContent>
    </Collapsible>
  );
}
