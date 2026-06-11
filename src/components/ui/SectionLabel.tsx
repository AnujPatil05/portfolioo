import { CSSProperties } from 'react';
import { cn } from '@/lib/cn';

type SectionLabelProps = {
  children: string;
  className?: string;
  /** Use to override color per section for visual identity */
  style?: CSSProperties;
};

/**
 * Small uppercase mono label used as section-level markers.
 * Pass a `style={{ color: 'var(--color-indigo-500)' }}` etc. for section identity.
 */
export function SectionLabel({ children, className, style }: SectionLabelProps) {
  return (
    <p
      className={cn('label-mono text-[var(--color-text-tertiary)] mb-3', className)}
      style={{ fontFamily: 'var(--font-mono)', ...style }}
      aria-hidden="true"
    >
      {children}
    </p>
  );
}
