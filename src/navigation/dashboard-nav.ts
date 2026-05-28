import {
  LayoutDashboard,
  Code2,
  Calculator,
  FileText,
  MessageSquare,
  Route as RouteIcon,
  BarChart3,
  Target,
} from "lucide-react";
import type { DashboardNavGroup, DashboardNavItem } from "./types";

export const DASHBOARD_BASE_PATH = "/dashboard";

export function getDashboardNavHref(segment: string): string {
  return segment ? `${DASHBOARD_BASE_PATH}/${segment}` : DASHBOARD_BASE_PATH;
}

/** Logical groups for maintainability; rendered as a flat list in the sidebar. */
export const dashboardNavGroups: DashboardNavGroup[] = [
  {
    id: "overview",
    items: [{ segment: "", label: "Overview", icon: LayoutDashboard }],
  },
  {
    id: "practice",
    items: [
      { segment: "dsa", label: "DSA Tracker", icon: Code2 },
      { segment: "aptitude", label: "Aptitude", icon: Calculator },
      { segment: "resume", label: "Resume AI", icon: FileText },
      { segment: "mock-interview", label: "Mock Interview", icon: MessageSquare },
    ],
  },
  {
    id: "growth",
    items: [
      { segment: "roadmap", label: "AI Roadmap", icon: RouteIcon },
      { segment: "analytics", label: "Analytics", icon: BarChart3 },
      { segment: "goals", label: "Goals", icon: Target },
    ],
  },
];

export const dashboardNavItems: DashboardNavItem[] = dashboardNavGroups.flatMap(
  (group) => group.items,
);

export type ResolvedDashboardNavItem = DashboardNavItem & { href: string };

export function resolveDashboardNavItems(
  items: DashboardNavItem[] = dashboardNavItems,
): ResolvedDashboardNavItem[] {
  return items.map((item) => ({
    ...item,
    href: getDashboardNavHref(item.segment),
  }));
}

export const resolvedDashboardNavItems = resolveDashboardNavItems();
