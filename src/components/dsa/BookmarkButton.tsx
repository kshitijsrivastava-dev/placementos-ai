import { Bookmark } from "lucide-react";
import { cn } from "@/lib/utils";

export function BookmarkButton({
  active,
  onClick,
  className,
}: {
  active: boolean;
  onClick: () => void;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      aria-label={active ? "Remove bookmark" : "Save question"}
      aria-pressed={active}
      className={cn(
        "size-9 sm:size-8 rounded-lg border border-border grid place-items-center transition-all touch-manipulation",
        "hover:bg-surface-hover hover:border-primary/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        active
          ? "bg-primary/10 border-primary/30 text-primary"
          : "bg-subtle text-muted-foreground hover:text-foreground",
        className,
      )}
    >
      <Bookmark
        className={cn("size-3.5 transition-transform", active && "fill-current scale-110")}
      />
    </button>
  );
}
