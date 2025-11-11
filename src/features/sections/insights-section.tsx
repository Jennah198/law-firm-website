"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

const insights = [
  {
    name: "Capital & Compliance Insights",
    slug: "capital-and-compliance-insights",
    logo: "/insights/investment.jpg",
    description:
      "This service is tailored to guide organizations through the complexities of corporate governance and investment. SHLO's dedicated team will help you design governance structures that attract sustainable investment and drive long-term financial success, while ensuring robust legal and regulatory compliance.",
    expertise: "Corporate Law, M&A, Business Strategy",
  },
  {
    name: "Legal Strategy & Investment Insights",
    slug: "legal-strategy-and-investment-insights",
    logo: "/insights/corporate.jpg",
    description:
      "Our legal representation services extend well beyond courtroom appearances, encapsulating the entire lifecycle of legal disputes and proceedings...",
    expertise: "Civil Litigation, Dispute Resolution",
  },
  {
    name: "Investor & Legal Brief",
    slug: "investor-and-legal-brief",
    logo: "/insights/investers-and-legal-brief.jpg",
    description:
      "Continuous education is essential in a rapidly evolving legal environment.",
    expertise: "Real Estate, Property Law",
  },
  {
    name: "Corporate Governance Insights",
    slug: "corporate-governance-insights",
    logo: "/insights/corporate-governance-insights.jpg",
    description:
      "Our legal consulting services enable clients to navigate complex legal landscapes with confidence.",
    expertise: "Employment Law, HR Consulting",
  },
  {
    name: "The Corporate Counsel Journal",
    slug: "corporate-counsel-journal",
    logo: "/insights/journal.jpg",
    description:
      "Precision and timeliness are at the core of our legal documents preparation and submission services.",
    expertise: "Employment Law, HR Consulting",
  },
];


export function InsightsSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [expandedCard, setExpandedCard] = useState<number | null>(null)

  const handleCardClick = (index: number) => {
    if (expandedCard === index) {
      setExpandedCard(null)
    } else {
      setExpandedCard(index)
    }
    setHoveredCard(index)
  }

  const handleCardClose = () => {
    setExpandedCard(null)
    setHoveredCard(null)
  }

  return (
    <section id="insights" className="py-20 bg-[hsl(var(--muted))]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[hsl(var(--secondary))] mb-4">Get More Insights</h2>
          <p className="text-xl text-[hsl(var(--muted-foreground))] max-w-3xl mx-auto">
            Stay ahead with expert perspectives on law, business, and investment. Our insights turn complexity into clarity, helping you make informed decisions. Explore articles, updates, and thought leadership tailored to your industry.
          </p>
        </div>

        {/* Desktop View */}
        <div className="hidden md:flex justify-center gap-8 overflow-x-auto pb-4">
          {insights.map((insight, index) => (
            <Card
              key={index}
              className={`relative transition-all duration-500 ease-in-out cursor-pointer rounded-xl ${
                hoveredCard === index
                  ? "w-80 bg-[hsl(var(--card))] shadow-xl border border-[hsl(var(--border))]"
                  : "w-32 bg-[hsl(var(--accent))] hover:bg-[hsl(var(--primary))] hover:bg-opacity-10 shadow-lg"
              }`}
              style={{ height: "480px" }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <CardContent className="p-0 h-full relative overflow-hidden">
                {hoveredCard === index ? (
                  <div className="p-6 h-full flex flex-col">
                    <div className="flex justify-center mb-6">
                      <div className="w-20 h-20 rounded-full bg-[hsl(var(--accent))] flex items-center justify-center overflow-hidden">
                        <Image src={insight.logo} alt={insight.name} width={64} height={64} className="w-16 h-16 object-contain" />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-[hsl(var(--secondary))] mb-4 text-center">{insight.name}</h3>

                    <div className="flex-grow overflow-y-auto pr-2">
                      <p className="text-sm text-[hsl(var(--muted-foreground))] leading-relaxed">
                        {insight.description}
                      </p>
                    </div>

                    <div className="mt-6 flex justify-center">
                      <Link href={`/insights/${insight.slug}`}>

                        <Button
                          variant="outline"
                          className="px-6 py-2 text-sm font-semibold rounded-full border-[hsl(var(--primary))] text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))] hover:text-white transition"
                        >
                          Details
                        </Button>
                      </Link>
                    </div>
                  </div>
                ) : (
                  <div className="h-full flex flex-col items-center py-8">
                    <div className="flex justify-center mb-16">
                      <div className="w-18 h-18 rounded-full bg-[hsl(var(--primary))] bg-opacity-20 flex items-center justify-center overflow-hidden">
                        <Image src={insight.logo} alt={insight.name} width={48} height={48} className="w-12 h-12 object-contain" />
                      </div>
                    </div>
                    <div className="flex-grow flex items-center justify-center">
                      <div
                        className="text-base font-semibold text-[hsl(var(--secondary))] whitespace-nowrap"
                        style={{ transform: "rotate(-90deg)", width: "200px", textAlign: "center" }}
                      >
                        {insight.name}
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mobile View */}
        <div className="md:hidden space-y-4">
          {insights.map((insight, index) => (
            <Card
              key={index}
              className={`relative transition-all duration-300 ease-in-out cursor-pointer rounded-xl ${
                expandedCard === index
                  ? "bg-[hsl(var(--card))] shadow-xl border border-[hsl(var(--border))]"
                  : "bg-[hsl(var(--accent))] shadow-lg"
              }`}
              onClick={() => handleCardClick(index)}
            >
              <CardContent className="p-0 relative overflow-hidden">
                {expandedCard === index ? (
                  <div className="p-6 flex flex-col">
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        handleCardClose()
                      }}
                      className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[hsl(var(--muted))] flex items-center justify-center text-[hsl(var(--secondary))] hover:bg-[hsl(var(--accent))] transition-colors"
                      aria-label="Close card"
                    >
                      ×
                    </button>

                    <div className="flex justify-center mb-6">
                      <div className="w-20 h-20 rounded-full bg-[hsl(var(--accent))] flex items-center justify-center overflow-hidden">
                        <Image src={insight.logo} alt={insight.name} width={64} height={64} className="w-16 h-16 object-contain" />
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-[hsl(var(--secondary))] mb-4 text-center">{insight.name}</h3>

                    <p className="text-sm text-[hsl(var(--muted-foreground))] leading-relaxed mb-4">
                      {insight.description}
                    </p>

                    <div className="mt-6 flex justify-center">
                      <Button
                        variant="outline"
                        className="px-6 py-2 text-sm font-semibold rounded-full border-[hsl(var(--primary))] text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))] hover:text-white transition"
                      >
                        Details
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="p-4 flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-[hsl(var(--primary))] bg-opacity-20 flex items-center justify-center overflow-hidden flex-shrink-0">
                      <Image src={insight.logo} alt={insight.name} width={32} height={32} className="w-8 h-8 object-contain" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-base font-semibold text-[hsl(var(--secondary))] line-clamp-2">
                        {insight.name}
                      </h3>
                      <div className="text-xs text-[hsl(var(--muted-foreground))] mt-1">
                        Tap to expand
                      </div>
                    </div>
                    <div className="text-[hsl(var(--secondary))] text-lg font-bold">+</div>
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
