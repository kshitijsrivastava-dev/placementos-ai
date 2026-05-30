import { Code2, FileSearch, MessageSquare, Route, BarChart3, Calculator } from "lucide-react";
import { LANDING_MODULE_FEATURES } from "@/content/product-messaging";

const featureIcons = {
  dsa: Code2,
  mockInterview: MessageSquare,
  resume: FileSearch,
  roadmap: Route,
  analytics: BarChart3,
  aptitude: Calculator,
} as const;

export function Features() {
  return (
    <section id="features" className="py-32 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto w-full min-w-0">
        <div className="max-w-2xl mb-16">
          <p className="text-xs font-mono uppercase tracking-widest text-primary mb-4">// MODULES</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            One workspace for placement prep.
          </h2>
          <p className="text-muted-foreground text-lg">
            Modules connect practice, review, and readiness—so you always know what to do next.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {LANDING_MODULE_FEATURES.map((feature) => {
            const Icon = featureIcons[feature.id as keyof typeof featureIcons];
            return (
              <div
                key={feature.id}
                className="group p-6 rounded-2xl border border-border bg-surface hover:bg-surface-hover hover:border-primary/30 transition-all"
              >
                <div className="size-11 rounded-lg bg-primary/10 border border-primary/20 grid place-items-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <Icon className="size-5 text-primary" />
                </div>
                <h3 className="text-base font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
