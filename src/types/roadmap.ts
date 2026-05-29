export type RoadmapPhaseStatus = "done" | "active" | "upcoming";

export type RoadmapPhase = {
  id: string;
  weekLabel: string;
  title: string;
  status: RoadmapPhaseStatus;
  items: string[];
};

export type RoadmapProgress = {
  percent: number;
};
