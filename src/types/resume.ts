import type { Percent } from "./shared";

export type ResumeSuggestionSeverity = "success" | "warning" | "error";

export type ResumeSuggestion = {
  id: string;
  severity: ResumeSuggestionSeverity;
  text: string;
};

export type JobDescriptionMatch = {
  id: string;
  company: string;
  role: string;
  keywordMatchPercent: Percent;
  alignedSkills: number;
  totalSkills: number;
};

export type ResumeAnalysis = {
  atsScore: Percent;
  atsSublabel: string;
  suggestions: ResumeSuggestion[];
  jdMatch: JobDescriptionMatch;
};
