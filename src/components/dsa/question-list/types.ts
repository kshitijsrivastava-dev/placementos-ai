import type { DSAQuestion } from "@/types/dsa";

/** Props passed to each responsive question row/card renderer. */
export type DSAQuestionListItemProps = {
  question: DSAQuestion;
  bookmarked: boolean;
  expanded: boolean;
  onToggleExpanded: () => void;
  onToggleBookmark: () => void;
  selectedCompanies: string[];
  onToggleCompany: (company: string) => void;
};
