'use client';

import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, ExternalLink, FileText } from 'lucide-react';
import { useResume } from '@/context/ResumeContext';

const RESUME_PATH = '/resume.pdf';

export function ResumeModal() {
  const { isOpen, closeResume } = useResume();
  const closeRef = useRef<HTMLButtonElement>(null);

  /* Lock body scroll when open */
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => closeRef.current?.focus(), 80);
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  /* ESC to close */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) closeResume();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [isOpen, closeResume]);

  return (
    <AnimatePresence>
      {isOpen && (
        /*
         * Backdrop + centering container in one element.
         * The modal panel sits inside it as a flex child → perfectly centered.
         * onClick on the backdrop closes the modal;
         * stopPropagation on the panel prevents that.
         */
        <motion.div
          key="resume-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={closeResume}
          className="fixed inset-0 z-[60] flex items-center justify-center p-4"
          style={{ background: 'rgba(26,14,0,0.72)', backdropFilter: 'blur(4px)' }}
          aria-hidden="false"
        >
          {/* Modal panel — flex child, centered by parent */}
          <motion.div
            key="resume-panel"
            role="dialog"
            aria-modal="true"
            aria-label="Anuj Patil — Resume Preview"
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 8 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()} /* don't close on click inside */
            className="flex flex-col w-full"
            style={{
              maxWidth: '860px',
              height: 'min(88vh, 820px)',
              background: 'var(--color-surface-raised)',
              borderRadius: '0.875rem',
              border: '1px solid var(--color-border)',
              boxShadow: '0 24px 64px rgba(26,14,0,0.3)',
              overflow: 'hidden',
            }}
          >
            {/* ── Header bar ─────────────────────────────────────── */}
            <div
              className="flex-shrink-0 flex items-center justify-between gap-4 px-5 py-4 border-b"
              style={{ borderColor: 'var(--color-border-subtle)', background: 'var(--color-canvas)' }}
            >
              {/* Left: identity */}
              <div className="flex items-center gap-3">
                <div
                  className="flex items-center justify-center size-8 rounded-[var(--radius-badge)] flex-shrink-0"
                  style={{ background: 'var(--strip-teal)' }}
                  aria-hidden="true"
                >
                  <FileText className="size-4" style={{ color: '#ffffff' }} />
                </div>
                <div>
                  <p
                    className="font-semibold text-sm leading-none mb-0.5"
                    style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text-primary)' }}
                  >
                    Anuj Patil
                  </p>
                  <p
                    className="label-micro"
                    style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-text-tertiary)' }}
                  >
                    Resume · PDF
                  </p>
                </div>
              </div>

              {/* Right: actions */}
              <div className="flex items-center gap-2">
                {/* Download — filled primary */}
                <a
                  href={RESUME_PATH}
                  download="Anuj_Patil_Resume.pdf"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[var(--radius-btn)] text-xs font-medium transition-opacity duration-150 hover:opacity-85 label-mono"
                  style={{
                    fontFamily: 'var(--font-mono)',
                    color: '#ffffff',
                    background: 'var(--strip-teal)',
                  }}
                  aria-label="Download resume as PDF"
                >
                  <Download className="size-3.5" style={{ color: '#ffffff' }} aria-hidden="true" />
                  Download
                </a>

                {/* Open in new tab — outlined */}
                <a
                  href={RESUME_PATH}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[var(--radius-btn)] text-xs font-medium transition-colors duration-150 border label-mono"
                  style={{
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--color-text-secondary)',
                    background: 'var(--color-surface-raised)',
                    borderColor: 'var(--color-border)',
                  }}
                  aria-label="Open resume in new tab"
                >
                  <ExternalLink className="size-3.5" aria-hidden="true" />
                  Open
                </a>

                {/* Close */}
                <button
                  ref={closeRef}
                  onClick={closeResume}
                  className="flex items-center justify-center size-8 rounded-full transition-colors duration-150"
                  style={{ color: 'var(--color-text-secondary)', background: 'transparent' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = 'var(--color-surface)'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = 'transparent'; }}
                  aria-label="Close resume preview"
                >
                  <X className="size-4" aria-hidden="true" />
                </button>
              </div>
            </div>

            {/* ── PDF viewer ─────────────────────────────────────── */}
            <div className="flex-1 min-h-0" style={{ background: 'var(--color-surface)' }}>
              {/* Desktop: iframe embed */}
              <iframe
                src={`${RESUME_PATH}#toolbar=0&navpanes=0&scrollbar=1`}
                title="Anuj Patil Resume"
                className="hidden md:block w-full h-full"
                style={{ border: 'none', display: 'block' }}
                aria-label="Resume PDF preview"
              />

              {/* Mobile fallback */}
              <div className="flex md:hidden flex-col items-center justify-center h-full gap-6 px-8 py-12 text-center">
                <div
                  className="flex items-center justify-center size-16 rounded-[var(--radius-card)]"
                  style={{ background: 'var(--color-teal-50)' }}
                  aria-hidden="true"
                >
                  <FileText className="size-8" style={{ color: 'var(--color-teal-500)' }} />
                </div>
                <div>
                  <h3
                    className="text-xl font-bold mb-2"
                    style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text-primary)' }}
                  >
                    Anuj Patil — Resume
                  </h3>
                  <p className="text-sm leading-relaxed max-w-sm" style={{ color: 'var(--color-text-secondary)' }}>
                    PDF preview works best on desktop. On mobile, open it directly or download.
                  </p>
                </div>
                <div className="flex flex-col gap-3 w-full max-w-xs">
                  <a
                    href={RESUME_PATH}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-5 py-3 rounded-[var(--radius-btn)] font-semibold text-sm"
                    style={{ fontFamily: 'var(--font-display)', color: '#ffffff', background: 'var(--strip-teal)' }}
                  >
                    <ExternalLink className="size-4" style={{ color: '#ffffff' }} aria-hidden="true" />
                    Open in Browser
                  </a>
                  <a
                    href={RESUME_PATH}
                    download="Anuj_Patil_Resume.pdf"
                    className="flex items-center justify-center gap-2 px-5 py-3 rounded-[var(--radius-btn)] font-semibold text-sm"
                    style={{
                      fontFamily: 'var(--font-display)',
                      color: 'var(--color-text-primary)',
                      background: 'var(--color-surface-raised)',
                      border: '1px solid var(--color-border)',
                    }}
                  >
                    <Download className="size-4" aria-hidden="true" />
                    Download PDF
                  </a>
                </div>
              </div>
            </div>

            {/* ── Footer accent strip ─────────────────────────────── */}
            <div
              className="flex-shrink-0 h-[3px] w-full"
              style={{ background: 'var(--strip-teal)' }}
              aria-hidden="true"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
