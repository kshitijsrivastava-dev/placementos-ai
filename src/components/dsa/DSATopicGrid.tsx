import { cn } from "@/lib/utils";
import type { TopicProgress } from "@/lib/dsa-utils";

export function DSATopicGrid({
  topics,
  selectedTopicId,
  onSelectTopic,
}: {
  topics: TopicProgress[];
  selectedTopicId: string | "all";
  onSelectTopic: (id: string | "all") => void;
}) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h2 className="text-sm font-mono text-muted-foreground uppercase tracking-wider">
            Topics
          </h2>
          <p className="text-xs text-muted-foreground mt-0.5">
            Select a pattern to filter the problem bank
          </p>
        </div>
        <button
          type="button"
          onClick={() => onSelectTopic("all")}
          className={cn(
            "text-xs font-mono px-3 py-1.5 rounded-lg border transition-colors",
            selectedTopicId === "all"
              ? "bg-primary/10 text-primary border-primary/30"
              : "border-border text-muted-foreground hover:bg-surface-hover hover:text-foreground",
          )}
        >
          All topics
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">
        {topics.map((topic) => {
          const active = selectedTopicId === topic.id;
          return (
            <button
              key={topic.id}
              type="button"
              onClick={() => onSelectTopic(topic.id)}
              className={cn(
                "group text-left p-4 rounded-xl border transition-all",
                "hover:border-primary/30 hover:bg-surface-hover",
                active
                  ? "bg-primary/5 border-primary/30 shadow-[var(--shadow-glow)]"
                  : "bg-surface border-border",
              )}
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="min-w-0">
                  <h3 className="text-sm font-semibold truncate group-hover:text-primary transition-colors">
                    {topic.name}
                  </h3>
                  <p className="text-[11px] text-muted-foreground line-clamp-1 mt-0.5">
                    {topic.description}
                  </p>
                </div>
                <div
                  className={cn(
                    "shrink-0 size-11 rounded-full border-2 grid place-items-center text-[10px] font-mono font-bold",
                    active ? "border-primary text-primary" : "border-border text-muted-foreground",
                  )}
                  style={{
                    background: `conic-gradient(var(--primary) ${topic.percent * 3.6}deg, var(--subtle) 0deg)`,
                  }}
                >
                  <span className="size-8 rounded-full bg-background grid place-items-center">
                    {topic.percent}%
                  </span>
                </div>
              </div>
              <div className="h-1.5 w-full bg-subtle rounded-full overflow-hidden mb-2">
                <div
                  className="h-full bg-[image:var(--gradient-primary)] transition-all duration-500"
                  style={{ width: `${topic.percent}%` }}
                />
              </div>
              <div className="flex items-center justify-between text-[10px] font-mono text-muted-foreground">
                <span>
                  {topic.solved}/{topic.total} solved
                </span>
                {topic.reviewing > 0 && (
                  <span className="text-primary">{topic.reviewing} reviewing</span>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
