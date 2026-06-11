'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Project } from '@/types/project';
import { StatusBadge } from './StatusBadge';
import { TechTag } from './TechTag';

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const hasCaseStudy = Boolean(project.links.caseStudy);

  return (
    <motion.article
      className="group relative flex flex-col bg-[var(--color-surface-raised)] rounded-[var(--radius-card)] border border-[var(--color-border)] overflow-hidden transition-shadow duration-200"
      style={{ boxShadow: 'var(--shadow-card)' }}
      whileHover={{
        y: -3,
        boxShadow: 'var(--shadow-card-hover)',
        transition: { duration: 0.2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
      }}
    >
      {/* Solid teal top accent bar — always visible */}
      <div
        className="h-[3px] w-full"
        style={{ background: 'var(--strip-teal)' }}
        aria-hidden="true"
      />

      <div className="flex flex-col gap-0 p-6 md:p-7 flex-1">

        {/* Header row */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="flex flex-col gap-2">
            <StatusBadge variant={project.status} label={project.statusLabel} />
            <h3
              className="text-[1.2rem] font-bold text-[var(--color-text-primary)] leading-tight"
              style={{ fontFamily: 'var(--font-display)', letterSpacing: '-0.025em' }}
            >
              {project.title}
            </h3>
          </div>
          <span
            className="label-micro text-[var(--color-text-tertiary)] flex-shrink-0 pt-1"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            {project.year}
          </span>
        </div>

        {/* Tagline */}
        <p className="text-[var(--color-text-secondary)] text-[0.9rem] leading-relaxed mb-5">
          {project.tagline}
        </p>

        {/* Metrics callout — visually prominent */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-5">
            {project.metrics.map((m) => (
              <span
                key={m}
                className="px-2.5 py-1 rounded-[var(--radius-badge)] font-semibold text-xs"
                style={{ fontFamily: 'var(--font-display)', background: 'var(--color-teal-50)', color: 'var(--color-teal-600)', letterSpacing: '-0.01em', border: '1px solid rgba(227,83,54,0.2)' }}
              >
                {m}
              </span>
            ))}
          </div>
        )}

        {/* Problem / Impact */}
        <div className="flex flex-col gap-4 border-t border-[var(--color-border-subtle)] pt-4 mb-5">
          <div>
            <p
              className="label-micro text-[var(--color-text-tertiary)] mb-1.5"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              Problem
            </p>
            <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
              {project.problem}
            </p>
          </div>
          <div>
            <p
              className="label-micro text-teal-600 mb-1.5"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              Impact
            </p>
            <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
              {project.impact}
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="flex flex-col gap-3 mt-auto pt-4 border-t border-[var(--color-border-subtle)]">
          {/* Role */}
          <p
            className="label-micro text-[var(--color-text-tertiary)]"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            {project.role}
          </p>

          {/* Stack */}
          <div className="flex flex-wrap gap-1.5">
            {project.stack.map((tech) => (
              <TechTag key={tech} label={tech} />
            ))}
          </div>

          {/* Links */}
          {(project.links.live || hasCaseStudy) && (
            <div className="flex flex-wrap gap-4 mt-1">
              {project.links.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 label-mono text-teal-600 hover:text-teal-500 transition-colors duration-150"
                  style={{ fontFamily: 'var(--font-mono)' }}
                >
                  View Live
                  <ExternalLink className="size-3" aria-hidden="true" />
                </a>
              )}
              {hasCaseStudy && project.links.caseStudy && (
                <a
                  href={project.links.caseStudy}
                  className="inline-flex items-center gap-1.5 label-mono text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-150"
                  style={{ fontFamily: 'var(--font-mono)' }}
                >
                  Case Study →
                </a>
              )}
            </div>
          )}
        </div>

      </div>
    </motion.article>
  );
}
