import { createFileRoute } from "@tanstack/react-router";
import { Activity, Code2, Flame, Target, Sparkles, ArrowUpRight, CheckCircle2, Clock } from "lucide-react";
import { StatCard } from "@/components/dashboard/StatCard";
import { Card } from "@/components/dashboard/Card";
import { Heatmap } from "@/components/dashboard/Heatmap";
import { ProgressRing } from "@/components/dashboard/ProgressRing";

export const Route = createFileRoute("/dashboard/")({
  component: DashboardHome,
});

function DashboardHome() {
  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-2">// OVERVIEW</p>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Good evening, Alex.</h1>
          <p className="text-muted-foreground mt-1">You're 3 problems away from your daily goal. Keep the streak alive.</p>
        </div>
        <button className="inline-flex items-center gap-2 px-4 py-2.5 bg-primary text-primary-foreground rounded-xl font-semibold text-sm shadow-lg shadow-primary/30 hover:scale-[1.02] transition-transform">
          <Sparkles className="size-4" /> Generate AI Plan
        </button>
      </div>

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
                <div className="size-2 bg-white/5 rounded-sm" />
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
            {[
              { label: "Data Structures", v: 92 },
              { label: "Algorithms", v: 78 },
              { label: "System Design", v: 64 },
            ].map((s) => (
              <div key={s.label}>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-muted-foreground">{s.label}</span>
                  <span className="font-mono">{s.v}%</span>
                </div>
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-[image:var(--gradient-primary)]" style={{ width: `${s.v}%` }} />
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Activity Timeline */}
        <Card title="Activity Timeline" className="col-span-12 lg:col-span-7">
          <ul className="space-y-4">
            {[
              { icon: CheckCircle2, color: "text-[oklch(0.72_0.18_155)]", text: "Solved Trapping Rain Water — Hard · 28 min", time: "2h ago" },
              { icon: Sparkles, color: "text-primary", text: "Completed Mock Interview · Google L4 simulation · 92/100", time: "5h ago" },
              { icon: Flame, color: "text-accent", text: "Hit 18-day streak. Personal record extended.", time: "Today" },
              { icon: Code2, color: "text-primary", text: "Started new pattern: Sliding Window · 12 problems queued", time: "Yesterday" },
              { icon: Clock, color: "text-muted-foreground", text: "AI Roadmap re-calibrated for Meta E4 by Mar 2026", time: "2d ago" },
            ].map((a, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className={`size-8 rounded-lg bg-white/[0.03] border border-border grid place-items-center shrink-0 ${a.color}`}>
                  <a.icon className="size-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-foreground/90">{a.text}</p>
                  <p className="text-xs text-muted-foreground font-mono mt-0.5">{a.time}</p>
                </div>
              </li>
            ))}
          </ul>
        </Card>

        {/* Upcoming */}
        <Card title="Today's Plan" subtitle="3 of 6 complete" className="col-span-12 lg:col-span-5">
          <ul className="space-y-2">
            {[
              { t: "Binary Tree · 5 medium problems", done: true },
              { t: "Aptitude · Quant section 4", done: true },
              { t: "Mock interview · System design", done: true },
              { t: "Review DP notes", done: false },
              { t: "Resume v3 — quantify metrics", done: false },
              { t: "Read: Meta engineering blog", done: false },
            ].map((task, i) => (
              <li key={i} className={`flex items-center gap-3 p-3 rounded-lg border ${task.done ? "bg-white/[0.02] border-border opacity-60" : "bg-white/[0.04] border-border"}`}>
                <div className={`size-4 rounded border-2 flex items-center justify-center ${task.done ? "bg-primary border-primary" : "border-white/20"}`}>
                  {task.done && <CheckCircle2 className="size-3 text-primary-foreground" />}
                </div>
                <span className={`text-sm flex-1 ${task.done ? "line-through" : ""}`}>{task.t}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </div>
  );
}