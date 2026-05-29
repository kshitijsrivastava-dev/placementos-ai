import { Card } from "@/components/dashboard/Card";
import { DashboardPage } from "@/components/dashboard/page/DashboardPage";
import { DashboardPageHeader } from "@/components/dashboard/page/DashboardPageHeader";
import { useAptitude } from "@/hooks/dashboard/use-aptitude";
import {
  APTITUDE_SECTION_ICONS,
  formatAptitudeAccuracy,
  formatAptitudeTestScore,
  getAptitudeSectionProgressPercent,
} from "@/lib/aptitude-display";

function AptitudePage() {
  const { sections, recentTests } = useAptitude();

  return (
    <DashboardPage maxWidth="6xl">
      <DashboardPageHeader
        eyebrow="// APTITUDE"
        title="Aptitude Engine"
        description="Adaptive difficulty · 600+ company-tagged questions"
      />
      <div className="grid sm:grid-cols-2 gap-5">
        {sections.map((section) => {
          const Icon = APTITUDE_SECTION_ICONS[section.icon];
          return (
            <Card key={section.id}>
              <div className="flex items-center gap-4 mb-4">
                <div className="size-12 rounded-xl bg-primary/10 border border-primary/20 grid place-items-center">
                  <Icon className="size-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold">{section.name}</h3>
                  <p className="text-xs text-muted-foreground font-mono">
                    {section.solved} / {section.total} solved · {formatAptitudeAccuracy(section.accuracyPercent)} acc
                  </p>
                </div>
                <button className="text-xs font-semibold text-primary hover:text-primary/80">Resume →</button>
              </div>
              <div className="h-1.5 w-full bg-subtle rounded-full overflow-hidden">
                <div
                  className="h-full bg-[image:var(--gradient-primary)]"
                  style={{ width: `${getAptitudeSectionProgressPercent(section)}%` }}
                />
              </div>
            </Card>
          );
        })}
      </div>
      <Card title="Recent Mock Tests">
        <div className="space-y-2">
          {recentTests.map((test) => (
            <div
              key={test.id}
              className="flex items-center justify-between p-3 rounded-lg bg-surface border border-border"
            >
              <div>
                <div className="text-sm font-medium">{test.name}</div>
                <div className="text-[10px] text-muted-foreground font-mono">{test.completedAtLabel}</div>
              </div>
              <div className="text-sm font-mono font-bold text-primary">
                {formatAptitudeTestScore(test.score, test.maxScore)}
              </div>
            </div>
          ))}
        </div>
      </Card>
    </DashboardPage>
  );
}

export default AptitudePage;
