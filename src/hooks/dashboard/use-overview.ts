import { OVERVIEW_WORKSPACE } from "@/data/overview-mock";
import type { OverviewWorkspace } from "@/types/overview";

/** Overview dashboard workspace — replace mock import with API fetch when backend is ready. */
export function useOverview(): OverviewWorkspace {
  return OVERVIEW_WORKSPACE;
}
