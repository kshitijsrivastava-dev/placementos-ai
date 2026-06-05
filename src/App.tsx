import { AppRoutes } from "@/routes/app-routes";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

export default function App() {
  return (
    <>
      <AppRoutes />
      <Analytics />
      <SpeedInsights />
    </>
  );
}
