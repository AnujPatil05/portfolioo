'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Project } from '@/types/project';
import { StatusBadge } from './StatusBadge';
import { TechTag } from './TechTag';

type FeaturedProjectCardProps = {
  project: Project;
};

/**
 * FeaturedProjectCard — horizontal dossier layout for the first/flagship project.
 * Breaks the grid and signals hierarchy: this is the one to look at first.
 */
export function FeaturedProjectCard({ project }: FeaturedProjectCardProps) {
  return (
    <motion.article
      className="relative flex flex-col md:flex-row bg-[var(--color-surface-raised)] rounded-[var(--radius-card)] border border-[var(--color-border)] overflow-hidden"
      style={{ boxShadow: 'var(--shadow-card)' }}
      whileHover={{
        boxShadow: 'var(--shadow-card-hover)',
        transition: { duration: 0.2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
      }}
    >
      {/* Solid teal left rail — signals this is the featured dossier */}
      <div
        className="w-full h-[3px] md:h-auto md:w-[4px] flex-shrink-0"
        style={{ background: 'var(--strip-teal)' }}
        aria-hidden="true"
      />

      {/* Left panel — project info */}
      <div className="flex-1 flex flex-col gap-5 p-7 md:p-8">

        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <StatusBadge variant={project.status} label={project.statusLabel} />
              <span
                className="label-micro px-2 py-0.5 rounded-[var(--radius-badge)] text-white"
                style={{ fontFamily: 'var(--font-mono)', background: 'var(--strip-teal)', fontSize: '0.6rem' }}
              >
                FEATURED
              </span>
            </div>
            <h3
              className="text-2xl font-bold text-[var(--color-text-primary)] leading-tight"
              style={{ fontFamily: 'var(--font-display)', letterSpacing: '-0.03em' }}
            >
              {project.title}
            </h3>
          </div>
          <span className="label-micro text-[var(--color-text-tertiary)] flex-shrink-0 pt-1" style={{ fontFamily: 'var(--font-mono)' }}>
            {project.year}
          </span>
        </div>

        {/* Tagline — larger weight */}
        <p className="text-[var(--color-text-primary)] text-base font-medium leading-snug">
          {project.tagline}
        </p>

        {/* Problem / Impact — side by side at desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-4 border-t" style={{ borderColor: 'var(--color-border-subtle)' }}>
          <div>
            <p className="label-micro text-[var(--color-text-tertiary)] mb-1.5" style={{ fontFamily: 'var(--font-mono)' }}>Problem</p>
            <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">{project.problem}</p>
          </div>
          <div>
            <p className="label-micro mb-1.5" style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-teal-500)' }}>Impact</p>
            <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">{project.impact}</p>
          </div>
        </div>

        {/* Role */}
        <p className="label-micro text-[var(--color-text-tertiary)] mt-auto" style={{ fontFamily: 'var(--font-mono)' }}>
          {project.role}
        </p>
      </div>

      {/* Right panel — metrics + stack + links */}
      <div
        className="flex flex-col gap-5 p-7 md:p-8 md:w-64 border-t md:border-t-0 md:border-l justify-between"
        style={{ borderColor: 'var(--color-border-subtle)', background: 'var(--color-canvas)' }}
      >
        {/* Metrics — prominent callout chips */}
        {project.metrics && project.metrics.length > 0 && (
          <div>
            <p className="label-micro text-[var(--color-text-tertiary)] mb-3" style={{ fontFamily: 'var(--font-mono)' }}>Metrics</p>
            <div className="flex flex-col gap-2">
              {project.metrics.map((m) => (
                <span
                  key={m}
                  className="px-3 py-1.5 rounded-[var(--radius-badge)] font-bold text-sm"
                  style={{ fontFamily: 'var(--font-display)', background: 'var(--color-teal-50)', color: 'var(--color-teal-600)', letterSpacing: '-0.01em', border: '1px solid rgba(227,83,54,0.2)' }}
                >
                  {m}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Stack */}
        <div>
          <p className="label-micro text-[var(--color-text-tertiary)] mb-2.5" style={{ fontFamily: 'var(--font-mono)' }}>Stack</p>
          <div className="flex flex-wrap gap-1.5">
            {project.stack.map((tech) => (
              <TechTag key={tech} label={tech} />
            ))}
          </div>
        </div>

        {/* Links */}
        {project.links.live && (
          <a
            href={project.links.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 label-mono text-teal-600 hover:text-teal-500 transition-colors duration-150 mt-auto"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            View Live
            <ExternalLink className="size-3" aria-hidden="true" />
          </a>
        )}
      </div>

    </motion.article>
  );
}
