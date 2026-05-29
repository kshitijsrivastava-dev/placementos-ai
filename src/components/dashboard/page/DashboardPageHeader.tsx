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
    <div>
      <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-2">
        {eyebrow}
      </p>
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h1>
      {description ? <p className="text-muted-foreground mt-1">{description}</p> : null}
    </div>
  );

  if (!actions) {
    return titleBlock;
  }

  return (
    <div className="flex flex-wrap items-end justify-between gap-4">
      {titleBlock}
      {actions}
    </div>
  );
}
