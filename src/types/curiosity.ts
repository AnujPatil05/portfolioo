export type CuriosityItem = {
  /** Short label — what category of curiosity this is */
  tag: string;
  /** The question or area actively being explored */
  question: string;
  /** What specifically is being read, built, or watched */
  activelyDoing: string;
  /** Why this matters / what the hypothesis is */
  why: string;
};

export type CurrentCuriosity = {
  /** One-sentence framing of the current intellectual direction */
  frame: string;
  items: CuriosityItem[];
};
