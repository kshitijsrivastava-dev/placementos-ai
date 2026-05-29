import { Route } from "react-router-dom";
import { dashboardRouteEntries } from "@/navigation/dashboard-routes";
import { DashboardRouteOutlet } from "@/layouts/dashboard/DashboardRouteOutlet";
import { DashboardLayout } from "@/layouts/DashboardLayout";

/** Nested dashboard route tree (layout + future auth outlet + pages). */
export function DashboardRoutes() {
  return (
    <Route path="/dashboard" element={<DashboardLayout />}>
      <Route element={<DashboardRouteOutlet />}>
        {dashboardRouteEntries.map(({ segment, Component }) =>
          segment === "" ? (
            <Route key="index" index element={<Component />} />
          ) : (
            <Route key={segment} path={segment} element={<Component />} />
          ),
        )}
      </Route>
    </Route>
  );
}
