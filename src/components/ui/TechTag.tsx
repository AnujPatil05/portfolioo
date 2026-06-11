type TechTagProps = {
  label: string;
  className?: string;
};

export function TechTag({ label, className = '' }: TechTagProps) {
  return (
    <span
      className={`inline-block px-2 py-0.5 label-micro ${className}`}
      style={{
        background: 'var(--color-surface-raised)',
        color: 'var(--color-text-secondary)',
        border: '1px solid var(--color-border)',
        borderRadius: 'var(--radius-badge)',
        fontFamily: 'var(--font-mono)',
      }}
    >
      {label}
    </span>
  );
}
