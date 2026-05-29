import type { ProgressMetrics } from "./shared";

export type Difficulty = "Easy" | "Medium" | "Hard";

export type QuestionStatus = "solved" | "attempted" | "reviewing" | "unsolved";

export type ImportanceTier = "Must Do" | "Very Important" | "High Frequency";

export type QuestionFrequency = "high" | "medium" | "low";

export type DSASortOption =
  | "most-asked"
  | "most-important"
  | "highest-acceptance"
  | "recently-attempted";

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
  frequency: QuestionFrequency;
  /** Derived from mock metadata: used for "Most Asked" sorting. */
  askedScore: number;
  /** Derived from mock metadata: drives importance badges. */
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
  sortBy: DSASortOption;
};

export type TopicProgress = DSATopic & {
  solved: number;
  attempted: number;
  reviewing: number;
  total: number;
  percent: Percent;
};

export type DifficultyBucketStats = ProgressMetrics & {
  pct: Percent;
};

export type DSAGlobalStats = {
  solved: number;
  attempted: number;
  reviewing: number;
  total: number;
  overallPercent: Percent;
  easy: DifficultyBucketStats;
  medium: DifficultyBucketStats;
  hard: DifficultyBucketStats;
  acceptance: string;
};

export type CompanyStats = {
  company: string;
  questionCount: number;
};

/** Question shape before derived scoring fields are applied in mock data. */
export type DSABaseQuestion = Omit<
  DSAQuestion,
  "askedScore" | "importanceTier" | "lastAttemptedDaysAgo"
>;
