import { createFileRoute, Outlet } from "@tanstack/react-router";
import { Sidebar, MobileTopbar } from "@/components/dashboard/Sidebar";
import { GlowBackground } from "@/components/GlowBackground";

export const Route = createFileRoute("/dashboard")({
  component: DashboardLayout,
});

function DashboardLayout() {
  return (
    <div className="relative min-h-screen flex">
      <GlowBackground />
      <Sidebar />
      <div className="flex-1 min-w-0 flex flex-col">
        <MobileTopbar />
        <main className="flex-1 px-4 sm:px-6 lg:px-10 py-8 animate-fade">
          <Outlet />
        </main>
      </div>
    </div>
  );
}