import { Heatmap } from "@/components/dashboard/Heatmap";
import { ProgressRing } from "@/components/dashboard/ProgressRing";

export function DashboardShowcase() {
  return (
    <section id="dashboard" className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-mono uppercase tracking-widest text-primary mb-4">// COCKPIT</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Built for control.</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Every milestone, every problem, every mock interview analyzed by neural engines to surface your blindspots.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-6">
          <div className="lg:col-span-3 bg-white/[0.02] border border-border rounded-2xl p-6 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-lg bg-[image:var(--gradient-primary)]" />
              <div>
                <div className="text-sm font-bold">Alex Chen</div>
                <div className="text-[10px] text-muted-foreground font-mono">PRO · ID 8829</div>
              </div>
            </div>
            <div className="space-y-1">
              {["Overview", "Roadmap", "DSA Tracker", "Mock Interviews", "Resume AI", "Analytics"].map((l, i) => (
                <div key={l} className={`p-2.5 rounded-lg text-sm transition-colors ${i === 0 ? "bg-primary/10 text-primary border border-primary/20" : "text-muted-foreground hover:bg-white/5"}`}>
                  {l}
                </div>
              ))}
            </div>
            <div className="mt-auto p-4 bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-xl">
              <div className="text-xs font-mono uppercase text-primary mb-1">FAANG READY</div>
              <div className="text-2xl font-bold">84%</div>
            </div>
          </div>

          <div className="lg:col-span-9 grid grid-cols-6 gap-6">
            <div className="col-span-6 md:col-span-4 bg-white/[0.03] border border-border rounded-2xl p-6">
              <div className="flex justify-between mb-6">
                <h3 className="text-sm font-mono text-muted-foreground uppercase">Weekly Velocity</h3>
                <span className="text-primary text-xs font-mono font-bold">+12% WoW</span>
              </div>
              <div className="flex items-end gap-2 h-32">
                {[30, 45, 80, 60, 95, 40, 55].map((h, i) => (
                  <div key={i} className={`flex-1 rounded-t-sm ${i === 4 ? "bg-primary shadow-[0_0_20px_rgba(59,130,246,0.4)]" : "bg-primary/25"}`} style={{ height: `${h}%` }} />
                ))}
              </div>
              <div className="mt-4 flex justify-between text-[10px] text-muted-foreground font-mono uppercase">
                <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
              </div>
            </div>

            <div className="col-span-6 md:col-span-2 bg-white/[0.03] border border-border rounded-2xl p-6 flex flex-col items-center justify-center gap-3">
              <ProgressRing value={82} sublabel="Mock Score" />
            </div>

            <div className="col-span-6 bg-white/[0.03] border border-border rounded-2xl p-6">
              <div className="flex justify-between items-center mb-5">
                <h3 className="text-sm font-mono text-muted-foreground uppercase">Activity Heatmap</h3>
                <div className="flex items-center gap-2 text-[10px] text-muted-foreground">
                  <span>Less</span>
                  <div className="flex gap-1">
                    <div className="size-2 bg-white/5 rounded-sm" />
                    <div className="size-2 bg-primary/30 rounded-sm" />
                    <div className="size-2 bg-primary/60 rounded-sm" />
                    <div className="size-2 bg-primary rounded-sm" />
                  </div>
                  <span>More</span>
                </div>
              </div>
              <Heatmap cols={26} rows={2} />
              <div className="mt-6 flex justify-between">
                <div className="flex gap-8">
                  <div>
                    <div className="text-xs text-muted-foreground">Longest Streak</div>
                    <div className="text-lg font-bold font-mono">42 days</div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Problems / Week</div>
                    <div className="text-lg font-bold font-mono">18.4</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}