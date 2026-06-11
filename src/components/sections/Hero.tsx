'use client';

import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';
import { PulseDot } from '@/components/ui/PulseDot';
import { SectionRail } from '@/components/ui/SectionRail';
import { useResume } from '@/context/ResumeContext';

const EASE = [0.16, 1, 0.3, 1] as const;

const metrics = [
  { metric: '3', label: 'live APIs' },
  { metric: '70%', label: 'latency cut' },
  { metric: '< 4s', label: 'fact-check pipeline' },
  { metric: '65%', label: 'embedding savings' },
];

export function Hero() {
  const { openResume } = useResume();
  return (
    <section id="top" className="flex flex-col" style={{ minHeight: 'calc(100vh - 4rem)' }} aria-label="Introduction">

      {/* ── Primary burnt sienna rail — hero identity ──────────── */}
      <SectionRail color="teal" />

      {/* ── Status ticker ─────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.45, ease: EASE }}
        className="w-full border-b flex-shrink-0"
        style={{ borderColor: 'var(--color-border-subtle)' }}
      >
        <div className="max-w-5xl mx-auto px-6 md:px-10 py-3">
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1.5"
            style={{
              border: '1px solid rgba(212,98,43,0.35)',
              background: 'var(--color-orange-50)',
              borderRadius: 'var(--radius-badge)',
            }}
          >
            <PulseDot color="orange" size="sm" />
            <span
              className="label-mono"
              style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-orange-500)' }}
            >
              Former SDE Intern @ Codologs · Spring Boot production · Graduated 2026 · Open to new opportunities
            </span>
          </div>
        </div>
      </motion.div>

      {/* ── Main split layout ─────────────────────────────────────── */}
      <div className="flex-1 max-w-5xl w-full mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row" style={{ minHeight: '72vh' }}>

          {/* Left — Huge stacked name (44%) */}
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.08, ease: EASE }}
            className="flex flex-col justify-between py-12"
            style={{ width: '100%', flexShrink: 0 }}
          >
            {/* Responsive: stack on mobile, side-by-side on md */}
            <div className="flex flex-col md:flex-row gap-0">

              {/* Name block */}
              <div
                className="flex flex-col justify-between py-0 md:py-2 md:pr-10 md:border-r"
                style={{ borderColor: 'var(--color-border-subtle)', width: '100%' }}
              >
                <div className="flex flex-col md:flex-row gap-8 md:gap-0">

                  {/* Name — left 44% */}
                  <div className="md:w-[44%] flex flex-col gap-6">
                    <p
                      className="label-mono text-[var(--color-text-tertiary)]"
                      style={{ fontFamily: 'var(--font-mono)' }}
                    >
                    </p>
                    <h1
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(3.5rem, 7vw, 6.5rem)',
                        fontWeight: 900,
                        lineHeight: 0.88,
                        letterSpacing: '-0.04em',
                        color: 'var(--color-text-primary)',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      ANUJ
                      <br />
                      PATIL
                    </h1>
                    {/* Short bio — below name, before the divider */}
                    <p
                      className="text-sm text-[var(--color-text-secondary)] leading-relaxed"
                      style={{ maxWidth: '22ch' }}
                    >
                      Backend engineer building AI infrastructure that ships and stays in production.
                    </p>
                  </div>

                  {/* Right 56% — Mission + bio + CTAs */}
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, delay: 0.2, ease: EASE }}
                    className="md:w-[56%] flex flex-col justify-center gap-7 md:pl-10"
                    style={{ borderLeft: '0', paddingTop: '0.5rem' }}
                  >
                    {/* Teal accent bar + mission — HEAVIER weight */}
                    <div>
                      <div
                        className="rounded-full mb-4"
                        style={{ width: '2.5rem', height: '4px', background: 'var(--strip-teal)' }}
                        aria-hidden="true"
                      />
                      <p
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontSize: 'clamp(1.5rem, 2.8vw, 2.1rem)',
                          fontWeight: 800,
                          lineHeight: 1.15,
                          letterSpacing: '-0.03em',
                          color: 'var(--color-text-primary)',
                        }}
                      >
                        I build AI systems that work{' '}
                        <span style={{ color: 'var(--color-teal-500)' }}>
                          outside the notebook.
                        </span>
                      </p>
                    </div>

                    {/* Bio */}
                    <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed" style={{ maxWidth: '40ch' }}>
                      The hard part is rarely the model. It&apos;s the retrieval layer, the caching
                      strategy, the evaluation pipeline, the failure modes you don&apos;t see until
                      production. That&apos;s what I care about — and what I build.
                      <br /><br />
                      Right now: exploring how machines can learn to teach,
                      and whether AI can be calibrated to know what it doesn&apos;t know.
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-wrap gap-3 items-center">
                      <a
                        href="#builds"
                        className="inline-flex items-center px-5 py-2.5 font-semibold text-sm hover:opacity-90 transition-opacity duration-150"
                        style={{
                          fontFamily: 'var(--font-display)',
                          color: 'var(--color-canvas)',
                          background: 'var(--strip-teal)',
                          borderRadius: 'var(--radius-btn)',
                        }}
                      >
                        View Builds
                      </a>

                      {/* Resume — secondary outlined CTA */}
                      <button
                        onClick={openResume}
                        className="inline-flex items-center gap-2 px-5 py-2.5 font-semibold text-sm border hover:border-[var(--color-teal-500)] hover:text-[var(--color-teal-500)] transition-colors duration-150"
                        style={{
                          fontFamily: 'var(--font-display)',
                          color: 'var(--color-text-primary)',
                          background: 'var(--color-surface-raised)',
                          border: '1px solid var(--color-border)',
                          borderRadius: 'var(--radius-btn)',
                        }}
                        aria-label="View resume"
                      >
                        <FileText className="size-4" aria-hidden="true" />
                        View Resume
                      </button>

                      <a
                        href="https://github.com/AnujPatil05"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2.5 label-mono text-sm hover:opacity-70 transition-opacity"
                        style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-text-secondary)' }}
                      >
                        GitHub →
                      </a>
                    </div>

                    {/* Proof metrics */}
                    <div
                      className="flex flex-wrap gap-x-7 gap-y-2 pt-5 border-t"
                      style={{ borderColor: 'var(--color-border-subtle)' }}
                    >
                      {metrics.map(({ metric, label }) => (
                        <div key={label} className="flex items-baseline gap-2">
                          <span
                            className="text-lg font-bold"
                            style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text-primary)', letterSpacing: '-0.02em' }}
                          >
                            {metric}
                          </span>
                          <span
                            className="label-micro text-[var(--color-text-tertiary)]"
                            style={{ fontFamily: 'var(--font-mono)' }}
                          >
                            {label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                </div>

                {/* Bottom metadata bar */}
                <div
                  className="flex flex-wrap items-center justify-between gap-4 pt-8 mt-8 border-t"
                  style={{ borderColor: 'var(--color-border-subtle)' }}
                >
                  <span className="label-mono text-[var(--color-text-tertiary)]" style={{ fontFamily: 'var(--font-mono)' }}>
                    Navi Mumbai, IN
                  </span>
                  <span className="label-mono text-[var(--color-text-tertiary)]" style={{ fontFamily: 'var(--font-mono)' }}>
                    Open for opportunities
                  </span>
                  <span className="label-mono text-[var(--color-text-tertiary)]" style={{ fontFamily: 'var(--font-mono)' }}>
                    Backend · AI Infra · Platform Engineering
                  </span>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>

    </section>
  );
}
