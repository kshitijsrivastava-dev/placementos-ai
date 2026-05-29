import type { AptitudeMockTest, AptitudeSection } from "@/types/aptitude";

export const APTITUDE_SECTIONS: AptitudeSection[] = [
  {
    id: "quantitative",
    name: "Quantitative",
    solved: 240,
    total: 400,
    accuracyPercent: 84,
    icon: "calculator",
  },
  {
    id: "logical-reasoning",
    name: "Logical Reasoning",
    solved: 180,
    total: 300,
    accuracyPercent: 78,
    icon: "brain",
  },
  {
    id: "verbal",
    name: "Verbal Ability",
    solved: 120,
    total: 250,
    accuracyPercent: 91,
    icon: "message-circle",
  },
  {
    id: "general-awareness",
    name: "General Awareness",
    solved: 60,
    total: 200,
    accuracyPercent: 65,
    icon: "globe",
  },
];

export const APTITUDE_RECENT_TESTS: AptitudeMockTest[] = [
  {
    id: "test-tcs-nqt",
    name: "TCS NQT · Full Mock",
    score: 82,
    maxScore: 100,
    completedAtLabel: "Yesterday",
  },
  {
    id: "test-infosys-quant",
    name: "Infosys SP · Quant Section",
    score: 29,
    maxScore: 35,
    completedAtLabel: "3d ago",
  },
  {
    id: "test-wipro-reasoning",
    name: "Wipro Elite · Reasoning",
    score: 21,
    maxScore: 25,
    completedAtLabel: "1w ago",
  },
];
