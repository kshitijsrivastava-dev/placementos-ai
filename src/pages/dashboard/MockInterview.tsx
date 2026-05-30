import { Card } from "@/components/dashboard/Card";
import { DashboardPage } from "@/components/dashboard/page/DashboardPage";
import { DashboardPageHeader } from "@/components/dashboard/page/DashboardPageHeader";
import { DashboardGrid } from "@/components/dashboard/page/DashboardGrid";
import { dashboardCol } from "@/lib/responsive-layout";
import { MODULES } from "@/content/product-messaging";
import { Mic, Video, Play, MessageSquare, Sparkles, Volume2 } from "lucide-react";

const transcript = [
  { who: "AI", text: "Welcome Alex. Today we're going to walk through a system design problem: design a URL shortener at scale. Where would you like to start?" },
  { who: "You", text: "Sure. Let me start with requirements — we'll handle ~100M URLs per day, with read-heavy traffic at roughly 100:1." },
  { who: "AI", text: "Good. Let's go deeper — what's your storage estimate over 5 years and which database would you pick?" },
  { who: "You", text: "Assuming 500 bytes per record, 100M/day * 365 * 5 ≈ 91TB. I'd go with Cassandra for write throughput..." },
  { who: "AI", text: "Solid reasoning. Push further on the hash collision strategy — what's your fallback when base62 collides?" },
];

function MockInterview() {
  return (
    <DashboardPage>
      <DashboardPageHeader
        eyebrow={MODULES.mockInterview.eyebrow}
        title={MODULES.mockInterview.pageTitle}
        description="Structured scenarios · rubric scoring · session transcript"
      />

      <DashboardGrid>
        <Card className={`${dashboardCol.twoThirds} p-0 overflow-hidden min-w-0`}>
          <div className="aspect-video bg-card relative">
            <div className="absolute inset-0 bg-[image:var(--gradient-glow)]" />
            <div className="absolute top-4 left-4 flex items-center gap-2 px-2.5 py-1 rounded-md bg-destructive/20 border border-destructive/40">
              <div className="size-1.5 rounded-full bg-destructive animate-pulse" />
              <span className="text-[10px] font-mono uppercase">REC · 14:32</span>
            </div>
            <div className="absolute top-4 right-4 px-2.5 py-1 rounded-md bg-surface border border-border">
              <span className="text-[10px] font-mono uppercase">Google · L4 · System Design</span>
            </div>
            <div className="absolute inset-0 grid place-items-center">
              <div className="size-32 rounded-full bg-[image:var(--gradient-primary)] grid place-items-center glow-primary">
                <Sparkles className="size-12 text-primary-foreground" />
              </div>
            </div>
            <div className="absolute bottom-4 right-4 w-40 aspect-video rounded-lg bg-muted border border-border grid place-items-center">
              <Video className="size-6 text-muted-foreground" />
            </div>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 p-2 rounded-full glass border border-border">
              <button className="size-10 rounded-full bg-surface grid place-items-center hover:bg-surface-hover"><Mic className="size-4" /></button>
              <button className="size-10 rounded-full bg-surface grid place-items-center hover:bg-surface-hover"><Video className="size-4" /></button>
              <button className="size-10 rounded-full bg-primary grid place-items-center"><Play className="size-4 text-primary-foreground" /></button>
              <button className="size-10 rounded-full bg-surface grid place-items-center hover:bg-surface-hover"><Volume2 className="size-4" /></button>
            </div>
          </div>

          <div className="p-5 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-border">
            {[
              { l: "Clarity", v: 92 },
              { l: "Depth", v: 86 },
              { l: "Structure", v: 78 },
              { l: "Communication", v: 94 },
            ].map((m) => (
              <div key={m.l}>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-muted-foreground">{m.l}</span>
                  <span className="font-mono">{m.v}</span>
                </div>
                <div className="h-1.5 w-full bg-subtle rounded-full overflow-hidden">
                  <div className="h-full bg-[image:var(--gradient-primary)]" style={{ width: `${m.v}%` }} />
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Transcript */}
        <Card title="Live Transcript" className={`${dashboardCol.narrow} min-w-0 flex flex-col`}>
          <div className="space-y-4 max-h-[min(480px,50vh)] sm:max-h-[480px] overflow-y-auto pr-1 sm:pr-2 min-h-0">
            {transcript.map((m, i) => (
              <div key={i} className={`flex gap-3 ${m.who === "You" ? "flex-row-reverse" : ""}`}>
                <div className={`size-7 shrink-0 rounded-full grid place-items-center text-[10px] font-bold ${m.who === "AI" ? "bg-primary/20 text-primary border border-primary/30" : "bg-accent/20 text-accent border border-accent/30"}`}>
                  {m.who === "AI" ? "AI" : "Y"}
                </div>
                <div className={`flex-1 p-3 rounded-xl text-sm ${m.who === "AI" ? "bg-surface border border-border" : "bg-primary/10 border border-primary/20"}`}>
                  {m.text}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 flex items-center gap-2 p-3 rounded-xl bg-surface border border-border">
            <MessageSquare className="size-4 text-muted-foreground" />
            <input className="flex-1 min-w-0 bg-transparent outline-none text-sm" placeholder="Speak or type your answer..." />
          </div>
        </Card>
      </DashboardGrid>
    </DashboardPage>
  );
}

export default MockInterview;
