import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import DashboardLayout from "./pages/dashboard/DashboardLayout";
import { dashboardRouteEntries } from "./navigation/dashboard-routes";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<DashboardLayout />}>
        {dashboardRouteEntries.map(({ segment, Component }) =>
          segment === "" ? (
            <Route key="index" index element={<Component />} />
          ) : (
            <Route key={segment} path={segment} element={<Component />} />
          ),
        )}
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
