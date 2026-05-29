import type { ResumeAnalysis } from "@/types/resume";

export const RESUME_ANALYSIS: ResumeAnalysis = {
  atsScore: 87,
  atsSublabel: "Strong match · Meta E4",
  suggestions: [
    {
      id: "suggestion-metrics",
      severity: "success",
      text: "Quantified metrics detected in 4/4 bullets",
    },
    {
      id: "suggestion-keyword",
      severity: "warning",
      text: "Add keyword: 'distributed systems' (in JD 3x)",
    },
    {
      id: "suggestion-verbs",
      severity: "warning",
      text: "Action verbs could be stronger: replace 'made' → 'engineered'",
    },
    {
      id: "suggestion-system-design",
      severity: "error",
      text: "Missing: 'system design' section for L4+ roles",
    },
    {
      id: "suggestion-length",
      severity: "success",
      text: "Resume length optimal at 1 page",
    },
  ],
  jdMatch: {
    id: "jd-meta-e4",
    company: "Meta",
    role: "Software Engineer, E4",
    keywordMatchPercent: 87,
    alignedSkills: 12,
    totalSkills: 14,
  },
};
