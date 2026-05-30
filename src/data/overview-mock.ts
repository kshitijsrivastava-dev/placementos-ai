import type { OverviewWorkspace } from "@/types/overview";

export const OVERVIEW_WORKSPACE: OverviewWorkspace = {
  header: {
    title: "Good evening, Alex.",
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
      value: "12",
      delta: "+12 vs yesterday",
      icon: "code",
      accent: "success",
    },
    {
      id: "metric-streak",
      label: "Current streak",
      value: "18 days",
      delta: "Personal best",
      icon: "flame",
      accent: "accent",
    },
  ],
  dailyPlan: {
    summary: { completed: 3, total: 6 },
    tasks: [
      { id: "task-trees", title: "Binary Tree · 5 medium problems", done: true },
      { id: "task-aptitude", title: "Aptitude · Quant section 4", done: true },
      { id: "task-mock", title: "Mock interview · System design", done: true },
      { id: "task-dp-notes", title: "Review DP notes", done: false },
      { id: "task-resume", title: "Resume v3 — quantify metrics", done: false },
      { id: "task-blog", title: "Read: Meta engineering blog", done: false },
    ],
  },
  nextSteps: [
    {
      id: "step-dp",
      label: "Review DP notes",
      detail: "Highest-impact gap · 15% accuracy drop this week",
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
      detail: "Next slot recommended: this weekend",
      href: "/dashboard/mock-interview",
    },
  ],
  weakTopics: [
    {
      id: "topic-dp",
      name: "Dynamic Programming",
      reason: "Accuracy down 15% · 8 problems due for review",
      percent: 58,
      href: "/dashboard/dsa",
    },
    {
      id: "topic-system-design",
      name: "System Design",
      reason: "Lowest readiness domain · 64% complete",
      percent: 64,
      href: "/dashboard/roadmap",
    },
    {
      id: "topic-graphs",
      name: "Graphs",
      reason: "3 attempted problems still in review queue",
      percent: 71,
      href: "/dashboard/dsa",
    },
  ],
  focusInsight: {
    title: "Focus sprint",
    highlight: "Dynamic Programming",
    body: "accuracy dropped 15% this week. A 3-day revision block is queued to close the gap before your mock on Sunday.",
    ctaLabel: "Open DP problem set",
    href: "/dashboard/dsa",
  },
  progress: {
    readinessPercent: 84,
    readinessSublabel: "Across 6 domains",
    domains: [
      { label: "Data Structures", percent: 92 },
      { label: "Algorithms", percent: 78 },
      { label: "System Design", percent: 64 },
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
      text: "Completed Mock Interview · Google L4 simulation · 92/100",
      timeLabel: "5h ago",
    },
    {
      id: "activity-sliding-window",
      icon: "code",
      tone: "primary",
      text: "Queued Sliding Window pattern · 12 problems",
      timeLabel: "Yesterday",
    },
    {
      id: "activity-roadmap",
      icon: "clock",
      tone: "muted",
      text: "Roadmap re-calibrated for Meta E4 · Mar 2026",
      timeLabel: "2d ago",
    },
  ],
};

/** @deprecated Use OVERVIEW_WORKSPACE fields directly. */
export const OVERVIEW_READINESS_DOMAINS = OVERVIEW_WORKSPACE.progress.domains;
export const OVERVIEW_ACTIVITY_EVENTS = OVERVIEW_WORKSPACE.activityEvents;
export const OVERVIEW_DAILY_PLAN_SUMMARY = OVERVIEW_WORKSPACE.dailyPlan.summary;
export const OVERVIEW_DAILY_TASKS = OVERVIEW_WORKSPACE.dailyPlan.tasks;
