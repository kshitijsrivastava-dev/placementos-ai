import { Inbox } from "lucide-react";
import { useExpandedIds } from "@/hooks/use-expanded-ids";
import { DataEmptyState } from "@/components/shared/responsive/DataEmptyState";
import { ResponsiveTableCards } from "@/components/shared/responsive/ResponsiveTableCards";
import type { DSAQuestion } from "@/types/dsa";
import { DSAQuestionListTable } from "./question-list/DSAQuestionListTable";
import { DSAQuestionMobileCard } from "./question-list/DSAQuestionMobileCard";
import type { DSAQuestionListItemProps } from "./question-list/types";

export function DSAQuestionList({
  questions,
  bookmarkedIds,
  onToggleBookmark,
  selectedCompanies,
  onToggleCompany,
}: {
  questions: DSAQuestion[];
  bookmarkedIds: Set<string>;
  onToggleBookmark: (id: string) => void;
  selectedCompanies: string[];
  onToggleCompany: (company: string) => void;
}) {
  const { isExpanded, toggleExpanded } = useExpandedIds();

  const getItemProps = (question: DSAQuestion): DSAQuestionListItemProps => ({
    question,
    bookmarked: bookmarkedIds.has(question.id),
    expanded: isExpanded(question.id),
    onToggleExpanded: () => toggleExpanded(question.id),
    onToggleBookmark: () => onToggleBookmark(question.id),
    selectedCompanies,
    onToggleCompany,
  });

  return (
    <ResponsiveTableCards
      itemCount={questions.length}
      emptyState={
        <DataEmptyState
          icon={Inbox}
          title="No problems match your filters"
          description="Try clearing company, importance, or status filters."
        />
      }
      table={<DSAQuestionListTable questions={questions} getItemProps={getItemProps} />}
      cards={
        <>
          {questions.map((question) => (
            <DSAQuestionMobileCard key={question.id} {...getItemProps(question)} />
          ))}
        </>
      }
    />
  );
}
