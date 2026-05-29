import type { ActivityEvent, DailyPlanSummary, DailyTask, ReadinessDomain } from "@/types/overview";

export const OVERVIEW_READINESS_DOMAINS: ReadinessDomain[] = [
  { label: "Data Structures", percent: 92 },
  { label: "Algorithms", percent: 78 },
  { label: "System Design", percent: 64 },
];

export const OVERVIEW_ACTIVITY_EVENTS: ActivityEvent[] = [
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
    id: "activity-streak",
    icon: "flame",
    tone: "accent",
    text: "Hit 18-day streak. Personal record extended.",
    timeLabel: "Today",
  },
  {
    id: "activity-sliding-window",
    icon: "code",
    tone: "primary",
    text: "Started new pattern: Sliding Window · 12 problems queued",
    timeLabel: "Yesterday",
  },
  {
    id: "activity-roadmap",
    icon: "clock",
    tone: "muted",
    text: "AI Roadmap re-calibrated for Meta E4 by Mar 2026",
    timeLabel: "2d ago",
  },
];

export const OVERVIEW_DAILY_PLAN_SUMMARY: DailyPlanSummary = {
  completed: 3,
  total: 6,
};

export const OVERVIEW_DAILY_TASKS: DailyTask[] = [
  { id: "task-trees", title: "Binary Tree · 5 medium problems", done: true },
  { id: "task-aptitude", title: "Aptitude · Quant section 4", done: true },
  { id: "task-mock", title: "Mock interview · System design", done: true },
  { id: "task-dp-notes", title: "Review DP notes", done: false },
  { id: "task-resume", title: "Resume v3 — quantify metrics", done: false },
  { id: "task-blog", title: "Read: Meta engineering blog", done: false },
];
