// Navigation Types
export interface NavItem {
  name: string
  href: string
}

// Team Member Types
export interface TeamMember {
  name: string
  title: string
  image: string
  bio?: string
  email?: string
  phone?: string
  specialties?: string[]
}

// Service Types
export interface Service {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  featured: boolean
  details?: string[]
}

// Contact Information Types
export interface ContactInfo {
  icon: React.ComponentType<{ className?: string }>
  title: string
  details: string
  subtitle: string
}

// Form Types
export interface ContactFormData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

// FAQ Types
export interface FAQItem {
  question: string
  answer: string
}

// Testimonial Types
export interface Testimonial {
  name: string
  title: string
  content: string
  rating: number
  image?: string
}

// Partner/Client Types
export interface Partner {
  name: string
  logo: string
  description?: string
  website?: string
}

// Blog/Insight Types
export interface Insight {
  title: string
  excerpt: string
  content: string
  author: string
  date: string
  image: string
  tags: string[]
  slug: string
}

// Theme Types
export type Theme = 'light' | 'dark' | 'system'

// Language Types
export type Language = 'EN' | 'AR'

// Form Validation Types
export interface FormErrors {
  [key: string]: string
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

// SEO Types
export interface SEOData {
  title: string
  description: string
  keywords: string[]
  ogImage?: string
  canonical?: string
} 