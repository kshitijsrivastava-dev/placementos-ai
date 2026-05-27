import { Card } from "@/components/dashboard/Card";
import { Calculator, Brain, MessageCircle, Globe } from "lucide-react";

const sections = [
  { icon: Calculator, name: "Quantitative", solved: 240, total: 400, accuracy: "84%" },
  { icon: Brain, name: "Logical Reasoning", solved: 180, total: 300, accuracy: "78%" },
  { icon: MessageCircle, name: "Verbal Ability", solved: 120, total: 250, accuracy: "91%" },
  { icon: Globe, name: "General Awareness", solved: 60, total: 200, accuracy: "65%" },
];

function AptitudePage() {
  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div>
        <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-2">// APTITUDE</p>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Aptitude Engine</h1>
        <p className="text-muted-foreground mt-1">Adaptive difficulty · 600+ company-tagged questions</p>
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        {sections.map((s) => (
          <Card key={s.name}>
            <div className="flex items-center gap-4 mb-4">
              <div className="size-12 rounded-xl bg-primary/10 border border-primary/20 grid place-items-center">
                <s.icon className="size-5 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold">{s.name}</h3>
                <p className="text-xs text-muted-foreground font-mono">{s.solved} / {s.total} solved · {s.accuracy} acc</p>
              </div>
              <button className="text-xs font-semibold text-primary hover:text-primary/80">Resume →</button>
            </div>
            <div className="h-1.5 w-full bg-subtle rounded-full overflow-hidden">
              <div className="h-full bg-[image:var(--gradient-primary)]" style={{ width: `${(s.solved / s.total) * 100}%` }} />
            </div>
          </Card>
        ))}
      </div>
      <Card title="Recent Mock Tests">
        <div className="space-y-2">
          {[
            { name: "TCS NQT · Full Mock", score: "82/100", time: "Yesterday" },
            { name: "Infosys SP · Quant Section", score: "29/35", time: "3d ago" },
            { name: "Wipro Elite · Reasoning", score: "21/25", time: "1w ago" },
          ].map((t) => (
            <div key={t.name} className="flex items-center justify-between p-3 rounded-lg bg-surface border border-border">
              <div>
                <div className="text-sm font-medium">{t.name}</div>
                <div className="text-[10px] text-muted-foreground font-mono">{t.time}</div>
              </div>
              <div className="text-sm font-mono font-bold text-primary">{t.score}</div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

export default AptitudePage;
