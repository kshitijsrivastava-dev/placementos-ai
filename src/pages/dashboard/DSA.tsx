import { Card } from "@/components/dashboard/Card";
import { DashboardPage } from "@/components/dashboard/page/DashboardPage";
import { DashboardPageHeader } from "@/components/dashboard/page/DashboardPageHeader";
import { DSAFilterBar } from "@/components/dsa/DSAFilterBar";
import { DSAProgressStats } from "@/components/dsa/DSAProgressStats";
import { DSAQuestionList } from "@/components/dsa/DSAQuestionList";
import { DSATopicGrid } from "@/components/dsa/DSATopicGrid";
import { getTopicById } from "@/data/dsa-mock";
import { useDsaPractice } from "@/hooks/use-dsa-practice";
import { ListFilter, Sparkles } from "lucide-react";

function DSAPage() {
  const {
    filters,
    bookmarkedIds,
    bookmarkCount,
    topicProgress,
    globalStats,
    filteredQuestions,
    pagedQuestions,
    page,
    pageCount,
    pageItemCount,
    pageSize,
    totalQuestions,
    setPage,
    toggleBookmark,
    setTopic,
    setSearch,
    toggleDifficulty,
    toggleStatus,
    setBookmarkedOnly,
    toggleCompany,
    toggleImportanceTier,
    setSortBy,
    companyOptions,
    setPageSize,
    clearFilters,
    hasActiveFilters,
  } = useDsaPractice();

  const selectedTopic =
    filters.topicId !== "all" ? getTopicById(filters.topicId) : null;

  return (
    <DashboardPage>
      <DashboardPageHeader
        eyebrow="// DSA PRACTICE"
        title="Problem Bank"
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
            AI Pattern Drill
          </button>
        }
      />

      <DSAProgressStats stats={globalStats} />

      <Card className="p-0 overflow-hidden">
        <div className="p-6 border-b border-border">
          <DSATopicGrid
            topics={topicProgress}
            selectedTopicId={filters.topicId}
            onSelectTopic={setTopic}
          />
        </div>
      </Card>

      <Card
        title="Problem set"
        subtitle={
          selectedTopic
            ? `${selectedTopic.name} · ${filteredQuestions.length} problems`
            : `All topics · ${filteredQuestions.length} problems`
        }
        action={
          <div className="flex items-center gap-1.5 text-[10px] font-mono text-muted-foreground">
            <ListFilter className="size-3.5" />
            Curated FAANG bank
          </div>
        }
      >
        <DSAFilterBar
          filters={filters}
          resultCount={filteredQuestions.length}
          totalCount={totalQuestions}
          bookmarkCount={bookmarkCount}
          hasActiveFilters={hasActiveFilters}
          companyOptions={companyOptions}
          onSearchChange={setSearch}
          onToggleDifficulty={toggleDifficulty}
          onToggleStatus={toggleStatus}
          onBookmarkedOnlyChange={setBookmarkedOnly}
          onToggleCompany={toggleCompany}
          onToggleImportanceTier={toggleImportanceTier}
          onSortByChange={setSortBy}
          pageSize={pageSize}
          onPageSizeChange={setPageSize}
          onClear={clearFilters}
        />

        <div className="mt-6 pt-6 border-t border-border">
          <DSAQuestionList
            questions={pagedQuestions}
            bookmarkedIds={bookmarkedIds}
            onToggleBookmark={toggleBookmark}
            selectedCompanies={filters.companies}
            onToggleCompany={toggleCompany}
          />
        </div>

        <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="text-[11px] font-mono text-muted-foreground">
            Page{" "}
            <span className="text-foreground font-semibold">
              {page} / {pageCount}
            </span>{" "}
            · showing{" "}
            <span className="text-foreground font-semibold">{pageItemCount}</span>{" "}
            of {filteredQuestions.length}
          </p>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setPage(Math.max(1, page - 1))}
              disabled={page <= 1}
              className="h-9 px-4 rounded-xl border border-border bg-surface text-muted-foreground hover:bg-surface-hover hover:text-foreground disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Previous
            </button>
            <button
              type="button"
              onClick={() => setPage(Math.min(pageCount, page + 1))}
              disabled={page >= pageCount}
              className="h-9 px-4 rounded-xl border border-border bg-surface text-muted-foreground hover:bg-surface-hover hover:text-foreground disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Next
            </button>
          </div>
        </div>
      </Card>
    </DashboardPage>
  );
}

export default DSAPage;
