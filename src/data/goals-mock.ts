import type { Goal, GoalsSummary } from "@/types/goals";
import { DEMO_PERSONA } from "./demo-persona";

export const GOALS_SUMMARY: GoalsSummary = {
  activeCount: 4,
  dueThisMonthCount: 2,
};

export const GOALS: Goal[] = [
  {
    id: "goal-dsa-bank",
    name: "Finish curated DSA bank",
    current: DEMO_PERSONA.dsaBankSolved,
    target: DEMO_PERSONA.dsaBankTotal,
    deadline: "Jun 15",
    unit: "count",
  },
  {
    id: "goal-mock-interviews",
    name: "Complete 12 mock interviews",
    current: 8,
    target: 12,
    deadline: "Jul 15",
    unit: "count",
  },
  {
    id: "goal-readiness",
    name: "Reach placement readiness target",
    current: DEMO_PERSONA.readinessPercent,
    target: 85,
    deadline: "Aug 30",
    unit: "percent",
  },
  {
    id: "goal-portfolio",
    name: "Ship 3 portfolio projects",
    current: 2,
    target: 3,
    deadline: "Jun 30",
    unit: "count",
  },
];
