function seededIntensity(i: number) {
  const x = Math.sin(i * 9301 + 49297) * 233280;
  const v = x - Math.floor(x);
  if (v < 0.35) return 0;
  if (v < 0.55) return 1;
  if (v < 0.78) return 2;
  if (v < 0.92) return 3;
  return 4;
}

const intensityClass = [
  "bg-subtle",
  "bg-primary/25",
  "bg-primary/50",
  "bg-primary/75",
  "bg-primary shadow-[0_0_8px_rgba(59,130,246,0.5)]",
];

export function Heatmap({ cols = 53, rows = 7 }: { cols?: number; rows?: number }) {
  const total = cols * rows;
  const cells = Array.from({ length: total }, (_, i) => seededIntensity(i));
  return (
    <div className="-mx-2 px-2 overflow-x-auto">
      <div
        className="grid gap-1"
        style={{
          gridTemplateColumns: `repeat(${cols}, minmax(10px, 1fr))`,
          minWidth: `${cols * 12}px`,
        }}
      >
        {cells.map((c, i) => (
          <div key={i} className={`aspect-square rounded-sm ${intensityClass[c]}`} />
        ))}
      </div>
    </div>
  );
}