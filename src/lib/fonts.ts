/**
 * Font configuration.
 *
 * Domine (editorial serif) — display/headline font.
 * Falls back to system serif (Georgia) when Google Fonts is unreachable.
 *
 * Source Sans 3 — clean body text.
 * JetBrains Mono — monospace for labels, code, metadata.
 */

import { Domine, Source_Sans_3, JetBrains_Mono } from 'next/font/google';

export const domine = Domine({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-domine',
  display: 'swap',
  fallback: ['Georgia', 'Times New Roman', 'serif'],
  preload: false,            // avoid preload errors when offline
  adjustFontFallback: false, // skip CLS adjustment metrics (causes noise offline)
});

export const sourceSans3 = Source_Sans_3({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-body',
  display: 'swap',
  fallback: ['system-ui', 'sans-serif'],
  preload: false,
  adjustFontFallback: false,
});

export const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
  fallback: ['Consolas', 'Courier New', 'monospace'],
  preload: false,
  adjustFontFallback: false,
});
