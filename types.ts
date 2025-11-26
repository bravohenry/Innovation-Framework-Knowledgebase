

export type Language = 'en' | 'zh';

export interface LocalizedString {
  zh: string;
  en: string;
}

export interface Diagram {
  title: string;
  url: string;
  description: string;
}

export interface InteractiveData {
  factor?: string;
  value?: number;
  weight?: number;
  evidenceCount?: number;
  // For RACI
  task?: string;
  // For Strategy Canvas
  us?: number;
  competitor?: number;
  // For BMC/VPC
  section?: string;
  content?: string;
  // For Priority Matrix
  name?: string;
  x?: number; // Effort
  y?: number; // Value
  // For MoSCoW
  category?: string;
  text?: string;
  // For Vision Video
  scene?: number;
  visual?: string;
  audio?: string;
  // For Pitch Deck
  slide?: string;
  keyPoints?: string;
  // For Brand Obituary
  headline?: string;
  date?: string;
  achievement?: string;
  missedBy?: string;
  [key: string]: any; 
}

export interface InteractiveSchema {
  key: string;
  labelZh: string;
  labelEn: string;
  type?: 'text' | 'number' | 'select' | 'boolean' | 'progress';
  options?: string[];
}

export interface InteractiveConfig {
  type: 'radar' | 'table' | 'gantt' | 'matrix' | 'tree' | 'raci' | 'canvas' | 'persona' | 'strategy-canvas' | 'value-proposition' | 'bmc' | 'priority-matrix' | 'moscow' | 'think-aloud' | 'usability-test' | 'iteration-cycle' | 'ab-test' | 'balanced-scorecard' | 'brand-obituary' | 'pitch-deck' | 'vision-video' | 'exec-summary' | 'process-book';
  title: LocalizedString;
  schema: InteractiveSchema[];
  data: InteractiveData[];
  export?: {
    png?: boolean;
    csv?: boolean;
  };
}

export interface Framework {
  slug: string;
  chapter: string;
  chapterOrder: number;
  title: string;
  titleEn: string;
  summary: string;
  summaryEn: string;
  tags: string[];
  tagsEn: string[];
  htmlContent: string;
  htmlContentEn: string;
  diagrams: Diagram[];
  interactive?: InteractiveConfig;
}

export interface Chapter {
  id: string;
  title: string;
  titleEn: string;
  frameworks: Framework[];
}