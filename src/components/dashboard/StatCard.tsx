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
  const iconTone: Record<string, string> = {
    primary: "text-muted-foreground",
    accent: "text-muted-foreground",
    success: "text-success/80",
  };

  return (
    <div
      className={cn(
        "h-full p-4 sm:p-5 rounded-2xl bg-surface border border-border min-w-0",
        className,
      )}
    >
      <div className="flex items-start justify-between gap-2 mb-3">
        <div className="size-8 rounded-lg border border-border bg-subtle grid place-items-center shrink-0">
          <Icon className={cn("size-4", iconTone[accent])} />
        </div>
        {delta ? (
          <span className="text-[10px] sm:text-xs font-mono text-muted-foreground text-right leading-snug max-w-[50%]">
            {delta}
          </span>
        ) : null}
      </div>
      <div className="text-xl sm:text-2xl font-bold font-mono tracking-tight">{value}</div>
      <div className="text-xs text-muted-foreground mt-1">{label}</div>
    </div>
  );
}
