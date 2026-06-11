import { getAllBuildLogs } from '@/lib/mdx';
import { LogEntry } from '@/components/ui/LogEntry';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { SectionRail } from '@/components/ui/SectionRail';
import { RevealWrapper, RevealItem } from '@/components/ui/RevealWrapper';

export function BuildLogs() {
  const logs = getAllBuildLogs();

  return (
    <section id="logs" className="pb-20 md:pb-28" aria-label="Build logs">
      {/* Indigo / Deep sienna rail — authoritative, archive-like */}
      <SectionRail color="indigo" />

      <div className="max-w-5xl mx-auto px-6 md:px-10 pt-12">
        <div className="max-w-2xl">
          <RevealWrapper className="mb-10">
            <SectionLabel style={{ color: 'var(--color-indigo-500)' }}>Build Logs</SectionLabel>
            <div className="w-8 h-1 rounded-full mb-5" style={{ background: 'var(--strip-indigo)' }} aria-hidden="true" />
            <h2
              className="text-[clamp(1.75rem,4vw,2.5rem)] font-bold tracking-[-0.03em]"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Notes from the build
            </h2>
            <p className="text-[var(--color-text-secondary)] mt-3 text-sm leading-relaxed">
              Short reflections on specific engineering decisions — what I tried, what I learned, what I&apos;d do differently.
            </p>
          </RevealWrapper>

          <RevealWrapper stagger>
            {logs.map((log) => (
              <RevealItem key={log.slug}>
                <LogEntry log={log} />
              </RevealItem>
            ))}
          </RevealWrapper>
        </div>
      </div>
    </section>
  );
}
