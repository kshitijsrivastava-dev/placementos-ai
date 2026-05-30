import { cn } from "@/lib/utils";
import type { DSAQuestion } from "@/types/dsa";
import { CompanyChips } from "./CompanyChips";

const frequencyLabel: Record<DSAQuestion["frequency"], string> = {
  high: "High frequency",
  medium: "Medium frequency",
  low: "Low frequency",
};

type DSAQuestionDetailsProps = {
  question: DSAQuestion;
  selectedCompanies: string[];
  onToggleCompany: (company: string) => void;
  className?: string;
};

/** Secondary metadata — shown on expand (desktop row or mobile card). */
export function DSAQuestionDetails({
  question,
  selectedCompanies,
  onToggleCompany,
  className,
}: DSAQuestionDetailsProps) {
  const metaParts = [
    `${question.acceptance.toFixed(1)}% acceptance`,
    frequencyLabel[question.frequency],
    question.importanceTier,
  ];

  return (
    <div
      className={cn(
        "rounded-lg border border-border bg-subtle/30 px-3 py-3 space-y-2.5",
        className,
      )}
    >
      {question.tags.length > 0 && (
        <div className="flex flex-wrap gap-1">
          {question.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-mono px-1.5 py-0.5 rounded-md text-muted-foreground border border-border/80 bg-transparent"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      <p className="text-[11px] font-mono text-muted-foreground leading-relaxed">
        {metaParts.join(" · ")}
      </p>

      {question.companies.length > 0 && (
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
          <span className="text-[10px] font-mono uppercase text-muted-foreground shrink-0">
            Companies
          </span>
          <CompanyChips
            companies={question.companies}
            selectedCompanies={selectedCompanies}
            onToggleCompany={onToggleCompany}
            maxVisible={6}
          />
        </div>
      )}

      {(question.lastAttempted || question.timeMinutes != null) && (
        <p className="text-[10px] font-mono text-muted-foreground">
          {question.lastAttempted ?? "No attempts logged"}
          {question.timeMinutes != null && ` · ${question.timeMinutes} min`}
        </p>
      )}
    </div>
  );
}
