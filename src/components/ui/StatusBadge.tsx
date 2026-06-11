import { cn } from '@/lib/cn';
import React from 'react';

type StatusBadgeVariant = 'live' | 'shipped' | 'presented' | 'archived' | 'active' | 'paused' | 'completed';

type StatusBadgeProps = {
  variant: StatusBadgeVariant;
  label: string;
  className?: string;
};

/* All tints use CSS var() tokens so they cascade from the new palette automatically */
const variantInlineStyles: Record<StatusBadgeVariant, React.CSSProperties> = {
  live:      { background: 'var(--color-teal-50)',   color: 'var(--color-teal-600)',   border: '1px solid rgba(227,83,54,0.22)' },
  shipped:   { background: 'var(--color-surface-raised)', color: 'var(--color-text-secondary)', border: '1px solid var(--color-border)' },
  presented: { background: 'var(--color-orange-50)', color: 'var(--color-orange-600)', border: '1px solid rgba(244,164,96,0.3)' },
  archived:  { background: 'var(--color-surface-raised)', color: 'var(--color-text-tertiary)', border: '1px solid var(--color-border-subtle)' },
  active:    { background: 'var(--color-teal-50)',   color: 'var(--color-teal-600)',   border: '1px solid rgba(227,83,54,0.22)' },
  paused:    { background: 'var(--color-orange-50)', color: 'var(--color-orange-600)', border: '1px solid rgba(244,164,96,0.3)' },
  completed: { background: 'var(--color-indigo-50)', color: 'var(--color-indigo-600)', border: '1px solid rgba(160,82,45,0.22)' },
};

const dotColors: Record<StatusBadgeVariant, string> = {
  live:      'var(--strip-teal)',
  shipped:   'var(--color-text-tertiary)',
  presented: 'var(--strip-orange)',
  archived:  'var(--color-border)',
  active:    'var(--strip-teal)',
  paused:    'var(--strip-orange)',
  completed: 'var(--strip-indigo)',
};

const animated: StatusBadgeVariant[] = ['live', 'active'];

export function StatusBadge({ variant, label, className }: StatusBadgeProps) {
  const isAnimated = animated.includes(variant);

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-2 py-0.5 rounded-[var(--radius-badge)]',
        'label-micro font-medium tracking-wide',
        className,
      )}
      style={{ fontFamily: 'var(--font-mono)', ...variantInlineStyles[variant] }}
    >
      <span
        className="size-1.5 rounded-full flex-shrink-0"
        style={{
          background: dotColors[variant],
          ...(isAnimated ? { animation: 'pulse-dot 2s cubic-bezier(0.4, 0, 0.6, 1) infinite' } : {}),
        }}
        aria-hidden="true"
      />
      {label}
    </span>
  );
}
