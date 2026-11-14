import type { L } from "~/composables/useLang";

export interface Img {
  src: string;
  w: number;
  h: number;
  alt: L;
  caption?: L;
}

export interface Insight {
  title: L;
  text: L;
}

export interface Chapter {
  /** kurzer Anker, z. B. "research" */
  id: string;
  /** Name in der Kapitel-Navigation */
  nav: L;
  title: L;
  text: L[];
  /** eingesetzte Methoden – erscheinen als Chips */
  methods?: L[];
  insights?: Insight[];
  /** hervorgehobene Aussage, z. B. Leitfrage oder Zitat */
  quote?: { text: L; source?: L };
  images?: Img[];
}

export interface Project {
  slug: string;
  /** false = Projekt ist ausgeblendet */
  published: boolean;
  /** Sortierung: höhere Zahl = weiter oben */
  order: number;
  title: string;
  subtitle: L;
  year: string;
  duration: L;
  context: L;
  team: { name: string; url?: string }[];
  tools: string[];
  focus: L[];
  disciplines: L;
  cover: Img;
  hero: Img;
  summary: L;
  challenge: L;
  chapters: Chapter[];
  youtubeId?: string;
  learnings?: L[];
  seoDescription: L;
}
