import { PERFORMANCE_ANALYTICS } from "@/data/analytics-mock";

/** Analytics module data — replace mock imports with API fetch logic when backend is ready. */
export function useAnalytics() {
  return {
    analytics: PERFORMANCE_ANALYTICS,
  };
}
