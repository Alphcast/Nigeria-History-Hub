export type CategoryType =
  | 'independence'
  | 'leadership'
  | 'women'
  | 'science-tech'
  | 'business'
  | 'sports'
  | 'entertainment'
  | 'literature'
  | 'education'
  | 'culture'
  | 'activists'
  | 'innovators'
  | 'youth-emerging';

export interface Position {
  title: string;
  organization?: string;
  startDate?: string;
  endDate?: string;
  era?: string;
}

export interface Contribution {
  title: string;
  description: string;
  year?: string;
  category?: string;
}

export interface Achievement {
  title: string;
  year?: string;
  significance: string;
}

export interface Source {
  title: string;
  publisher: string;
  url?: string;
  dateAccessed?: string;
}

export interface PersonTimelineStep {
  year: string;
  event: string;
  description: string;
  imageUrl?: string;
}

export interface Person {
  id: string;
  name: string;
  slug: string;
  honorific?: string;
  birthDate?: string;
  deathDate?: string;
  nationality: string;
  state: string;
  profession: string[];
  categories: CategoryType[];
  positions: Position[];
  biography: string;
  independenceRole?: string;
  whyTheyMatter: string;
  contributions: Contribution[];
  achievements: Achievement[];
  timeline: PersonTimelineStep[];
  legacy: string;
  portraitUrl: string;
  gallery?: string[];
  featured: boolean;
  verified: boolean;
  editorialTier?: '66-cohort' | 'standard';
  sources: Source[];
  quote?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface TimelineEvent {
  id: string;
  year: number;
  dateStr: string;
  title: string;
  description: string;
  era: string;
  peopleInvolved: string[];
  imageUrl?: string;
  speechExcerpt?: string;
  sources: Source[];
}

export interface NationalRecord {
  id: string;
  title: string;
  category: 'firsts' | 'national' | 'sports' | 'science' | 'technology' | 'cultural' | 'business' | 'education';
  recordHolder: string;
  year: string;
  location: string;
  description: string;
  source: string;
  verified: boolean;
}

export interface OnThisDayItem {
  day: number;
  month: number; // 1-12
  year: string;
  title: string;
  summary: string;
  people: string[];
  category: string;
  source: string;
}

export interface StateHeritage {
  code: string;
  name: string;
  capital: string;
  zone: 'North Central' | 'North East' | 'North West' | 'South East' | 'South South' | 'South West';
  historicalHighlights: string;
  famousPeople: string[];
  culturalContributions: string[];
  notableInstitutions: string[];
  records: string[];
}

export interface Nomination {
  id: string;
  fullName: string;
  category: CategoryType;
  state: string;
  profession: string;
  contribution: string;
  whyIncluded: string;
  evidenceSource: string;
  photoUrl?: string;
  websiteSocial?: string;
  submitterName: string;
  submitterEmail: string;
  status: 'SUBMITTED' | 'UNDER REVIEW' | 'FACT CHECKING' | 'APPROVED' | 'PUBLISHED';
  submittedAt: string;
}

export interface ArchivalItem {
  id: string;
  title: string;
  type: 'photo' | 'speech' | 'document' | 'audio' | 'video';
  date: string;
  category: string;
  caption: string;
  source: string;
  license: 'Public Domain' | 'National Archives' | 'Licensed' | 'Editorial Use';
  url: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  source: string;
}

export interface DayChallengeItem {
  day: number;
  title: string;
  category: string;
  highlight: string;
  personOrRecord: string;
  details: string;
}
