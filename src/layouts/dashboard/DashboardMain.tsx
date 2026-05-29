import type { ReactNode } from "react";

type DashboardMainProps = {
  children: ReactNode;
};

/** Shared padded main region for all dashboard routes. */
export function DashboardMain({ children }: DashboardMainProps) {
  return <main className="flex-1 px-4 sm:px-6 lg:px-10 py-8 animate-fade">{children}</main>;
}
