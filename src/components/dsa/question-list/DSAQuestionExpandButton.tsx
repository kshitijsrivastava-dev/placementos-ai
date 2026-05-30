import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

type DSAQuestionExpandButtonProps = {
  expanded: boolean;
  onToggle: () => void;
  size?: "table" | "card";
};

export function DSAQuestionExpandButton({
  expanded,
  onToggle,
  size = "table",
}: DSAQuestionExpandButtonProps) {
  const isCard = size === "card";

  return (
    <button
      type="button"
      onClick={(event) => {
        event.stopPropagation();
        onToggle();
      }}
      aria-label={expanded ? "Hide details" : "Show details"}
      className={cn(
        "inline-flex items-center justify-center rounded-lg text-muted-foreground hover:bg-surface hover:text-foreground transition-colors touch-manipulation shrink-0",
        isCard ? "size-9" : "size-9 sm:size-8",
      )}
    >
      <ChevronDown
        className={cn(
          "transition-transform",
          isCard ? "size-5" : "size-4",
          expanded && "rotate-180",
        )}
      />
    </button>
  );
}
