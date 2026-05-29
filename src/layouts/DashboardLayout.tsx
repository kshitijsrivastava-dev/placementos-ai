import { Outlet } from "react-router-dom";
import { DashboardShell } from "./dashboard/DashboardShell";
import { DashboardContentArea } from "./dashboard/DashboardContentArea";
import { DashboardMain } from "./dashboard/DashboardMain";

export function DashboardLayout() {
  return (
    <DashboardShell>
      <DashboardContentArea>
        <DashboardMain>
          <Outlet />
        </DashboardMain>
      </DashboardContentArea>
    </DashboardShell>
  );
}

export default DashboardLayout;
