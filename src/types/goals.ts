export type GoalUnit = "count" | "percent";

export type Goal = {
  id: string;
  name: string;
  current: number;
  target: number;
  deadline: string;
  unit?: GoalUnit;
};

export type GoalsSummary = {
  activeCount: number;
  dueThisMonthCount: number;
};
