import type { ReactNode } from "react";
import { responsiveLayout } from "@/lib/responsive-layout";
import { cn } from "@/lib/utils";

export type DashboardPageMaxWidth = "5xl" | "6xl" | "7xl";

const maxWidthClasses: Record<DashboardPageMaxWidth, string> = {
  "5xl": "max-w-5xl",
  "6xl": "max-w-6xl",
  "7xl": "max-w-7xl",
};

type DashboardPageProps = {
  children: ReactNode;
  maxWidth?: DashboardPageMaxWidth;
  className?: string;
};

/** Standard inner page container for dashboard modules. */
export function DashboardPage({ children, maxWidth = "7xl", className }: DashboardPageProps) {
  return (
    <div
      className={cn(
        responsiveLayout.container,
        responsiveLayout.sectionY,
        maxWidthClasses[maxWidth],
        className,
      )}
    >
      {children}
    </div>
  );
}
