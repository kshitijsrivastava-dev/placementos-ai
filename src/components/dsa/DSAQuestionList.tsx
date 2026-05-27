import { ExternalLink, TrendingUp } from "lucide-react";
import { getTopicById } from "@/data/dsa-mock";
import { cn } from "@/lib/utils";
import type { DSAQuestion } from "@/types/dsa";
import { BookmarkButton } from "./BookmarkButton";
import { DifficultyBadge } from "./DifficultyBadge";
import { ImportanceTierBadge } from "./ImportanceTierBadge";
import { InterviewFrequencyBadge } from "./InterviewFrequencyBadge";
import { QuestionStatusIcon } from "./QuestionStatusIcon";

const frequencyIconStyle: Record<DSAQuestion["frequency"], string> = {
  high: "text-success",
  medium: "text-warning",
  low: "text-muted-foreground",
};

function CompanyChips({
  companies,
  selectedCompanies,
  onToggleCompany,
  maxVisible = 3,
}: {
  companies: string[];
  selectedCompanies: string[];
  onToggleCompany: (company: string) => void;
  maxVisible?: number;
}) {
  const visible = companies.slice(0, maxVisible);
  const extra = companies.length - visible.length;

  return (
    <div className="flex flex-wrap gap-1 justify-end">
      {visible.map((c) => {
        const active = selectedCompanies.includes(c);
        return (
          <button
            key={c}
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onToggleCompany(c);
            }}
            aria-pressed={active}
            className={cn(
              "text-[10px] font-mono px-1.5 py-0.5 rounded border transition-colors",
              active
                ? "bg-primary/10 border-primary/30 text-primary"
                : "bg-subtle text-muted-foreground border-border hover:bg-surface-hover hover:text-foreground",
            )}
          >
            {c}
          </button>
        );
      })}
      {extra > 0 && (
        <span className="text-[10px] font-mono text-muted-foreground">
          +{extra}
        </span>
      )}
    </div>
  );
}

