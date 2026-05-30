import { cn } from "@/lib/utils";

export function CompanyFilterChip({
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
        "text-[11px] sm:text-[10px] font-mono px-2.5 py-1.5 sm:px-2 sm:py-1 rounded-lg border transition-colors whitespace-nowrap touch-manipulation",
        active
          ? "bg-subtle text-foreground border-border"
          : "bg-surface border-border text-muted-foreground hover:bg-surface-hover hover:text-foreground",
      )}
    >
      {company} <span className="opacity-70">({count})</span>
    </button>
  );
}
