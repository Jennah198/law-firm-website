import { NavItem, Service, TeamMember, ContactInfo, FAQItem, Testimonial, Partner, Insight } from '@/types'
import { Scale, Users, FileText, Shield, Briefcase, Home, Phone, Mail, MapPin, Clock } from 'lucide-react'

// Navigation Items
export const NAV_ITEMS: NavItem[] = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Resources", href: "#resources" },
  { name: "Cases", href: "#cases" },
]

// Services Data
export const SERVICES: Service[] = [
  {
    icon: Scale,
    title: "Civil Litigation",
    description: "Expert representation in complex civil disputes with a track record of successful outcomes.",
    featured: false,
    details: [
      "Contract disputes",
      "Property litigation",
      "Personal injury cases",
      "Commercial litigation"
    ]
  },
  {
    icon: Users,
    title: "Corporate Law",
    description: "Comprehensive legal services for businesses, from startups to established corporations.",
    featured: true,
    details: [
      "Business formation",
      "Corporate governance",
      "Mergers & acquisitions",
      "Regulatory compliance"
    ]
  },
  {
    icon: FileText,
    title: "Contract Law",
    description: "Drafting, reviewing, and negotiating contracts to protect your interests and minimize risks.",
    featured: false,
    details: [
      "Contract drafting",
      "Contract review",
      "Negotiation support",
      "Dispute resolution"
    ]
  },
  {
    icon: Shield,
    title: "Criminal Defense",
    description: "Aggressive defense strategies and personalized attention for criminal law matters.",
    featured: false,
    details: [
      "Felony defense",
      "Misdemeanor defense",
      "DUI defense",
      "White-collar crime"
    ]
  },
  {
    icon: Briefcase,
    title: "Employment Law",
    description: "Protecting employee rights and helping employers navigate workplace legal issues.",
    featured: false,
    details: [
      "Discrimination cases",
      "Wrongful termination",
      "Wage disputes",
      "Workplace safety"
    ]
  },
  {
    icon: Home,
    title: "Real Estate Law",
    description: "Complete real estate legal services including transactions and property disputes.",
    featured: false,
    details: [
      "Property transactions",
      "Landlord-tenant disputes",
      "Zoning issues",
      "Property development"
    ]
  },
]

// Team Members Data
export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Sadam Hussein",
    title: "Founding Partner",
    image: "/placeholder.svg?height=300&width=300",
    bio: "With over 15 years of experience in corporate law and civil litigation.",
    email: "sadam@lawfirm.com",
    phone: "+1 (555) 123-4567",
    specialties: ["Corporate Law", "Civil Litigation", "Contract Law"]
  },
  {
    name: "Sarah Johnson",
    title: "Senior Partner",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Specializing in employment law and workplace discrimination cases.",
    email: "sarah@lawfirm.com",
    phone: "+1 (555) 123-4568",
    specialties: ["Employment Law", "Discrimination Cases", "Workplace Safety"]
  },
  {
    name: "Michael Chen",
    title: "Corporate Attorney",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Expert in mergers, acquisitions, and corporate governance.",
    email: "michael@lawfirm.com",
    phone: "+1 (555) 123-4569",
    specialties: ["Mergers & Acquisitions", "Corporate Governance", "Regulatory Compliance"]
  },
  {
    name: "Emily Rodriguez",
    title: "Litigation Specialist",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Focused on complex civil litigation and dispute resolution.",
    email: "emily@lawfirm.com",
    phone: "+1 (555) 123-4570",
    specialties: ["Civil Litigation", "Dispute Resolution", "Contract Disputes"]
  },
  {
    name: "David Thompson",
    title: "Criminal Defense Lawyer",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Dedicated to protecting clients' rights in criminal proceedings.",
    email: "david@lawfirm.com",
    phone: "+1 (555) 123-4571",
    specialties: ["Criminal Defense", "DUI Defense", "White-collar Crime"]
  },
  {
    name: "Lisa Wang",
    title: "Real Estate Attorney",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Specializing in real estate transactions and property law.",
    email: "lisa@lawfirm.com",
    phone: "+1 (555) 123-4572",
    specialties: ["Real Estate Law", "Property Transactions", "Landlord-Tenant Law"]
  },
]

