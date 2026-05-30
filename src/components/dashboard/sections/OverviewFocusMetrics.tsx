import { StatCard } from "@/components/dashboard/StatCard";
import { OVERVIEW_FOCUS_METRIC_ICONS } from "@/lib/overview-display";
import type { OverviewFocusMetric } from "@/types/overview";

export function OverviewFocusMetrics({ metrics }: { metrics: OverviewFocusMetric[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
      {metrics.map((metric) => {
        const Icon = OVERVIEW_FOCUS_METRIC_ICONS[metric.icon];
        return (
          <StatCard
            key={metric.id}
            label={metric.label}
            value={metric.value}
            delta={metric.delta}
            icon={Icon}
            accent={metric.accent}
          />
        );
      })}
    </div>
  );
}
