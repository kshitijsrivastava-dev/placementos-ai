import { cn } from "@/lib/utils";
import { DIFFICULTY_STYLES } from "@/lib/dsa-utils";
import type { Difficulty } from "@/types/dsa";

export function DifficultyBadge({
  difficulty,
  className,
}: {
  difficulty: Difficulty;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center text-[10px] font-mono font-semibold uppercase tracking-wide px-2 py-0.5 rounded border",
        DIFFICULTY_STYLES[difficulty],
        className,
      )}
    >
      {difficulty}
    </span>
  );
}
