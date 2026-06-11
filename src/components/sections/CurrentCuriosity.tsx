import { currentCuriosity } from '@/data/curiosity';
import { SectionRail } from '@/components/ui/SectionRail';
import { RevealWrapper, RevealItem } from '@/components/ui/RevealWrapper';

export function CurrentCuriosity() {
  return (
    <section id="curiosity" className="pb-20 md:pb-28" aria-label="Current areas of curiosity">
      {/* Teal / Primary burnt sienna — curiosity is the most energetic section */}
      <SectionRail color="teal" />

      <div className="max-w-5xl mx-auto px-6 md:px-10 pt-12">
        <RevealWrapper className="mb-12">
          <div className="flex items-center gap-3 mb-3">
            <p
              className="label-mono"
              style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-teal-500)' }}
            >
              Current Curiosity
            </p>
            {/* Field Notes stamp */}
            <span
              className="label-micro px-2 py-0.5"
              style={{
                fontFamily: 'var(--font-mono)',
                color: 'var(--color-text-tertiary)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-badge)',
                letterSpacing: '0.06em',
              }}
            >
              FIELD NOTES · Jun 2026
            </span>
          </div>
          <div className="w-8 rounded-full mb-5" style={{ height: '4px', background: 'var(--strip-teal)' }} aria-hidden="true" />
          <h2
            className="text-[clamp(1.75rem,4vw,2.5rem)] font-bold tracking-[-0.03em] max-w-xl"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            What&apos;s occupying my mind right now
          </h2>
          <p className="text-[var(--color-text-secondary)] mt-3 max-w-lg text-base leading-relaxed">
            {currentCuriosity.frame}
          </p>
        </RevealWrapper>

        <RevealWrapper stagger className="flex flex-col gap-0">
          {currentCuriosity.items.map((item, i) => (
            <RevealItem key={i}>
              <div
                className="group py-8 border-t last:border-b pl-6"
                style={{
                  borderColor: 'var(--color-border-subtle)',
                  borderLeft: '3px solid var(--strip-teal)',
                }}
              >
                <p
                  className="label-micro text-[var(--color-text-tertiary)] mb-3"
                  style={{ fontFamily: 'var(--font-mono)' }}
                >
                  § {String(i + 1).padStart(2, '0')}
                </p>

                <div className="flex flex-col md:flex-row md:gap-12 gap-5">
                  <div className="md:w-2/5 flex-shrink-0">
                    <span
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[var(--radius-badge)] label-micro mb-3 text-white"
                      style={{ fontFamily: 'var(--font-mono)', background: 'var(--strip-teal)' }}
                    >
                      {item.tag}
                    </span>
                    <p
                      className="text-base font-semibold text-[var(--color-text-primary)] leading-snug"
                      style={{ fontFamily: 'var(--font-display)', letterSpacing: '-0.015em' }}
                    >
                      {item.question}
                    </p>
                  </div>
                  <div className="flex flex-col gap-4 flex-1">
                    <div>
                      <p className="label-micro text-[var(--color-text-tertiary)] mb-1.5" style={{ fontFamily: 'var(--font-mono)' }}>
                        What I&apos;m doing about it
                      </p>
                      <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                        {item.activelyDoing}
                      </p>
                    </div>
                    <div>
                      <p className="label-micro mb-1.5" style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-teal-500)' }}>
                        Why it matters
                      </p>
                      <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                        {item.why}
                      </p>
                    </div>
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
