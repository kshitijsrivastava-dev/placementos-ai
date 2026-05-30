import { Sparkles } from "lucide-react";
import { DashboardPage } from "@/components/dashboard/page/DashboardPage";
import { DashboardPageHeader } from "@/components/dashboard/page/DashboardPageHeader";
import { DashboardSection } from "@/components/dashboard/sections/DashboardSection";
import { OverviewActivitySection } from "@/components/dashboard/sections/OverviewActivitySection";
import { OverviewConsistencySection } from "@/components/dashboard/sections/OverviewConsistencySection";
import { OverviewDailyPlanSection } from "@/components/dashboard/sections/OverviewDailyPlanSection";
import { OverviewFocusInsightSection } from "@/components/dashboard/sections/OverviewFocusInsightSection";
import { OverviewFocusMetrics } from "@/components/dashboard/sections/OverviewFocusMetrics";
import { OverviewNextStepsSection } from "@/components/dashboard/sections/OverviewNextStepsSection";
import { OverviewProgressSection } from "@/components/dashboard/sections/OverviewProgressSection";
import { OverviewWeakTopicsSection } from "@/components/dashboard/sections/OverviewWeakTopicsSection";
import { useOverview } from "@/hooks/dashboard/use-overview";

function DashboardHome() {
  const workspace = useOverview();

  return (
    <DashboardPage>
      <DashboardPageHeader
        eyebrow="// OVERVIEW"
        title={workspace.header.title}
        description={workspace.header.description}
        actions={
          <button
            type="button"
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-primary text-primary-foreground rounded-xl font-semibold text-sm shadow-lg shadow-primary/30 hover:scale-[1.02] transition-transform"
          >
            <Sparkles className="size-4" /> Generate AI Plan
          </button>
        }
      />

      <OverviewFocusMetrics metrics={workspace.focusMetrics} />

      <div className="grid grid-cols-12 gap-6">
        <DashboardSection className="col-span-12 lg:col-span-7">
          <OverviewDailyPlanSection
            summary={workspace.dailyPlan.summary}
            tasks={workspace.dailyPlan.tasks}
          />
        </DashboardSection>

        <DashboardSection className="col-span-12 lg:col-span-5">
          <OverviewNextStepsSection steps={workspace.nextSteps} />
        </DashboardSection>

        <DashboardSection className="col-span-12 lg:col-span-5">
          <OverviewFocusInsightSection insight={workspace.focusInsight} />
        </DashboardSection>

        <DashboardSection className="col-span-12 lg:col-span-7">
          <OverviewWeakTopicsSection topics={workspace.weakTopics} />
        </DashboardSection>

        <DashboardSection className="col-span-12 lg:col-span-7">
          <OverviewActivitySection events={workspace.activityEvents} />
        </DashboardSection>

        <DashboardSection className="col-span-12 lg:col-span-5">
          <OverviewProgressSection progress={workspace.progress} />
        </DashboardSection>

        <DashboardSection className="col-span-12">
          <OverviewConsistencySection />
        </DashboardSection>
      </div>
    </DashboardPage>
  );
}

export default DashboardHome;
