type PulseDotProps = {
  /** Color variant */
  color?: 'teal' | 'orange' | 'indigo';
  size?: 'sm' | 'md';
  className?: string;
};

const colorMap = {
  teal: 'bg-teal-500',
  orange: 'bg-orange-500',
  indigo: 'bg-indigo-500',
};

const sizeMap = {
  sm: 'size-1.5',
  md: 'size-2',
};

export function PulseDot({ color = 'teal', size = 'sm', className = '' }: PulseDotProps) {
  return (
    <span
      className={`inline-block rounded-full ${colorMap[color]} ${sizeMap[size]} ${className}`}
      style={{ animation: 'pulse-dot 2s cubic-bezier(0.4, 0, 0.6, 1) infinite' }}
      aria-hidden="true"
    />
  );
}
