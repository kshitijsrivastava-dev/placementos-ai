import type { LucideIcon } from "lucide-react";
import { CheckCircle2, Clock, Code2, Flame, Sparkles, Target } from "lucide-react";
import type { ActivityEventIcon, ActivityEventTone, OverviewFocusMetricIcon } from "@/types/overview";

export const OVERVIEW_FOCUS_METRIC_ICONS: Record<OverviewFocusMetricIcon, LucideIcon> = {
  code: Code2,
  flame: Flame,
  target: Target,
  check: CheckCircle2,
};

export const ACTIVITY_EVENT_ICONS: Record<ActivityEventIcon, LucideIcon> = {
  "check-circle": CheckCircle2,
  sparkles: Sparkles,
  flame: Flame,
  code: Code2,
  clock: Clock,
};

export const ACTIVITY_EVENT_TONE_CLASSES: Record<ActivityEventTone, string> = {
  success: "text-success/80",
  primary: "text-muted-foreground",
  accent: "text-muted-foreground",
  muted: "text-muted-foreground",
};
