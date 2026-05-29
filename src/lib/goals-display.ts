import { getProgressPercentFromMetrics } from "@/lib/progress";
import type { Goal, GoalUnit } from "@/types/goals";

export function formatGoalValue(value: number, unit: GoalUnit = "count"): string {
  return unit === "percent" ? `${value}%` : String(value);
}

export function getGoalProgressPercent(goal: Goal): number {
  return getProgressPercentFromMetrics(goal);
}
