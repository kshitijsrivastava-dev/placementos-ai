import type { DSAQuestion } from "@/types/dsa";
import { DSAQuestionTableRow } from "./DSAQuestionTableRow";
import type { DSAQuestionListItemProps } from "./types";

type DSAQuestionListTableProps = {
  questions: DSAQuestion[];
  getItemProps: (question: DSAQuestion) => DSAQuestionListItemProps;
};

export function DSAQuestionListTable({ questions, getItemProps }: DSAQuestionListTableProps) {
  return (
    <table className="w-full min-w-[520px]">
      <thead>
        <tr className="border-b border-border text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
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
          <DSAQuestionTableRow key={question.id} {...getItemProps(question)} />
        ))}
      </tbody>
    </table>
  );
}
