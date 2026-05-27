import { Card } from "@/components/dashboard/Card";
import { Heatmap } from "@/components/dashboard/Heatmap";
import { Code2, Filter, Search } from "lucide-react";

const patterns = [
  { name: "Arrays & Hashing", solved: 42, total: 50, color: "primary" },
  { name: "Two Pointers", solved: 18, total: 22, color: "accent" },
  { name: "Sliding Window", solved: 12, total: 18 },
  { name: "Binary Search", solved: 24, total: 30 },
  { name: "Linked List", solved: 16, total: 20 },
  { name: "Trees", solved: 38, total: 55 },
  { name: "Tries", solved: 4, total: 12 },
  { name: "Heap / Priority Queue", solved: 8, total: 18 },
  { name: "Backtracking", solved: 6, total: 14 },
  { name: "Graphs", solved: 14, total: 32 },
  { name: "Dynamic Programming 1D", solved: 18, total: 40 },
  { name: "Dynamic Programming 2D", solved: 5, total: 22 },
];

const recent = [
  { title: "Trapping Rain Water", diff: "Hard", topic: "Two Pointers", status: "Solved", time: "28m" },
  { title: "Longest Substring Without Repeating", diff: "Medium", topic: "Sliding Window", status: "Solved", time: "12m" },
  { title: "Word Ladder", diff: "Hard", topic: "Graphs (BFS)", status: "Attempted", time: "45m" },
  { title: "Coin Change", diff: "Medium", topic: "DP 1D", status: "Solved", time: "22m" },
  { title: "House Robber II", diff: "Medium", topic: "DP 1D", status: "Solved", time: "15m" },
  { title: "Median of Two Sorted Arrays", diff: "Hard", topic: "Binary Search", status: "Reviewing", time: "—" },
];

const diffColor = {
  Easy: "text-[oklch(0.72_0.18_155)] bg-[oklch(0.72_0.18_155/0.1)]",
  Medium: "text-[oklch(0.78_0.17_75)] bg-[oklch(0.78_0.17_75/0.1)]",
  Hard: "text-destructive bg-destructive/10",
} as const;

function DSAPage() {
  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div>
        <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-2">// DSA TRACKER</p>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Data Structures &amp; Algorithms</h1>
        <p className="text-muted-foreground mt-1">412 of 2,500 problems · 16 patterns tracked · spaced-repetition active</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Easy", value: "168/420", pct: 40 },
          { label: "Medium", value: "204/1340", pct: 15 },
          { label: "Hard", value: "40/740", pct: 5 },
          { label: "Acceptance", value: "78.4%", pct: 78 },
        ].map((s) => (
          <div key={s.label} className="p-5 rounded-2xl bg-white/[0.02] border border-border">
            <div className="text-xs text-muted-foreground uppercase font-mono mb-2">{s.label}</div>
            <div className="text-2xl font-bold font-mono mb-3">{s.value}</div>
            <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
              <div className="h-full bg-[image:var(--gradient-primary)]" style={{ width: `${s.pct}%` }} />
            </div>
          </div>
        ))}
      </div>

      <Card title="Activity Heatmap · 12 months">
        <Heatmap cols={52} rows={7} />
      </Card>

      <div className="grid grid-cols-12 gap-6">
        <Card title="Patterns" className="col-span-12 lg:col-span-7">
          <div className="space-y-3">
            {patterns.map((p) => (
              <div key={p.name} className="flex items-center gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="truncate">{p.name}</span>
                    <span className="font-mono text-muted-foreground">{p.solved}/{p.total}</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <div className={`h-full ${p.color === "accent" ? "bg-accent" : "bg-primary"}`} style={{ width: `${(p.solved / p.total) * 100}%` }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card
          title="Recent Activity"
          action={
            <div className="flex gap-2">
              <button className="size-8 rounded-lg bg-white/5 border border-border grid place-items-center hover:bg-white/10"><Search className="size-3.5" /></button>
              <button className="size-8 rounded-lg bg-white/5 border border-border grid place-items-center hover:bg-white/10"><Filter className="size-3.5" /></button>
            </div>
          }
          className="col-span-12 lg:col-span-5"
        >
          <div className="space-y-2">
            {recent.map((r) => (
              <div key={r.title} className="flex items-center gap-3 p-3 rounded-lg bg-white/[0.02] border border-border hover:border-primary/30 transition-colors">
                <div className="size-8 rounded-lg bg-primary/10 border border-primary/20 grid place-items-center">
                  <Code2 className="size-4 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium truncate">{r.title}</div>
                  <div className="text-[10px] text-muted-foreground font-mono">{r.topic} · {r.time}</div>
                </div>
                <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${diffColor[r.diff as keyof typeof diffColor]}`}>{r.diff}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}

export default DSAPage;
