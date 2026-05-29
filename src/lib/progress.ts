import type { ProgressMetrics } from "@/types/shared";

/** Returns a 0–100 progress percentage from current/target values. */
export function getProgressPercent(current: number, target: number): number {
  if (target <= 0) return 0;
  return (current / target) * 100;
}

export function getProgressPercentFromMetrics({ current, target }: ProgressMetrics): number {
  return getProgressPercent(current, target);
}
