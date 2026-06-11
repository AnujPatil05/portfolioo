import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    slug: 'codeecoscan',
    title: 'CodeEcoScan',
    tagline: 'A static analysis API that scores Python code for energy risk and carbon footprint.',
    problem:
      'Python workloads running on cloud infrastructure have hidden energy costs. Loop complexity, deep recursion, and heavy imports compound into real carbon emissions that developers never see — because no tool makes them visible.',
    solution:
      'Custom AST-based engine that scores code across loop complexity, recursion depth, import weight, and I/O patterns. Real-time carbon emissions estimator parameterised by hardware profile (Laptop, Cloud VM, GPU Server), runtime, and run frequency.',
    impact:
      'Deployed as a live public API on Render. Returns analysis results in under 200ms for typical Python files. React frontend with syntax-highlighted heatmap overlays and per-category breakdowns.',
    metrics: ['< 200ms', 'Live API', 'Custom AST engine'],
    role: 'Lead Developer',
    stack: ['Python', 'FastAPI', 'React.js', 'AST', 'Render'],
    status: 'live',
    statusLabel: 'Live API',
    links: {
      live: 'https://codeecoscan.onrender.com',
      caseStudy: undefined,
    },
    featured: true,
    year: 2026,
  },
  {
    slug: 'agent-sentinel',
    title: 'Agent Sentinel',
    tagline: 'Autonomous misinformation detection — from viral claim to structured verdict in under 4 seconds.',
    problem:
      'Viral misinformation spreads faster than human fact-checkers can respond. Most existing tools require manual review for every claim — a bottleneck that lets false narratives gain traction in the time it takes to verify one.',
    solution:
      'Multi-stage backend pipeline: claim extraction → GDELT evidence retrieval → RoBERTa classification → structured verdict with confidence scoring. High-confidence verdicts auto-publish. Low-confidence results route to human review.',
    impact:
      'End-to-end processing under 4 seconds. Selected to present at Mumbai Hacks 2025, competing against 200+ teams as a 2-person team.',
    metrics: ['< 4s pipeline', '200+ teams', '2-person team'],
    role: 'Lead Backend Engineer',
    stack: ['Python', 'FastAPI', 'HuggingFace', 'RoBERTa', 'GDELT API'],
    status: 'presented',
    statusLabel: 'Mumbai Hacks 2025',
    links: {
      caseStudy: undefined,
    },
    featured: true,
    year: 2025,
  },
  {
    slug: 'smartdoc-query-engine',
    title: 'SmartDoc Query Engine',
    tagline: 'Production-grade RAG system for secure PDF querying — with real observability.',
    problem:
      'Building a RAG system is straightforward. Building one that handles failures gracefully, doesn\'t make redundant embedding calls, and surfaces its own failure modes — is not. Most RAG demos hide these problems until production.',
    solution:
      'Docker Compose with isolated service containers (API, embedding, and database layers separated for independent restarts). pgvector for vectorised storage. Redis caching + rate limiting. Sentry for structured logging of model performance and edge-case parsing failures.',
    impact:
      '65% reduction in redundant embedding calls for repeat queries. Full observability via Sentry. Deployed as live public API.',
    metrics: ['65% fewer embedding calls', 'Full Sentry observability', 'Live API'],
    role: 'Full-Stack Developer / DevOps',
    stack: ['Python', 'FastAPI', 'React.js', 'PostgreSQL', 'pgvector', 'Redis', 'Docker Compose', 'Sentry'],
    status: 'live',
    statusLabel: 'Live API',
    links: {
      live: undefined,
      caseStudy: undefined,
    },
    featured: true,
    year: 2024,
  },
  {
    slug: 'ai-tutor-voice-cloning',
    title: 'AI Tutor + Voice Cloning',
    tagline: 'A course-specific tutor that responds in the instructor\'s cloned voice.',
    problem:
      'Generic AI tutors don\'t capture instructor-specific knowledge, terminology, or teaching style. Students get answers that are technically correct but disconnected from how the course frames the subject.',
    solution:
      'Context-window-managed prompt injection + LoRA fine-tuning evaluated on instructor-curated question sets. XTTS voice cloning with RAG-based retrieval over ChromaDB — the tutor responds in the instructor\'s synthesised voice.',
    impact:
      'Demonstrated course-consistent Q&A with voice synthesis. Key finding: LoRA fine-tuning degrades general reasoning when over-specialised — the retrieval layer matters more than the fine-tune.',
    metrics: ['LoRA fine-tuned', 'XTTS voice synthesis', '4-person team'],
    role: 'Backend Developer',
    stack: ['Python', 'FastAPI', 'RAG', 'LoRA', 'XTTS', 'ChromaDB', 'MLX', 'Streamlit'],
    status: 'shipped',
    statusLabel: 'Shipped',
    links: {
      caseStudy: undefined,
    },
    featured: false,
    year: 2025,
  },
];
