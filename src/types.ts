export interface ServiceSubItem {
  name: string;
  description: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  tagline: string;
  description: string;
  subItems: ServiceSubItem[];
  icon: string; // Lucide icon name or visual theme
}

export interface Project {
  id: string;
  title: string;
  category: "branding" | "marketing" | "websites" | "seo" | "creation";
  categoryLabel: string;
  client: string;
  year: string;
  description: string;
  imageUrl: string;
  results: string;
  duration: string;
  technologies: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: string;
  bio: string;
  experience: string;
  linkedin: string;
  twitter: string;
  imageUrl: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
  imageUrl: string;
}

export interface StatItem {
  id: string;
  label: string;
  value: number;
  suffix: string;
  description: string;
}
