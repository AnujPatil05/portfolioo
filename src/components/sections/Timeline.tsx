import { timeline } from '@/data/timeline';
import { TimelineMilestone } from '@/types/timeline';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { SectionRail } from '@/components/ui/SectionRail';
import { RevealWrapper, RevealItem } from '@/components/ui/RevealWrapper';

const typeFills: Record<TimelineMilestone['type'], string> = {
  education:  'var(--strip-indigo)',
  project:    'var(--strip-teal)',
  hackathon:  'var(--strip-orange)',
  internship: 'var(--strip-teal)',
  milestone:  'var(--color-text-secondary)',
};

const typeLabels: Record<TimelineMilestone['type'], string> = {
  education:  'Education',
  project:    'Project',
  hackathon:  'Hackathon',
  internship: 'Internship',
  milestone:  'Milestone',
};

export function Timeline() {
  return (
    <section id="timeline" className="pb-20 md:pb-28" aria-label="Journey and milestones">
      <SectionRail color="indigo" />

      <div className="max-w-5xl mx-auto px-6 md:px-10 pt-12">
        <RevealWrapper className="mb-12">
          <SectionLabel style={{ color: 'var(--color-indigo-500)' }}>Timeline</SectionLabel>
          <div className="w-8 h-1 rounded-full mb-5" style={{ background: 'var(--strip-indigo)' }} aria-hidden="true" />
          <h2
            className="text-[clamp(1.75rem,4vw,2.5rem)] font-bold tracking-[-0.03em]"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            The journey so far
          </h2>
        </RevealWrapper>

        <div className="relative max-w-3xl">
          <div className="absolute left-[8px] top-0 bottom-0 w-0.5" style={{ background: 'var(--color-border)' }} aria-hidden="true" />

          <RevealWrapper stagger className="flex flex-col gap-0">
            {timeline.map((milestone, i) => (
              <RevealItem key={i}>
                <div className="relative flex gap-8 pb-10 last:pb-0">
                  <div className="flex-shrink-0 flex flex-col items-center">
                    <div
                      className="size-4 rounded-full flex-shrink-0 mt-1"
                      style={{
                        background: typeFills[milestone.type],
                        boxShadow: `0 0 0 3px var(--color-canvas), 0 0 0 4.5px ${typeFills[milestone.type]}`,
                      }}
                      aria-hidden="true"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5 pb-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="label-mono text-[var(--color-text-tertiary)]" style={{ fontFamily: 'var(--font-mono)' }}>
                        {milestone.year}
                      </span>
                      <span
                        className="inline-flex items-center px-2 py-0.5 rounded-full label-micro text-white"
                        style={{ fontFamily: 'var(--font-mono)', background: typeFills[milestone.type] }}
                      >
                        {typeLabels[milestone.type]}
                      </span>
                    </div>
                    <h3 className="font-semibold text-[var(--color-text-primary)] text-base leading-snug" style={{ fontFamily: 'var(--font-display)', letterSpacing: '-0.01em' }}>
                      {milestone.title}
                    </h3>
                    <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealWrapper>
        </div>
      </div>
    </section>
  );
}
