import { Card } from "@/components/dashboard/Card";
import { DashboardPage } from "@/components/dashboard/page/DashboardPage";
import { DashboardPageHeader } from "@/components/dashboard/page/DashboardPageHeader";
import { DSAFilterBar } from "@/components/dsa/filters/DSAFilterBar";
import { DSAProgressStats } from "@/components/dsa/DSAProgressStats";
import { DSAQuestionList } from "@/components/dsa/DSAQuestionList";
import { DSATablePagination } from "@/components/dsa/DSATablePagination";
import { DSATopicGrid } from "@/components/dsa/DSATopicGrid";
import { MODULES } from "@/content/product-messaging";
import { useDsaPractice } from "@/hooks/use-dsa-practice";
import { ListFilter, Sparkles } from "lucide-react";

function DSAPage() {
  const { filterBar, table, topicProgress, globalStats, selectedTopicName, setTopic } =
    useDsaPractice();

  const problemSetSubtitle = selectedTopicName
    ? `${selectedTopicName} · ${table.filteredCount} problems`
    : `All topics · ${table.filteredCount} problems`;

  return (
    <DashboardPage>
      <DashboardPageHeader
        eyebrow={MODULES.dsa.eyebrow}
        title={MODULES.dsa.pageTitle}
        description={
          <>
            {globalStats.solved} solved · {globalStats.reviewing} in review ·{" "}
            {globalStats.attempted} attempted · spaced-repetition active
          </>
        }
        actions={
          <button
            type="button"
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-primary text-primary-foreground rounded-xl font-semibold text-sm shadow-lg shadow-primary/30 hover:scale-[1.02] transition-transform"
          >
            <Sparkles className="size-4" />
            Pattern drill
          </button>
        }
      />

      <DSAProgressStats stats={globalStats} />

      <Card className="p-0 overflow-hidden">
        <div className="p-6 border-b border-border">
          <DSATopicGrid
            topics={topicProgress}
            selectedTopicId={filterBar.filters.topicId}
            onSelectTopic={setTopic}
          />
        </div>
      </Card>

      <Card
        className="min-w-0 overflow-hidden"
        title="Problem set"
        subtitle={problemSetSubtitle}
        action={
          <div className="flex items-center gap-1.5 text-[10px] font-mono text-muted-foreground">
            <ListFilter className="size-3.5" />
            Curated FAANG bank
          </div>
        }
      >
        <DSAFilterBar
          {...filterBar}
          pageSize={table.pagination.pageSize}
          onPageSizeChange={table.pagination.setPageSize}
        />

        <div className="mt-6 pt-6 border-t border-border">
          <DSAQuestionList
            questions={table.questions}
            bookmarkedIds={table.bookmarkedIds}
            onToggleBookmark={table.onToggleBookmark}
            selectedCompanies={table.selectedCompanies}
            onToggleCompany={table.onToggleCompany}
          />
        </div>

        <div className="mt-4">
          <DSATablePagination pagination={table.pagination} filteredCount={table.filteredCount} />
        </div>
      </Card>
    </DashboardPage>
  );
}

export default DSAPage;
