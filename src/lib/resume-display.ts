import type { LucideIcon } from "lucide-react";
import { AlertCircle, CheckCircle2, XCircle } from "lucide-react";
import type { ResumeSuggestionSeverity } from "@/types/resume";

export const RESUME_SUGGESTION_ICONS: Record<ResumeSuggestionSeverity, LucideIcon> = {
  success: CheckCircle2,
  warning: AlertCircle,
  error: XCircle,
};

export const RESUME_SUGGESTION_TONE_CLASSES: Record<ResumeSuggestionSeverity, string> = {
  success: "text-success",
  warning: "text-warning",
  error: "text-destructive",
};

export function formatJdMatchSummary(
  keywordMatchPercent: number,
  alignedSkills: number,
  totalSkills: number,
): string {
  return `${keywordMatchPercent}% keyword match · ${alignedSkills} of ${totalSkills} skills aligned`;
}
