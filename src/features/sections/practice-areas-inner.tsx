"use client"

import { useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

export function PracticeAreasInner() {
  const router = useRouter()
  
  // ✅ Just edit this array to update the content or images.
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
      image: "/practice-areas/energyand Construction.jpg",
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
    <section className="min-h-screen bg-[hsl(var(--muted))] flex flex-col items-center py-20 px-6">
      {/* Back Button */}
      <button
        onClick={() => router.back()}
        className="fixed top-20 left-4 z-40 p-2 bg-[hsl(var(--secondary))]/80 backdrop-blur-sm rounded-full shadow-lg hover:bg-[hsl(var(--primary))] transition-colors"
      >
        <ArrowLeft className="h-5 w-5 text-white" />
      </button>

      <div className="max-w-6xl w-full">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[hsl(var(--primary))] mb-2">
            Practice Areas
          </h2>
          <p className="text-[hsl(var(--secondary))] font-semibold">
            Unlocking Opportunities with Strategic Legal Support
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {practiceAreas.map((area, index) => (
            <Card
              key={index}
              className="rounded-xl border border-[hsl(var(--border))] shadow-sm hover:shadow-md transition-shadow bg-[hsl(var(--card))] h-28"
            >
              <CardContent className="flex items-center gap-6 p-4 h-full">
                {/* Larger Image Container */}
                <div className="relative w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden bg-[hsl(var(--accent))] group-hover:bg-[hsl(var(--primary))] transition-colors">
                  <Image
                    src={area.image}
                    alt={`${area.title} icon`}
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </div>
                <div className="flex-1">
                  <Link
                    href={area.href}
                    className="text-lg font-bold text-[hsl(var(--primary))] hover:text-[hsl(var(--secondary))] transition-colors block mb-1 group-hover:text-[hsl(var(--primary-foreground))]"
                  >
                    {area.title}
                  </Link>
                  <p className="text-sm font-semibold text-[hsl(var(--secondary))] leading-tight group-hover:text-[hsl(var(--primary-foreground))]">
                    {area.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}