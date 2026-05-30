import { Link } from "react-router-dom";
import { ArrowRight, Play, Activity, TrendingUp, Zap } from "lucide-react";
import { PRODUCT_BADGE, PRODUCT_DEFINITION } from "@/content/product-messaging";
import { DEMO_PERSONA } from "@/data/demo-persona";

export function Hero() {
  return (
    <section className="relative pt-20 pb-16 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto w-full min-w-0 grid lg:grid-cols-[1fr_1.2fr] gap-8 lg:gap-12 items-center">
        <div className="animate-in-up min-w-0">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            {PRODUCT_BADGE.toUpperCase()}
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-balance mb-6 leading-[1.05]">
            Placement <span className="text-gradient">Precision</span> Engineering.
          </h1>
          <p className="text-lg text-muted-foreground max-w-[48ch] mb-8">
            {PRODUCT_DEFINITION}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/dashboard" className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground font-bold rounded-xl shadow-lg shadow-primary/30 hover:scale-[1.02] transition-transform">
              Open workspace <ArrowRight className="size-4" />
            </Link>
            <a href="#dashboard" className="inline-flex items-center gap-2 px-7 py-3.5 bg-surface border border-border font-bold rounded-xl backdrop-blur-sm hover:bg-surface-hover transition-colors">
              <Play className="size-4" /> Preview dashboard
            </a>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
            {[
              { icon: Activity, label: "Active Users", value: "12.4k" },
              { icon: TrendingUp, label: "Avg Score Lift", value: "+38%" },
              { icon: Zap, label: "Practice sessions", value: "1.2M" },
            ].map((s) => (
              <div key={s.label}>
                <s.icon className="size-4 text-primary mb-1.5" />
                <div className="text-xl font-bold font-mono">{s.value}</div>
                <div className="text-[10px] text-muted-foreground uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="animate-in-up [animation-delay:200ms] relative">
          <div className="absolute -inset-8 bg-[image:var(--gradient-glow)] blur-3xl opacity-60 pointer-events-none" />
          <div className="relative glass-strong border border-border rounded-2xl overflow-hidden shadow-2xl">
            <div className="h-9 border-b border-border bg-subtle flex items-center px-4 gap-1.5">
              <div className="size-2.5 rounded-full bg-muted-foreground/30" />
              <div className="size-2.5 rounded-full bg-muted-foreground/30" />
              <div className="size-2.5 rounded-full bg-muted-foreground/30" />
              <div className="ml-3 text-[10px] font-mono text-muted-foreground tracking-wider">placementos.app/dashboard</div>
            </div>
            <div className="p-5">
              <MiniDashboard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MiniDashboard() {
  const bars = [30, 45, 80, 60, 95, 40, 55];
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-xs text-muted-foreground font-mono uppercase tracking-wider">Problems this week</div>
          <div className="text-2xl font-bold mt-1">
            {DEMO_PERSONA.problemsThisWeek}{" "}
            <span className="text-xs text-muted-foreground font-normal">solved</span>
          </div>
        </div>
        <span className="text-primary text-xs font-mono font-bold">+12% WoW</span>
      </div>
      <div className="flex items-end gap-1.5 h-24">
        {bars.map((h, i) => (
          <div key={i} className={`flex-1 rounded-t-sm ${i === 4 ? "bg-primary shadow-[0_0_20px_rgba(59,130,246,0.4)]" : "bg-primary/25"}`} style={{ height: `${h}%` }} />
        ))}
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className="p-3 bg-surface border border-border rounded-lg">
          <div className="text-[10px] text-muted-foreground uppercase">Streak</div>
          <div className="text-lg font-bold font-mono mt-0.5">{DEMO_PERSONA.streakDays} days</div>
        </div>
        <div className="p-3 bg-surface border border-border rounded-lg">
          <div className="text-[10px] text-muted-foreground uppercase">Mock Score</div>
          <div className="text-lg font-bold font-mono mt-0.5 text-accent">78%</div>
        </div>
      </div>
    </div>
  );
}