import { cn } from "@/lib/utils";

export function CompanyChips({
  companies,
  selectedCompanies,
  onToggleCompany,
  maxVisible = 3,
}: {
  companies: string[];
  selectedCompanies: string[];
  onToggleCompany: (company: string) => void;
  maxVisible?: number;
}) {
  const visible = companies.slice(0, maxVisible);
  const extra = companies.length - visible.length;

  return (
    <div className="flex flex-wrap gap-1">
      {visible.map((company) => {
        const active = selectedCompanies.includes(company);
        return (
          <button
            key={company}
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onToggleCompany(company);
            }}
            aria-pressed={active}
            className={cn(
              "text-[10px] font-mono px-1.5 py-0.5 rounded border transition-colors",
              active
                ? "bg-primary/10 border-primary/30 text-primary"
                : "bg-surface text-muted-foreground border-border hover:bg-surface-hover hover:text-foreground",
            )}
          >
            {company}
          </button>
        );
      })}
      {extra > 0 && (
        <span className="text-[10px] font-mono text-muted-foreground self-center">
          +{extra}
        </span>
      )}
    </div>
  );
}
