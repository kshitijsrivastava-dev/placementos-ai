import type {
  Difficulty,
  DSAFilters,
  DSAQuestion,
  DSATopic,
  ImportanceTier,
  QuestionStatus,
} from "@/types/dsa";

export const DIFFICULTY_STYLES: Record<Difficulty, string> = {
  Easy: "text-success bg-success/10 border-success/20",
  Medium: "text-warning bg-warning/10 border-warning/20",
  Hard: "text-destructive bg-destructive/10 border-destructive/20",
};

export const STATUS_LABELS: Record<QuestionStatus, string> = {
  solved: "Solved",
  attempted: "Attempted",
  reviewing: "Reviewing",
  unsolved: "Not started",
};

export function filterQuestions(
  questions: DSAQuestion[],
  filters: DSAFilters,
  bookmarkedIds: Set<string>,
): DSAQuestion[] {
  const q = filters.search.trim().toLowerCase();

  return questions.filter((question) => {
    if (filters.topicId !== "all" && question.topicId !== filters.topicId) {
      return false;
    }
    if (
      filters.difficulties.length > 0 &&
      !filters.difficulties.includes(question.difficulty)
    ) {
      return false;
    }
    if (
      filters.statuses.length > 0 &&
      !filters.statuses.includes(question.status)
    ) {
      return false;
    }
    if (filters.bookmarkedOnly && !bookmarkedIds.has(question.id)) {
      return false;
    }

    if (
      filters.companies.length > 0 &&
      !question.companies.some((c) => filters.companies.includes(c))
    ) {
      return false;
    }

    if (
      filters.importanceTiers.length > 0 &&
      !filters.importanceTiers.includes(question.importanceTier)
    ) {
      return false;
    }

    if (!q) return true;

    const haystack = [
      question.title,
      question.slug,
      ...question.tags,
      ...question.companies,
    ]
      .join(" ")
      .toLowerCase();

    return haystack.includes(q);
  });
}

export type TopicProgress = DSATopic & {
  solved: number;
  attempted: number;
  reviewing: number;
  total: number;
  percent: number;
};

export function computeTopicProgress(
  topics: DSATopic[],
  questions: DSAQuestion[],
): TopicProgress[] {
  return topics.map((topic) => {
    const topicQuestions = questions.filter((q) => q.topicId === topic.id);
    const solved = topicQuestions.filter((q) => q.status === "solved").length;
    const attempted = topicQuestions.filter((q) => q.status === "attempted").length;
    const reviewing = topicQuestions.filter((q) => q.status === "reviewing").length;
    const total = topicQuestions.length;
    const percent = total > 0 ? Math.round((solved / total) * 100) : 0;

    return {
      ...topic,
      solved,
      attempted,
      reviewing,
      total,
      percent,
    };
  });
}

export function computeGlobalStats(questions: DSAQuestion[]) {
  const solved = questions.filter((q) => q.status === "solved").length;
  const attempted = questions.filter((q) => q.status === "attempted").length;
  const reviewing = questions.filter((q) => q.status === "reviewing").length;
  const total = questions.length;

  const byDifficulty = (d: Difficulty) =>
    questions.filter((q) => q.difficulty === d);

  const easy = byDifficulty("Easy");
  const medium = byDifficulty("Medium");
  const hard = byDifficulty("Hard");

  const pctSolved = (list: DSAQuestion[]) => {
    const s = list.filter((q) => q.status === "solved").length;
    return list.length > 0 ? Math.round((s / list.length) * 100) : 0;
  };

  const acceptance =
    questions
      .filter((q) => q.status === "solved")
      .reduce((sum, q) => sum + q.acceptance, 0) /
    Math.max(1, solved);

  return {
    solved,
    attempted,
    reviewing,
    total,
    overallPercent: total > 0 ? Math.round((solved / total) * 100) : 0,
    easy: { solved: easy.filter((q) => q.status === "solved").length, total: easy.length, pct: pctSolved(easy) },
    medium: { solved: medium.filter((q) => q.status === "solved").length, total: medium.length, pct: pctSolved(medium) },
    hard: { solved: hard.filter((q) => q.status === "solved").length, total: hard.length, pct: pctSolved(hard) },
    acceptance: acceptance.toFixed(1),
  };
}

export type CompanyStats = { company: string; questionCount: number };

export function computeCompanyStats(questions: DSAQuestion[]): CompanyStats[] {
  const map = new Map<string, number>();
  for (const q of questions) {
    for (const c of q.companies) {
      map.set(c, (map.get(c) ?? 0) + 1);
    }
  }

  return [...map.entries()]
    .map(([company, questionCount]) => ({ company, questionCount }))
    .sort((a, b) => b.questionCount - a.questionCount || a.company.localeCompare(b.company));
}

export function importanceWeight(tier: ImportanceTier): number {
  switch (tier) {
    case "Must Do":
      return 3;
    case "Very Important":
      return 2;
    case "High Frequency":
      return 1;
  }
}
