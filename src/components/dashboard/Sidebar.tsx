import { Link, useLocation, useNavigate } from "react-router-dom";
import { signOut } from "@/features/auth/auth-service";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { useEffect, useState } from "react";
import { Sparkles, Settings, LogOut, Menu } from "lucide-react";
import { getDashboardNavHref } from "@/navigation/dashboard-nav";
import { getProfileDisplayName, getProfileInitials } from "@/features/auth/auth-service";
import { useAuth } from "@/features/auth/use-auth";
import { useOverview } from "@/hooks/dashboard/use-overview";
import { DashboardNavList } from "./nav/DashboardNavList";

function SidebarBody({ onNavigate }: { onNavigate?: () => void }) {
  const navigate = useNavigate();
  const { user, profile } = useAuth();
  const { progress } = useOverview();
  const displayName = user ? getProfileDisplayName(profile, user.email) : "";
  const profileEmail = profile?.email?.trim() || user?.email || "";
  const profileInitials = user ? getProfileInitials(profile, user.email) : "";
  const readinessPercent = progress.readinessPercent;

  async function handleSignOut() {
    await signOut();
    onNavigate?.();
    navigate("/login");
  }

  return (
    <div className="flex h-full min-h-0 w-full flex-col p-5">
      <div className="flex shrink-0 flex-col gap-6">
        <Link to="/" onClick={onNavigate} className="flex items-center gap-2">
          <div className="size-8 rounded-lg bg-[image:var(--gradient-primary)] flex items-center justify-center">
            <Sparkles className="size-4 text-primary-foreground" />
          </div>
          <span className="font-bold tracking-tighter text-lg">PlacementOS</span>
        </Link>

        <div className="flex items-center gap-3 p-3 rounded-xl bg-surface border border-border">
          <div className="size-9 rounded-lg bg-[image:var(--gradient-primary)] grid place-items-center text-[10px] font-bold text-primary-foreground">
            {profileInitials}
          </div>
          <div className="min-w-0">
            <div className="text-sm font-semibold truncate">{displayName}</div>
            <div className="text-[10px] text-muted-foreground font-mono truncate">{profileEmail}</div>
          </div>
        </div>
      </div>

      <div className="flex min-h-0 flex-1 flex-col overflow-y-auto py-6">
        <DashboardNavList onNavigate={onNavigate} />
      </div>

      <div className="flex shrink-0 flex-col gap-6 pt-6">
        <div className="p-4 rounded-xl bg-surface border border-border">
          <div className="text-[10px] font-medium uppercase tracking-wide text-muted-foreground mb-1">
            Placement ready
          </div>
          <div className="text-2xl font-bold mb-2">{readinessPercent}%</div>
          <div className="h-1.5 w-full bg-subtle rounded-full overflow-hidden">
            <div
              className="h-full bg-primary/70"
              style={{ width: `${readinessPercent}%` }}
            />
          </div>
        </div>

        <div className="space-y-0.5">
        <div className="flex items-center gap-2 px-1 py-1">
          <ThemeToggle className="shrink-0" />
          <span className="text-xs text-muted-foreground">Theme</span>
        </div>
        <Link
          to={getDashboardNavHref("settings")}
          onClick={onNavigate}
          className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-muted-foreground hover:bg-surface-hover hover:text-foreground transition-colors w-full"
        >
          <Settings className="size-4" /> Settings
        </Link>
        <button
          type="button"
          onClick={handleSignOut}
          className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-muted-foreground hover:bg-surface-hover hover:text-foreground transition-colors w-full"
        >
          <LogOut className="size-4" /> Sign out
        </button>
        </div>
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
    <div className="lg:hidden sticky top-0 z-40 glass-strong border-b border-border px-3 sm:px-4 h-14 flex items-center justify-between gap-3">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <button
            aria-label="Open menu"
            className="size-10 inline-flex items-center justify-center rounded-lg border border-border bg-surface hover:bg-surface-hover active:bg-surface-hover transition-colors touch-manipulation"
          >
            <Menu className="size-5" />
          </button>
        </SheetTrigger>
        <SheetContent
          side="left"
          className="flex h-full w-[85vw] max-w-[320px] flex-col p-0 bg-sidebar border-border overflow-hidden"
        >
          <VisuallyHidden>
            <SheetTitle>Navigation</SheetTitle>
          </VisuallyHidden>
          <SidebarBody onNavigate={() => setOpen(false)} />
        </SheetContent>
      </Sheet>
      <Link to="/" className="flex items-center gap-2 min-w-0">
        <div className="size-7 rounded-lg bg-[image:var(--gradient-primary)] flex items-center justify-center">
          <Sparkles className="size-3.5 text-primary-foreground" />
        </div>
        <span className="font-bold tracking-tighter truncate">PlacementOS</span>
      </Link>
      <ThemeToggle />
    </div>
  );
}
