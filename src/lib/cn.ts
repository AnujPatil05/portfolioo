import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merge Tailwind classes safely — deduplicates conflicts and handles
 * conditional classes. Use this instead of template literals for classNames
 * to avoid SSR hydration mismatches.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
