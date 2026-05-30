import type { ReactNode } from "react";

type DashboardPageHeaderProps = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  actions?: ReactNode;
};

/** Shared page title block used across dashboard modules. */
export function DashboardPageHeader({
  eyebrow,
  title,
  description,
  actions,
}: DashboardPageHeaderProps) {
  const titleBlock = (
    <div className="min-w-0">
      <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-2">
        {eyebrow}
      </p>
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-tight">
        {title}
      </h1>
      {description ? (
        <p className="text-sm sm:text-base text-muted-foreground mt-1 leading-relaxed">
          {description}
        </p>
      ) : null}
    </div>
  );

  if (!actions) {
    return titleBlock;
  }

  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-end sm:justify-between">
      {titleBlock}
      <div className="shrink-0 w-full sm:w-auto [&>button]:w-full sm:[&>button]:w-auto">
        {actions}
      </div>
    </div>
  );
}
