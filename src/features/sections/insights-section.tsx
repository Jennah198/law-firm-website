"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const insights = [
  {
    name: "Capital & Compliance Insights",
    logo: "/insights/investment.jpg",
    description:
      "This service is tailored to guide organizations through the complexities of corporate governance and investment. SHLO's dedicated team will help you design governance structures that attract sustainable investment and drive long-term financial success, while ensuring robust legal and regulatory compliance.",
    expertise: "Corporate Law, M&A, Business Strategy",
  },
  {
    name: "Legal Strategy & Investment Insights",
    logo: "/insights/corporate.jpg",
    description:
      "Our legal representation services extend well beyond courtroom appearances, encapsulating the entire lifecycle of legal disputes and proceedings. We are dedicated to managing every phase from initial case preparation to post-judgment services while ensuring effective advocacy across courts, administrative tribunals, arbitration panels, and other legal forums.",
    expertise: "Civil Litigation, Dispute Resolution",
  },
  {
    name: "Investor & Legal Brief",
    logo: "/insights/investers-and-legal-brief.jpg",
    description:
      "Continuous education is essential in a rapidly evolving legal environment. SHLO's legal training programs are designed for both legal professionals and non-lawyers, ensuring the dissemination of up-to-date knowledge and best practices.",
    expertise: "Real Estate, Property Law",
  },
  {
    name: "Corporate Governance Insights",
    logo: "/insights/corporate-governance-insights.jpg",
    description: "Our legal consulting services enable clients to navigate complex legal landscapes with confidence. By providing proactive advice and developing customized legal solutions, we help you align your business operations with evolving legal requirements.",
    expertise: "Employment Law, HR Consulting",
  },
   {
    name: "The Corporate Counsel Journal",
    logo: "/insights/journal.jpg",
    description: "Precision and timeliness are at the core of our legal documents preparation and submission services. SHLO is committed to drafting impeccable documents and ensuring that they are effectively packaged and submitted per regulatory requirements.",
    expertise: "Employment Law, HR Consulting",
  },
]

export function  InsightsSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <section id="insights" className="py-20 bg-[hsl(var(--muted))]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[hsl(var(--secondary))] mb-4">Get More Insights</h2>
          <p className="text-xl text-[hsl(var(--muted-foreground))] max-w-3xl mx-auto">
            Stay ahead with expert perspectives on law, business, and investment. Our insights turn complexity into clarity, helping you make informed decisions. Explore articles, updates, and thought leadership tailored to your industry.
          </p>
        </div>

        <div className="flex justify-center gap-8 overflow-x-auto pb-4">
          {insights.map((insights, index) => (
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
                  // Expanded state
                  <div className="p-6 h-full flex flex-col">
                    <div className="flex justify-center mb-6">
                      <div className="w-20 h-20 rounded-full bg-[hsl(var(--accent))] flex items-center justify-center overflow-hidden">
                        <Image
                          src={insights.logo || "/investment.jpg"}
                          alt={insights.name}
                          width={64}
                          height={64}
                          className="w-16 h-16 object-contain"
                        />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-[hsl(var(--secondary))] mb-4 text-center">{insights.name}</h3>
                    {/* Scrollable description */}
                    <div className="flex-grow overflow-y-auto pr-2">
                      <p className="text-sm text-[hsl(var(--muted-foreground))] leading-relaxed">
                        {insights.description}
                      </p>
                    </div>
                    <div className="mt-4">
                      <div className="text-xs font-semibold text-[hsl(var(--primary))] mb-2">EXPERTISE:</div>
                      <div className="text-xs text-[hsl(var(--secondary))]">{insights.expertise}</div>
                    </div>
                  </div>
                ) : (
                  // Collapsed state
                  <div className="h-full flex flex-col items-center py-8">
                    <div className="flex justify-center mb-16">
                      <div className="w-18 h-18 rounded-full bg-[hsl(var(--primary))] bg-opacity-20 flex items-center justify-center overflow-hidden">
                        <Image
                          src={insights.logo || "/placeholder.svg"}
                          alt={insights.name}
                          width={48}
                          height={48}
                          className="w-12 h-12 object-contain"
                        />
                      </div>
                    </div>
                    <div className="flex-grow flex items-center justify-center">
                      <div
                        className="text-base font-semibold text-[hsl(var(--secondary))] whitespace-nowrap"
                        style={{
                          transform: "rotate(-90deg)",
                          transformOrigin: "center",
                          width: "200px",
                          textAlign: "center",
                        }}
                      >
                        {insights.name}
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