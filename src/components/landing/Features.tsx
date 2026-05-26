import { Brain, Code2, FileSearch, MessageSquare, Route, BarChart3 } from "lucide-react";

const features = [
  { icon: Code2, title: "DSA Mastery Engine", desc: "Track 2,500+ problems across 16 patterns. Adaptive difficulty calibration based on your spaced-repetition curve." },
  { icon: Brain, title: "AI Mock Interviewer", desc: "Voice-driven simulations with real-time feedback on technical clarity, depth, and communication." },
  { icon: FileSearch, title: "Resume AI Architect", desc: "ATS-optimized rewrites against actual hiring manager rubrics from FAANG and unicorn startups." },
  { icon: Route, title: "Personalized Roadmaps", desc: "Generative AI builds your week-by-week plan from your target company, timeline, and skill gaps." },
  { icon: BarChart3, title: "Study Analytics", desc: "GitHub-style heatmaps, velocity charts, and productivity insights that show what's actually moving the needle." },
  { icon: MessageSquare, title: "Aptitude Tracker", desc: "Verbal, logical, quantitative drills with per-section diagnostics for tier-1 placement tests." },
];

export function Features() {
  return (
    <section id="features" className="py-32 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-16">
          <p className="text-xs font-mono uppercase tracking-widest text-primary mb-4">// PLATFORM</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Engineered for the elite candidate.</h2>
          <p className="text-muted-foreground text-lg">Everything you need to bypass the noise and secure your dream engineering role.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="group p-6 rounded-2xl border border-border bg-white/[0.02] hover:bg-white/[0.04] hover:border-primary/30 transition-all">
              <div className="size-11 rounded-lg bg-primary/10 border border-primary/20 grid place-items-center mb-5 group-hover:bg-primary/20 transition-colors">
                <f.icon className="size-5 text-primary" />
              </div>
              <h3 className="text-base font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}