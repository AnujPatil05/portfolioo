/**
 * SectionRail — a bold full-width color band that anchors every section.
 *
 * 44px of pure color. No text. No decoration.
 * Poster-like, editorial, confident.
 *
 * Color mapping (after new token system):
 *   teal   → Primary / Burnt Sienna (#E35336)  — Hero, Curiosity, Experiments, Contact
 *   orange → Secondary / Sandy Brown (#F4A460)  — Selected Builds
 *   indigo → Deep / Sienna-Mahogany (#A0522D)   — Logs, Principles, Timeline
 */

type SectionRailProps = {
  color: 'teal' | 'orange' | 'indigo';
};

const colorMap = {
  teal:   'var(--strip-teal)',
  orange: 'var(--strip-orange)',
  indigo: 'var(--strip-indigo)',
};

export function SectionRail({ color }: SectionRailProps) {
  return (
    <div
      className="w-full flex-shrink-0"
      style={{ height: '44px', background: colorMap[color] }}
      aria-hidden="true"
    />
  );
}
