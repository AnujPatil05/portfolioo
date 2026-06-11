export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-border-subtle)] py-8">
      <div className="max-w-5xl mx-auto px-6 md:px-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p
          className="label-mono text-[var(--color-text-tertiary)]"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          © {year} Anuj Patil
        </p>
        <p
          className="label-micro text-[var(--color-text-tertiary)]"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          Built with Next.js · Deployed on Vercel
        </p>
      </div>
    </footer>
  );
}
