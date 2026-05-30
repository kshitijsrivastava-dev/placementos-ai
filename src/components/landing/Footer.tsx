export function Footer() {
  return (
    <footer className="py-12 px-4 sm:px-6 border-t border-border">
      <div className="max-w-6xl mx-auto w-full min-w-0 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-sm text-muted-foreground font-mono">PLACEMENTOS // CORE_SYSTEM · © 2026</div>
        <div className="flex gap-8 text-xs font-medium uppercase tracking-widest text-muted-foreground">
          <a href="#" className="hover:text-foreground transition-colors">Security</a>
          <a href="#" className="hover:text-foreground transition-colors">API</a>
          <a href="#" className="hover:text-foreground transition-colors">Status</a>
          <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
        </div>
      </div>
    </footer>
  );
}