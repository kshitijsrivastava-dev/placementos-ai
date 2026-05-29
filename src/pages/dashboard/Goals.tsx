import { Card } from "@/components/dashboard/Card";
import { DashboardPage } from "@/components/dashboard/page/DashboardPage";
import { DashboardPageHeader } from "@/components/dashboard/page/DashboardPageHeader";
import { Target, Plus } from "lucide-react";

const goals = [
  { name: "Solve 500 LeetCode problems", current: 412, target: 500, deadline: "Mar 15" },
  { name: "Complete 20 mock interviews", current: 14, target: 20, deadline: "Mar 30" },
  { name: "Land Meta E4 offer", current: 84, target: 100, deadline: "Apr 30", pct: true },
  { name: "Build 3 portfolio projects", current: 2, target: 3, deadline: "Feb 28" },
];

function Goals() {
  return (
    <DashboardPage maxWidth="5xl">
      <DashboardPageHeader
        eyebrow="// GOALS"
        title="Objectives & Key Results"
        description="4 active goals · 1 due this month"
        actions={
          <button className="inline-flex items-center gap-2 px-4 py-2.5 bg-primary text-primary-foreground rounded-xl font-semibold text-sm">
            <Plus className="size-4" /> New Goal
          </button>
        }
      />
      <div className="grid sm:grid-cols-2 gap-5">
        {goals.map((g) => {
          const pct = (g.current / g.target) * 100;
          return (
            <Card key={g.name}>
              <div className="flex items-start gap-3 mb-4">
                <div className="size-10 rounded-xl bg-accent/10 border border-accent/20 grid place-items-center">
                  <Target className="size-5 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold leading-tight">{g.name}</h3>
                  <p className="text-[10px] text-muted-foreground font-mono uppercase mt-1">Due {g.deadline}</p>
                </div>
              </div>
              <div className="flex items-end justify-between mb-2">
                <span className="text-2xl font-bold font-mono">{g.current}{g.pct && "%"}</span>
                <span className="text-xs text-muted-foreground font-mono">/ {g.target}{g.pct && "%"}</span>
              </div>
              <div className="h-2 w-full bg-subtle rounded-full overflow-hidden">
                <div className="h-full bg-[image:var(--gradient-primary)]" style={{ width: `${pct}%` }} />
              </div>
            </Card>
          );
        })}
      </div>
    </DashboardPage>
  );
}

export default Goals;
