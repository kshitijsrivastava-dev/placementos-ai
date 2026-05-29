import { Activity, Code2, Flame, Target, Sparkles, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { StatCard } from "@/components/dashboard/StatCard";
import { Card } from "@/components/dashboard/Card";
import { Heatmap } from "@/components/dashboard/Heatmap";
import { ProgressRing } from "@/components/dashboard/ProgressRing";
import { DashboardPage } from "@/components/dashboard/page/DashboardPage";
import { DashboardPageHeader } from "@/components/dashboard/page/DashboardPageHeader";
import {
  OVERVIEW_ACTIVITY_EVENTS,
  OVERVIEW_DAILY_PLAN_SUMMARY,
  OVERVIEW_DAILY_TASKS,
  OVERVIEW_READINESS_DOMAINS,
} from "@/data/overview-mock";
import { ACTIVITY_EVENT_ICONS, ACTIVITY_EVENT_TONE_CLASSES } from "@/lib/overview-display";

function DashboardHome() {
  return (
    <DashboardPage>
      <DashboardPageHeader
        eyebrow="// OVERVIEW"
        title="Good evening, Alex."
        description="You're 3 problems away from your daily goal. Keep the streak alive."
        actions={
          <button className="inline-flex items-center gap-2 px-4 py-2.5 bg-primary text-primary-foreground rounded-xl font-semibold text-sm shadow-lg shadow-primary/30 hover:scale-[1.02] transition-transform">
            <Sparkles className="size-4" /> Generate AI Plan
          </button>
        }
      />

      {/* Stats Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard label="Problems Solved" value="412" delta="+12 today" icon={Code2} />
        <StatCard label="Current Streak" value="18 days" delta="Personal best" icon={Flame} accent="accent" />
        <StatCard label="Mock Score" value="92.4%" delta="Top 5%" icon={Activity} accent="success" />
        <StatCard label="FAANG Ready" value="84%" delta="+6% this wk" icon={Target} />
      </div>

      {/* Main grid */}
      <div className="grid grid-cols-12 gap-6">
        {/* Velocity Chart */}
        <Card
          title="Weekly Velocity"
          action={<span className="text-primary text-xs font-mono font-bold">+12% WoW</span>}
          className="col-span-12 lg:col-span-8"
        >
          <div className="flex items-end gap-2 h-44">
            {[30, 45, 65, 50, 80, 95, 60, 75, 40, 70, 85, 55, 90, 100].map((h, i) => (
              <div
                key={i}
                className={`flex-1 rounded-t-md ${i >= 10 ? "bg-primary shadow-[0_0_20px_rgba(59,130,246,0.4)]" : "bg-primary/25 hover:bg-primary/40"} transition-colors`}
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
          <div className="mt-4 flex justify-between text-[10px] text-muted-foreground font-mono uppercase">
            <span>2 wks ago</span>
            <span>Last week</span>
            <span>This week</span>
          </div>
        </Card>

        {/* AI Insight */}
        <Card className="col-span-12 lg:col-span-4 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20 relative overflow-hidden">
          <div className="absolute -right-8 -bottom-8 size-40 bg-primary/20 blur-3xl rounded-full" />
          <div className="relative">
            <div className="flex items-center gap-2 mb-4">
              <div className="size-7 rounded-md bg-primary grid place-items-center">
                <Sparkles className="size-3.5 text-primary-foreground" />
              </div>
              <h3 className="text-sm font-semibold">AI Insight</h3>
            </div>
            <p className="text-sm text-foreground/90 leading-relaxed mb-4">
              Your <span className="text-primary font-semibold">Dynamic Programming</span> accuracy dropped 15% this week. I've drafted a 3-day focus sprint to close the gap.
            </p>
            <button className="text-xs font-semibold text-primary hover:text-primary/80 flex items-center gap-1">
              Review focus plan <ArrowUpRight className="size-3" />
            </button>
          </div>
        </Card>

        {/* Heatmap */}
        <Card
          title="Consistency Matrix · last 6 months"
          action={
            <div className="flex items-center gap-2 text-[10px] text-muted-foreground">
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
          className="col-span-12 lg:col-span-8"
        >
          <Heatmap cols={26} rows={4} />
          <div className="mt-6 flex gap-8 text-sm">
            <div>
              <div className="text-xs text-muted-foreground">Longest Streak</div>
              <div className="text-lg font-bold font-mono">42 days</div>
            </div>
            <div>
              <div className="text-xs text-muted-foreground">Problems / Week</div>
              <div className="text-lg font-bold font-mono">18.4</div>
            </div>
            <div>
              <div className="text-xs text-muted-foreground">Total Hours</div>
              <div className="text-lg font-bold font-mono">284h</div>
            </div>
          </div>
        </Card>

        {/* Skill Ring */}
        <Card title="FAANG Readiness" className="col-span-12 lg:col-span-4 flex flex-col items-center justify-center">
          <ProgressRing value={84} size={160} sublabel="Across 6 domains" />
          <div className="mt-6 w-full space-y-3">
            {OVERVIEW_READINESS_DOMAINS.map((domain) => (
              <div key={domain.label}>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-muted-foreground">{domain.label}</span>
                  <span className="font-mono">{domain.percent}%</span>
                </div>
                <div className="h-1.5 w-full bg-subtle rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[image:var(--gradient-primary)]"
                    style={{ width: `${domain.percent}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Activity Timeline */}
        <Card title="Activity Timeline" className="col-span-12 lg:col-span-7">
          <ul className="space-y-4">
            {OVERVIEW_ACTIVITY_EVENTS.map((event) => {
              const Icon = ACTIVITY_EVENT_ICONS[event.icon];
              const toneClass = ACTIVITY_EVENT_TONE_CLASSES[event.tone];
              return (
                <li key={event.id} className="flex items-start gap-3">
                  <div
                    className={`size-8 rounded-lg bg-surface border border-border grid place-items-center shrink-0 ${toneClass}`}
                  >
                    <Icon className="size-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-foreground/90">{event.text}</p>
                    <p className="text-xs text-muted-foreground font-mono mt-0.5">{event.timeLabel}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </Card>

        {/* Upcoming */}
        <Card
          title="Today's Plan"
          subtitle={`${OVERVIEW_DAILY_PLAN_SUMMARY.completed} of ${OVERVIEW_DAILY_PLAN_SUMMARY.total} complete`}
          className="col-span-12 lg:col-span-5"
        >
          <ul className="space-y-2">
            {OVERVIEW_DAILY_TASKS.map((task) => (
              <li
                key={task.id}
                className={`flex items-center gap-3 p-3 rounded-lg border ${task.done ? "bg-surface border-border opacity-60" : "bg-surface-hover border-border"}`}
              >
                <div
                  className={`size-4 rounded border-2 flex items-center justify-center ${task.done ? "bg-primary border-primary" : "border-muted-foreground/40"}`}
                >
                  {task.done && <CheckCircle2 className="size-3 text-primary-foreground" />}
                </div>
                <span className={`text-sm flex-1 ${task.done ? "line-through" : ""}`}>{task.title}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </DashboardPage>
  );
}

export default DashboardHome;
