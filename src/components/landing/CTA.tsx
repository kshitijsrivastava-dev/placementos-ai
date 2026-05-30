import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section id="cta" className="py-32 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-96 bg-[image:var(--gradient-glow)] blur-3xl opacity-60 pointer-events-none" />
      <div className="max-w-4xl mx-auto w-full min-w-0 text-center relative">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
          Ready for <span className="text-gradient">launch?</span>
        </h2>
        <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
          Join 5,000+ engineers who transformed their career trajectory this quarter. Free to start, no credit card required.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/signup" className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background font-bold rounded-full hover:scale-105 transition-transform">
            Deploy My Roadmap <ArrowRight className="size-4" />
          </Link>
          <Link to="/dashboard" className="inline-flex items-center px-8 py-4 bg-surface border border-border font-bold rounded-full hover:bg-surface-hover transition-colors">
            Explore Dashboard
          </Link>
        </div>
      </div>
    </section>
  );
}