// Contact Information
export const CONTACT_INFO: ContactInfo[] = [
  {
    icon: Phone,
    title: "Phone",
    details: "+1 (555) 123-4567",
    subtitle: "Call us anytime",
  },
  {
    icon: Mail,
    title: "Email",
    details: "info@sadamhusseinlaw.com",
    subtitle: "Send us a message",
  },
  {
    icon: MapPin,
    title: "Address",
    details: "123 Legal Street, Suite 456",
    subtitle: "City, State 12345",
  },
  {
    icon: Clock,
    title: "Office Hours",
    details: "Mon-Fri: 9:00 AM - 6:00 PM",
    subtitle: "Sat: 10:00 AM - 2:00 PM",
  },
]

// FAQ Data
export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "What areas of law do you specialize in?",
    answer: "We specialize in civil litigation, corporate law, contract law, criminal defense, employment law, and real estate law. Our team has extensive experience across multiple practice areas."
  },
  {
    question: "How much do your services cost?",
    answer: "Our fees vary depending on the complexity of your case and the type of legal service required. We offer free initial consultations and transparent pricing structures."
  },
  {
    question: "Do you offer free consultations?",
    answer: "Yes, we provide free initial consultations to discuss your legal needs and determine how we can best assist you with your case."
  },
  {
    question: "How long does a typical case take?",
    answer: "Case duration varies significantly depending on the type of case, complexity, and court schedules. We'll provide you with a realistic timeline during our consultation."
  },
  {
    question: "Do you handle cases outside your local area?",
    answer: "Yes, we handle cases throughout the state and can coordinate with local counsel for cases in other jurisdictions when necessary."
  },
  {
    question: "What should I bring to my first consultation?",
    answer: "Bring any relevant documents, contracts, correspondence, and a timeline of events related to your case. This helps us provide the most accurate assessment."
  },
]

// Testimonials Data
export const TESTIMONIALS: Testimonial[] = [
  {
    name: "John Smith",
    title: "CEO, TechCorp Inc.",
    content: "Sadam Hussein Law Office provided exceptional legal counsel during our merger. Their expertise and professionalism exceeded our expectations.",
    rating: 5,
    image: "/placeholder-user.jpg"
  },
  {
    name: "Maria Garcia",
    title: "Small Business Owner",
    content: "The team helped me navigate a complex employment dispute. Their dedication and strategic approach led to a favorable resolution.",
    rating: 5,
    image: "/placeholder-user.jpg"
  },
  {
    name: "Robert Wilson",
    title: "Real Estate Developer",
    content: "Outstanding service in handling our property transactions. Their attention to detail and legal expertise saved us significant time and money.",
    rating: 5,
    image: "/placeholder-user.jpg"
  },
]

// Partners Data
export const PARTNERS: Partner[] = [
  {
    name: "LegalTech Solutions",
    logo: "/placeholder-logo.svg",
    description: "Leading provider of legal technology solutions",
    website: "https://legaltech.com"
  },
  {
    name: "Corporate Alliance",
    logo: "/placeholder-logo.svg",
    description: "International business consulting firm",
    website: "https://corporatealliance.com"
  },
  {
    name: "Real Estate Partners",
    logo: "/placeholder-logo.svg",
    description: "Premier real estate development company",
    website: "https://realestatepartners.com"
  },
]

// Insights/Blog Data
export const INSIGHTS: Insight[] = [
  {
    title: "Recent Changes in Employment Law",
    excerpt: "Understanding the latest updates to employment regulations and their impact on businesses and employees.",
    content: "Full article content would go here...",
    author: "Sarah Johnson",
    date: "2024-01-15",
    image: "/placeholder.jpg",
    tags: ["Employment Law", "Legal Updates", "Business"],
    slug: "recent-changes-employment-law"
  },
  {
    title: "Corporate Governance Best Practices",
    excerpt: "Essential guidelines for maintaining effective corporate governance in today's business environment.",
    content: "Full article content would go here...",
    author: "Michael Chen",
    date: "2024-01-10",
    image: "/placeholder.jpg",
    tags: ["Corporate Law", "Governance", "Business"],
    slug: "corporate-governance-best-practices"
  },
  {
    title: "Real Estate Transaction Checklist",
    excerpt: "A comprehensive guide to ensuring smooth and legally sound real estate transactions.",
    content: "Full article content would go here...",
    author: "Lisa Wang",
    date: "2024-01-05",
    image: "/placeholder.jpg",
    tags: ["Real Estate", "Transactions", "Checklist"],
    slug: "real-estate-transaction-checklist"
  },
] 