import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

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
      <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-2">
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
      <div
        className={cn(
          "shrink-0 w-full sm:w-auto",
          "[&_button]:w-full sm:[&_button]:w-auto",
          "[&_button]:touch-manipulation [&_button]:min-h-11 sm:[&_button]:min-h-0",
          "[&>div]:flex [&>div]:flex-col [&>div]:gap-2 [&>div]:w-full",
          "[&>div]:sm:flex-row [&>div]:sm:w-auto",
        )}
      >
        {actions}
      </div>
    </div>
  );
}
