import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Signup from "@/pages/Signup";
import NotFound from "@/pages/NotFound";
import { Route, Routes } from "react-router-dom";
import { dashboardRouteEntries } from "@/navigation/dashboard-routes";
import { DashboardRouteOutlet } from "@/layouts/dashboard/DashboardRouteOutlet";
import { DashboardLayout } from "@/layouts/DashboardLayout";
import { ProtectedRoute } from "@/features/auth/protected-route";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
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

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}