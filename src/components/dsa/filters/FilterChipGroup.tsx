import type { ReactNode } from "react";

type FilterChipGroupProps = {
  label: string;
  children: ReactNode;
};

export function FilterChipGroup({ label, children }: FilterChipGroupProps) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="text-[10px] font-medium uppercase tracking-wide text-muted-foreground mr-0.5 shrink-0">
        {label}
      </span>
      {children}
    </div>
  );
}
