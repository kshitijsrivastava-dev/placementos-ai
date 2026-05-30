import { Card } from "@/components/dashboard/Card";
import { ProgressRing } from "@/components/dashboard/ProgressRing";
import { cn } from "@/lib/utils";
import type { OverviewProgress } from "@/types/overview";

export function OverviewProgressSection({
  progress,
  className,
}: {
  progress: OverviewProgress;
  className?: string;
}) {
  return (
    <Card title="Readiness snapshot" className={cn("h-full flex flex-col", className)}>
      <div className="flex flex-col items-center py-2">
        <ProgressRing
          value={progress.readinessPercent}
          size={140}
          sublabel={progress.readinessSublabel}
        />
      </div>
      <div className="mt-4 w-full space-y-3">
        {progress.domains.map((domain) => (
          <div key={domain.label}>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-muted-foreground truncate pr-2">{domain.label}</span>
              <span className="font-mono">{domain.percent}%</span>
            </div>
            <div className="h-1.5 w-full bg-subtle rounded-full overflow-hidden">
              <div
                className="h-full bg-primary/70"
                style={{ width: `${domain.percent}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
