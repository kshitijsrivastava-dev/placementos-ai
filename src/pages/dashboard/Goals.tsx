import { Card } from "@/components/dashboard/Card";
import { DashboardPage } from "@/components/dashboard/page/DashboardPage";
import { DashboardPageHeader } from "@/components/dashboard/page/DashboardPageHeader";
import { useGoals } from "@/hooks/dashboard/use-goals";
import { formatGoalValue, getGoalProgressPercent } from "@/lib/goals-display";
import { Target, Plus } from "lucide-react";

function Goals() {
  const { goals, summary } = useGoals();

  return (
    <DashboardPage maxWidth="5xl">
      <DashboardPageHeader
        eyebrow="// GOALS"
        title="Objectives & Key Results"
        description={`${summary.activeCount} active goals · ${summary.dueThisMonthCount} due this month`}
        actions={
          <button className="inline-flex items-center gap-2 px-4 py-2.5 bg-primary text-primary-foreground rounded-xl font-semibold text-sm">
            <Plus className="size-4" /> New Goal
          </button>
        }
      />
      <div className="grid sm:grid-cols-2 gap-5">
        {goals.map((goal) => {
          const pct = getGoalProgressPercent(goal);
          const unit = goal.unit ?? "count";
          return (
            <Card key={goal.id}>
              <div className="flex items-start gap-3 mb-4">
                <div className="size-10 rounded-xl bg-accent/10 border border-accent/20 grid place-items-center">
                  <Target className="size-5 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold leading-tight">{goal.name}</h3>
                  <p className="text-[10px] text-muted-foreground font-mono uppercase mt-1">Due {goal.deadline}</p>
                </div>
              </div>
              <div className="flex items-end justify-between mb-2">
                <span className="text-2xl font-bold font-mono">{formatGoalValue(goal.current, unit)}</span>
                <span className="text-xs text-muted-foreground font-mono">
                  / {formatGoalValue(goal.target, unit)}
                </span>
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
