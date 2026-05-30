import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Card({
  title,
  subtitle,
  action,
  children,
  className,
}: {
  title?: string;
  subtitle?: string;
  action?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "p-4 sm:p-6 rounded-2xl bg-surface border border-border min-w-0",
        className,
      )}
    >
      {(title || action) && (
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between mb-4 sm:mb-5 sm:gap-4">
          <div className="min-w-0 flex-1">
            {title && (
              <h3 className="text-sm font-mono text-muted-foreground uppercase tracking-wider">
                {title}
              </h3>
            )}
            {subtitle && (
              <p className="text-sm sm:text-base font-semibold mt-1 leading-snug">{subtitle}</p>
            )}
          </div>
          {action ? <div className="shrink-0 self-start sm:self-auto">{action}</div> : null}
        </div>
      )}
      <div className="min-w-0">{children}</div>
    </div>
  );
}