function QuestionRow({
  question,
  index,
  bookmarked,
  onToggleBookmark,
  selectedCompanies,
  onToggleCompany,
}: {
  question: DSAQuestion;
  index: number;
  bookmarked: boolean;
  onToggleBookmark: () => void;
  selectedCompanies: string[];
  onToggleCompany: (company: string) => void;
}) {
  const topic = getTopicById(question.topicId);

  return (
    <tr
      className={cn(
        "group border-b border-border last:border-0 transition-colors",
        "hover:bg-surface-hover/80",
      )}
    >
      <td className="py-3 pl-4 pr-2 w-10">
        <span className="text-[10px] font-mono text-muted-foreground">
          {index}
        </span>
      </td>
      <td className="py-3 pr-2 w-10">
        <QuestionStatusIcon status={question.status} />
      </td>
      <td className="py-3 pr-4 min-w-[200px]">
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="text-sm font-medium text-left hover:text-primary transition-colors group-hover:underline underline-offset-2"
          >
            {question.title}
          </button>
          <ExternalLink className="size-3 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
        </div>
        <div className="flex flex-wrap gap-1 mt-1.5">
          {question.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-subtle text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </td>
      <td className="py-3 pr-4 hidden md:table-cell">
        <span className="text-xs text-muted-foreground">
          {topic?.name ?? "—"}
        </span>
      </td>
      <td className="py-3 pr-4">
        <DifficultyBadge difficulty={question.difficulty} />
      </td>
      <td className="py-3 pr-4 hidden lg:table-cell">
        <span className="text-xs font-mono text-muted-foreground">
          {question.acceptance.toFixed(1)}%
        </span>
      </td>
      <td className="py-3 pr-4 hidden xl:table-cell">
        <div className="flex flex-col items-end gap-1 justify-center">
          <div className="flex items-center gap-2">
            <TrendingUp
              className={cn("size-3", frequencyIconStyle[question.frequency])}
            />
            <InterviewFrequencyBadge frequency={question.frequency} />
          </div>
          <ImportanceTierBadge tier={question.importanceTier} />
        </div>
      </td>
      <td className="py-3 pr-4 hidden lg:table-cell">
        <CompanyChips
          companies={question.companies}
          selectedCompanies={selectedCompanies}
          onToggleCompany={onToggleCompany}
        />
      </td>
      <td className="py-3 pr-4 hidden sm:table-cell">
        <span className="text-[10px] font-mono text-muted-foreground">
          {question.lastAttempted ?? "—"}
        </span>
      </td>
      <td className="py-3 pr-4 w-12">
        <BookmarkButton active={bookmarked} onClick={onToggleBookmark} />
      </td>
    </tr>
  );
}

function QuestionCard({
  question,
  index,
  bookmarked,
  onToggleBookmark,
  selectedCompanies,
  onToggleCompany,
}: {
  question: DSAQuestion;
  index: number;
  bookmarked: boolean;
  onToggleBookmark: () => void;
  selectedCompanies: string[];
  onToggleCompany: (company: string) => void;
}) {
  const topic = getTopicById(question.topicId);

  return (
    <div
      className={cn(
        "p-4 rounded-xl border border-border bg-surface",
        "hover:border-primary/30 hover:bg-surface-hover transition-all",
      )}
    >
      <div className="flex items-start gap-3">
        <span className="text-[10px] font-mono text-muted-foreground pt-1">
          {String(index).padStart(2, "0")}
        </span>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 mb-2">
            <div className="flex items-center gap-2 min-w-0">
              <QuestionStatusIcon status={question.status} />
              <button
                type="button"
                className="text-sm font-semibold text-left truncate hover:text-primary transition-colors"
              >
                {question.title}
              </button>
            </div>
            <BookmarkButton active={bookmarked} onClick={onToggleBookmark} />
          </div>

          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="text-[10px] font-mono text-muted-foreground">
              {topic?.name}
            </span>
            <DifficultyBadge difficulty={question.difficulty} />
            <InterviewFrequencyBadge frequency={question.frequency} />
            <ImportanceTierBadge tier={question.importanceTier} />
          </div>

          <div className="flex flex-wrap gap-1 mb-3">
            {question.tags.map((tag) => (
              <span
                key={tag}
                className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-subtle text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between gap-2">
            <CompanyChips
              companies={question.companies}
              selectedCompanies={selectedCompanies}
              onToggleCompany={onToggleCompany}
              maxVisible={4}
            />

            {question.lastAttempted && (
              <span className="text-[10px] font-mono text-muted-foreground shrink-0">
                {question.lastAttempted}
                {question.timeMinutes != null && ` · ${question.timeMinutes}m`}
              </span>
            )}
          </div>
        </div>
      </div>
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
  if (questions.length === 0) {
    return (
      <div className="py-16 text-center">
        <p className="text-sm text-muted-foreground">
          No problems match your filters.
        </p>
        <p className="text-xs font-mono text-muted-foreground mt-1">
          Try clearing company, importance, or status filters.
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="hidden md:block overflow-x-auto -mx-6">
        <table className="w-full min-w-[720px]">
          <thead>
            <tr className="border-b border-border text-[10px] font-mono uppercase tracking-wider text-muted-foreground">
              <th className="py-3 pl-4 pr-2 text-left font-medium w-10">#</th>
              <th className="py-3 pr-2 text-left font-medium w-10" />
              <th className="py-3 pr-4 text-left font-medium">Problem</th>
              <th className="py-3 pr-4 text-left font-medium hidden md:table-cell">
                Topic
              </th>
              <th className="py-3 pr-4 text-left font-medium">Diff</th>
              <th className="py-3 pr-4 text-left font-medium hidden lg:table-cell">
                Acc.
              </th>
              <th className="py-3 pr-4 text-right font-medium hidden xl:table-cell">
                Freq.
              </th>
              <th className="py-3 pr-4 text-right font-medium hidden lg:table-cell">
                Companies
              </th>
              <th className="py-3 pr-4 text-left font-medium hidden sm:table-cell">
                Last
              </th>
              <th className="py-3 pr-4 w-12" />
            </tr>
          </thead>
          <tbody>
            {questions.map((q, i) => (
              <QuestionRow
                key={q.id}
                question={q}
                index={i + 1}
                bookmarked={bookmarkedIds.has(q.id)}
                onToggleBookmark={() => onToggleBookmark(q.id)}
                selectedCompanies={selectedCompanies}
                onToggleCompany={onToggleCompany}
              />
            ))}
          </tbody>
        </table>
      </div>

      <div className="md:hidden space-y-3">
        {questions.map((q, i) => (
          <QuestionCard
            key={q.id}
            question={q}
            index={i + 1}
            bookmarked={bookmarkedIds.has(q.id)}
            onToggleBookmark={() => onToggleBookmark(q.id)}
            selectedCompanies={selectedCompanies}
            onToggleCompany={onToggleCompany}
          />
        ))}
      </div>
    </>
  );
}
