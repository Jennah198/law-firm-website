"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"

const partners = [
  {
    name: "Legal Associates Inc.",
    logo: "/placeholder-logo.svg?height=80&width=80",
    description:
      "Leading corporate law specialists with over 25 years of experience in mergers, acquisitions, and business restructuring.",
    expertise: "Corporate Law, M&A, Business Strategy",
  },
  {
    name: "Justice Partners",
    logo: "/placeholder-logo.svg?height=80&width=80",
    description:
      "Premier litigation firm known for handling complex civil disputes and achieving favorable outcomes for clients.",
    expertise: "Civil Litigation, Dispute Resolution",
  },
  {
    name: "Corporate Legal Group",
    logo: "/placeholder-logo.svg?height=80&width=80",
    description:
      "Comprehensive business legal services including compliance, contracts, and intellectual property protection.",
    expertise: "Business Law, IP, Compliance",
  },
  {
    name: "Metro Legal Services",
    logo: "/placeholder-logo.svg?height=80&width=80",
    description:
      "Full-service law firm specializing in real estate transactions, property law, and commercial leasing.",
    expertise: "Real Estate, Property Law",
  },
  {
    name: "Professional Law Alliance",
    logo: "/placeholder-logo.svg?height=80&width=80",
    description: "Expert employment law attorneys providing comprehensive workplace legal solutions and HR consulting.",
    expertise: "Employment Law, HR Consulting",
  },
]

export function PartnersSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <section id="partners" className="py-20 bg-brand-gold-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-brand-navy-800 mb-4">Our Partners</h2>
          <p className="text-xl text-brand-navy-700 max-w-3xl mx-auto">
            We collaborate with leading legal organizations to provide comprehensive services
          </p>
        </div>

        <div className="flex justify-center gap-8 overflow-x-auto pb-4">
          {partners.map((partner, index) => (
            <Card
              key={index}
              className={`relative transition-all duration-500 ease-in-out cursor-pointer rounded-xl ${
                hoveredCard === index
                  ? "w-80 bg-white shadow-xl"
                  : "w-32 bg-brand-gold-100 hover:bg-brand-gold-200 shadow-lg"
              }`}
              style={{ height: "400px" }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <CardContent className="p-0 h-full relative overflow-hidden">
                {hoveredCard === index ? (
                  // Expanded state
                  <div className="p-6 h-full flex flex-col">
                    <div className="flex justify-center mb-6">
                      <div className="w-20 h-20 rounded-full bg-brand-gold-100 flex items-center justify-center overflow-hidden">
                        <img
                          src={partner.logo || "/placeholder.svg"}
                          alt={partner.name}
                          className="w-16 h-16 object-contain"
                        />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-brand-navy-800 mb-4 text-center">{partner.name}</h3>
                    <p className="text-sm text-brand-navy-700 mb-4 flex-grow leading-relaxed">{partner.description}</p>
                    <div className="mt-auto">
                      <div className="text-xs font-semibold text-brand-gold-600 mb-2">EXPERTISE:</div>
                      <div className="text-xs text-brand-navy-600">{partner.expertise}</div>
                    </div>
                  </div>
                ) : (
                  // Collapsed state
                  <div className="h-full flex flex-col items-center">
                    <div className="flex justify-center mt-6 mb-8">
                      <div className="w-18 h-18 rounded-full bg-brand-gold-200 flex items-center justify-center overflow-hidden">
                        <img
                          src={partner.logo || "/placeholder.svg"}
                          alt={partner.name}
                          className="w-12 h-12 object-contain"
                        />
                      </div>
                    </div>
                    <div className="flex-grow flex items-center justify-center">
                      <div
                        className="text-base font-semibold text-brand-navy-800 whitespace-nowrap"
                        style={{
                          transform: "rotate(-90deg)",
                          transformOrigin: "center",
                          width: "200px",
                          textAlign: "center",
                        }}
                      >
                        {partner.name}
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
