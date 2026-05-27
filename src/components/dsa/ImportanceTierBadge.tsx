import type { ImportanceTier } from "@/types/dsa";

export function ImportanceTierBadge({ tier }: { tier: ImportanceTier }) {
  const className =
    tier === "Must Do"
      ? "text-destructive bg-destructive/10 border-destructive/30"
      : tier === "Very Important"
        ? "text-warning bg-warning/10 border-warning/30"
        : "text-success bg-success/10 border-success/30";

  return (
    <span
      className={[
        "inline-flex items-center justify-center text-[10px] font-mono uppercase tracking-wide",
        "border px-2 py-0.5 rounded-lg whitespace-nowrap",
        className,
      ].join(" ")}
    >
      {tier}
    </span>
  );
}

