import { CheckCircle2, Code2, Flame, Target } from "lucide-react";
import { StatCard } from "@/components/dashboard/StatCard";

type Stats = ReturnType<
  typeof import("@/lib/dsa-utils").computeGlobalStats
>;

export function DSAProgressStats({ stats }: { stats: Stats }) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      <StatCard
        label="Problems Solved"
        value={`${stats.solved}`}
        delta={`${stats.overallPercent}% of bank`}
        icon={Code2}
      />
      <StatCard
        label="Easy"
        value={`${stats.easy.solved}/${stats.easy.total}`}
        delta={`${stats.easy.pct}% complete`}
        icon={CheckCircle2}
        accent="success"
      />
      <StatCard
        label="Medium"
        value={`${stats.medium.solved}/${stats.medium.total}`}
        delta={`${stats.medium.pct}% complete`}
        icon={Flame}
        accent="accent"
      />
      <StatCard
        label="Hard"
        value={`${stats.hard.solved}/${stats.hard.total}`}
        delta={`${stats.acceptance}% avg acceptance`}
        icon={Target}
      />
    </div>
  );
}
