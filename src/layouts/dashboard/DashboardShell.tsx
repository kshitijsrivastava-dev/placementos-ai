import type { ReactNode } from "react";
import { GlowBackground } from "@/components/GlowBackground";
import { Sidebar } from "@/components/dashboard/Sidebar";

type DashboardShellProps = {
  children: ReactNode;
};

/** Root dashboard frame: background, sidebar, and main content column. */
export function DashboardShell({ children }: DashboardShellProps) {
  return (
    <div className="relative min-h-screen flex">
      <GlowBackground />
      <Sidebar />
      {children}
    </div>
  );
}
