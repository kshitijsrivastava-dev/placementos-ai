import { useLocation } from "react-router-dom";
import { isNavItemActive } from "@/navigation/is-nav-active";
import { resolvedDashboardNavItems } from "@/navigation/dashboard-nav";
import { DashboardNavLink } from "./DashboardNavLink";

type DashboardNavListProps = {
  onNavigate?: () => void;
};

export function DashboardNavList({ onNavigate }: DashboardNavListProps) {
  const { pathname } = useLocation();

  return (
    <nav className="space-y-0.5 flex-1">
      {resolvedDashboardNavItems.map((item) => (
        <DashboardNavLink
          key={item.href}
          item={item}
          active={isNavItemActive(pathname, item.href)}
          onNavigate={onNavigate}
        />
      ))}
    </nav>
  );
}
