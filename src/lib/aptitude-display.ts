import type { LucideIcon } from "lucide-react";
import { Brain, Calculator, Globe, MessageCircle } from "lucide-react";
import type { AptitudeSectionIcon } from "@/types/aptitude";

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
