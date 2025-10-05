"use client"

import type { FC } from "react"
import Link from "next/link"

type PracticeAreaCardProps = {
  badge: string
  subheading: string
  description: string
  services: string[]
}

const PracticeAreaCard: FC<PracticeAreaCardProps> = ({ badge, subheading, description, services }) => {
  return (
    <div className="group bg-white rounded-xl shadow-lg p-8 lg:p-12 transition-all duration-500 hover:shadow-2xl hover:shadow-[#2A3B72]/20 hover:-translate-y-2 hover:scale-[1.02] cursor-pointer">
      {/* Top Tab/Label */}
      <div className="inline-block bg-[#E6E6E6] text-[#333333] px-6 py-2 rounded-full text-sm font-medium mb-8">
        {badge}
      </div>

      {/* Main Content - Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-12">
        {/* Left Content Section */}
        <div>
          <h3 className="text-2xl lg:text-3xl font-bold text-[#2A3B72] mb-6">
            {subheading}
          </h3>
          <p className="text-[#333333] leading-relaxed text-lg">
            {description}
          </p>
        </div>

        {/* Right Content Section - Image Placeholder */}
        <div className="bg-[#D9D9D9] rounded-lg h-64 lg:h-80 flex items-center justify-center">
          <span className="text-[#666666] font-medium text-lg">Image Placeholder</span>
        </div>
      </div>

      {/* Key Legal Services */}
      <div className="mb-12">
        <h4 className="text-xl font-bold text-[#2A3B72] mb-8 text-center">
          Our Key Legal Services:
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            {services.slice(0, 3).map((service, index) => (
              <div key={index} className="text-[#333333] text-lg">
                {service}
              </div>
            ))}
          </div>
          <div className="space-y-4">
            {services.slice(3).map((service, index) => (
              <div key={index} className="text-[#333333] text-lg">
                {service}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call-to-Action */}
      <div className="text-center">
        <Link
          href="tel:+251913693679"
          className="inline-block bg-[#EDEDED] text-[#2A3B72] px-8 py-4 rounded-lg shadow-md mb-4 font-medium text-lg transition hover:bg-[#2A3B72] hover:text-white"
        >
          Call now: +251 91 369 3679
        </Link>
        <p className="text-[#333333] text-center max-w-2xl mx-auto">
          Contact us today to ensure your business operations align perfectly with Ethiopia&apos;s dynamic corporate environment.
        </p>
      </div>
    </div>
  )
}

export function PracticeAreas() {
  const commonServices = [
    "Business Formation & Structuring",
    "Corporate Governance & Compliance",
    "Dispute Resolution & Corporate Litigation",
    "Mergers, Acquisitions & Restructuring",
    "Employment & Regulatory Compliance",
    "Investment & Strategic Expansion",
  ]

  return (
    <section className="bg-[#F4F4F4] py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Area */}
        <div className="text-center mb-16">
          <h1 className="text-3xl lg:text-4xl font-bold text-[#2A3B72] mb-4">
            Sadam Hussien Law Office (SHLO)
          </h1>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#C5AA88] mb-6">
            Practice Areas
          </h2>
          <p className="text-xl text-[#444444] italic mb-8">
            Unlocking Opportunities with Strategic Legal Support
          </p>
          <p className="text-lg text-[#333333] max-w-4xl mx-auto leading-relaxed">
            At SHLO Law Office, we provide expert legal solutions tailored to Ethiopia&apos;s evolving regulatory and business
            landscape. Our multidisciplinary services ensure investors, businesses, and organizations achieve growth
            while staying fully compliant with local and international standards.
          </p>
        </div>

        {/* Repeated Cards */}
        <div className="space-y-12">
          <PracticeAreaCard
            badge="Corporate Law"
            subheading="Comprehensive Legal Solutions for Business Formation, Governance & Growth"
            description="Ethiopia's corporate legal framework supports structured business development, investor protection, and operational compliance. Whether launching a startup or managing mergers, SHLO ensures businesses minimize risks while maximizing opportunities in Ethiopia's dynamic economic environment."
            services={commonServices}
          />
          <PracticeAreaCard
            badge="Corporate Governance"
            subheading="Implementing Strong Governance Structures"
            description="We help businesses implement governance processes, align policies with regulatory standards, and anticipate risk with practical controls for sustainable growth."
            services={commonServices}
          />
          <PracticeAreaCard
            badge="Mergers & Acquisitions"
            subheading="Guidance for Expansion and Restructuring"
            description="From investor readiness to cross-border expansion, we structure transactions, negotiate terms, and manage legal risk throughout integration to protect value and accelerate outcomes."
            services={commonServices}
          />
        </div>
      </div>
    </section>
  )
}

export default PracticeAreas