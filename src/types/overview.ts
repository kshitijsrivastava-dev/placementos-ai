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
