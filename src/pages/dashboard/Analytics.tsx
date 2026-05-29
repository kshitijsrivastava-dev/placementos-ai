import { Card } from "@/components/dashboard/Card";
import { Heatmap } from "@/components/dashboard/Heatmap";
import { ProgressRing } from "@/components/dashboard/ProgressRing";
import { DashboardPage } from "@/components/dashboard/page/DashboardPage";
import { DashboardPageHeader } from "@/components/dashboard/page/DashboardPageHeader";
import { useAnalytics } from "@/hooks/dashboard/use-analytics";

function Analytics() {
  const { analytics } = useAnalytics();

  return (
    <DashboardPage>
      <DashboardPageHeader
        eyebrow="// ANALYTICS"
        title="Deep Performance Analytics"
        description="Track every signal · understand every trend"
      />
      <div className="grid grid-cols-12 gap-6">
        <Card title="Yearly Heatmap" className="col-span-12 lg:col-span-8">
          <Heatmap cols={52} rows={7} />
        </Card>
        <Card title="Percentile Rank" className="col-span-12 lg:col-span-4 flex flex-col items-center">
          <ProgressRing
            value={analytics.percentileRank}
            size={160}
            sublabel={analytics.percentileSublabel}
          />
        </Card>
        <Card title="Time Distribution" className="col-span-12 lg:col-span-6">
          <div className="space-y-3">
            {analytics.timeDistribution.map((item) => (
              <div key={item.label}>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-muted-foreground">{item.label}</span>
                  <span className="font-mono">{item.percent}%</span>
                </div>
                <div className="h-2 w-full bg-subtle rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[image:var(--gradient-primary)]"
                    style={{ width: `${item.percent}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>
        <Card title="Strengths vs Gaps" className="col-span-12 lg:col-span-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="text-xs text-muted-foreground uppercase font-mono mb-3">Top Strengths</div>
              <ul className="space-y-2">
                {analytics.strengths.map((strength) => (
                  <li key={strength} className="text-sm flex items-center gap-2">
                    <div className="size-1.5 rounded-full bg-success" />
                    {strength}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-xs text-muted-foreground uppercase font-mono mb-3">Focus Areas</div>
              <ul className="space-y-2">
                {analytics.focusAreas.map((area) => (
                  <li key={area} className="text-sm flex items-center gap-2">
                    <div className="size-1.5 rounded-full bg-destructive" />
                    {area}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </DashboardPage>
  );
}

export default Analytics;
