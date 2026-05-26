const stats = [
  { value: "14.2k", label: "DSA Problems Solved" },
  { value: "98.4%", label: "Interview Match Rate" },
  { value: "$185k", label: "Avg Starting Offer" },
  { value: "420+", label: "Offers Signed" },
];

export function Stats() {
  return (
    <section className="px-4 sm:px-6 py-12 border-y border-border bg-white/[0.01]">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-xs text-muted-foreground uppercase tracking-widest mb-8 font-mono">
          Trusted by engineers from Google, Meta, Microsoft, Amazon, Stripe & more
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-3xl md:text-4xl font-mono font-bold mb-1 text-gradient">{s.value}</div>
              <div className="text-xs text-muted-foreground uppercase tracking-widest">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}