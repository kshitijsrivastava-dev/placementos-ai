import { AppRoutes } from "@/routes/app-routes";
import { Analytics } from "@vercel/analytics/react";

export default function App() {
  return (
    <>
      <AppRoutes />
      <Analytics />
    </>
  );
}
