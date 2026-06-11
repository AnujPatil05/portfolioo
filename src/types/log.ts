/**
 * Frontmatter schema for MDX build log files.
 * Path: src/content/build-logs/[slug].mdx
 */
export type BuildLogFrontmatter = {
  slug: string;
  title: string;
  /** ISO date string: "2026-01-15" */
  date: string;
  /** Project or context name — displayed as mono label */
  context: string;
  /** One-line description used in list/preview views */
  summary: string;
};

export type BuildLog = BuildLogFrontmatter & {
  /** Parsed MDX content */
  content: string;
};
