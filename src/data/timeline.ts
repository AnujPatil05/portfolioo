import { TimelineMilestone } from '@/types/timeline';

export const timeline: TimelineMilestone[] = [
  {
    year: '2022',
    title: 'Started B.Tech Information Technology',
    description: 'Began at Pillai College of Engineering, University of Mumbai. Found early interest in backend systems and data structures.',
    type: 'education',
  },
  {
    year: '2024',
    title: 'Built first RAG system — SmartDoc',
    description: 'Architected a production-style RAG document engine with pgvector, Redis caching, Docker Compose isolation, and Sentry observability. First time owning full infra end-to-end.',
    type: 'project',
  },
  {
    year: '2025',
    title: 'Mumbai Hacks — Agent Sentinel',
    description: 'Built and presented an autonomous misinformation detection pipeline as a 2-person team at one of Maharashtra\'s largest hackathons. Competed against 200+ teams.',
    type: 'hackathon',
  },
  {
    year: '2025',
    title: 'Smart India Hackathon — Internal Selection',
    description: 'Cleared the internal college selection round at Pillai College of Engineering for SIH 2025.',
    type: 'hackathon',
  },
  {
    year: 'Jan 2026',
    title: 'Software Development Intern at Codologs',
    description: 'Shipped 3 Spring Boot microservices to production — auth/session handling, core business logic, and a supporting service layer. Cut p95 latency from ~320ms to ~95ms with Redis caching.',
    type: 'internship',
  },
  {
    year: 'Mar 2026',
    title: 'Hack4Innovation — Selected Participant',
    description: 'Selected as a core member of Team Code Titans for a competitive hackathon at VESIT, Mumbai, in collaboration with Rotary Club Mumbai.',
    type: 'hackathon',
  },
  {
    year: '2026',
    title: 'Shipped CodeEcoScan — Live Public API',
    description: 'Built and deployed a static analysis tool that scores Python workloads for energy risk and carbon footprint. Sub-200ms response time on Render.',
    type: 'project',
  },
  {
    year: '2026',
    title: 'Graduated — Seeking Backend Roles',
    description: 'B.Tech IT, CGPA 7.7 / 10.0. Currently looking for backend engineering, platform engineering, or AI/ML infrastructure roles.',
    type: 'milestone',
  },
];
