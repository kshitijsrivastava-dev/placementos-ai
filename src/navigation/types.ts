import type { LucideIcon } from "lucide-react";

/** Relative path segment under `/dashboard` (empty string = overview index). */
export type DashboardNavSegment = string;

export type DashboardNavItem = {
  segment: DashboardNavSegment;
  label: string;
  icon: LucideIcon;
  /** Reserved for future route guards; all dashboard routes are authenticated today. */
  requiresAuth?: boolean;
};

export type DashboardNavGroup = {
  id: string;
  items: DashboardNavItem[];
};
