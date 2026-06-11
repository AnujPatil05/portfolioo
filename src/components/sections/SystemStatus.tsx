import { statusCards } from '@/data/status';
import { PulseDot } from '@/components/ui/PulseDot';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { SectionRail } from '@/components/ui/SectionRail';
import { RevealWrapper, RevealItem } from '@/components/ui/RevealWrapper';

export function SystemStatus() {
  return (
    <section className="pb-16 md:pb-20" style={{ borderBottom: '1px solid var(--color-border-subtle)' }} aria-label="Current status">
      {/* Deep sienna — grounded, authoritative status section */}
      <SectionRail color="indigo" />
      <div className="max-w-5xl mx-auto px-6 md:px-10 pt-10">
        <RevealWrapper className="mb-8">
          <SectionLabel style={{ color: 'var(--color-indigo-500)' }}>System Status</SectionLabel>
        </RevealWrapper>
        <RevealWrapper stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {statusCards.map((card) => (
            <RevealItem key={card.label}>
              <div
                className="flex flex-col gap-3 rounded-[var(--radius-card)] border overflow-hidden"
                style={{ boxShadow: 'var(--shadow-card)', background: 'var(--color-surface-raised)', borderColor: 'var(--color-border)' }}
              >
                <div className="w-full flex-shrink-0" style={{ height: '3px', background: card.isActive ? 'var(--strip-indigo)' : 'var(--color-border-subtle)' }} aria-hidden="true" />
                <div className="flex flex-col gap-3 px-5 pb-5">
                  <div className="flex items-center gap-2">
                    <p className="label-mono text-[var(--color-text-tertiary)]" style={{ fontFamily: 'var(--font-mono)' }}>{card.label}</p>
                    {card.isActive && <PulseDot color="orange" size="sm" />}
                  </div>
                  <p className="font-semibold text-[var(--color-text-primary)] text-base leading-snug" style={{ fontFamily: 'var(--font-display)', letterSpacing: '-0.01em' }}>{card.value}</p>
                  {card.detail && <p className="label-micro text-[var(--color-text-tertiary)]" style={{ fontFamily: 'var(--font-mono)' }}>{card.detail}</p>}
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealWrapper>
      </div>
    </section>
  );
}
