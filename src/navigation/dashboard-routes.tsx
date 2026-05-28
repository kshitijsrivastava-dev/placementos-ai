import type { ComponentType } from "react";
import Overview from "@/pages/dashboard/Overview";
import DSA from "@/pages/dashboard/DSA";
import Aptitude from "@/pages/dashboard/Aptitude";
import Resume from "@/pages/dashboard/Resume";
import MockInterview from "@/pages/dashboard/MockInterview";
import Roadmap from "@/pages/dashboard/Roadmap";
import Analytics from "@/pages/dashboard/Analytics";
import Goals from "@/pages/dashboard/Goals";
import { dashboardNavItems } from "./dashboard-nav";
import type { DashboardNavSegment } from "./types";

const dashboardPageComponents: Record<DashboardNavSegment, ComponentType> = {
  "": Overview,
  dsa: DSA,
  aptitude: Aptitude,
  resume: Resume,
  "mock-interview": MockInterview,
  roadmap: Roadmap,
  analytics: Analytics,
  goals: Goals,
};

export type DashboardRouteEntry = {
  segment: DashboardNavSegment;
  Component: ComponentType;
};

/** Route entries aligned with sidebar navigation config. */
export const dashboardRouteEntries: DashboardRouteEntry[] = dashboardNavItems.map(
  (item) => ({
    segment: item.segment,
    Component: dashboardPageComponents[item.segment],
  }),
);
