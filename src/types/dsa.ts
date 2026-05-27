export type Difficulty = "Easy" | "Medium" | "Hard";

export type QuestionStatus = "solved" | "attempted" | "reviewing" | "unsolved";

export type ImportanceTier = "Must Do" | "Very Important" | "High Frequency";

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
  /** Derived from mock metadata: used for "Most Asked" sorting. */
  askedScore: number;
  /** Derived from mock metadata: drives "Must Do / Very Important / High Frequency" badges. */
  importanceTier: ImportanceTier;
  /** Derived numeric recency for sorting by "Recently attempted". */
  lastAttemptedDaysAgo: number;
  lastAttempted?: string;
  timeMinutes?: number;
};

export type DSAFilters = {
  topicId: string | "all";
  difficulties: Difficulty[];
  statuses: QuestionStatus[];
  search: string;
  bookmarkedOnly: boolean;
  companies: string[];
  importanceTiers: ImportanceTier[];
  sortBy: "most-asked" | "most-important" | "highest-acceptance" | "recently-attempted";
};
