import type { AptitudeMockTest, AptitudeSection } from "@/types/aptitude";

export const APTITUDE_SECTIONS: AptitudeSection[] = [
  {
    id: "quantitative",
    name: "Quantitative",
    solved: 168,
    total: 400,
    accuracyPercent: 81,
    icon: "calculator",
  },
  {
    id: "logical-reasoning",
    name: "Logical Reasoning",
    solved: 132,
    total: 300,
    accuracyPercent: 76,
    icon: "brain",
  },
  {
    id: "verbal",
    name: "Verbal Ability",
    solved: 94,
    total: 250,
    accuracyPercent: 83,
    icon: "message-circle",
  },
  {
    id: "general-awareness",
    name: "General Awareness",
    solved: 46,
    total: 200,
    accuracyPercent: 62,
    icon: "globe",
  },
];

export const APTITUDE_RECENT_TESTS: AptitudeMockTest[] = [
  {
    id: "test-tcs-nqt",
    name: "TCS NQT · Full Mock",
    score: 82,
    maxScore: 100,
    completedAtLabel: "2d ago",
  },
  {
    id: "test-infosys-quant",
    name: "Infosys SP · Quant Section",
    score: 29,
    maxScore: 35,
    completedAtLabel: "5d ago",
  },
  {
    id: "test-wipro-reasoning",
    name: "Wipro Elite · Reasoning",
    score: 21,
    maxScore: 25,
    completedAtLabel: "1w ago",
  },
];
