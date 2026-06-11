import { BuildLog } from '@/types/log';

type LogEntryProps = {
  log: BuildLog;
};

export function LogEntry({ log }: LogEntryProps) {
  const formattedDate = new Date(log.date + 'T00:00:00').toLocaleDateString('en-GB', {
    month: 'short',
    year: 'numeric',
  });

  return (
    <article
      className="flex flex-col sm:flex-row gap-4 sm:gap-8 py-6 border-b border-[var(--color-border-subtle)] last:border-b-0 relative pl-5"
      style={{ borderLeft: '3px solid var(--strip-indigo)' }}
    >
      {/* Meta — date + context */}
      <div className="flex-shrink-0 sm:w-36">
        <p
          className="label-mono text-[var(--color-text-tertiary)]"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          {formattedDate}
        </p>
        <p
          className="label-micro text-[var(--color-text-tertiary)] mt-0.5"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          {log.context}
        </p>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-1.5">
        <h3
          className="text-base font-semibold text-[var(--color-text-primary)] leading-snug"
          style={{ fontFamily: 'var(--font-display)', letterSpacing: '-0.01em' }}
        >
          {log.title}
        </h3>
        <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
          {log.summary}
        </p>
      </div>
    </article>
  );
}
