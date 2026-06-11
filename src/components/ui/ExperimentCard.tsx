'use client';

import { motion } from 'framer-motion';
import { Experiment } from '@/types/experiment';
import { StatusBadge } from './StatusBadge';
import { TechTag } from './TechTag';

type ExperimentCardProps = {
  experiment: Experiment;
};

export function ExperimentCard({ experiment }: ExperimentCardProps) {
  return (
    <motion.article
      className="flex flex-col gap-5 bg-[var(--color-surface-raised)] rounded-[var(--radius-card)] border border-[var(--color-border-subtle)] p-6 md:p-7"
      style={{ borderLeft: '3px solid var(--strip-teal)' }}
      whileHover={{
        boxShadow: '0 4px 16px 0 rgb(0 0 0 / 0.07)',
        transition: { duration: 0.2 },
      }}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-col gap-2">
          <StatusBadge variant={experiment.status} label={experiment.status} />
          <h3
            className="text-xl font-semibold text-[var(--color-text-primary)] leading-snug"
            style={{ fontFamily: 'var(--font-display)', letterSpacing: '-0.02em' }}
          >
            {experiment.title}
          </h3>
        </div>
        <span
          className="label-micro text-[var(--color-text-tertiary)] flex-shrink-0 pt-1"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          {experiment.year}
        </span>
      </div>

      {/* Hypothesis */}
      <div>
        <p
          className="label-micro text-[var(--color-text-tertiary)] mb-1.5"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          Hypothesis
        </p>
        <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed italic">
          &ldquo;{experiment.hypothesis}&rdquo;
        </p>
      </div>

      {/* What was built */}
      <div>
        <p
          className="label-micro text-[var(--color-text-tertiary)] mb-1.5"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          What was built
        </p>
        <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
          {experiment.built}
        </p>
      </div>

      {/* Results */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-[var(--color-border-subtle)] pt-4">
        <div>
          <p
            className="label-micro text-teal-600 mb-1.5"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            Worked well
          </p>
          <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
            {experiment.workedWell}
          </p>
        </div>
        <div>
          <p
            className="label-micro text-orange-500 mb-1.5"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            Didn&apos;t work
          </p>
          <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
            {experiment.didntWork}
          </p>
        </div>
      </div>

      {/* Next step */}
      {experiment.nextStep && (
        <div className="border-t border-[var(--color-border-subtle)] pt-4">
          <p
            className="label-micro text-indigo-500 mb-1.5"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            Next
          </p>
          <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
            {experiment.nextStep}
          </p>
        </div>
      )}

      {/* Stack */}
      <div className="flex flex-wrap gap-1.5 mt-auto">
        {experiment.stack.map((tech) => (
          <TechTag key={tech} label={tech} />
        ))}
      </div>
    </motion.article>
  );
}
