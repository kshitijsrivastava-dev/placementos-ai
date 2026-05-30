import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export function StatCard({
  label,
  value,
  delta,
  icon: Icon,
  accent = "primary",
  className,
}: {
  label: string;
  value: string;
  delta?: string;
  icon: LucideIcon;
  accent?: "primary" | "accent" | "success";
  className?: string;
}) {
  const colorMap: Record<string, string> = {
    primary: "text-primary bg-primary/10 border-primary/20",
    accent: "text-accent bg-accent/10 border-accent/20",
    success: "text-success bg-success/10 border-success/20",
  };

  return (
    <div
      className={cn(
        "h-full p-4 sm:p-5 rounded-2xl bg-surface border border-border hover:border-primary/30 transition-colors min-w-0",
        className,
      )}
    >
      <div className="flex items-start justify-between gap-2 mb-3 sm:mb-4">
        <div className={`size-9 rounded-lg border grid place-items-center shrink-0 ${colorMap[accent]}`}>
          <Icon className="size-4" />
        </div>
        {delta ? (
          <span className="text-[10px] sm:text-xs font-mono text-success text-right leading-snug max-w-[50%]">
            {delta}
          </span>
        ) : null}
      </div>
      <div className="text-xl sm:text-2xl font-bold font-mono">{value}</div>
      <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">{label}</div>
    </div>
  );
}
