import type { OverviewWorkspace } from "@/types/overview";
import { DEMO_PERSONA } from "./demo-persona";

export const OVERVIEW_WORKSPACE: OverviewWorkspace = {
  header: {
    title: "Welcome back.",
    description: "3 tasks left today · DP revision is your highest-impact move.",
  },
  focusMetrics: [
    {
      id: "metric-daily-plan",
      label: "Today's plan",
      value: "3/6",
      delta: "3 remaining",
      icon: "check",
      accent: "primary",
    },
    {
      id: "metric-problems-today",
      label: "Problems today",
      value: String(DEMO_PERSONA.problemsToday),
      delta: `+${DEMO_PERSONA.problemsToday - DEMO_PERSONA.problemsYesterday} vs yesterday`,
      icon: "code",
      accent: "success",
    },
    {
      id: "metric-streak",
      label: "Current streak",
      value: `${DEMO_PERSONA.streakDays} days`,
      delta: "2 away from personal best",
      icon: "flame",
      accent: "accent",
    },
  ],
  dailyPlan: {
    summary: { completed: 3, total: 6 },
    tasks: [
      { id: "task-trees", title: "Trees · 2 medium problems", done: true },
      { id: "task-aptitude", title: "Aptitude · Quant timed set (20 Q)", done: true },
      { id: "task-mock", title: "Mock interview · System design rubric", done: true },
      { id: "task-dp-notes", title: "Review DP 1D/2D notes", done: false },
      { id: "task-resume", title: "Resume · quantify 2 project bullets", done: false },
      { id: "task-roadmap", title: "Roadmap · Week 11 graph checklist", done: false },
    ],
  },
  nextSteps: [
    {
      id: "step-dp",
      label: "Review DP notes",
      detail: "Accuracy down 12% this week · 6 problems due for review",
      href: "/dashboard/dsa",
    },
    {
      id: "step-resume",
      label: "Update resume metrics",
      detail: "2 bullets still missing quantified impact",
      href: "/dashboard/resume",
    },
    {
      id: "step-mock",
      label: "Schedule system design mock",
      detail: "Last session 78/100 · book a follow-up this weekend",
      href: "/dashboard/mock-interview",
    },
  ],
  weakTopics: [
    {
      id: "topic-dp",
      name: "Dynamic Programming",
      reason: "Accuracy down 12% · 6 problems due for review",
      percent: 54,
      href: "/dashboard/dsa",
    },
    {
      id: "topic-system-design",
      name: "System Design",
      reason: "Lowest readiness domain · roadmap week 11",
      percent: 58,
      href: "/dashboard/roadmap",
    },
    {
      id: "topic-graphs",
      name: "Graphs",
      reason: "4 problems in review queue · BFS/DFS recap",
      percent: 68,
      href: "/dashboard/dsa",
    },
  ],
  focusInsight: {
    title: "Focus sprint",
    highlight: "Dynamic Programming",
    body: "accuracy slipped 12% over the last 7 days. A 3-day revision block is queued before your mock on Sunday.",
    ctaLabel: "Open DP problem set",
    href: "/dashboard/dsa",
  },
  progress: {
    readinessPercent: DEMO_PERSONA.readinessPercent,
    readinessSublabel: "Across 6 prep domains",
    domains: [
      { label: "Data Structures", percent: 85 },
      { label: "Algorithms", percent: 71 },
      { label: "System Design", percent: 58 },
    ],
  },
  activityEvents: [
    {
      id: "activity-rain-water",
      icon: "check-circle",
      tone: "success",
      text: "Solved Trapping Rain Water — Hard · 28 min",
      timeLabel: "2h ago",
    },
    {
      id: "activity-mock-interview",
      icon: "sparkles",
      tone: "primary",
      text: "Mock Interview · System design · 78/100",
      timeLabel: "Yesterday",
    },
    {
      id: "activity-aptitude",
      icon: "code",
      tone: "primary",
      text: "Aptitude · TCS NQT quant section · 82%",
      timeLabel: "2d ago",
    },
    {
      id: "activity-roadmap",
      icon: "clock",
      tone: "muted",
      text: `Roadmap updated for ${DEMO_PERSONA.targetShort} · May 2026`,
      timeLabel: "4d ago",
    },
  ],
};

/** @deprecated Use OVERVIEW_WORKSPACE fields directly. */
export const OVERVIEW_READINESS_DOMAINS = OVERVIEW_WORKSPACE.progress.domains;
export const OVERVIEW_ACTIVITY_EVENTS = OVERVIEW_WORKSPACE.activityEvents;
export const OVERVIEW_DAILY_PLAN_SUMMARY = OVERVIEW_WORKSPACE.dailyPlan.summary;
export const OVERVIEW_DAILY_TASKS = OVERVIEW_WORKSPACE.dailyPlan.tasks;
