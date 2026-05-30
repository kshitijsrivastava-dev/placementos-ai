import { Card } from "@/components/dashboard/Card";
import { ACTIVITY_EVENT_ICONS, ACTIVITY_EVENT_TONE_CLASSES } from "@/lib/overview-display";
import type { ActivityEvent } from "@/types/overview";

export function OverviewActivitySection({
  events,
  className,
}: {
  events: ActivityEvent[];
  className?: string;
}) {
  return (
    <Card title="Recent activity" className={className}>
      <ul className="space-y-4">
        {events.map((event) => {
          const Icon = ACTIVITY_EVENT_ICONS[event.icon];
          const toneClass = ACTIVITY_EVENT_TONE_CLASSES[event.tone];
          return (
            <li key={event.id} className="flex items-start gap-3">
              <div
                className={`size-8 rounded-lg bg-surface border border-border grid place-items-center shrink-0 ${toneClass}`}
              >
                <Icon className="size-4" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-foreground/90">{event.text}</p>
                <p className="text-xs text-muted-foreground font-mono mt-0.5">{event.timeLabel}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </Card>
  );
}
