import type { ReactNode } from "react";
import { responsiveLayout } from "@/lib/responsive-layout";
import { cn } from "@/lib/utils";

type DashboardMainProps = {
  children: ReactNode;
};

/** Shared padded main region for all dashboard routes. */
export function DashboardMain({ children }: DashboardMainProps) {
  return (
    <main
      className={cn(
        "flex-1 min-w-0 animate-fade",
        responsiveLayout.pageX,
        responsiveLayout.pageY,
      )}
    >
      {children}
    </main>
  );
}
