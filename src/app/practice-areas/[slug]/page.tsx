import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Check } from "lucide-react"
import { PageHeader } from "@/components/page-header"
import { ContactSection } from "@/features/sections/contact-section"

const practiceAreasData = {
  "investment-law": {
    title: "Investment Law",
    subtitle: "Your Strategic Legal Partner for Investment Opportunities in Ethiopia",
    banner: "/practice-areas/investment.jpg",
    description: "Ethiopia's investment landscape offers tremendous opportunities across various sectors including manufacturing, agriculture, energy, and services. SHLO Law Office provides comprehensive legal guidance to help domestic and international investors navigate regulatory frameworks, secure necessary permits and licenses, conduct due diligence, and establish successful business operations in compliance with Ethiopian investment laws and regulations.",
  },
  "corporate-law": {
    title: "Corporate Law",
    subtitle: "Comprehensive Legal Solutions for Business Formation, Governance & Growth",
    banner: "/practice-areas/corporate.jpg",
    description: "Ethiopia's corporate legal framework supports structured business development, investor protection, and operational compliance. Whether launching a startup, managing corporate expansion, or ensuring ongoing regulatory adherence, SHLO Law Office provides expert legal counsel to help businesses navigate the Commercial Code, company registration requirements, shareholder agreements, and corporate governance standards effectively.",
  },
  "tax-customs-law": {
    title: "Tax & Customs Law",
    subtitle: "Strategic Legal Solutions for Tax Efficiency & Trade Compliance in Ethiopia",
    banner: "/practice-areas/taxandcustom.jpg",
    description: "Navigate Ethiopia's complex tax and customs regulations with confidence. Our expertise ensures compliance with income tax, VAT, withholding tax, and customs duties while optimizing your tax position and facilitating smooth cross-border trade operations. We provide strategic advice on tax planning, represent clients in disputes with tax authorities, and ensure proper customs clearance procedures for imports and exports.",
  },
  "intellectual-property": {
    title: "Intellectual Property & Technology Rights",
    subtitle: "Protecting Your Innovations, Securing Your Business",
    banner: "/practice-areas/intellectual.jpg",
    description: "Safeguard your intellectual assets in Ethiopia's growing market with comprehensive IP protection strategies. We handle trademark registration, patent applications, copyright protection, and industrial design rights. Our services extend to technology transfer agreements, licensing arrangements, and enforcement actions against IP infringement, ensuring your innovations and brand identity receive robust legal protection under Ethiopian intellectual property laws.",
  },
  "mergers-acquisitions": {
    title: "Mergers & Acquisitions (M&A)",
    subtitle: "Strategic Legal Support for Business Growth & Corporate Consolidation",
    banner: "/practice-areas/mergers.jpg",
    description: "Execute successful mergers, acquisitions, and corporate restructuring with comprehensive legal support. We guide you through due diligence processes, regulatory compliance requirements, transaction structuring, negotiation of terms, and post-merger integration. Our expertise covers both domestic and cross-border M&A transactions, ensuring compliance with Ethiopian competition laws and investment regulations while protecting your strategic business interests.",
  },
  "engineering-construction-real-estate": {
    title: "Engineering, Construction & Real Estate Law",
    subtitle: "Legal Solutions for Ethiopia's Growing Infrastructure & Property Market",
    banner: "/practice-areas/EngineeringConstructionRealEstateLaw.jpg",
    description: "Support Ethiopia's infrastructure development and real estate growth with expert legal counsel. We assist with construction contracts, project financing, land acquisition, zoning regulations, building permits, and property development agreements. Our services cover residential, commercial, and industrial real estate transactions, construction disputes, and regulatory compliance for both public infrastructure projects and private development initiatives.",
  },
  "energy-natural-resources": {
    title: "Energy & Natural Resources",
    subtitle: "Expert Legal Solutions for Ethiopia's Expanding Energy & Resource Sectors",
    banner: "/practice-areas/energyand Construction.jpg",
    description: "Navigate the complex legal landscape of Ethiopia's energy and natural resources sector with specialized legal expertise. We provide counsel on power generation projects, renewable energy development, mining operations, petroleum exploration, and environmental compliance. Our services include negotiating production sharing agreements, handling licensing requirements, advising on regulatory frameworks, and resolving disputes in these highly regulated industries.",
  },
  "manufacturing-industry": {
    title: "Manufacturing & Industry Law",
    subtitle: "Legal Solutions for Ethiopia's Expanding Industrial & Manufacturing Sector",
    banner: "/practice-areas/manufacturing.jpg",
    description: "Support industrial growth and manufacturing operations with comprehensive legal services tailored to Ethiopia's industrial sector. We assist with factory establishment, industrial park regulations, supply chain agreements, product liability issues, environmental compliance, and labor matters specific to manufacturing. Our expertise helps clients navigate the Industrial Development Act and related regulations while optimizing operational efficiency and legal compliance.",
  },
  "ngo-civil-society": {
    title: "NGO & Civil Society Organizations",
    subtitle: "Empowering Charities & Civil Society with Expert Legal Guidance",
    banner: "/practice-areas/NGOCivilSocietyOrganization.jpg",
    description: "Establish and operate non-governmental organizations, charities, and civil society entities with proper legal frameworks and compliance strategies in Ethiopia's regulatory environment. We handle registration with the relevant authorities, governance structure development, tax exemption applications, donor agreements, and ongoing regulatory compliance. Our services ensure that your organization operates effectively while maintaining compliance with Ethiopian CSO laws and regulations.",
  },
  "employment-labor": {
    title: "Employment & Labor Law",
    subtitle: "Strategic Legal Solutions for Workforce Management & Compliance in Ethiopia",
    banner: "/practice-areas/EmploymentandLabor.jpg",
    description: "Manage employment relationships and labor compliance with expert guidance on Ethiopian labor laws and workplace regulations. We draft employment contracts, develop workplace policies, handle disciplinary matters, advise on termination procedures, and represent clients in labor disputes. Our services extend to collective bargaining agreements, occupational health and safety compliance, and workforce restructuring in accordance with Ethiopia's Labor Proclamation and related regulations.",
  },
  "dispute-resolution": {
    title: "Dispute Resolution, Litigation & Legal Representation",
    subtitle: "Expert Legal Advocacy in Courts, Tribunals, Administrative and Alternative Dispute Resolution",
    banner: "/practice-areas/Drll.jpg",
    description: "Resolve legal disputes effectively through comprehensive litigation, arbitration, mediation, and other dispute resolution mechanisms in Ethiopia. We represent clients in civil courts, administrative tribunals, commercial arbitration, and mediation proceedings. Our approach includes case assessment, evidence preparation, legal argumentation, and strategic negotiation to achieve favorable outcomes while minimizing costs and preserving business relationships where possible.",
  },
  "healthcare-law": {
    title: "Healthcare Law",
    subtitle: "Legal Expertise for Healthcare Providers, Institutions & Medical Innovation in Ethiopia",
    banner: "/practice-areas/healthcare.jpg",
    description: "Navigate healthcare regulations and medical practice laws with specialized legal support for Ethiopia's healthcare sector. We assist hospitals, clinics, pharmaceutical companies, and medical professionals with licensing requirements, medical malpractice defense, patient rights issues, healthcare contracts, and regulatory compliance. Our expertise covers the evolving landscape of healthcare delivery, medical innovation, and public health regulations in Ethiopia.",
  },
  "agriculture-agribusiness": {
    title: "Agriculture & Agribusiness Law",
    subtitle: "Expert Legal Solutions for Ethiopia's Growing Agricultural Sector",
    banner: "/practice-areas/AgricultureandAgriBusinessLaw.jpg",
    description: "Support agricultural development and agribusiness operations with comprehensive legal services tailored to Ethiopia's farming sector. We handle land lease agreements, agricultural investment permits, supply chain contracts, food safety regulations, export requirements, and cooperative formation. Our expertise helps clients navigate the unique legal challenges of agriculture while maximizing opportunities in Ethiopia's vital agricultural economy.",
  },
  "property-successions": {
    title: "Property Law & Successions",
    subtitle: "Legal Solutions for Real Estate, Asset Protection, and Estate Planning in Ethiopia",
    banner: "/practice-areas/PropertySuccessionsLaw.jpg",
    description: "Manage property rights, real estate transactions, and succession planning with expert legal guidance under Ethiopian law. We handle property transfers, title registration, lease agreements, inheritance matters, wills preparation, and estate administration. Our services ensure proper documentation and legal compliance for both residential and commercial property matters, as well as effective estate planning and succession strategies for individuals and families.",
  },
  "fintech-law": {
    title: "FinTech Law",
    subtitle: "Empowering Financial Technology Innovators with Strategic Legal Solutions",
    banner: "/practice-areas/fintech.jpg",
    description: "Navigate the evolving landscape of financial technology with specialized legal support for FinTech innovations in Ethiopia. We advise on digital payment systems, mobile banking regulations, crowdfunding platforms, blockchain applications, and financial data protection. Our services help FinTech startups and established financial institutions comply with National Bank of Ethiopia regulations while innovating safely in Ethiopia's growing digital finance ecosystem.",
  },
  "international-trade-commercial": {
    title: "International Trade & Commercial Law",
    subtitle: "Seamless Trade and Secure Transactions with Expert Legal Guidance",
    banner: "/practice-areas/itc.jpg",
    description: "Facilitate international trade and commercial transactions with comprehensive legal support and cross-border expertise. We handle international sales contracts, distribution agreements, agency arrangements, import-export regulations, letters of credit, and trade financing. Our services ensure compliance with Ethiopian trade laws, international conventions, and bilateral agreements while optimizing your cross-border commercial operations and mitigating international trade risks.",
  },
}

