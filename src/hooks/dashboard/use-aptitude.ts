import { APTITUDE_RECENT_TESTS, APTITUDE_SECTIONS } from "@/data/aptitude-mock";

/** Aptitude module data — replace mock imports with API fetch logic when backend is ready. */
export function useAptitude() {
  return {
    sections: APTITUDE_SECTIONS,
    recentTests: APTITUDE_RECENT_TESTS,
  };
}
