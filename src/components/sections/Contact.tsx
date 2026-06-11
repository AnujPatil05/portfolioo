'use client';

import { Download, FileText } from 'lucide-react';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { SectionRail } from '@/components/ui/SectionRail';
import { RevealWrapper } from '@/components/ui/RevealWrapper';
import { useResume } from '@/context/ResumeContext';

const contactLinks = [
  { label: 'Email', value: 'anuj05patil@gmail.com', href: 'mailto:anuj05patil@gmail.com' },
  { label: 'LinkedIn', value: 'linkedin.com/in/anujpatil', href: 'https://www.linkedin.com/in/anuj-patil-271190373/' },
  { label: 'GitHub', value: 'github.com/AnujPatil05', href: 'https://github.com/AnujPatil05' },
];

export function Contact() {
  const { openResume } = useResume();

  return (
    <section id="contact" className="pb-20 md:pb-28" aria-label="Contact">
      <SectionRail color="teal" />

      <div className="max-w-5xl mx-auto px-6 md:px-10 pt-12">
        <RevealWrapper className="max-w-xl">
          <SectionLabel>Contact</SectionLabel>
          <div className="w-8 h-1 rounded-full mb-5" style={{ background: 'var(--strip-teal)' }} aria-hidden="true" />

          <h2
            className="text-[clamp(2rem,5vw,3rem)] font-bold tracking-[-0.04em] mb-5"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            I&apos;m currently available.
          </h2>

          <p className="text-[var(--color-text-secondary)] text-base leading-relaxed mb-3">
            Looking for backend engineering, platform engineering, or AI infrastructure roles.
            Remote or Mumbai/Pune.
          </p>
          <p className="text-[var(--color-text-secondary)] text-base leading-relaxed mb-10">
            If you&apos;re building something that needs real retrieval, observability, or
            evaluation — and you want someone who will care about those things as much as you do —
            reach out.
          </p>

          {/* Contact links */}
          <div className="flex flex-col gap-5 mb-10">
            {contactLinks.map((link) => (
              <div key={link.label} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-5">
                <span className="label-mono text-[var(--color-text-tertiary)] sm:w-24 flex-shrink-0" style={{ fontFamily: 'var(--font-mono)' }}>
                  {link.label}
                </span>
                <a
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="text-[var(--color-text-primary)] font-semibold text-base hover:text-[var(--color-teal-500)] transition-colors duration-150 group relative inline-block"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {link.value}
                  <span className="absolute left-0 -bottom-px h-px w-0 group-hover:w-full transition-[width] duration-200" style={{ background: 'var(--strip-teal)' }} aria-hidden="true" />
                </a>
              </div>
            ))}
          </div>

          {/* Resume CTA — recruiter-facing */}
          <div
            className="flex flex-wrap gap-3 pt-8 border-t"
            style={{ borderColor: 'var(--color-border-subtle)' }}
          >
            <button
              onClick={openResume}
              className="inline-flex items-center gap-2 px-5 py-2.5 font-semibold text-sm transition-opacity duration-150 hover:opacity-85"
              style={{
                fontFamily: 'var(--font-display)',
                color: 'var(--color-canvas)',
                background: 'var(--strip-teal)',
                borderRadius: 'var(--radius-btn)',
              }}
              aria-label="View resume"
            >
              <FileText className="size-4" aria-hidden="true" />
              View Resume
            </button>

            <a
              href="/resume.pdf"
              download="Anuj_Patil_Resume.pdf"
              className="inline-flex items-center gap-2 px-5 py-2.5 font-semibold text-sm border transition-colors duration-150 hover:border-[var(--color-teal-500)] hover:text-[var(--color-teal-500)]"
              style={{
                fontFamily: 'var(--font-display)',
                color: 'var(--color-text-primary)',
                background: 'var(--color-surface-raised)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-btn)',
              }}
              aria-label="Download resume PDF"
            >
              <Download className="size-4" aria-hidden="true" />
              Download PDF
            </a>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}
