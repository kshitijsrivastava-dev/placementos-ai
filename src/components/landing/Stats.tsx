const stats = [
  { value: "2.4k+", label: "Active prep workspaces" },
  { value: "76%", label: "Avg weekly plan completion" },
  { value: "14", label: "Avg problems / week" },
  { value: "8", label: "Connected prep modules" },
];

export function Stats() {
  return (
    <section className="px-4 sm:px-6 py-12 border-y border-border bg-surface/50">
      <div className="max-w-6xl mx-auto w-full min-w-0">
        <p className="text-center text-xs text-muted-foreground uppercase tracking-widest mb-8 font-mono">
          Built for campus and new-grad placement cycles
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
