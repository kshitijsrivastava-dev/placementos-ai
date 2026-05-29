import type { RoadmapPhase, RoadmapProgress } from "@/types/roadmap";

export const ROADMAP_PROGRESS: RoadmapProgress = {
  percent: 55,
};

export const ROADMAP_PHASES: RoadmapPhase[] = [
  {
    id: "phase-foundation",
    weekLabel: "Weeks 1–4",
    title: "Foundation Sprint",
    status: "done",
    items: [
      "Arrays & Hashing (50)",
      "Two Pointers (22)",
      "Stack & Queue (18)",
      "Binary Search basics (15)",
    ],
  },
  {
    id: "phase-core-patterns",
    weekLabel: "Weeks 5–8",
    title: "Core Patterns",
    status: "done",
    items: [
      "Sliding Window (18)",
      "Linked List (20)",
      "Trees & BFS/DFS (40)",
      "Heaps (15)",
    ],
  },
  {
    id: "phase-advanced",
    weekLabel: "Weeks 9–12",
    title: "Advanced Algorithms",
    status: "active",
    items: [
      "Graphs (BFS/DFS/Union-Find)",
      "Dynamic Programming 1D & 2D",
      "Greedy & Intervals",
      "Mock interviews 2x/week",
    ],
  },
  {
    id: "phase-system-design",
    weekLabel: "Weeks 13–16",
    title: "System Design + Behavioral",
    status: "upcoming",
    items: [
      "Scalability fundamentals",
      "Caching & DB sharding",
      "Design 8 systems end-to-end",
      "STAR-method behavioral drills",
    ],
  },
  {
    id: "phase-application",
    weekLabel: "Weeks 17–20",
    title: "Application Sprint",
    status: "upcoming",
    items: [
      "Resume v4 final",
      "30 referrals queued",
      "Daily mock interviews",
      "Negotiation prep",
    ],
  },
];
