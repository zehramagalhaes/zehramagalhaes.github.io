export interface Experience {
  id: string;
  idx?: number;
  company: string;
  role: string;
  period: string;
  description: string;
  accomplishments: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  details: string;
  screenshots: string[];
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'tools' | 'languages';
}

export interface PortfolioData {
  summary: string;
  skills: string[];
  experiences: Experience[];
}
