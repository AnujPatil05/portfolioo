export type ExperimentStatus = 'active' | 'paused' | 'completed';

/**
 * Frontmatter schema for MDX experiment files.
 * Path: src/content/experiments/[slug].mdx
 */
export type ExperimentFrontmatter = {
  slug: string;
  title: string;
  status: ExperimentStatus;
  /** The question this experiment was trying to answer */
  hypothesis: string;
  /** One-line summary of what was built */
  built: string;
  stack: string[];
  workedWell: string;
  didntWork: string;
  nextStep?: string;
  year: number;
};

export type Experiment = ExperimentFrontmatter & {
  /** Parsed MDX content */
  content: string;
};
