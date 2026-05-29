/** Integer or float percentage from 0–100. */
export type Percent = number;

export type ProgressMetrics = {
  current: number;
  target: number;
};

export type LabeledPercent = {
  label: string;
  percent: Percent;
};
