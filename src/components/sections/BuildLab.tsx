import { getAllExperiments } from '@/lib/mdx';
import { ExperimentCard } from '@/components/ui/ExperimentCard';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { SectionRail } from '@/components/ui/SectionRail';
import { RevealWrapper, RevealItem } from '@/components/ui/RevealWrapper';

export function BuildLab() {
  const experiments = getAllExperiments();

  return (
    <section id="lab" className="pb-20 md:pb-28" aria-label="Build lab and experiments">
      {/* Teal / Primary burnt sienna rail for experiments */}
      <SectionRail color="teal" />

      <div className="max-w-5xl mx-auto px-6 md:px-10 pt-12">
        <RevealWrapper className="mb-10">
          <SectionLabel style={{ color: 'var(--color-teal-500)' }}>Build Lab</SectionLabel>
          <div className="w-8 h-1 rounded-full mb-5" style={{ background: 'var(--strip-teal)' }} aria-hidden="true" />
          <h2
            className="text-[clamp(1.75rem,4vw,2.5rem)] font-bold tracking-[-0.03em]"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Experiments with honest results
          </h2>
          <p className="text-[var(--color-text-secondary)] mt-3 max-w-lg text-sm leading-relaxed">
            Not every build ships. These are hypotheses I tested — documented with what worked,
            what didn&apos;t, and what I learned. The failures are as important as the successes.
          </p>
        </RevealWrapper>

        <RevealWrapper stagger className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {experiments.map((experiment) => (
            <RevealItem key={experiment.slug}>
              <ExperimentCard experiment={experiment} />
            </RevealItem>
          ))}
        </RevealWrapper>
      </div>
    </section>
  );
}
