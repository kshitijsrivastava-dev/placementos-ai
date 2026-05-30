import type { RoadmapPhase, RoadmapProgress } from "@/types/roadmap";
import { DEMO_PERSONA } from "./demo-persona";

export const ROADMAP_PROGRESS: RoadmapProgress = {
  percent: 55,
};

/** Static page copy aligned with {@link ROADMAP_PROGRESS} (week 11 of 20). */
export const ROADMAP_PAGE_META = {
  title: `Path to ${DEMO_PERSONA.targetShort}`,
  description: "20-week plan · Week 11 of 20 · 9 weeks remaining",
};

export const ROADMAP_PHASES: RoadmapPhase[] = [
  {
    id: "phase-foundation",
    weekLabel: "Weeks 1–4",
    title: "Foundation Sprint",
    status: "done",
    items: [
      "Arrays & hashing (40 problems)",
      "Two pointers (18)",
      "Stack & queue basics (14)",
      "Binary search fundamentals (12)",
    ],
  },
  {
    id: "phase-core-patterns",
    weekLabel: "Weeks 5–8",
    title: "Core Patterns",
    status: "done",
    items: [
      "Sliding window (16)",
      "Linked list (16)",
      "Trees · BFS/DFS (28)",
      "Heaps & top-K (12)",
    ],
  },
  {
    id: "phase-advanced",
    weekLabel: "Weeks 9–12",
    title: "Advanced Algorithms",
    status: "active",
    items: [
      "Graphs · BFS/DFS/union-find",
      "Dynamic programming 1D & 2D",
      "Greedy & intervals",
      "1 mock interview / week",
    ],
  },
  {
    id: "phase-system-design",
    weekLabel: "Weeks 13–16",
    title: "System Design + Behavioral",
    status: "upcoming",
    items: [
      "Scalability fundamentals",
      "Caching & data partitioning",
      "4 end-to-end design walkthroughs",
      "STAR behavioral drills",
    ],
  },
  {
    id: "phase-application",
    weekLabel: "Weeks 17–20",
    title: "Application Sprint",
    status: "upcoming",
    items: [
      "Resume final pass + referrals",
      "Weekly mock interview cadence",
      "Offer negotiation prep",
      "Campus + off-campus pipeline tracking",
    ],
  },
];
