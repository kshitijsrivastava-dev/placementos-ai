import type { LucideIcon } from "lucide-react";

export function StatCard({
  label,
  value,
  delta,
  icon: Icon,
  accent = "primary",
}: {
  label: string;
  value: string;
  delta?: string;
  icon: LucideIcon;
  accent?: "primary" | "accent" | "success";
}) {
  const colorMap: Record<string, string> = {
    primary: "text-primary bg-primary/10 border-primary/20",
    accent: "text-accent bg-accent/10 border-accent/20",
    success: "text-[oklch(0.72_0.18_155)] bg-[oklch(0.72_0.18_155/0.1)] border-[oklch(0.72_0.18_155/0.2)]",
  };
  return (
    <div className="p-5 rounded-2xl bg-white/[0.02] border border-border hover:border-primary/30 transition-colors">
      <div className="flex items-start justify-between mb-4">
        <div className={`size-9 rounded-lg border grid place-items-center ${colorMap[accent]}`}>
          <Icon className="size-4" />
        </div>
        {delta && <span className="text-xs font-mono text-[oklch(0.72_0.18_155)]">{delta}</span>}
      </div>
      <div className="text-2xl font-bold font-mono">{value}</div>
      <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">{label}</div>
    </div>
  );
}