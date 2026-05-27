export function ProgressRing({ value, size = 120, label, sublabel }: { value: number; size?: number; label?: string; sublabel?: string }) {
  const radius = 50;
  const c = 2 * Math.PI * radius;
  const offset = c - (Math.min(100, Math.max(0, value)) / 100) * c;
  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg viewBox="0 0 120 120" className="size-full -rotate-90">
        <circle cx="60" cy="60" r={radius} fill="none" stroke="var(--ring-track)" strokeWidth="10" />
        <circle cx="60" cy="60" r={radius} fill="none" stroke="url(#ring-grad-g)" strokeWidth="10" strokeLinecap="round" strokeDasharray={c} strokeDashoffset={offset} />
        <defs>
          <linearGradient id="ring-grad-g" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="var(--chart-1)" />
            <stop offset="100%" stopColor="var(--chart-2)" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-0 grid place-items-center text-center">
        <div>
          <div className="text-2xl font-bold font-mono">{label ?? `${value}%`}</div>
          {sublabel && <div className="text-[10px] text-muted-foreground uppercase tracking-wider mt-0.5">{sublabel}</div>}
        </div>
      </div>
    </div>
  );
}
