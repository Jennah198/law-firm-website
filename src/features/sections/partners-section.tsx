"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"

const partners = [
  {
    name: "Capital & Compliance Insights",
    logo: "/placeholder-logo.svg?height=80&width=80",
    description:
      "This service is tailored to guide organizations through the complexities of corporate governance and investment. SHLO’s dedicated team will help you design governance structures that attract sustainable investment and drive long-term financial success, while ensuring robust legal and regulatory compliance.",
    expertise: "Corporate Law, M&A, Business Strategy",
  },
  {
    name: "Legal Strategy & Investment Insights",
    logo: "/placeholder-logo.svg?height=80&width=80",
    description:
      "Our legal representation services extend well beyond courtroom appearances, encapsulating the entire lifecycle of legal disputes and proceedings. We are dedicated to managing every phase from initial case preparation to post-judgment services while ensuring effective advocacy across courts, administrative tribunals, arbitration panels, and other legal forums.",
    expertise: "Civil Litigation, Dispute Resolution",
  },
  {
    name: "Corporate & Investment Law Watch",
    logo: "/placeholder-logo.svg?height=80&width=80",
    description:
      "Staying compliant in a rapidly changing regulatory environment is critical. SHLO partners with you to develop and implement rigorous internal control systems and compliance frameworks that safeguard your operations and strategic interests. ",
    expertise: "Business Law, IP, Compliance",
  },
  {
    name: "Investor & Legal Brief",
    logo: "/placeholder-logo.svg?height=80&width=80",
    description:
      "Continuous education is essential in a rapidly evolving legal environment. SHLO’s legal training programs are designed for both legal professionals and non-lawyers, ensuring the dissemination of up-to-date knowledge and best practices. ",
    expertise: "Real Estate, Property Law",
  },
  {
    name: "Corporate Governance Insights",
    logo: "/placeholder-logo.svg?height=80&width=80",
    description: "Our legal consulting services enable clients to navigate complex legal landscapes with confidence. By providing proactive advice and developing customized legal solutions, we help you align your business operations with evolving legal requirements.",
    expertise: "Employment Law, HR Consulting",
  },
   {
    name: "The Corporate Counsel Journal",
    logo: "/placeholder-logo.svg?height=80&width=80",
    description: "Precision and timeliness are at the core of our legal documents preparation and submission services. SHLO is committed to drafting impeccable documents and ensuring that they are effectively packaged and submitted per regulatory requirements.",
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
                    <div className="flex justify-center mt-0 mb-14">
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