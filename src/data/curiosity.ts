import { CurrentCuriosity } from '@/types/curiosity';

/**
 * A window into what currently occupies Anuj's attention.
 * Update this whenever the focus shifts — it's the most human signal on the site.
 */
export const currentCuriosity: CurrentCuriosity = {
  frame:
    "Most of my thinking right now orbits a single question: how do you build AI systems that are honest about what they don't know?",
  items: [
    {
      tag: 'Teaching machines',
      question:
        "Can a fine-tuned model reliably reproduce an expert's reasoning style — not just their vocabulary?",
      activelyDoing:
        'Running small LoRA experiments on domain-specific datasets, reading papers on instruction tuning and style transfer.',
      why: 'The voice-cloning tutor taught me that capturing style is harder than capturing content. I want to understand exactly where that boundary is — and whether fine-tuning is even the right tool for it.',
    },
    {
      tag: 'Retrieval quality',
      question:
        'What does "good retrieval" actually mean, and how do you measure it without a room full of human labelers?',
      activelyDoing:
        'Exploring RAGAS and running chunk-size ablations on my RAG systems. Trying to build a retrieval benchmark I can actually trust.',
      why: 'Building SmartDoc made it obvious: retrieval quality determines answer quality. Most teams guess at chunk sizes and call it tuning. I want a more rigorous answer.',
    },
    {
      tag: 'AI evaluation',
      question:
        'How do you tell whether an AI system is being accurate versus just being confident?',
      activelyDoing:
        'Studying calibration research, building small evaluators for the Agent Sentinel fact-checking pipeline.',
      why: 'Agent Sentinel classified misinformation with high confidence scores. But confidence and correctness are not the same thing. I want to build systems that understand the difference — and communicate it.',
    },
  ],
};
