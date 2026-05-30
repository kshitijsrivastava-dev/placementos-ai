/**
 * Shared demo user profile — keep mocks and static UI placeholders aligned.
 * Replace with session/API user when backend is wired.
 */
export const DEMO_PERSONA = {
  firstName: "Alex",
  lastName: "Chen",
  fullName: "Alex Chen",
  email: "alex.chen@iitb.ac.in",
  targetCompany: "Meta",
  targetRole: "Software Engineer (E4)",
  targetShort: "Meta E4",
  /** Overall placement readiness (overview, sidebar, goals). */
  readinessPercent: 72,
  streakDays: 12,
  /** Matches {@link DSA_QUESTIONS} solved count in dsa-mock. */
  dsaBankSolved: 31,
  dsaBankTotal: 47,
  problemsToday: 3,
  problemsYesterday: 2,
  problemsThisWeek: 14,
} as const;
