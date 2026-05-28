import { Link } from "react-router-dom";
import type { ResolvedDashboardNavItem } from "@/navigation/dashboard-nav";

type DashboardNavLinkProps = {
  item: ResolvedDashboardNavItem;
  active: boolean;
  onNavigate?: () => void;
};

export function DashboardNavLink({ item, active, onNavigate }: DashboardNavLinkProps) {
  const Icon = item.icon;

  return (
    <Link
      to={item.href}
      onClick={onNavigate}
      className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors border ${
        active
          ? "bg-primary/10 text-primary border-primary/20"
          : "text-muted-foreground hover:bg-surface-hover hover:text-foreground border-transparent"
      }`}
    >
      <Icon className="size-4" />
      {item.label}
    </Link>
  );
}
