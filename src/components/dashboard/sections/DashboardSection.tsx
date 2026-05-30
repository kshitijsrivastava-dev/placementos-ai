import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type DashboardSectionProps = {
  children: ReactNode;
  className?: string;
};

/** Grid-span wrapper for overview dashboard sections. */
export function DashboardSection({ children, className }: DashboardSectionProps) {
  return <section className={cn(className)}>{children}</section>;
}
