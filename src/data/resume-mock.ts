import type { ResumeAnalysis } from "@/types/resume";
import { DEMO_PERSONA } from "./demo-persona";

export const RESUME_ANALYSIS: ResumeAnalysis = {
  atsScore: 82,
  atsSublabel: `Solid draft · ${DEMO_PERSONA.targetShort} target`,
  suggestions: [
    {
      id: "suggestion-metrics",
      severity: "warning",
      text: "Quantified metrics in 3/5 experience bullets",
    },
    {
      id: "suggestion-keyword",
      severity: "warning",
      text: "Add keyword: 'distributed systems' (appears 3× in JD)",
    },
    {
      id: "suggestion-verbs",
      severity: "warning",
      text: "Strengthen verbs: replace 'made' → 'built' or 'shipped'",
    },
    {
      id: "suggestion-system-design",
      severity: "error",
      text: "Add a short system design highlight for L4-style roles",
    },
    {
      id: "suggestion-length",
      severity: "success",
      text: "Length is on target for a 1-page new-grad resume",
    },
  ],
  jdMatch: {
    id: "jd-meta-e4",
    company: DEMO_PERSONA.targetCompany,
    role: DEMO_PERSONA.targetRole,
    keywordMatchPercent: 79,
    alignedSkills: 11,
    totalSkills: 14,
  },
};
