import { questionTableRowClass } from "@/lib/dsa-question-display";
import { BookmarkButton } from "../BookmarkButton";
import { DifficultyBadge } from "../DifficultyBadge";
import { DSAQuestionDetails } from "../DSAQuestionDetails";
import { DSAQuestionExpandButton } from "./DSAQuestionExpandButton";
import { DSAQuestionSummary } from "./DSAQuestionSummary";
import type { DSAQuestionListItemProps } from "./types";

export function DSAQuestionTableRow({
  question,
  bookmarked,
  expanded,
  onToggleExpanded,
  onToggleBookmark,
  selectedCompanies,
  onToggleCompany,
}: DSAQuestionListItemProps) {
  return (
    <>
      <tr
        className={questionTableRowClass(expanded)}
        onClick={onToggleExpanded}
        aria-expanded={expanded}
      >
        <td className="py-3.5 pl-4 pr-2 w-11 align-middle">
          <DSAQuestionSummary question={question} variant="table-status" />
        </td>
        <td className="py-3.5 pr-3 min-w-[220px] align-middle">
          <DSAQuestionSummary question={question} variant="table-title" />
        </td>
        <td className="py-3.5 pr-3 w-[88px] align-middle hidden sm:table-cell">
          <DifficultyBadge difficulty={question.difficulty} />
        </td>
        <td className="py-3.5 pr-2 w-10 align-middle">
          <DSAQuestionExpandButton expanded={expanded} onToggle={onToggleExpanded} />
        </td>
        <td
          className="py-3.5 pr-4 w-12 align-middle"
          onClick={(event) => event.stopPropagation()}
        >
          <BookmarkButton active={bookmarked} onClick={onToggleBookmark} />
        </td>
      </tr>
      {expanded ? (
        <tr className="border-b border-border bg-surface/30">
          <td colSpan={5} className="px-4 pb-3.5 pt-0">
            <div className="pl-9 sm:pl-9">
              <div className="sm:hidden mb-3">
                <DifficultyBadge difficulty={question.difficulty} />
              </div>
              <DSAQuestionDetails
                question={question}
                selectedCompanies={selectedCompanies}
                onToggleCompany={onToggleCompany}
              />
            </div>
          </td>
        </tr>
      ) : null}
    </>
  );
}
