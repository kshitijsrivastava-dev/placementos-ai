import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";
import { ThemeToggle } from "@/components/theme/ThemeToggle";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-border glass-strong px-4 sm:px-6 py-3 flex items-center justify-between gap-3 min-w-0">
      <div className="flex items-center gap-4 sm:gap-8 min-w-0 flex-1">
        <Link to="/" className="flex items-center gap-2">
          <div className="size-7 rounded-lg bg-[image:var(--gradient-primary)] flex items-center justify-center">
            <Sparkles className="size-4 text-primary-foreground" />
          </div>
          <span className="font-bold tracking-tighter text-lg">PlacementOS</span>
        </Link>
        <div className="hidden md:flex gap-6 text-sm text-muted-foreground">
          <a href="#features" className="hover:text-foreground transition-colors">Modules</a>
          <a href="#dashboard" className="hover:text-foreground transition-colors">Dashboard</a>
          <a href="#testimonials" className="hover:text-foreground transition-colors">Stories</a>
          <a href="#cta" className="hover:text-foreground transition-colors">Pricing</a>
        </div>
      </div>
      <div className="flex items-center gap-2 shrink-0">
        <ThemeToggle />
        <Link
          to="/login"
          className="text-sm font-medium px-3 sm:px-4 py-2 hover:text-primary transition-colors hidden sm:inline-block touch-manipulation"
        >
          Sign In
        </Link>
        <Link
          to="/signup"
          className="text-sm font-medium bg-foreground text-background px-3 sm:px-4 py-2 rounded-full hover:bg-foreground/90 transition-colors touch-manipulation whitespace-nowrap"
        >
          Get Started
        </Link>
      </div>
    </nav>
  );
}