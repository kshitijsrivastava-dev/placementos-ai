import type { ReactNode } from "react";

export function Card({
  title,
  subtitle,
  action,
  children,
  className = "",
}: {
  title?: string;
  subtitle?: string;
  action?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`p-6 rounded-2xl bg-surface border border-border ${className}`}>
      {(title || action) && (
        <div className="flex items-start justify-between mb-5 gap-4">
          <div>
            {title && <h3 className="text-sm font-mono text-muted-foreground uppercase tracking-wider">{title}</h3>}
            {subtitle && <p className="text-base font-semibold mt-1">{subtitle}</p>}
          </div>
          {action}
        </div>
      )}
      {children}
    </div>
  );
}