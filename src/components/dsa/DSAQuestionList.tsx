import { ChevronDown, ExternalLink } from "lucide-react";
import { getTopicById } from "@/data/dsa-mock";
import { useExpandedIds } from "@/hooks/use-expanded-ids";
import { cn } from "@/lib/utils";
import type { DSAQuestion } from "@/types/dsa";
import { BookmarkButton } from "./BookmarkButton";
import { DifficultyBadge } from "./DifficultyBadge";
import { DSAQuestionDetails } from "./DSAQuestionDetails";
import { QuestionStatusIcon } from "./QuestionStatusIcon";

type QuestionListItemProps = {
  question: DSAQuestion;
  bookmarked: boolean;
  expanded: boolean;
  onToggleExpanded: () => void;
  onToggleBookmark: () => void;
  selectedCompanies: string[];
  onToggleCompany: (company: string) => void;
};

function QuestionRow({
  question,
  bookmarked,
  expanded,
  onToggleExpanded,
  onToggleBookmark,
  selectedCompanies,
  onToggleCompany,
}: QuestionListItemProps) {
  const topic = getTopicById(question.topicId);

  return (
    <>
      <tr
        className={cn(
          "group border-b border-border transition-colors cursor-pointer",
          expanded ? "bg-surface-hover/60" : "hover:bg-surface-hover/80",
        )}
        onClick={onToggleExpanded}
        aria-expanded={expanded}
      >
        <td className="py-3.5 pl-4 pr-2 w-11 align-middle">
          <QuestionStatusIcon status={question.status} />
        </td>
        <td className="py-3.5 pr-3 min-w-[220px] align-middle">
          <div className="flex items-start gap-2 min-w-0">
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2 min-w-0">
                <span className="text-sm font-medium text-foreground truncate group-hover:text-primary transition-colors">
                  {question.title}
                </span>
                <ExternalLink className="size-3 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
              </div>
              <p className="text-xs text-muted-foreground mt-0.5 truncate">
                {topic?.name ?? "—"}
              </p>
            </div>
          </div>
        </td>
        <td className="py-3.5 pr-3 w-[88px] align-middle hidden sm:table-cell">
          <DifficultyBadge difficulty={question.difficulty} />
        </td>
        <td className="py-3.5 pr-2 w-10 align-middle">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onToggleExpanded();
            }}
            aria-label={expanded ? "Hide details" : "Show details"}
            className="size-9 sm:size-8 inline-flex items-center justify-center rounded-lg text-muted-foreground hover:bg-surface hover:text-foreground transition-colors touch-manipulation"
          >
            <ChevronDown
              className={cn("size-4 transition-transform", expanded && "rotate-180")}
            />
          </button>
        </td>
        <td
          className="py-3.5 pr-4 w-12 align-middle"
          onClick={(e) => e.stopPropagation()}
        >
          <BookmarkButton active={bookmarked} onClick={onToggleBookmark} />
        </td>
      </tr>
      {expanded && (
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
      )}
    </>
  );
}

function QuestionCard({
  question,
  bookmarked,
  expanded,
  onToggleExpanded,
  onToggleBookmark,
  selectedCompanies,
  onToggleCompany,
}: QuestionListItemProps) {
  const topic = getTopicById(question.topicId);

  return (
    <div
      className={cn(
        "rounded-xl border bg-surface transition-colors",
        expanded ? "border-primary/25 bg-surface-hover/40" : "border-border hover:border-primary/20",
      )}
    >
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
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-foreground leading-snug pr-2">
                  {question.title}
                </p>
                <p className="text-xs text-muted-foreground mt-1">{topic?.name ?? "—"}</p>
              </div>
              <div
                className="flex items-center gap-2 shrink-0"
                onClick={(e) => e.stopPropagation()}
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
          />
        </div>
      </button>

      {expanded && (
        <div className="px-4 pb-4 pt-0 border-t border-border/60">
          <DSAQuestionDetails
            question={question}
            selectedCompanies={selectedCompanies}
            onToggleCompany={onToggleCompany}
            className="mt-3"
          />
        </div>
      )}
    </div>
  );
}

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

  if (questions.length === 0) {
    return (
      <div className="py-16 text-center">
        <p className="text-sm text-muted-foreground">No problems match your filters.</p>
        <p className="text-xs font-mono text-muted-foreground mt-1">
          Try clearing company, importance, or status filters.
        </p>
      </div>
    );
  }

  const itemProps = (question: DSAQuestion) => ({
    question,
    bookmarked: bookmarkedIds.has(question.id),
    expanded: isExpanded(question.id),
    onToggleExpanded: () => toggleExpanded(question.id),
    onToggleBookmark: () => onToggleBookmark(question.id),
    selectedCompanies,
    onToggleCompany,
  });

  return (
    <>
      <div className="hidden md:block -mx-4 sm:-mx-6 overflow-x-auto">
        <table className="w-full min-w-[520px]">
          <thead>
            <tr className="border-b border-border text-[10px] font-mono uppercase tracking-wider text-muted-foreground">
              <th className="py-3 pl-4 pr-2 text-left font-medium w-11">Status</th>
              <th className="py-3 pr-3 text-left font-medium">Problem</th>
              <th className="py-3 pr-3 text-left font-medium hidden sm:table-cell w-[88px]">
                Difficulty
              </th>
              <th className="py-3 pr-2 w-10" aria-label="Details" />
              <th className="py-3 pr-4 w-12" aria-label="Bookmark" />
            </tr>
          </thead>
          <tbody>
            {questions.map((question) => (
              <QuestionRow key={question.id} {...itemProps(question)} />
            ))}
          </tbody>
        </table>
      </div>

      <div className="md:hidden space-y-2.5">
        {questions.map((question) => (
          <QuestionCard key={question.id} {...itemProps(question)} />
        ))}
      </div>
    </>
  );
}
