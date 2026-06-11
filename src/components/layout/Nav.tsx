'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Menu, FileText } from 'lucide-react';
import { cn } from '@/lib/cn';
import { useResume } from '@/context/ResumeContext';

const navLinks = [
  { label: 'Builds', href: '#builds' },
  { label: 'Lab', href: '#lab' },
  { label: 'Logs', href: '#logs' },
  { label: 'Timeline', href: '#timeline' },
  { label: 'Contact', href: '#contact' },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { openResume } = useResume();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    const handler = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 inset-x-0 z-50 transition-all duration-300',
          scrolled && 'bg-[var(--color-canvas)]/95 backdrop-blur-md border-b border-[var(--color-border)]',
        )}
      >
        <nav
          className="max-w-5xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between"
          aria-label="Primary navigation"
        >
          {/* Logo */}
          <a
            href="#top"
            className="text-[var(--color-text-primary)] font-semibold text-base hover:text-[var(--color-teal-500)] transition-colors duration-150"
            style={{ fontFamily: 'var(--font-display)', letterSpacing: '-0.02em' }}
          >
            Anuj Patil
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-7" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="label-mono text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-150 relative after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0 after:transition-[width] after:duration-200 hover:after:w-full"
                  style={{ fontFamily: 'var(--font-mono)', ['--tw-after-bg' as string]: 'var(--strip-teal)' }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-2">
            {/* Resume — outlined secondary button */}
            <button
              onClick={openResume}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-[var(--radius-btn)] label-mono text-xs font-medium border transition-colors duration-150 hover:border-[var(--color-teal-500)] hover:text-[var(--color-teal-500)]"
              style={{
                fontFamily: 'var(--font-mono)',
                color: 'var(--color-text-secondary)',
                borderColor: 'var(--color-border)',
                background: 'transparent',
              }}
              aria-label="View resume"
            >
              <FileText className="size-3.5" aria-hidden="true" />
              Resume
            </button>

            {/* Get in touch — filled primary */}
            <a
              href="mailto:anuj05patil@gmail.com"
              className="inline-flex items-center px-3.5 py-1.5 rounded-[var(--radius-btn)] label-mono text-xs font-medium transition-opacity duration-150 hover:opacity-85"
              style={{ fontFamily: 'var(--font-mono)', background: 'var(--strip-teal)', color: 'var(--color-canvas)' }}
            >
              Get in touch
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="md:hidden p-2 -mr-2 text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </nav>
      </header>

      {/* Mobile fullscreen overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden bg-[var(--color-canvas)] flex flex-col justify-center items-start px-8"
          >
            <nav aria-label="Mobile navigation">
              <ul className="flex flex-col gap-6" role="list">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06, duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="text-3xl font-semibold text-[var(--color-text-primary)] hover:text-[var(--color-teal-500)] transition-colors duration-150"
                      style={{ fontFamily: 'var(--font-display)', letterSpacing: '-0.03em' }}
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
                {/* Resume entry in mobile menu */}
                <motion.li
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.06, duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                  <button
                    onClick={() => { setMenuOpen(false); openResume(); }}
                    className="text-3xl font-semibold transition-colors duration-150 flex items-center gap-3"
                    style={{ fontFamily: 'var(--font-display)', letterSpacing: '-0.03em', color: 'var(--color-teal-500)' }}
                    aria-label="View resume"
                  >
                    Resume
                  </button>
                </motion.li>
              </ul>
              <motion.a
                href="mailto:anuj05patil@gmail.com"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.42 }}
                className="mt-10 inline-flex items-center gap-2 label-mono"
                style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-teal-500)' }}
                onClick={() => setMenuOpen(false)}
              >
                anuj05patil@gmail.com →
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
