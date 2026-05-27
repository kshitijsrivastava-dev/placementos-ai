export function GlowBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      <div className="absolute -top-[20%] -left-[10%] size-[600px] rounded-full bg-primary/10 animate-glow" />
      <div className="absolute top-[40%] -right-[10%] size-[500px] rounded-full bg-accent/10 animate-glow [animation-delay:2s]" />
      <div className="absolute inset-0 bg-[image:var(--gradient-glow)] opacity-80" />
    </div>
  );
}