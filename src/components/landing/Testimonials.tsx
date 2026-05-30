const testimonials = [
  { quote: "PlacementOS turned 6 months of chaotic prep into a 9-week sprint. The AI mock interviews caught failure modes I didn't know I had.", name: "Priya R.", role: "SWE @ Stripe" },
  { quote: "The roadmap generator alone is worth it. It's like having a senior engineer plan your entire prep cycle.", name: "Marcus J.", role: "L4 @ Google" },
  { quote: "I went from 80 LeetCode to 450 in three months with the spaced-repetition tracker. The streak dopamine is real.", name: "Aanya S.", role: "Intern → FT @ Meta" },
  { quote: "Resume AI gave me feedback that matched word-for-word what my recruiter said. Wild.", name: "Devon K.", role: "Backend @ Datadog" },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-32 px-4 sm:px-6 bg-surface/50 border-y border-border">
      <div className="max-w-6xl mx-auto w-full min-w-0">
        <div className="max-w-2xl mb-16">
          <p className="text-xs font-mono uppercase tracking-widest text-primary mb-4">// SIGNAL</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Engineers shipping offers.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="p-8 rounded-2xl border border-border bg-card/30 backdrop-blur">
              <p className="text-lg leading-relaxed mb-6">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-full bg-[image:var(--gradient-primary)]" />
                <div>
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground font-mono">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}