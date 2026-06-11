export const philosophy = [
  {
    marker: '01',
    heading: 'If it isn\'t deployed, it isn\'t done',
    body: 'A project that only lives in a repository is a draft. I treat deployment as part of the work after the real work is finished. Every project I build gets a URL,endpoints.',
    evidence: 'CodeEcoScan · SmartDoc · Changelog-AI — all live public APIs',
  },
  {
    marker: '02',
    heading: 'The interesting bugs are always in the infrastructure',
    body: 'The model rarely breaks. The retrieval pipeline, the caching layer, the rate limiter, the serialisation logic — that\'s where things actually fail. I\'ve learned to build observability in from the start, not as a response to an incident. Redis before the latency spike. Sentry before the edge case. Structured logging before the 3am debug session.',
    evidence: 'p95 320ms → 95ms at Codologs · 65% embedding call reduction in SmartDoc',
  },
  {
    marker: '03',
    heading: 'Confidence and correctness are different things',
    body: 'A model can be very confident about a wrong answer. A classifier can return 0.92 on a false claim. Building Agent Sentinel taught me that evaluation is the hardest part — not the pipeline. I care about calibration: whether a system\'s uncertainty is actually informative. Most AI systems I\'ve seen don\'t have a real answer to "how do you know when you\'re wrong?"',
    evidence: 'Agent Sentinel — misinformation detection with human review routing on low-confidence results',
  },
  {
    marker: '04',
    heading: 'Measure what changes, not what looks impressive',
    body: 'Carbon draw per run. Embedding calls per document. p95 per route. Pipeline latency end-to-end. I try not to build features I can\'t describe in concrete terms. If I can\'t put a number on what changed, I can\'t tell whether the change was worth shipping.',
    evidence: 'CodeEcoScan — scoring energy risk in kgCO₂/day · SmartDoc — 65% redundant call reduction',
  },
  {
    marker: '05',
    heading: 'Learning happens in the gap between what you expected and what actually happened',
    body: 'The most useful thing I got from building the AI tutor wasn\'t the voice synthesis — it was discovering that fine-tuning collapses general reasoning when you over-specialise. The most useful thing from SmartDoc wasn\'t the RAG pipeline — it was finding that empty results and wrong results look identical without structured logging. I try to build things that will teach me something I didn\'t predict.',
    evidence: 'AI Tutor — catastrophic forgetting from domain fine-tuning · SmartDoc — silent failure discovery',
  },
];
