import { Card } from "@/components/dashboard/Card";
import { Heatmap } from "@/components/dashboard/Heatmap";
import { ProgressRing } from "@/components/dashboard/ProgressRing";

function Analytics() {
  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div>
        <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-2">// ANALYTICS</p>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Deep Performance Analytics</h1>
        <p className="text-muted-foreground mt-1">Track every signal · understand every trend</p>
      </div>
      <div className="grid grid-cols-12 gap-6">
        <Card title="Yearly Heatmap" className="col-span-12 lg:col-span-8">
          <Heatmap cols={52} rows={7} />
        </Card>
        <Card title="Percentile Rank" className="col-span-12 lg:col-span-4 flex flex-col items-center">
          <ProgressRing value={94} size={160} sublabel="Top 6% of cohort" />
        </Card>
        <Card title="Time Distribution" className="col-span-12 lg:col-span-6">
          <div className="space-y-3">
            {[
              { label: "DSA", v: 42 },
              { label: "System Design", v: 18 },
              { label: "Aptitude", v: 14 },
              { label: "Mock Interviews", v: 16 },
              { label: "Resume & Apply", v: 10 },
            ].map((s) => (
              <div key={s.label}>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-muted-foreground">{s.label}</span>
                  <span className="font-mono">{s.v}%</span>
                </div>
                <div className="h-2 w-full bg-subtle rounded-full overflow-hidden">
                  <div className="h-full bg-[image:var(--gradient-primary)]" style={{ width: `${s.v}%` }} />
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
                {["Tree problems", "Communication", "Pattern recognition"].map((s) => (
                  <li key={s} className="text-sm flex items-center gap-2">
                    <div className="size-1.5 rounded-full bg-success" />{s}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-xs text-muted-foreground uppercase font-mono mb-3">Focus Areas</div>
              <ul className="space-y-2">
                {["DP 2D", "Tries", "System scaling"].map((s) => (
                  <li key={s} className="text-sm flex items-center gap-2">
                    <div className="size-1.5 rounded-full bg-destructive" />{s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Analytics;
