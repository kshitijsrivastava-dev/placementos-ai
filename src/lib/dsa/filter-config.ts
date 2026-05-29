import type { Difficulty, DSAFilters, ImportanceTier, QuestionStatus } from "@/types/dsa";

export const DSA_DIFFICULTY_OPTIONS: Difficulty[] = ["Easy", "Medium", "Hard"];

export const DSA_STATUS_OPTIONS: { value: QuestionStatus; label: string }[] = [
  { value: "solved", label: "Solved" },
  { value: "attempted", label: "Attempted" },
  { value: "reviewing", label: "Reviewing" },
  { value: "unsolved", label: "Not started" },
];

export const DSA_IMPORTANCE_OPTIONS: ImportanceTier[] = [
  "Must Do",
  "Very Important",
  "High Frequency",
];

export const DSA_SORT_OPTIONS: { value: DSAFilters["sortBy"]; label: string }[] = [
  { value: "most-asked", label: "Most Asked" },
  { value: "most-important", label: "Must Do First" },
  { value: "highest-acceptance", label: "Highest Acceptance" },
  { value: "recently-attempted", label: "Recently Attempted" },
];

export const DSA_PAGE_SIZE_OPTIONS = [10, 12, 20] as const;

export const DSA_TOP_COMPANY_CHIP_COUNT = 8;
