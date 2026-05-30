import { Link } from "react-router-dom";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { Card } from "@/components/dashboard/Card";
import { cn } from "@/lib/utils";
import type { OverviewFocusInsight } from "@/types/overview";

export function OverviewFocusInsightSection({
  insight,
  className,
}: {
  insight: OverviewFocusInsight;
  className?: string;
}) {
  return (
    <Card className={cn("h-full", className)}>
      <div>
        <div className="flex items-center gap-2 mb-3">
          <div className="size-7 rounded-md bg-subtle border border-border grid place-items-center text-muted-foreground">
            <Sparkles className="size-3.5" />
          </div>
          <h3 className="text-sm font-semibold text-foreground">{insight.title}</h3>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          Your <span className="font-medium text-foreground">{insight.highlight}</span> {insight.body}
        </p>
        <Link
          to={insight.href}
          className="text-xs font-medium text-muted-foreground hover:text-foreground inline-flex items-center gap-1 transition-colors"
        >
          {insight.ctaLabel}
          <ArrowUpRight className="size-3" />
        </Link>
      </div>
    </Card>
  );
}
