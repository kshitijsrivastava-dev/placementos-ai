export type Difficulty = "Easy" | "Medium" | "Hard";

export type QuestionStatus = "solved" | "attempted" | "reviewing" | "unsolved";

export type DSATopic = {
  id: string;
  name: string;
  slug: string;
  description: string;
  problemCount: number;
};

export type DSAQuestion = {
  id: string;
  title: string;
  slug: string;
  topicId: string;
  difficulty: Difficulty;
  status: QuestionStatus;
  acceptance: number;
  companies: string[];
  tags: string[];
  frequency: "high" | "medium" | "low";
  lastAttempted?: string;
  timeMinutes?: number;
};

export type DSAFilters = {
  topicId: string | "all";
  difficulties: Difficulty[];
  statuses: QuestionStatus[];
  search: string;
  bookmarkedOnly: boolean;
};
