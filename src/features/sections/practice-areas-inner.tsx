import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export function PracticeAreasInner() {
  const practiceAreas = [
    {
      title: "Investment Law",
      description: "Your Strategic Legal Partner for Investment Opportunities in Ethiopia",
      image: "/practice-areas/investment.jpg",
      href: "/practice-areas/investment-law",
    },
    {
      title: "Corporate Law", 
      description: "Comprehensive Legal Solutions for Business Formation, Governance & Growth",
      image: "/practice-areas/corporate.jpg",
      href: "/practice-areas/corporate-law",
    },
    {
      title: "Tax & Customs Law",
      description: "Strategic Legal Solutions for Tax Efficiency & Trade Compliance in Ethiopia",
      image: "/practice-areas/taxandcustom.jpg",
      href: "/practice-areas/tax-customs-law",
    },
    {
      title: "Intellectual Property & Technology Rights",
      description: "Protecting Your Innovations, Securing Your Business",
      image: "/practice-areas/intellectual.jpg",
      href: "/practice-areas/intellectual-property",
    },
    {
      title: "Mergers & Acquisitions (M&A)",
      description: "Strategic Legal Support for Business Growth & Corporate Consolidation", 
      image: "/practice-areas/mergers.jpg",
      href: "/practice-areas/mergers-acquisitions",
    },
    {
      title: "Engineering, Construction & Real Estate Law",
      description: "Legal Solutions for Ethiopia's Growing Infrastructure & Property Market",
      image: "/practice-areas/EngineeringConstructionRealEstateLaw.jpg",
      href: "/practice-areas/engineering-construction-real-estate",
    },
    {
      title: "Energy & Natural Resources",
      description: "Expert Legal Solutions for Ethiopia's Expanding Energy & Resource Sectors",
      image: "/practice-areas/energyand construction.jpg",
      href: "/practice-areas/energy-natural-resources",
    },
    {
      title: "Manufacturing & Industry Law",
      description: "Legal Solutions for Ethiopia's Expanding Industrial & Manufacturing Sector",
      image: "/practice-areas/manufacturing.jpg",
      href: "/practice-areas/manufacturing-industry",
    },
    {
      title: "NGO & Civil Society Organizations",
      description: "Empowering Charities & Civil Society with Expert Legal Guidance",
      image: "/practice-areas/NGOCivilSocietyOrganization.jpg",
      href: "/practice-areas/ngo-civil-society",
    },
    {
      title: "Employment & Labor Law",
      description: "Strategic Legal Solutions for Workforce Management & Compliance in Ethiopia",
      image: "/practice-areas/EmploymentandLabor.jpg",
      href: "/practice-areas/employment-labor",
    },
    {
      title: "Dispute Resolution, Litigation & Legal Representation",
      description: "Expert Legal Advocacy in Courts, Tribunals, Administrative and Alternative Dispute Resolution",
      image: "/practice-areas/Drll.jpg",
      href: "/practice-areas/dispute-resolution",
    },
    {
      title: "Healthcare Law",
      description: "Legal Expertise for Healthcare Providers, Institutions & Medical Innovation in Ethiopia",
      image: "/practice-areas/healthcare.jpg",
      href: "/practice-areas/healthcare-law",
    },
    {
      title: "Agriculture & Agribusiness Law",
      description: "Expert Legal Solutions for Ethiopia's Growing Agricultural Sector",
      image: "/practice-areas/AgricultureandAgriBusinessLaw.jpg",
      href: "/practice-areas/agriculture-agribusiness",
    },
    {
      title: "Property Law & Successions",
      description: "Legal Solutions for Real Estate, Asset Protection, and Estate Planning in Ethiopia",
      image: "/practice-areas/PropertySuccessionsLaw.jpg",
      href: "/practice-areas/property-successions",
    },
    {
      title: "FinTech Law",
      description: "Empowering Financial Technology Innovators with Strategic Legal Solutions",
      image: "/practice-areas/fintech.jpg",
      href: "/practice-areas/fintech-law",
    },
    {
      title: "International Trade & Commercial Law",
      description: "Seamless Trade and Secure Transactions with Expert Legal Guidance",
      image: "/practice-areas/itc.jpg",
      href: "/practice-areas/international-trade-commercial",
    },
  ]
  
  return (
    <section className="bg-background py-20 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 max-w-2xl">
            <p className="eyebrow mb-5">All Practice Areas</p>
            <h2 className="section-title">Unlocking opportunities with strategic legal support</h2>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {practiceAreas.map((area) => (
              <Link
                key={area.href}
                href={area.href}
                className="group relative flex min-h-[280px] flex-col justify-end overflow-hidden bg-secondary"
              >
                <Image
                  src={area.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover opacity-60 transition-all duration-500 group-hover:scale-105 group-hover:opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-950 via-brand-navy-950/60 to-transparent" />
                <div className="relative p-5 text-white">
                  <h3 className="text-lg font-semibold leading-snug">{area.title}</h3>
                  <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-white/75">{area.description}</p>
                  <ArrowUpRight className="mt-4 h-5 w-5 text-brand-gold-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
