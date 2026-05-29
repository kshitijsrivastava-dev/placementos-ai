import { ROADMAP_PHASES, ROADMAP_PROGRESS } from "@/data/roadmap-mock";

/** Roadmap module data — replace mock imports with API fetch logic when backend is ready. */
export function useRoadmap() {
  return {
    phases: ROADMAP_PHASES,
    progress: ROADMAP_PROGRESS,
  };
}
