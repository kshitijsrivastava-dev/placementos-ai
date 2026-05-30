/**
 * Shared product terminology — keep nav, pages, and marketing aligned.
 * PlacementOS = Placement Preparation Operating System
 */

export const PRODUCT_NAME = "PlacementOS";

export const PRODUCT_TAGLINE = "Placement Preparation Operating System";

/** Short hero badge — full tagline lives in meta and docs. */
export const PRODUCT_BADGE = "Placement Prep OS";

/** Primary one-line definition (meta, hero). */
export const PRODUCT_DEFINITION =
  "PlacementOS is the operating system for DSA practice, aptitude drills, mock interviews, resume readiness, and placement timelines—in one workspace.";

export const MODULES = {
  overview: {
    label: "Overview",
    eyebrow: "// OVERVIEW",
  },
  dsa: {
    label: "DSA Tracker",
    eyebrow: "// DSA TRACKER",
    pageTitle: "Problem Bank",
  },
  aptitude: {
    label: "Aptitude",
    eyebrow: "// APTITUDE",
    pageTitle: "Aptitude Prep",
  },
  resume: {
    label: "Resume",
    eyebrow: "// RESUME",
    pageTitle: "Resume Workspace",
  },
  mockInterview: {
    label: "Mock Interview",
    eyebrow: "// MOCK INTERVIEW",
    pageTitle: "Mock Interview",
  },
  roadmap: {
    label: "Roadmap",
    eyebrow: "// ROADMAP",
  },
  analytics: {
    label: "Analytics",
    eyebrow: "// ANALYTICS",
    pageTitle: "Performance Analytics",
  },
  goals: {
    label: "Goals",
    eyebrow: "// GOALS",
    pageTitle: "Objectives & Key Results",
  },
} as const;

/** Landing feature cards — titles align with {@link MODULES} labels. */
export const LANDING_MODULE_FEATURES = [
  {
    id: "dsa",
    title: MODULES.dsa.label,
    description:
      "Track problems by pattern and company. Spaced repetition and status filters keep review queues clear.",
  },
  {
    id: "mockInterview",
    title: MODULES.mockInterview.label,
    description:
      "Structured interview sessions with rubric scoring on clarity, depth, structure, and communication.",
  },
  {
    id: "resume",
    title: MODULES.resume.label,
    description:
      "ATS checks, JD alignment, and revision suggestions tuned to placement hiring bar.",
  },
  {
    id: "roadmap",
    title: MODULES.roadmap.label,
    description:
      "Week-by-week placement plan from your target role, timeline, and skill gaps.",
  },
  {
    id: "analytics",
    title: MODULES.analytics.label,
    description:
      "Heatmaps, time distribution, and readiness signals across your prep modules.",
  },
  {
    id: "aptitude",
    title: MODULES.aptitude.label,
    description:
      "Verbal, logical, and quantitative drills with per-section diagnostics for placement tests.",
  },
] as const;
