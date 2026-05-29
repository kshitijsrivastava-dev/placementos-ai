import type { ReactNode } from "react";
import { MobileTopbar } from "@/components/dashboard/Sidebar";

type DashboardContentAreaProps = {
  children: ReactNode;
};

/** Primary column beside the sidebar (mobile topbar + page region). */
export function DashboardContentArea({ children }: DashboardContentAreaProps) {
  return (
    <div className="flex-1 min-w-0 flex flex-col">
      <MobileTopbar />
      {children}
    </div>
  );
}
