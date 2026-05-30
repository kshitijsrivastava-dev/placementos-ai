import { Link } from "react-router-dom";
import { AlertCircle, ArrowUpRight } from "lucide-react";
import { Card } from "@/components/dashboard/Card";
import { getProgressPercent } from "@/lib/progress";
import { cn } from "@/lib/utils";
import type { WeakTopic } from "@/types/overview";

export function OverviewWeakTopicsSection({
  topics,
  className,
}: {
  topics: WeakTopic[];
  className?: string;
}) {
  return (
    <Card title="Revision focus" subtitle="Weak topics to address" className={cn("h-full", className)}>
      <ul className="space-y-3">
        {topics.map((topic) => (
          <li key={topic.id}>
            <Link
              to={topic.href}
              className="block p-3 rounded-lg border border-border bg-surface hover:bg-surface-hover hover:border-primary/30 transition-colors group"
            >
              <div className="flex items-start justify-between gap-3 mb-2">
                <div className="flex items-start gap-2 min-w-0">
                  <AlertCircle className="size-4 text-warning shrink-0 mt-0.5" />
                  <div className="min-w-0">
                    <p className="text-sm font-medium group-hover:text-primary transition-colors">
                      {topic.name}
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed break-words">
                      {topic.reason}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1 shrink-0">
                  <span className="text-xs font-mono text-muted-foreground">{topic.percent}%</span>
                  <ArrowUpRight className="size-3.5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
              </div>
              <div className="h-1.5 w-full bg-subtle rounded-full overflow-hidden">
                <div
                  className="h-full bg-warning/80"
                  style={{ width: `${getProgressPercent(topic.percent, 100)}%` }}
                />
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </Card>
  );
}
