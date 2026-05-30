import { ChevronDown } from "lucide-react";
import { questionCardShellClass } from "@/lib/dsa-question-display";
import { cn } from "@/lib/utils";
import { BookmarkButton } from "../BookmarkButton";
import { DifficultyBadge } from "../DifficultyBadge";
import { DSAQuestionDetails } from "../DSAQuestionDetails";
import { QuestionStatusIcon } from "../QuestionStatusIcon";
import { DSAQuestionSummary } from "./DSAQuestionSummary";
import type { DSAQuestionListItemProps } from "./types";

export function DSAQuestionMobileCard({
  question,
  bookmarked,
  expanded,
  onToggleExpanded,
  onToggleBookmark,
  selectedCompanies,
  onToggleCompany,
}: DSAQuestionListItemProps) {
  return (
    <div className={questionCardShellClass(expanded)}>
      <button
        type="button"
        className="w-full text-left p-4 touch-manipulation"
        onClick={onToggleExpanded}
        aria-expanded={expanded}
      >
        <div className="flex items-start gap-3">
          <QuestionStatusIcon status={question.status} className="pt-0.5" />
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-3">
              <DSAQuestionSummary question={question} variant="card-title" />
              <div
                className="flex items-center gap-2 shrink-0"
                onClick={(event) => event.stopPropagation()}
              >
                <DifficultyBadge difficulty={question.difficulty} />
                <BookmarkButton active={bookmarked} onClick={onToggleBookmark} />
              </div>
            </div>
          </div>
          <ChevronDown
            className={cn(
              "size-5 text-muted-foreground shrink-0 mt-0.5 transition-transform",
              expanded && "rotate-180",
            )}
            aria-hidden
          />
        </div>
      </button>

      {expanded ? (
        <div className="px-4 pb-4 pt-0 border-t border-border/60">
          <DSAQuestionDetails
            question={question}
            selectedCompanies={selectedCompanies}
            onToggleCompany={onToggleCompany}
            className="mt-3"
          />
        </div>
      ) : null}
    </div>
  );
}
