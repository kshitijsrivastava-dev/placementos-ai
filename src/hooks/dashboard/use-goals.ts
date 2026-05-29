import { GOALS, GOALS_SUMMARY } from "@/data/goals-mock";

/** Goals module data — replace mock imports with API fetch logic when backend is ready. */
export function useGoals() {
  return {
    goals: GOALS,
    summary: GOALS_SUMMARY,
  };
}
