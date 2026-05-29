import type { LucideIcon } from "lucide-react";
import { CheckCircle2, Clock, Code2, Flame, Sparkles } from "lucide-react";
import type { ActivityEventIcon, ActivityEventTone } from "@/types/overview";

export const ACTIVITY_EVENT_ICONS: Record<ActivityEventIcon, LucideIcon> = {
  "check-circle": CheckCircle2,
  sparkles: Sparkles,
  flame: Flame,
  code: Code2,
  clock: Clock,
};

export const ACTIVITY_EVENT_TONE_CLASSES: Record<ActivityEventTone, string> = {
  success: "text-success",
  primary: "text-primary",
  accent: "text-accent",
  muted: "text-muted-foreground",
};
