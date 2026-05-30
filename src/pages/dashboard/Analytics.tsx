import { Card } from "@/components/dashboard/Card";
import { Heatmap } from "@/components/dashboard/Heatmap";
import { ProgressRing } from "@/components/dashboard/ProgressRing";
import { DashboardPage } from "@/components/dashboard/page/DashboardPage";
import { DashboardPageHeader } from "@/components/dashboard/page/DashboardPageHeader";
import { DashboardGrid } from "@/components/dashboard/page/DashboardGrid";
import { dashboardCol } from "@/lib/responsive-layout";
import { MODULES } from "@/content/product-messaging";
import { useAnalytics } from "@/hooks/dashboard/use-analytics";

function Analytics() {
  const { analytics } = useAnalytics();

  return (
    <DashboardPage>
      <DashboardPageHeader
        eyebrow={MODULES.analytics.eyebrow}
        title={MODULES.analytics.pageTitle}
        description="Prep signals across DSA, aptitude, and consistency"
      />
      <DashboardGrid>
        <Card title="Yearly Heatmap" className={dashboardCol.twoThirds}>
          <Heatmap cols={52} rows={7} />
        </Card>
        <Card
          title="Percentile Rank"
          className={`${dashboardCol.third} flex flex-col items-center`}
        >
          <ProgressRing
            value={analytics.percentileRank}
            size={160}
            sublabel={analytics.percentileSublabel}
          />
        </Card>
        <Card title="Time Distribution" className={dashboardCol.half}>
          <div className="space-y-3">
            {analytics.timeDistribution.map((item) => (
              <div key={item.label}>
                <div className="flex justify-between gap-2 text-xs mb-1">
                  <span className="text-muted-foreground truncate">{item.label}</span>
                  <span className="font-mono shrink-0">{item.percent}%</span>
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
        <Card title="Strengths vs Gaps" className={dashboardCol.half}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="min-w-0">
              <div className="text-xs text-muted-foreground uppercase font-mono mb-3">
                Top Strengths
              </div>
              <ul className="space-y-2">
                {analytics.strengths.map((strength) => (
                  <li key={strength} className="text-sm flex items-center gap-2 min-w-0">
                    <div className="size-1.5 rounded-full bg-success shrink-0" />
                    <span className="break-words">{strength}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="min-w-0">
              <div className="text-xs text-muted-foreground uppercase font-mono mb-3">
                Focus Areas
              </div>
              <ul className="space-y-2">
                {analytics.focusAreas.map((area) => (
                  <li key={area} className="text-sm flex items-center gap-2 min-w-0">
                    <div className="size-1.5 rounded-full bg-destructive shrink-0" />
                    <span className="break-words">{area}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Card>
      </DashboardGrid>
    </DashboardPage>
  );
}

export default Analytics;
