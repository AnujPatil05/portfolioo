import { projects } from '@/data/projects';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { FeaturedProjectCard } from '@/components/ui/FeaturedProjectCard';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { SectionRail } from '@/components/ui/SectionRail';
import { RevealWrapper, RevealItem } from '@/components/ui/RevealWrapper';

export function SelectedBuilds() {
  const featured = projects.find((p) => p.featured) ?? projects[0];
  const rest = projects.filter((p) => p.slug !== featured.slug);

  return (
    <section id="builds" className="pb-20 md:pb-28" aria-label="Selected builds">
      {/* Orange / Sandy Brown rail — secondary accent for builds */}
      <SectionRail color="orange" />

      <div className="max-w-5xl mx-auto px-6 md:px-10 pt-12">
        <RevealWrapper className="mb-10">
          <SectionLabel style={{ color: 'var(--color-orange-600)' }}>Selected Builds</SectionLabel>
          <div className="w-8 h-1 rounded-full mb-5" style={{ background: 'var(--strip-orange)' }} aria-hidden="true" />
          <h2
            className="text-[clamp(1.75rem,4vw,2.5rem)] font-bold tracking-[-0.03em]"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Four things I shipped
          </h2>
          <p className="text-[var(--color-text-secondary)] mt-3 max-w-lg text-sm leading-relaxed">
            Every project here has a live API, real architecture decisions, and measurable outcomes
            I own end-to-end. Not coursework. Not tutorials. Real systems.
          </p>
        </RevealWrapper>

        {/* Featured project — full-width horizontal showcase */}
        <RevealWrapper className="mb-5">
          <FeaturedProjectCard project={featured} />
        </RevealWrapper>

        {/* Remaining projects — 2-col grid */}
        <RevealWrapper stagger className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {rest.map((project) => (
            <RevealItem key={project.slug}>
              <ProjectCard project={project} />
            </RevealItem>
          ))}
        </RevealWrapper>
      </div>
    </section>
  );
}
