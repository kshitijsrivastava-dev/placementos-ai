import type { PerformanceAnalytics } from "@/types/analytics";

export const PERFORMANCE_ANALYTICS: PerformanceAnalytics = {
  percentileRank: 71,
  percentileSublabel: "Upper third of active cohort",
  timeDistribution: [
    { label: "DSA", percent: 44 },
    { label: "System Design", percent: 17 },
    { label: "Aptitude", percent: 15 },
    { label: "Mock Interviews", percent: 14 },
    { label: "Resume & Apply", percent: 10 },
  ],
  strengths: ["Trees & BFS/DFS", "Timed aptitude sets", "Interview structure"],
  focusAreas: ["DP 2D", "Graph shortest paths", "System design tradeoffs"],
};
