import { Card } from "@/components/dashboard/Card";
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
    topicProgress,
    globalStats,
    filteredQuestions,
    totalQuestions,
    toggleBookmark,
    setTopic,
    setSearch,
    toggleDifficulty,
    toggleStatus,
    setBookmarkedOnly,
    clearFilters,
    hasActiveFilters,
  } = useDsaPractice();

  const selectedTopic =
    filters.topicId !== "all" ? getTopicById(filters.topicId) : null;

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-2">
            // DSA PRACTICE
          </p>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            Problem Bank
          </h1>
          <p className="text-muted-foreground mt-1">
            {globalStats.solved} solved · {globalStats.reviewing} in review ·{" "}
            {globalStats.attempted} attempted · spaced-repetition active
          </p>
        </div>
        <button
          type="button"
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-primary text-primary-foreground rounded-xl font-semibold text-sm shadow-lg shadow-primary/30 hover:scale-[1.02] transition-transform"
        >
          <Sparkles className="size-4" />
          AI Pattern Drill
        </button>
      </div>

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
          bookmarkCount={bookmarkedIds.size}
          hasActiveFilters={hasActiveFilters}
          onSearchChange={setSearch}
          onToggleDifficulty={toggleDifficulty}
          onToggleStatus={toggleStatus}
          onBookmarkedOnlyChange={setBookmarkedOnly}
          onClear={clearFilters}
        />

        <div className="mt-6 pt-6 border-t border-border">
          <DSAQuestionList
            questions={filteredQuestions}
            bookmarkedIds={bookmarkedIds}
            onToggleBookmark={toggleBookmark}
          />
        </div>
      </Card>
    </div>
  );
}

export default DSAPage;
