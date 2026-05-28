import { Link, useLocation } from "react-router-dom";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { useEffect, useState } from "react";
import {
  LayoutDashboard,
  Code2,
  Calculator,
  FileText,
  MessageSquare,
  Route as RouteIcon,
  BarChart3,
  Target,
  Sparkles,
  Settings,
  LogOut,
  Menu,
} from "lucide-react";

const nav = [
  { to: "/dashboard", label: "Overview", icon: LayoutDashboard },
  { to: "/dashboard/dsa", label: "DSA Tracker", icon: Code2 },
  { to: "/dashboard/aptitude", label: "Aptitude", icon: Calculator },
  { to: "/dashboard/resume", label: "Resume AI", icon: FileText },
  { to: "/dashboard/mock-interview", label: "Mock Interview", icon: MessageSquare },
  { to: "/dashboard/roadmap", label: "AI Roadmap", icon: RouteIcon },
  { to: "/dashboard/analytics", label: "Analytics", icon: BarChart3 },
  { to: "/dashboard/goals", label: "Goals", icon: Target },
] as const;

function SidebarBody({ onNavigate }: { onNavigate?: () => void }) {
  const path = useLocation().pathname;
  return (
    <div className="flex flex-col h-full w-full p-5 gap-6">
      <Link to="/" onClick={onNavigate} className="flex items-center gap-2">
        <div className="size-8 rounded-lg bg-[image:var(--gradient-primary)] flex items-center justify-center">
          <Sparkles className="size-4 text-primary-foreground" />
        </div>
        <span className="font-bold tracking-tighter text-lg">PlacementOS</span>
      </Link>

      <div className="flex items-center gap-3 p-3 rounded-xl bg-surface border border-border">
        <div className="size-9 rounded-lg bg-[image:var(--gradient-primary)]" />
        <div className="min-w-0">
          <div className="text-sm font-semibold truncate">Alex Chen</div>
          <div className="text-[10px] text-muted-foreground font-mono">PRO · ID 8829</div>
        </div>
      </div>

      <nav className="space-y-0.5 flex-1">
        {nav.map((item) => {
          const active = path === item.to;
          return (
            <Link
              key={item.to}
              to={item.to}
              onClick={onNavigate}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors border ${
                active
                  ? "bg-primary/10 text-primary border-primary/20"
                  : "text-muted-foreground hover:bg-surface-hover hover:text-foreground border-transparent"
              }`}
            >
              <item.icon className="size-4" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 rounded-xl bg-gradient-to-br from-primary/15 to-accent/15 border border-primary/20">
        <div className="text-[10px] font-mono uppercase text-primary mb-1">FAANG Ready</div>
        <div className="text-2xl font-bold mb-2">84%</div>
        <div className="h-1.5 w-full bg-subtle rounded-full overflow-hidden">
          <div className="h-full bg-[image:var(--gradient-primary)]" style={{ width: "84%" }} />
        </div>
      </div>

      <div className="space-y-0.5">
        <div className="flex items-center gap-2 px-1 py-1">
          <ThemeToggle className="shrink-0" />
          <span className="text-xs text-muted-foreground">Theme</span>
        </div>
        <button className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-muted-foreground hover:bg-surface-hover hover:text-foreground transition-colors w-full">
          <Settings className="size-4" /> Settings
        </button>
        <Link to="/login" onClick={onNavigate} className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-muted-foreground hover:bg-surface-hover hover:text-foreground transition-colors">
          <LogOut className="size-4" /> Sign out
        </Link>
      </div>
    </div>
  );
}

export function Sidebar() {
  return (
    <aside className="hidden lg:flex flex-col w-64 shrink-0 h-screen sticky top-0 border-r border-border bg-sidebar">
      <SidebarBody />
    </aside>
  );
}

export function MobileTopbar() {
  const [open, setOpen] = useState(false);
  const path = useLocation().pathname;
  useEffect(() => {
    setOpen(false);
  }, [path]);
  return (
    <div className="lg:hidden sticky top-0 z-40 glass-strong border-b border-border px-4 h-14 flex items-center justify-between">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <button
            aria-label="Open menu"
            className="size-9 inline-flex items-center justify-center rounded-lg border border-border bg-surface hover:bg-surface-hover transition-colors"
          >
            <Menu className="size-4" />
          </button>
        </SheetTrigger>
        <SheetContent side="left" className="w-72 p-0 bg-sidebar border-border">
          <VisuallyHidden>
            <SheetTitle>Navigation</SheetTitle>
          </VisuallyHidden>
          <SidebarBody onNavigate={() => setOpen(false)} />
        </SheetContent>
      </Sheet>
      <Link to="/" className="flex items-center gap-2">
        <div className="size-7 rounded-lg bg-[image:var(--gradient-primary)] flex items-center justify-center">
          <Sparkles className="size-3.5 text-primary-foreground" />
        </div>
        <span className="font-bold tracking-tighter">PlacementOS</span>
      </Link>
      <ThemeToggle />
    </div>
  );
}