import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type DashboardSectionProps = {
  children: ReactNode;
  className?: string;
};

/** Grid-span wrapper; stretches direct card children to equal height in a row. */
export function DashboardSection({ children, className }: DashboardSectionProps) {
  return (
    <section className={cn("min-w-0 flex flex-col [&>*]:h-full", className)}>{children}</section>
  );
}
