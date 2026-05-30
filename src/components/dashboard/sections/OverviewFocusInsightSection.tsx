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
    <Card
      className={cn(
        "h-full bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20 relative overflow-hidden",
        className,
      )}
    >
      <div className="absolute -right-8 -bottom-8 size-40 bg-primary/20 blur-3xl rounded-full pointer-events-none" />
      <div className="relative">
        <div className="flex items-center gap-2 mb-3">
          <div className="size-7 rounded-md bg-primary grid place-items-center">
            <Sparkles className="size-3.5 text-primary-foreground" />
          </div>
          <h3 className="text-sm font-semibold">{insight.title}</h3>
        </div>
        <p className="text-sm text-foreground/90 leading-relaxed mb-4">
          Your <span className="text-primary font-semibold">{insight.highlight}</span>{" "}
          {insight.body}
        </p>
        <Link
          to={insight.href}
          className="text-xs font-semibold text-primary hover:text-primary/80 inline-flex items-center gap-1"
        >
          {insight.ctaLabel}
          <ArrowUpRight className="size-3" />
        </Link>
      </div>
    </Card>
  );
}
