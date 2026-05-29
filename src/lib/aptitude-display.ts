import type { LucideIcon } from "lucide-react";
import { Brain, Calculator, Globe, MessageCircle } from "lucide-react";
import { getProgressPercent } from "@/lib/progress";
import type { AptitudeSection, AptitudeSectionIcon } from "@/types/aptitude";

export const APTITUDE_SECTION_ICONS: Record<AptitudeSectionIcon, LucideIcon> = {
  calculator: Calculator,
  brain: Brain,
  "message-circle": MessageCircle,
  globe: Globe,
};

export function formatAptitudeAccuracy(percent: number): string {
  return `${percent}%`;
}

export function formatAptitudeTestScore(score: number, maxScore: number): string {
  return `${score}/${maxScore}`;
}

export function getAptitudeSectionProgressPercent(section: Pick<AptitudeSection, "solved" | "total">): number {
  return getProgressPercent(section.solved, section.total);
}
