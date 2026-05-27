import type { DSAQuestion } from "@/types/dsa";

const freqLabel: Record<DSAQuestion["frequency"], string> = {
  "high": "High Frequency",
  "medium": "Medium Frequency",
  "low": "Low Frequency",
};

export function InterviewFrequencyBadge({
  frequency,
}: {
  frequency: DSAQuestion["frequency"];
}) {
  const className =
    frequency === "high"
      ? "text-success bg-success/10 border-success/30"
      : frequency === "medium"
        ? "text-warning bg-warning/10 border-warning/30"
        : "text-muted-foreground bg-subtle border-border";

  return (
    <span
      className={[
        "inline-flex items-center justify-center text-[10px] font-mono uppercase tracking-wide",
        "border px-2 py-0.5 rounded-lg whitespace-nowrap",
        className,
      ].join(" ")}
    >
      {freqLabel[frequency]}
    </span>
  );
}

