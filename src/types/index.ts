export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  badge: string;
  heroImage: string;
  overview: {
    paragraph1: string;
    paragraph2: string;
    features: string[];
    visualImage: string;
  };
  features: {
    icon: string;
    title: string;
    description: string;
  }[];
  process: {
    step: string;
    title: string;
    description: string;
  }[];
  equipment: {
    name: string;
    role: string;
    image: string;
    description: string;
  }[];
  whyItMatters: {
    title: string;
    points: string[];
    waterImage: string;
  };
  gallery: {
    url: string;
    caption: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export interface SiteWorkItem {
  id: string;
  title: string;
  location: string;
  serviceType: string;
  badge: string;
  image: string;
  description: string;
  pointsIdentified: string;
  estimatedDepth: string;
  waterYield: string;
  date: string;
  clientType: 'Residential' | 'Agricultural' | 'Commercial' | 'Village';
  additionalImages?: string[];
  videoUrl?: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  clientName: string;
  location: string;
  service: string;
  rating: number;
  avatarText: string;
  savedExpense?: string;
}

export interface ReviewItem {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date?: string;
  verified?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'field-works' | 'survey-equipment' | '3d-scanning' | 'site-visits' | 'reports' | 'videos';
  imageUrl?: string;
  videoUrl?: string;
  aspect?: string;
  description: string;
}

export interface VideoItem {
  id: string;
  title: string;
  location: string;
  videoUrl: string;
  description: string;
  category: string;
  duration?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}
