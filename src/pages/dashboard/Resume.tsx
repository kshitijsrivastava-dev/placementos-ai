import { Card } from "@/components/dashboard/Card";
import { ProgressRing } from "@/components/dashboard/ProgressRing";
import { FileText, Upload, Sparkles, CheckCircle2, AlertCircle, XCircle } from "lucide-react";

function ResumePage() {
  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-2">// RESUME AI</p>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Resume Architect</h1>
          <p className="text-muted-foreground mt-1">ATS-optimized · JD-matched · powered by Lovable AI</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button className="inline-flex items-center gap-2 px-4 py-2.5 bg-surface border border-border rounded-xl font-semibold text-sm hover:bg-surface-hover">
            <Upload className="size-4" /> Upload PDF
          </button>
          <button className="inline-flex items-center gap-2 px-4 py-2.5 bg-primary text-primary-foreground rounded-xl font-semibold text-sm shadow-lg shadow-primary/30">
            <Sparkles className="size-4" /> Generate v4
          </button>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        <Card title="Resume Preview" className="col-span-12 lg:col-span-7 min-h-[600px]">
          <div className="bg-white text-zinc-900 rounded-lg p-8 font-serif min-h-[540px] shadow-2xl">
            <h2 className="text-2xl font-bold">Alex Chen</h2>
            <p className="text-sm text-zinc-600 mt-1">Software Engineer · alex@chen.dev · github.com/alexchen</p>
            <div className="my-4 border-t border-zinc-200" />
            <h3 className="text-xs uppercase font-bold tracking-widest text-zinc-700 mb-2">Experience</h3>
            <div className="mb-4">
              <div className="flex justify-between text-sm font-semibold">
                <span>SWE Intern · Stripe</span>
                <span className="text-zinc-500 font-normal">Summer 2025</span>
              </div>
              <ul className="mt-1 ml-4 list-disc text-sm text-zinc-700 space-y-1">
                <li>Shipped payment retry orchestrator processing <span className="bg-yellow-100 px-1">$2.4M daily</span></li>
                <li>Reduced p99 latency by <span className="bg-yellow-100 px-1">38%</span> via Redis pipelining</li>
              </ul>
            </div>
            <h3 className="text-xs uppercase font-bold tracking-widest text-zinc-700 mb-2">Projects</h3>
            <div className="text-sm text-zinc-700">
              <p className="font-semibold">DistributedKV — Go, Raft, 8k★</p>
              <p className="text-xs">Linearizable key-value store · 12k ops/sec sustained.</p>
            </div>
          </div>
        </Card>

        <div className="col-span-12 lg:col-span-5 space-y-6">
          <Card title="ATS Score" className="flex flex-col items-center">
            <ProgressRing value={87} size={140} sublabel="Strong match · Meta E4" />
          </Card>

          <Card title="AI Suggestions">
            <ul className="space-y-3">
              {[
                { icon: CheckCircle2, color: "text-success", text: "Quantified metrics detected in 4/4 bullets" },
                { icon: AlertCircle, color: "text-warning", text: "Add keyword: 'distributed systems' (in JD 3x)" },
                { icon: AlertCircle, color: "text-warning", text: "Action verbs could be stronger: replace 'made' → 'engineered'" },
                { icon: XCircle, color: "text-destructive", text: "Missing: 'system design' section for L4+ roles" },
                { icon: CheckCircle2, color: "text-success", text: "Resume length optimal at 1 page" },
              ].map((s, i) => (
                <li key={i} className="flex items-start gap-3 p-3 rounded-lg bg-surface border border-border">
                  <s.icon className={`size-4 mt-0.5 shrink-0 ${s.color}`} />
                  <span className="text-sm">{s.text}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card title="JD Match">
            <div className="flex items-center gap-3 p-3 rounded-lg bg-surface border border-border">
              <div className="size-10 rounded-lg bg-primary/10 border border-primary/20 grid place-items-center">
                <FileText className="size-5 text-primary" />
              </div>
              <div className="flex-1">
                <div className="text-sm font-semibold">Meta · Software Engineer, E4</div>
                <div className="text-xs text-muted-foreground font-mono">87% keyword match · 12 of 14 skills aligned</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default ResumePage;
