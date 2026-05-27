import { CheckCircle2, Circle, Clock, RotateCcw } from "lucide-react";
import { cn } from "@/lib/utils";
import { STATUS_LABELS } from "@/lib/dsa-utils";
import type { QuestionStatus } from "@/types/dsa";

const config: Record<
  QuestionStatus,
  { icon: typeof CheckCircle2; className: string }
> = {
  solved: { icon: CheckCircle2, className: "text-success" },
  attempted: { icon: RotateCcw, className: "text-warning" },
  reviewing: { icon: Clock, className: "text-primary" },
  unsolved: { icon: Circle, className: "text-muted-foreground/50" },
};

export function QuestionStatusIcon({
  status,
  showLabel = false,
  className,
}: {
  status: QuestionStatus;
  showLabel?: boolean;
  className?: string;
}) {
  const { icon: Icon, className: iconClass } = config[status];

  return (
    <div
      className={cn("flex items-center gap-1.5", className)}
      title={STATUS_LABELS[status]}
    >
      <Icon className={cn("size-4 shrink-0", iconClass)} />
      {showLabel && (
        <span className="text-[10px] font-mono text-muted-foreground hidden sm:inline">
          {STATUS_LABELS[status]}
        </span>
      )}
    </div>
  );
}
