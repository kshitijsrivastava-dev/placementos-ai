import { Card } from "@/components/dashboard/Card";
import { ProgressRing } from "@/components/dashboard/ProgressRing";
import { DashboardPage } from "@/components/dashboard/page/DashboardPage";
import { DashboardPageHeader } from "@/components/dashboard/page/DashboardPageHeader";
import { DashboardGrid } from "@/components/dashboard/page/DashboardGrid";
import { dashboardCol } from "@/lib/responsive-layout";
import { useResumeAnalysis } from "@/hooks/dashboard/use-resume-analysis";
import {
  formatJdMatchSummary,
  RESUME_SUGGESTION_ICONS,
  RESUME_SUGGESTION_TONE_CLASSES,
} from "@/lib/resume-display";
import { MODULES } from "@/content/product-messaging";
import { FileText, Upload, Sparkles } from "lucide-react";

function ResumePage() {
  const { analysis } = useResumeAnalysis();

  return (
    <DashboardPage>
      <DashboardPageHeader
        eyebrow={MODULES.resume.eyebrow}
        title={MODULES.resume.pageTitle}
        description="ATS checks · JD alignment · revision suggestions"
        actions={
          <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
            <button
              type="button"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-surface border border-border rounded-xl font-semibold text-sm hover:bg-surface-hover touch-manipulation min-h-11 sm:min-h-0"
            >
              <Upload className="size-4" /> Upload PDF
            </button>
            <button
              type="button"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-primary text-primary-foreground rounded-xl font-semibold text-sm shadow-lg shadow-primary/30 touch-manipulation min-h-11 sm:min-h-0"
            >
              <Sparkles className="size-4" /> New version
            </button>
          </div>
        }
      />

      <DashboardGrid>
        <Card title="Resume Preview" className={`${dashboardCol.wide} min-h-[min(600px,80vh)]`}>
          <div className="bg-white text-zinc-900 rounded-lg p-8 font-serif min-h-[540px] shadow-2xl">
            <h2 className="text-2xl font-bold">Alex Chen</h2>
            <p className="text-sm text-zinc-600 mt-1">Software Engineer · alex@chen.dev · github.com/alexchen</p>
            <div className="my-4 border-t border-zinc-200" />
            <h3 className="text-xs uppercase font-bold tracking-widest text-zinc-700 mb-2">Experience</h3>
            <div className="mb-4">
              <div className="flex justify-between text-sm font-semibold">
                <span>SWE Intern · Stripe</span>
                <span className="text-zinc-500 font-normal">Summer 2025</span>
              </div>
              <ul className="mt-1 ml-4 list-disc text-sm text-zinc-700 space-y-1">
                <li>Shipped payment retry orchestrator processing <span className="bg-yellow-100 px-1">$2.4M daily</span></li>
                <li>Reduced p99 latency by <span className="bg-yellow-100 px-1">38%</span> via Redis pipelining</li>
              </ul>
            </div>
            <h3 className="text-xs uppercase font-bold tracking-widest text-zinc-700 mb-2">Projects</h3>
            <div className="text-sm text-zinc-700">
              <p className="font-semibold">DistributedKV — Go, Raft, 8k★</p>
              <p className="text-xs">Linearizable key-value store · 12k ops/sec sustained.</p>
            </div>
          </div>
        </Card>

        <div className={`${dashboardCol.narrow} space-y-5 sm:space-y-6`}>
          <Card title="ATS Score" className="flex flex-col items-center">
            <ProgressRing value={analysis.atsScore} size={140} sublabel={analysis.atsSublabel} />
          </Card>

          <Card title="Suggestions">
            <ul className="space-y-3">
              {analysis.suggestions.map((suggestion) => {
                const Icon = RESUME_SUGGESTION_ICONS[suggestion.severity];
                return (
                  <li
                    key={suggestion.id}
                    className="flex items-start gap-3 p-3 rounded-lg bg-surface border border-border"
                  >
                    <Icon
                      className={`size-4 mt-0.5 shrink-0 ${RESUME_SUGGESTION_TONE_CLASSES[suggestion.severity]}`}
                    />
                    <span className="text-sm">{suggestion.text}</span>
                  </li>
                );
              })}
            </ul>
          </Card>

          <Card title="JD Match">
            <div className="flex items-center gap-3 p-3 rounded-lg bg-surface border border-border">
              <div className="size-10 rounded-lg bg-primary/10 border border-primary/20 grid place-items-center">
                <FileText className="size-5 text-primary" />
              </div>
              <div className="flex-1">
                <div className="text-sm font-semibold">
                  {analysis.jdMatch.company} · {analysis.jdMatch.role}
                </div>
                <div className="text-xs text-muted-foreground font-mono">
                  {formatJdMatchSummary(
                    analysis.jdMatch.keywordMatchPercent,
                    analysis.jdMatch.alignedSkills,
                    analysis.jdMatch.totalSkills,
                  )}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </DashboardGrid>
    </DashboardPage>
  );
}

export default ResumePage;
