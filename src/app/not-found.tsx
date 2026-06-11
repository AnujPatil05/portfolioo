export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-start justify-center max-w-5xl mx-auto px-6 md:px-10">
      <p
        className="label-mono text-[var(--color-text-tertiary)] mb-4"
        style={{ fontFamily: 'var(--font-mono)' }}
      >
        404
      </p>
      <h1
        className="text-4xl font-bold tracking-[-0.04em] mb-4"
        style={{ fontFamily: 'var(--font-display)' }}
      >
        Page not found
      </h1>
      <p className="text-[var(--color-text-secondary)] mb-8">
        This page doesn&apos;t exist. The portfolio does.
      </p>
      <a
        href="/"
        className="label-mono text-teal-500 hover:text-teal-600 transition-colors"
        style={{ fontFamily: 'var(--font-mono)' }}
      >
        ← Back home
      </a>
    </div>
  );
}
