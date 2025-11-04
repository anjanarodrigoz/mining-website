/**
 * Core TypeScript interfaces for the mining company website
 */

export interface Company {
  name: string;
  tagline: string;
  description: string;
  founded: number;
  headquarters: string;
  employees: number;
  annualProduction: string;
}

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  bio: string;
  image: string;
  linkedin?: string;
  email?: string;
}

export interface Project {
  id: string;
  name: string;
  location: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  status: 'active' | 'development' | 'exploration' | 'closed';
  type: 'underground' | 'open-pit' | 'placer';
  minerals: string[];
  description: string;
  image: string;
  startDate: string;
  estimatedReserves?: string;
  annualProduction?: string;
  employees?: number;
  environmentalCertifications?: string[];
}

export interface Milestone {
  year: number;
  title: string;
  description: string;
}

export interface FinancialData {
  year: number;
  revenue: number;
  ebitda: number;
  netIncome: number;
  totalAssets: number;
  production: {
    mineral: string;
    volume: number;
    unit: string;
  }[];
}

export interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: 'press-release' | 'industry-news' | 'company-update' | 'sustainability';
  date: string;
  author?: string;
  image?: string;
  featured?: boolean;
}

export interface SustainabilityMetric {
  id: string;
  title: string;
  value: string | number;
  unit?: string;
  description: string;
  icon: string;
  trend?: 'up' | 'down' | 'stable';
  changePercent?: number;
}

export interface SafetyRecord {
  year: number;
  lostTimeInjuryFrequency: number; // LTIFR
  totalRecordableInjuryFrequency: number; // TRIFR
  fatalityRate: number;
  nearMisses: number;
  safetyTrainingHours: number;
}

export interface CommunityInitiative {
  id: string;
  title: string;
  description: string;
  location: string;
  impact: string;
  image: string;
  startDate: string;
  category: 'education' | 'health' | 'infrastructure' | 'employment' | 'environment';
}

export interface Document {
  id: string;
  title: string;
  description: string;
  type: 'annual-report' | 'sustainability-report' | 'presentation' | 'fact-sheet' | 'policy';
  date: string;
  fileUrl: string;
  fileSize: string;
}

export interface ContactInfo {
  department: string;
  email: string;
  phone?: string;
}

export interface Office {
  id: string;
  name: string;
  address: string;
  city: string;
  country: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  phone: string;
  email: string;
  type: 'headquarters' | 'regional' | 'site-office';
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface Stats {
  label: string;
  value: string;
  description?: string;
}
