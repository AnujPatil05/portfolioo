/**
 * Project type definition.
 *
 * The `slug` field future-proofs this data shape for MDX case-study pages.
 * When a case study is authored at `src/content/projects/[slug].mdx`,
 * the ProjectCard component will automatically link to `/projects/[slug]`.
 * No refactoring needed — just add the MDX file.
 */
export type ProjectStatus =
  | 'live'
  | 'shipped'
  | 'presented'
  | 'archived';

export type ProjectRole =
  | 'Lead Developer'
  | 'Lead Backend Engineer'
  | 'Full-Stack Developer / DevOps'
  | 'Backend Developer';

export type Project = {
  /** URL-safe slug — matches future MDX case-study filename */
  slug: string;
  title: string;
  /** One-line outcome statement */
  tagline: string;
  /** The problem this project solved */
  problem: string;
  /** The approach / solution */
  solution: string;
  /** Measurable or qualitative impact */
  impact: string;
  /**
   * Concrete metrics — displayed as prominent callout numbers.
   * Each string is a short metric: "70% latency reduction", "<200ms response"
   */
  metrics?: string[];
  role: ProjectRole;
  stack: string[];
  status: ProjectStatus;
  statusLabel: string;
  links: {
    live?: string;
    github?: string;
    caseStudy?: string;
  };
  featured: boolean;
  year: number;
};
