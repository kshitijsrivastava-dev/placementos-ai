import { Outlet } from "react-router-dom";

/**
 * Layout route wrapper for dashboard pages.
 * Add auth/session checks here without changing page components.
 */
export function DashboardRouteOutlet() {
  return <Outlet />;
}
