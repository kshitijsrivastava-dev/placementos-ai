import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Card } from "@/components/dashboard/Card";
import { cn } from "@/lib/utils";
import type { OverviewNextStep } from "@/types/overview";

export function OverviewNextStepsSection({
  steps,
  className,
}: {
  steps: OverviewNextStep[];
  className?: string;
}) {
  return (
    <Card title="Next up" subtitle="Highest-impact actions" className={cn("h-full", className)}>
      <ul className="space-y-2">
        {steps.map((step) => (
          <li key={step.id}>
            <Link
              to={step.href}
              className="flex items-start gap-3 p-3 rounded-lg border border-border bg-surface hover:bg-surface-hover hover:border-primary/30 transition-colors group"
            >
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium group-hover:text-primary transition-colors">
                  {step.label}
                </p>
                <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed break-words">
                  {step.detail}
                </p>
              </div>
              <ArrowUpRight className="size-4 text-muted-foreground shrink-0 mt-0.5 group-hover:text-primary transition-colors" />
            </Link>
          </li>
        ))}
      </ul>
    </Card>
  );
}
