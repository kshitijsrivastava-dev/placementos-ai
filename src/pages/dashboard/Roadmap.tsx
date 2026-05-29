import { Card } from "@/components/dashboard/Card";
import { DashboardPage } from "@/components/dashboard/page/DashboardPage";
import { DashboardPageHeader } from "@/components/dashboard/page/DashboardPageHeader";
import { useRoadmap } from "@/hooks/dashboard/use-roadmap";
import { CheckCircle2, Circle, Clock, Sparkles } from "lucide-react";

function Roadmap() {
  const { phases, progress } = useRoadmap();

  return (
    <DashboardPage maxWidth="5xl">
      <DashboardPageHeader
        eyebrow="// AI ROADMAP"
        title="Your Path to Meta E4"
        description="20-week sprint · calibrated weekly · 9 weeks remaining"
        actions={
          <button className="inline-flex items-center gap-2 px-4 py-2.5 bg-primary text-primary-foreground rounded-xl font-semibold text-sm shadow-lg shadow-primary/30">
            <Sparkles className="size-4" /> Re-calibrate
          </button>
        }
      />

      <Card>
        <div className="flex items-center gap-3 mb-2">
          <span className="text-xs font-mono text-muted-foreground uppercase">Progress</span>
          <span className="text-xs font-mono ml-auto">{progress.percent}%</span>
        </div>
        <div className="h-2 w-full bg-subtle rounded-full overflow-hidden">
          <div
            className="h-full bg-[image:var(--gradient-primary)] relative"
            style={{ width: `${progress.percent}%` }}
          >
            <div className="absolute inset-0 animate-shimmer bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.3),transparent)] bg-[length:200%_100%]" />
          </div>
        </div>
      </Card>

      <div className="relative">
        <div className="absolute left-[19px] top-2 bottom-2 w-px bg-border" />
        <div className="space-y-4">
          {phases.map((phase) => {
            const Icon =
              phase.status === "done" ? CheckCircle2 : phase.status === "active" ? Clock : Circle;
            const color =
              phase.status === "done"
                ? "text-success border-success/30 bg-success/10"
                : phase.status === "active"
                  ? "text-primary border-primary/40 bg-primary/10 shadow-[var(--shadow-glow)]"
                  : "text-muted-foreground border-border bg-surface";
            return (
              <div key={phase.id} className="flex gap-5 relative">
                <div className={`size-10 shrink-0 rounded-full border grid place-items-center ${color}`}>
                  <Icon className="size-5" />
                </div>
                <div
                  className={`flex-1 p-5 rounded-2xl border ${phase.status === "active" ? "border-primary/30 bg-primary/5" : "border-border bg-surface"}`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
                        {phase.weekLabel}
                      </div>
                      <h3 className="text-lg font-bold">{phase.title}</h3>
                    </div>
                    <span className={`text-[10px] font-mono uppercase px-2 py-1 rounded ${color}`}>
                      {phase.status}
                    </span>
                  </div>
                  <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-1.5 mt-3">
                    {phase.items.map((item) => (
                      <li key={item} className="text-sm text-muted-foreground flex items-center gap-2">
                        <span className="size-1 rounded-full bg-current shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </DashboardPage>
  );
}

export default Roadmap;
