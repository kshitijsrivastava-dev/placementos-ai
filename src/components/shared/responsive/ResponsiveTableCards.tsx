import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ResponsiveTableCardsProps = {
  /** When length is 0, only `emptyState` is rendered. */
  itemCount: number;
  emptyState?: ReactNode;
  table: ReactNode;
  cards: ReactNode;
  cardListClassName?: string;
};

/**
 * Standard md+ table / sub-md card stack. Breakpoint matches existing DSA list behavior.
 */
export function ResponsiveTableCards({
  itemCount,
  emptyState,
  table,
  cards,
  cardListClassName = "space-y-2.5",
}: ResponsiveTableCardsProps) {
  if (itemCount === 0 && emptyState) {
    return <>{emptyState}</>;
  }

  return (
    <>
      <div className="hidden md:block w-full overflow-x-auto overscroll-x-contain">
        {table}
      </div>
      <div className={cn("md:hidden", cardListClassName)}>{cards}</div>
    </>
  );
}
