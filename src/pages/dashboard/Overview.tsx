import { Sparkles } from "lucide-react";
import { DashboardPage } from "@/components/dashboard/page/DashboardPage";
import { DashboardPageHeader } from "@/components/dashboard/page/DashboardPageHeader";
import { DashboardGrid } from "@/components/dashboard/page/DashboardGrid";
import { DashboardSection } from "@/components/dashboard/sections/DashboardSection";
import { OverviewActivitySection } from "@/components/dashboard/sections/OverviewActivitySection";
import { OverviewConsistencySection } from "@/components/dashboard/sections/OverviewConsistencySection";
import { OverviewDailyPlanSection } from "@/components/dashboard/sections/OverviewDailyPlanSection";
import { OverviewFocusInsightSection } from "@/components/dashboard/sections/OverviewFocusInsightSection";
import { OverviewFocusMetrics } from "@/components/dashboard/sections/OverviewFocusMetrics";
import { OverviewNextStepsSection } from "@/components/dashboard/sections/OverviewNextStepsSection";
import { OverviewProgressSection } from "@/components/dashboard/sections/OverviewProgressSection";
import { OverviewWeakTopicsSection } from "@/components/dashboard/sections/OverviewWeakTopicsSection";
import { dashboardCol } from "@/lib/responsive-layout";
import { MODULES } from "@/content/product-messaging";
import { getOverviewGreeting } from "@/features/auth/auth-service";
import { useAuth } from "@/features/auth/use-auth";
import { useOverview } from "@/hooks/dashboard/use-overview";

function DashboardHome() {
  const workspace = useOverview();
  const { user, profile } = useAuth();
  const headerTitle = user ? getOverviewGreeting(profile, user.email) : workspace.header.title;

  return (
    <DashboardPage>
      <DashboardPageHeader
        eyebrow={MODULES.overview.eyebrow}
        title={headerTitle}
        description={workspace.header.description}
        actions={
          <button
            type="button"
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-primary text-primary-foreground rounded-xl font-semibold text-sm shadow-lg shadow-primary/30 hover:scale-[1.02] transition-transform touch-manipulation min-h-11 sm:min-h-0"
          >
            <Sparkles className="size-4" /> Update today&apos;s plan
          </button>
        }
      />

      <OverviewFocusMetrics metrics={workspace.focusMetrics} />

      <DashboardGrid>
        <DashboardSection className={dashboardCol.wide}>
          <OverviewDailyPlanSection
            summary={workspace.dailyPlan.summary}
            tasks={workspace.dailyPlan.tasks}
          />
        </DashboardSection>

        <DashboardSection className={dashboardCol.narrow}>
          <OverviewNextStepsSection steps={workspace.nextSteps} />
        </DashboardSection>

        <DashboardSection className={dashboardCol.narrow}>
          <OverviewFocusInsightSection insight={workspace.focusInsight} />
        </DashboardSection>

        <DashboardSection className={dashboardCol.wide}>
          <OverviewWeakTopicsSection topics={workspace.weakTopics} />
        </DashboardSection>

        <DashboardSection className={dashboardCol.wide}>
          <OverviewActivitySection events={workspace.activityEvents} />
        </DashboardSection>

        <DashboardSection className={dashboardCol.narrow}>
          <OverviewProgressSection progress={workspace.progress} />
        </DashboardSection>

        <DashboardSection className={dashboardCol.full}>
          <OverviewConsistencySection />
        </DashboardSection>
      </DashboardGrid>
    </DashboardPage>
  );
}

export default DashboardHome;
