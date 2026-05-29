import {
  OVERVIEW_ACTIVITY_EVENTS,
  OVERVIEW_DAILY_PLAN_SUMMARY,
  OVERVIEW_DAILY_TASKS,
  OVERVIEW_READINESS_DOMAINS,
} from "@/data/overview-mock";

/** Overview dashboard data — replace mock imports with API fetch logic when backend is ready. */
export function useOverview() {
  return {
    readinessDomains: OVERVIEW_READINESS_DOMAINS,
    activityEvents: OVERVIEW_ACTIVITY_EVENTS,
    dailyPlanSummary: OVERVIEW_DAILY_PLAN_SUMMARY,
    dailyTasks: OVERVIEW_DAILY_TASKS,
  };
}
