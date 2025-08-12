import { LucideIcon } from 'lucide-react'

export interface NavItem {
  name: string
  href: string
}

export interface Service {
  icon: LucideIcon
  title: string
  description: string
  featured: boolean
  details: string[]
}

export interface TeamMember {
  name: string
  title: string
  image: string
  bio: string
  email: string
  phone: string
  specialties: string[]
}

export interface ContactInfo {
  icon: LucideIcon
  title: string
  value: string
  href?: string
}

export interface FAQItem {
  question: string
  answer: string
}

export interface Testimonial {
  name: string
  role: string
  content: string
  rating: number
}

export interface Partner {
  name: string
  logo: string
  description: string
}

export interface Insight {
  title: string
  excerpt: string
  image: string
  date: string
  category: string
}
