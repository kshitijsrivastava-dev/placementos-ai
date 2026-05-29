import type { Percent } from "./shared";

export type AptitudeSectionIcon =
  | "calculator"
  | "brain"
  | "message-circle"
  | "globe";

export type AptitudeSection = {
  id: string;
  name: string;
  solved: number;
  total: number;
  accuracyPercent: Percent;
  icon: AptitudeSectionIcon;
};

export type AptitudeMockTest = {
  id: string;
  name: string;
  score: number;
  maxScore: number;
  completedAtLabel: string;
};
