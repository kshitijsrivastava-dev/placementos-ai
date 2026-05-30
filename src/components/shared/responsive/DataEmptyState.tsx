import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

type DataEmptyStateProps = {
  icon: LucideIcon;
  title: string;
  description?: ReactNode;
};

export function DataEmptyState({ icon: Icon, title, description }: DataEmptyStateProps) {
  return (
    <div className="py-16 px-4 text-center flex flex-col items-center gap-3">
      <div className="size-12 rounded-2xl border border-border bg-subtle/60 grid place-items-center text-muted-foreground">
        <Icon className="size-5" aria-hidden />
      </div>
      <div className="space-y-1">
        <p className="text-sm font-medium text-foreground">{title}</p>
        {description ? (
          <p className="text-xs font-mono text-muted-foreground">{description}</p>
        ) : null}
      </div>
    </div>
  );
}
