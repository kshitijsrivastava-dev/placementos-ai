import type { LabeledPercent } from "./shared";

export type ReadinessDomain = LabeledPercent;

export type ActivityEventIcon =
  | "check-circle"
  | "sparkles"
  | "flame"
  | "code"
  | "clock";

export type ActivityEventTone = "success" | "primary" | "accent" | "muted";

export type ActivityEvent = {
  id: string;
  icon: ActivityEventIcon;
  tone: ActivityEventTone;
  text: string;
  timeLabel: string;
};

export type DailyTask = {
  id: string;
  title: string;
  done: boolean;
};

export type DailyPlanSummary = {
  completed: number;
  total: number;
};

export type OverviewHeader = {
  title: string;
  description: string;
};

export type OverviewFocusMetricIcon = "code" | "flame" | "target" | "check";

export type OverviewFocusMetric = {
  id: string;
  label: string;
  value: string;
  delta?: string;
  icon: OverviewFocusMetricIcon;
  accent?: "primary" | "accent" | "success";
};

export type OverviewNextStep = {
  id: string;
  label: string;
  detail: string;
  href: string;
};

export type WeakTopic = {
  id: string;
  name: string;
  reason: string;
  percent: number;
  href: string;
};

export type OverviewFocusInsight = {
  title: string;
  highlight: string;
  body: string;
  ctaLabel: string;
  href: string;
};

export type OverviewProgress = {
  readinessPercent: number;
  readinessSublabel: string;
  domains: ReadinessDomain[];
};

export type OverviewWorkspace = {
  header: OverviewHeader;
  focusMetrics: OverviewFocusMetric[];
  dailyPlan: {
    summary: DailyPlanSummary;
    tasks: DailyTask[];
  };
  nextSteps: OverviewNextStep[];
  weakTopics: WeakTopic[];
  focusInsight: OverviewFocusInsight;
  progress: OverviewProgress;
  activityEvents: ActivityEvent[];
};
