export interface Book {
  id: string;
  title: string;
  subtitle?: string;
  author: string;
  coverImage: string;
  ageRange: string;
  summary: string;
  fullDescription: string;
  themes: string[];
  features?: string[];
}

export interface Founder {
  id: string;
  name: string;
  role: string;
  title: string;
  image: string;
  quote?: string;
  bio: string[];
  responsibilities?: string[];
  highlights?: string[];
}

export interface Milestone {
  yearOrAge: string;
  title: string;
  description: string;
  category: "writing" | "publication" | "community" | "public-speaking";
  badge?: string;
}

export interface PartnerImpact {
  id: string;
  name: string;
  type: string;
  image: string;
  description: string;
  initiatives: string[];
}

