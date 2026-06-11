import { philosophy } from '@/data/philosophy';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { SectionRail } from '@/components/ui/SectionRail';
import { RevealWrapper, RevealItem } from '@/components/ui/RevealWrapper';

export function HowIThink() {
  return (
    <section className="pb-20 md:pb-28" aria-label="Engineering philosophy">
      <SectionRail color="indigo" />

      <div className="max-w-5xl mx-auto px-6 md:px-10 pt-12">
        <RevealWrapper className="mb-12">
          <SectionLabel style={{ color: 'var(--color-indigo-500)' }}>How I Think</SectionLabel>
          <div className="w-8 h-1 rounded-full mb-5" style={{ background: 'var(--strip-indigo)' }} aria-hidden="true" />
          <h2
            className="text-[clamp(1.75rem,4vw,2.5rem)] font-bold tracking-[-0.03em] max-w-xl"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Principles I hold myself to
          </h2>
          <p className="text-[var(--color-text-secondary)] mt-3 max-w-lg text-sm">
            Not advice. Not patterns. Things I learned from building real systems in production.
          </p>
        </RevealWrapper>

        <RevealWrapper stagger className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[var(--color-border-subtle)] border border-[var(--color-border-subtle)] rounded-[var(--radius-card)] overflow-hidden">
          {philosophy.map((panel) => (
            <RevealItem key={panel.marker}>
              <div className="flex flex-col gap-4 h-full overflow-hidden" style={{ background: 'var(--color-canvas)' }}>
                <div className="w-full flex-shrink-0" style={{ height: '3px', background: 'var(--strip-indigo)' }} aria-hidden="true" />
                <div className="flex flex-col gap-4 px-7 pb-7">
                  <div className="flex items-start gap-3">
                    <span
                      className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold mt-0.5"
                      style={{ fontFamily: 'var(--font-mono)', background: 'var(--color-indigo-50)', color: 'var(--color-indigo-500)', border: '1px solid rgba(74,88,153,0.2)' }}
                      aria-hidden="true"
                    >
                      {panel.marker}
                    </span>
                    <h3
                      className="text-base font-semibold text-[var(--color-text-primary)] leading-snug"
                      style={{ fontFamily: 'var(--font-display)', letterSpacing: '-0.015em' }}
                    >
                      {panel.heading}
                    </h3>
                  </div>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{panel.body}</p>
                  <div className="mt-auto pt-3" style={{ borderTop: '1px solid var(--color-border-subtle)' }}>
                    <p className="label-micro" style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-indigo-500)' }}>
                      {panel.evidence}
                    </p>
                  </div>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealWrapper>
      </div>
    </section>
  );
}
