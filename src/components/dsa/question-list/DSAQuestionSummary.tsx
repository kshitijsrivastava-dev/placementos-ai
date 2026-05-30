import { ExternalLink } from "lucide-react";
import { getQuestionTopicName } from "@/lib/dsa-question-display";
import type { DSAQuestion } from "@/types/dsa";
import { QuestionStatusIcon } from "../QuestionStatusIcon";

type DSAQuestionSummaryProps = {
  question: DSAQuestion;
  variant: "table-status" | "table-title" | "card-title";
};

/** Primary fields shared by table rows and mobile cards. */
export function DSAQuestionSummary({ question, variant }: DSAQuestionSummaryProps) {
  const topicName = getQuestionTopicName(question);

  if (variant === "table-status") {
    return <QuestionStatusIcon status={question.status} />;
  }

  if (variant === "table-title") {
    return (
      <div className="flex items-start gap-2 min-w-0">
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2 min-w-0">
            <span className="text-sm font-medium text-foreground truncate">
              {question.title}
            </span>
            <ExternalLink className="size-3 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
          </div>
          <p className="text-xs text-muted-foreground mt-0.5 truncate">{topicName}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-w-0 flex-1">
      <p className="text-sm font-medium text-foreground leading-snug pr-2 break-words">
        {question.title}
      </p>
      <p className="text-xs text-muted-foreground mt-1">{topicName}</p>
    </div>
  );
}
