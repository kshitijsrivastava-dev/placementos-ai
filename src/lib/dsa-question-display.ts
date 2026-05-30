import { getTopicById } from "@/data/dsa-mock";
import { cn } from "@/lib/utils";
import type { DSAQuestion } from "@/types/dsa";

export function getQuestionTopicName(question: DSAQuestion): string {
  return getTopicById(question.topicId)?.name ?? "—";
}

export function questionTableRowClass(expanded: boolean): string {
  return cn(
    "group border-b border-border transition-colors cursor-pointer",
    expanded ? "bg-surface-hover/60" : "hover:bg-surface-hover/80",
  );
}

export function questionCardShellClass(expanded: boolean): string {
  return cn(
    "rounded-xl border bg-surface transition-colors",
    expanded ? "border-border bg-surface-hover/50" : "border-border hover:bg-surface-hover/40",
  );
}
