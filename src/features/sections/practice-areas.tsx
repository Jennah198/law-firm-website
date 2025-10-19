"use client"

import type { FC } from "react"
import Link from "next/link"
import Image from "next/image"

type PracticeAreaCardProps = {
  badge: string
  subheading: string
  description: string
  services: string[]
  contactDescription: string
  imageSrc: string
  imageAlt: string
}

const PracticeAreaCard: FC<PracticeAreaCardProps> = ({ 
  badge, 
  subheading, 
  description, 
  services, 
  contactDescription,
  imageSrc,
  imageAlt
}) => {
  return (
    <div className="group bg-card rounded-xl shadow-lg p-6 lg:p-8 transition-all hover:-translate-y-2 hover:scale-[1.02] cursor-pointer hover:bg-secondary">
      {/* Top Tab/Label */}
      <div className="inline-block bg-accent text-foreground px-4 py-1.5 rounded-full text-xs font-medium mb-6 group-hover:bg-primary group-hover:text-primary-foreground">
        {badge}
      </div>

      {/* Main Content - Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-8">
        {/* Left Content Section */}
        <div>
          <h3 className="text-xl lg:text-2xl font-bold text-secondary mb-4 leading-tight group-hover:text-secondary-foreground">
            {subheading}
          </h3>
          <p className="text-foreground leading-relaxed text-base group-hover:text-secondary-foreground">
            {description}
          </p>
        </div>

        {/* Right Content Section - Real Image */}
        <div className="bg-accent rounded-lg h-56 lg:h-64 flex items-center justify-center overflow-hidden">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={400}
            height={300}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Key Legal Services */}
      <div className="mb-8">
        <h4 className="text-lg font-bold text-secondary mb-6 text-center group-hover:text-secondary-foreground">
          Our Key Legal Services:
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-3">
            {services.slice(0, Math.ceil(services.length / 2)).map((service, index) => (
              <div key={index} className="text-foreground text-sm leading-relaxed group-hover:text-secondary-foreground">
                {service}
              </div>
            ))}
          </div>
          <div className="space-y-3">
            {services.slice(Math.ceil(services.length / 2)).map((service, index) => (
              <div key={index} className="text-foreground text-sm leading-relaxed group-hover:text-secondary-foreground">
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
          className="inline-block bg-accent text-secondary px-6 py-3 rounded-lg shadow-md mb-3 font-medium text-base transition group-hover:bg-primary group-hover:text-primary-foreground"
        >
          Call now: +251 91 369 3679
        </Link>
        <p className="text-foreground text-center max-w-2xl mx-auto text-sm leading-relaxed group-hover:text-secondary-foreground">
          {contactDescription}
        </p>
      </div>
    </div>
  )
}

export function PracticeAreas() {
  // Define services for each practice area
  const investmentLawServices = [
    "- Investment Licensing & Compliance – Facilitating approvals, registrations, and regulatory adherence.",
    "- Cross-Border Transactions & Corporate Structuring – Supporting international investments, joint ventures, and mergers.",
    "- Tax Planning & Incentives – Advising on tax holidays, duty exemptions, and profit repatriation.",
    "- Capital Registration & Financing Strategies – Guiding investors on capital management and structuring financing agreements.",
    "- Employment & Immigration Compliance – Assisting expatriates with work permits, visas, and labor law compliance.",
    "- Dispute Resolution & Arbitration – Resolving investment conflicts through mediation, litigation, and negotiation.",
  ]

  const CorporateLawServices = [
   "- Business Formation & Structuring – Advising on the optimal legal setup, including PLCs, SCs, and partnerships.",
   "- Corporate Governance & Compliance – Drafting bylaws, shareholder agreements, and policies for board oversight and financial transparency.",
   "- Mergers, Acquisitions & Restructuring – Supporting joint ventures, investment strategies, and corporate refinancing.",
   "- Employment & Regulatory Compliance – Ensuring businesses adhere to labor laws, industry standards, and regulatory requirements.",
   "- Dispute Resolution & Corporate Litigation – Managing shareholder conflicts, regulatory disputes, and contractual disagreements.",
   "- Investment & Strategic Expansion – Advising businesses on cross-border transactions, funding opportunities, and global market entry.",
  ]

  const TaxAndCustomsLawServices = [
    "- Tax Planning & Optimization – Advising on corporate tax structuring, VAT compliance, and tax incentives.",
    "- Customs & Trade Compliance – Ensuring smooth import/export operations with tariff classification, duty exemptions, and regulatory approvals.",
    "- Regulatory Compliance – Guiding businesses through Ethiopian tax laws, including VAT, excise duties, and income tax.",
    "- Cross-Border Tax Structuring – Managing international tax obligations, transfer pricing strategies, and profit repatriation.",
    "- Dispute Resolution & Litigation – Representing businesses in tax audits, appeals, and customs-related disputes.",
    "- Digital Tax Compliance – Assisting with emerging digital tax regimes and e-commerce taxation policies.",
  ]

  return (
    <section className="bg-muted py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Area */}
        <div className="text-center mb-12">
          <h1 className="text-2xl lg:text-3xl font-bold text-secondary mb-3">
            Sadam Hussien Law Office (SHLO)
          </h1>
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Practice Areas
          </h2>
          <p className="text-lg text-muted-foreground italic mb-6">
            Unlocking Opportunities with Strategic Legal Support
          </p>
          <p className="text-base text-foreground max-w-4xl mx-auto leading-relaxed">
            At SHLO Law Office, we provide expert legal solutions tailored to Ethiopia&apos;s evolving regulatory and business landscape. Our multidisciplinary Legal Services offers comprehensive guidance and representation across diverse practice areas—ensuring investors, businesses, individuals and organizations achieve growth while maintaining full compliance with local and international laws.
          </p>
        </div>

        {/* 16 Practice Area Cards */}
        <div className="space-y-8">
          {/* Card 1 */}
          <PracticeAreaCard
            badge="Investment Law"
            subheading="Your Strategic Legal Partner for Investment Opportunities in Ethiopia"
            description="Ethiopia offers significant investment opportunities, driven by economic reforms, tax incentives, and trade liberalization. Navigating the legal framework requires expert guidance to maximize benefits while ensuring compliance with local and international regulations. At SHLO Law Office, we help investors structure deals, secure licenses, optimize tax benefits, and resolve disputes, ensuring a smooth investment journey."
            services={investmentLawServices}
            contactDescription="📞 Contact us for a free consultation and unlock Ethiopia's investment potential with our strategic legal guidance."
            imageSrc="/investment.jpg"
            imageAlt="Investment law professionals reviewing documents"
          />

          {/* Card 2 */}
          <PracticeAreaCard
            badge="Corporate Law"
            subheading="Comprehensive Legal Solutions for Business Formation, Governance & Growth"
            description="Ethiopia's corporate legal framework supports structured business development, investor protection, and operational compliance. Whether launching a startup, managing expansion, or overseeing mergers and acquisitions, SHLO Law Office provides expert legal counsel to ensure businesses navigate regulations effectively and minimize risks."
            services={CorporateLawServices}
            contactDescription="📞 Contact us today to ensure your business operations align perfectly with Ethiopia's dynamic corporate environment."
            imageSrc="/corporate.jpg"
            imageAlt="Corporate lawyers in a business meeting"
          />

          {/* Card 3 */}
          <PracticeAreaCard
            badge="Tax & Customs Law"
            subheading="Strategic Legal Solutions for Tax Efficiency & Trade Compliance in Ethiopia"
            description="Navigating Ethiopia's tax system and customs regulations is essential for businesses and investors looking to optimize financial planning and ensure compliance. SHLO Law Office provides expert legal counsel on taxation, customs duties, and regulatory frameworks, helping businesses mitigate risks, maximize benefits, and resolve disputes effectively."
            services={TaxAndCustomsLawServices}
            contactDescription="📞 Secure your tax efficiency and compliance—contact SHLO Law Office for expert advice today."
            imageSrc="/taxandcustom.jpg"
            imageAlt="Tax and customs legal documentation"
          />

          <div className="text-center mt-12">
            <Link
              href="/practice-areas-inner"
              className="inline-block px-6 py-3 rounded-md font-medium bg-secondary text-secondary-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              See More Practice Areas →     
            </Link>
         </div> 
        </div>
      </div>
    </section>
  )
}

export default PracticeAreas