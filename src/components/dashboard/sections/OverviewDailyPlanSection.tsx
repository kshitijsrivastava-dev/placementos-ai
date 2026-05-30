import { CheckCircle2 } from "lucide-react";
import { Card } from "@/components/dashboard/Card";
import { cn } from "@/lib/utils";
import type { DailyPlanSummary, DailyTask } from "@/types/overview";

type OverviewDailyPlanSectionProps = {
  summary: DailyPlanSummary;
  tasks: DailyTask[];
  className?: string;
};

export function OverviewDailyPlanSection({
  summary,
  tasks,
  className,
}: OverviewDailyPlanSectionProps) {
  const remaining = summary.total - summary.completed;

  return (
    <Card
      title="Today's plan"
      subtitle={`${summary.completed} of ${summary.total} complete`}
      action={
        remaining > 0 ? (
          <span className="text-[10px] font-mono text-muted-foreground">{remaining} left</span>
        ) : undefined
      }
      className={cn("h-full", className)}
    >
      <ul className="space-y-2">
        {tasks.map((task) => (
          <li
            key={task.id}
            className={`flex items-start sm:items-center gap-3 p-3 rounded-lg border ${
              task.done
                ? "bg-surface border-border opacity-60"
                : "bg-surface border-border"
            }`}
          >
            <div
              className={`size-4 rounded border-2 flex items-center justify-center shrink-0 ${
                task.done ? "bg-primary border-primary" : "border-muted-foreground/40"
              }`}
            >
              {task.done && <CheckCircle2 className="size-3 text-primary-foreground" />}
            </div>
            <span
              className={`text-sm flex-1 min-w-0 leading-snug ${task.done ? "line-through text-muted-foreground" : ""}`}
            >
              {task.title}
            </span>
          </li>
        ))}
      </ul>
    </Card>
  );
}
