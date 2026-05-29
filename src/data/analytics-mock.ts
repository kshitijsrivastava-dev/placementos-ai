import type { PerformanceAnalytics } from "@/types/analytics";

export const PERFORMANCE_ANALYTICS: PerformanceAnalytics = {
  percentileRank: 94,
  percentileSublabel: "Top 6% of cohort",
  timeDistribution: [
    { label: "DSA", percent: 42 },
    { label: "System Design", percent: 18 },
    { label: "Aptitude", percent: 14 },
    { label: "Mock Interviews", percent: 16 },
    { label: "Resume & Apply", percent: 10 },
  ],
  strengths: ["Tree problems", "Communication", "Pattern recognition"],
  focusAreas: ["DP 2D", "Tries", "System scaling"],
};
