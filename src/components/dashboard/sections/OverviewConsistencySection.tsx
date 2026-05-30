import { Card } from "@/components/dashboard/Card";
import { Heatmap } from "@/components/dashboard/Heatmap";
import { cn } from "@/lib/utils";

/** Secondary consistency view — de-emphasized vs primary workspace sections. */
export function OverviewConsistencySection({ className }: { className?: string }) {
  return (
    <Card
      title="Practice consistency"
      subtitle="Last 6 months"
      action={
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-[10px] text-muted-foreground">
          <span>Less</span>
          <div className="flex gap-1">
            <div className="size-2 bg-subtle rounded-sm" />
            <div className="size-2 bg-primary/30 rounded-sm" />
            <div className="size-2 bg-primary/60 rounded-sm" />
            <div className="size-2 bg-primary rounded-sm" />
          </div>
          <span>More</span>
        </div>
      }
      className={cn("h-full", className)}
    >
      <Heatmap cols={26} rows={4} />
    </Card>
  );
}
