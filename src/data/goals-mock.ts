import type { Goal, GoalsSummary } from "@/types/goals";

export const GOALS_SUMMARY: GoalsSummary = {
  activeCount: 4,
  dueThisMonthCount: 1,
};

export const GOALS: Goal[] = [
  {
    id: "goal-leetcode-500",
    name: "Solve 500 LeetCode problems",
    current: 412,
    target: 500,
    deadline: "Mar 15",
    unit: "count",
  },
  {
    id: "goal-mock-interviews",
    name: "Complete 20 mock interviews",
    current: 14,
    target: 20,
    deadline: "Mar 30",
    unit: "count",
  },
  {
    id: "goal-meta-offer",
    name: "Land Meta E4 offer",
    current: 84,
    target: 100,
    deadline: "Apr 30",
    unit: "percent",
  },
  {
    id: "goal-portfolio",
    name: "Build 3 portfolio projects",
    current: 2,
    target: 3,
    deadline: "Feb 28",
    unit: "count",
  },
];
