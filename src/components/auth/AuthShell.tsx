import { Link } from "react-router-dom";
import type { ReactNode } from "react";
import { Sparkles } from "lucide-react";
import { GlowBackground } from "@/components/GlowBackground";
import { ThemeToggle } from "@/components/theme/ThemeToggle";

export function AuthShell({ title, subtitle, children, footer }: { title: string; subtitle: string; children: ReactNode; footer: ReactNode }) {
  return (
    <div className="relative min-h-screen min-h-dvh w-full min-w-0 grid lg:grid-cols-2 overflow-x-clip">
      <GlowBackground />
      <div className="flex flex-col min-w-0 p-6 sm:p-8 lg:p-12">
        <div className="flex items-center justify-between mb-12">
          <Link to="/" className="flex items-center gap-2">
            <div className="size-8 rounded-lg bg-[image:var(--gradient-primary)] grid place-items-center">
              <Sparkles className="size-4 text-primary-foreground" />
            </div>
            <span className="font-bold tracking-tighter text-lg">PlacementOS</span>
          </Link>
          <ThemeToggle />
        </div>
        <div className="flex-1 flex items-center justify-center">
          <div className="w-full max-w-sm">
            <p className="text-xs font-mono text-primary uppercase tracking-widest mb-3">// SECURE LOGIN</p>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2">{title}</h1>
            <p className="text-muted-foreground mb-8">{subtitle}</p>
            {children}
            <div className="mt-6 text-sm text-muted-foreground">{footer}</div>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex relative items-center justify-center p-12 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 border-l border-border overflow-hidden">
        <div className="absolute inset-0 bg-[image:var(--gradient-glow)]" />
        <div className="relative max-w-md">
          <blockquote className="text-2xl font-medium leading-snug mb-6">
            &ldquo;PlacementOS is what I wish existed when I was prepping. It's like Linear for your career.&rdquo;
          </blockquote>
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-full bg-[image:var(--gradient-primary)]" />
            <div>
              <div className="text-sm font-semibold">Priya Raghavan</div>
              <div className="text-xs text-muted-foreground font-mono">SWE @ Stripe</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function AuthInput(props: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  const { label, ...rest } = props;
  return (
    <label className="block mb-4">
      <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-1.5 block">{label}</span>
      <input
        {...rest}
        className="w-full px-4 py-3 rounded-xl bg-surface border border-border focus:border-primary focus:bg-surface-hover outline-none text-sm transition-colors"
      />
    </label>
  );
}