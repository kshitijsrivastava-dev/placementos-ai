import { ExternalLink, TrendingUp } from "lucide-react";
import { getTopicById } from "@/data/dsa-mock";
import { cn } from "@/lib/utils";
import type { DSAQuestion } from "@/types/dsa";
import { BookmarkButton } from "./BookmarkButton";
import { DifficultyBadge } from "./DifficultyBadge";
import { QuestionStatusIcon } from "./QuestionStatusIcon";

const frequencyStyle = {
  high: "text-success",
  medium: "text-warning",
  low: "text-muted-foreground",
} as const;

function CompanyPills({ companies }: { companies: string[] }) {
  const visible = companies.slice(0, 2);
  const extra = companies.length - visible.length;

  return (
    <div className="flex flex-wrap gap-1 justify-end">
      {visible.map((c) => (
        <span
          key={c}
          className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-subtle text-muted-foreground border border-border"
        >
          {c}
        </span>
      ))}
      {extra > 0 && (
        <span className="text-[10px] font-mono text-muted-foreground">+{extra}</span>
      )}
    </div>
  );
}

function QuestionRow({
  question,
  index,
  bookmarked,
  onToggleBookmark,
}: {
  question: DSAQuestion;
  index: number;
  bookmarked: boolean;
  onToggleBookmark: () => void;
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
        <span className="text-[10px] font-mono text-muted-foreground">{index}</span>
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
        <span className="text-xs text-muted-foreground">{topic?.name ?? "—"}</span>
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
        <div className="flex items-center gap-1 justify-end">
          <TrendingUp
            className={cn("size-3", frequencyStyle[question.frequency])}
          />
          <span
            className={cn(
              "text-[10px] font-mono uppercase",
              frequencyStyle[question.frequency],
            )}
          >
            {question.frequency}
          </span>
        </div>
      </td>
      <td className="py-3 pr-4 hidden lg:table-cell">
        <CompanyPills companies={question.companies} />
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
}: {
  question: DSAQuestion;
  index: number;
  bookmarked: boolean;
  onToggleBookmark: () => void;
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
            <span className="text-[10px] font-mono text-muted-foreground">
              {question.acceptance.toFixed(1)}% acc.
            </span>
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
            <CompanyPills companies={question.companies} />
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
}: {
  questions: DSAQuestion[];
  bookmarkedIds: Set<string>;
  onToggleBookmark: (id: string) => void;
}) {
  if (questions.length === 0) {
    return (
      <div className="py-16 text-center">
        <p className="text-sm text-muted-foreground">No problems match your filters.</p>
        <p className="text-xs font-mono text-muted-foreground mt-1">
          Try clearing difficulty or status filters.
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
          />
        ))}
      </div>
    </>
  );
}
