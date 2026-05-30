import type { ReactNode } from "react";
import { dashboardGridClass } from "@/lib/responsive-layout";
import { cn } from "@/lib/utils";

type DashboardGridProps = {
  children: ReactNode;
  className?: string;
};

/** Standard 12-column dashboard layout grid. */
export function DashboardGrid({ children, className }: DashboardGridProps) {
  return <div className={cn(dashboardGridClass, className)}>{children}</div>;
}
