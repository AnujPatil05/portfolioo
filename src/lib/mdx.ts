import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { BuildLog, BuildLogFrontmatter } from '@/types/log';
import { Experiment, ExperimentFrontmatter } from '@/types/experiment';

const CONTENT_ROOT = path.join(process.cwd(), 'src', 'content');

// ─── Generic MDX file reader ──────────────────────────────────────────────────

function readMdxDir(dir: string): { slug: string; data: Record<string, unknown>; content: string }[] {
  const dirPath = path.join(CONTENT_ROOT, dir);
  if (!fs.existsSync(dirPath)) return [];

  return fs
    .readdirSync(dirPath)
    .filter((f) => f.endsWith('.mdx'))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, '');
      const raw = fs.readFileSync(path.join(dirPath, file), 'utf-8');
      const { data, content } = matter(raw);
      return { slug, data, content };
    });
}

// ─── Build Logs ───────────────────────────────────────────────────────────────

export function getAllBuildLogs(): BuildLog[] {
  const files = readMdxDir('build-logs');

  return files
    .map(({ slug, data, content }) => ({
      slug,
      title: data.title as string,
      date: data.date as string,
      context: data.context as string,
      summary: data.summary as string,
      content,
    }))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getBuildLogBySlug(slug: string): BuildLog | null {
  const all = getAllBuildLogs();
  return all.find((log) => log.slug === slug) ?? null;
}

// ─── Experiments ─────────────────────────────────────────────────────────────

export function getAllExperiments(): Experiment[] {
  const files = readMdxDir('experiments');

  return files.map(({ slug, data, content }) => ({
    slug,
    title: data.title as string,
    status: data.status as ExperimentFrontmatter['status'],
    hypothesis: data.hypothesis as string,
    built: data.built as string,
    stack: data.stack as string[],
    workedWell: data.workedWell as string,
    didntWork: data.didntWork as string,
    nextStep: data.nextStep as string | undefined,
    year: data.year as number,
    content,
  }));
}

export function getExperimentBySlug(slug: string): Experiment | null {
  const all = getAllExperiments();
  return all.find((exp) => exp.slug === slug) ?? null;
}
