import type { LabeledPercent, Percent } from "./shared";

export type PerformanceAnalytics = {
  percentileRank: Percent;
  percentileSublabel: string;
  timeDistribution: LabeledPercent[];
  strengths: string[];
  focusAreas: string[];
};