type Params = { params: Promise<{ slug: string }> }

const approach = [
  "Comprehensive legal analysis and strategic planning",
  "Regulatory compliance and risk assessment",
  "Document preparation and contract review",
  "Transaction structuring and negotiation support",
  "Dispute resolution and legal representation",
  "Ongoing advisory and industry-specific guidance",
]

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params
  const area = practiceAreasData[slug as keyof typeof practiceAreasData]
  return area ? { title: area.title, description: area.subtitle } : {}
}

export default async function PracticeAreaDetail({ params }: Params) {
  const { slug } = await params
  const area = practiceAreasData[slug as keyof typeof practiceAreasData]
  if (!area) notFound()

  const others = Object.entries(practiceAreasData)
    .filter(([key]) => key !== slug)
    .slice(0, 6)

  return (
    <main>
      <PageHeader eyebrow="Practice Areas" title={area.title} description={area.subtitle} image={area.banner} />

      <section className="bg-background py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <p className="eyebrow mb-5">Overview</p>
              <p className="text-lg leading-relaxed text-foreground/85">{area.description}</p>

              <h2 className="mt-12 text-2xl font-semibold text-secondary dark:text-foreground">How we help</h2>
              <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {approach.map((a) => (
                  <li key={a} className="flex gap-3 border border-border p-4 text-sm leading-relaxed">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> {a}
                  </li>
                ))}
              </ul>
            </div>

            <aside className="space-y-8">
              <div className="overflow-hidden border border-border bg-card">
                <div className="relative aspect-[4/3] bg-accent">
                  <Image src="/sadam-hero.png" alt="Sadam Hussein" fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover object-top" />
                </div>
                <div className="p-6">
                  <p className="font-serif text-xl font-semibold text-secondary dark:text-foreground">Sadam Hussein</p>
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary">Founder &amp; Principal Attorney</p>
                  <Link
                    href="/contact#scheduling"
                    className="mt-5 inline-flex w-full justify-center rounded-sm bg-secondary px-5 py-3 text-xs font-semibold uppercase tracking-wider text-secondary-foreground hover:bg-primary"
                  >
                    Discuss your matter
                  </Link>
                </div>
              </div>

              <div className="border border-border p-6">
                <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-primary">Other practice areas</h2>
                <ul className="mt-4 space-y-3 text-sm">
                  {others.map(([key, a]) => (
                    <li key={key}>
                      <Link href={`/practice-areas/${key}`} className="text-secondary hover:text-primary dark:text-foreground">
                        {a.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <ContactSection />
    </main>
  )
}

export async function generateStaticParams() {
  return Object.keys(practiceAreasData).map((slug) => ({ slug }))
}
