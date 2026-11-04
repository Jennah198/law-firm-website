import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Check } from "lucide-react"
import { cn } from "@/lib/utils"

type PracticeArea = {
  badge: string
  subheading: string
  description: string
  services: string[]
  imageSrc: string
  imageAlt: string
}

function PracticeAreaRow({ area, reverse }: { area: PracticeArea; reverse: boolean }) {
  return (
    <article className="grid grid-cols-1 items-start gap-10 border-t border-border pt-14 lg:grid-cols-12 lg:gap-14">
      <div className={cn("lg:col-span-5", reverse && "lg:order-last")}>
        <div className="relative aspect-[4/3] overflow-hidden bg-accent">
          <Image src={area.imageSrc} alt={area.imageAlt} fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
        </div>
      </div>
      <div className="lg:col-span-7">
        <p className="eyebrow mb-4">{area.badge}</p>
        <h3 className="text-2xl font-semibold leading-snug text-secondary dark:text-foreground md:text-3xl">{area.subheading}</h3>
        <p className="mt-4 leading-relaxed text-muted-foreground">{area.description}</p>
        <ul className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 md:grid-cols-2">
          {area.services.map((service) => {
            const [title, detail] = service.split(" – ")
            return (
              <li key={service} className="flex gap-3 text-sm leading-relaxed">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>
                  <span className="font-semibold text-secondary dark:text-foreground">{title}</span>
                  {detail && <span className="text-muted-foreground"> — {detail}</span>}
                </span>
              </li>
            )
          })}
        </ul>
      </div>
    </article>
  )
}

export function PracticeAreas() {
  const investmentLawServices = [
    "Investment Licensing & Compliance – Facilitating approvals, registrations, and regulatory adherence.",
    "Cross-Border Transactions & Corporate Structuring – Supporting international investments, joint ventures, and mergers.",
    "Tax Planning & Incentives – Advising on tax holidays, duty exemptions, and profit repatriation.",
    "Capital Registration & Financing Strategies – Guiding investors on capital management and structuring financing agreements.",
    "Employment & Immigration Compliance – Assisting expatriates with work permits, visas, and labor law compliance.",
    "Dispute Resolution & Arbitration – Resolving investment conflicts through mediation, litigation, and negotiation.",
  ]

  const CorporateLawServices = [
   "Business Formation & Structuring – Advising on the optimal legal setup, including PLCs, SCs, and partnerships.",
   "Corporate Governance & Compliance – Drafting bylaws, shareholder agreements, and policies for board oversight and financial transparency.",
   "Mergers, Acquisitions & Restructuring – Supporting joint ventures, investment strategies, and corporate refinancing.",
   "Employment & Regulatory Compliance – Ensuring businesses adhere to labor laws, industry standards, and regulatory requirements.",
   "Dispute Resolution & Corporate Litigation – Managing shareholder conflicts, regulatory disputes, and contractual disagreements.",
   "Investment & Strategic Expansion – Advising businesses on cross-border transactions, funding opportunities, and global market entry.",
  ]

  const TaxAndCustomsLawServices = [
    "Tax Planning & Optimization – Advising on corporate tax structuring, VAT compliance, and tax incentives.",
    "Customs & Trade Compliance – Ensuring smooth import/export operations with tariff classification, duty exemptions, and regulatory approvals.",
    "Regulatory Compliance – Guiding businesses through Ethiopian tax laws, including VAT, excise duties, and income tax.",
    "Cross-Border Tax Structuring – Managing international tax obligations, transfer pricing strategies, and profit repatriation.",
    "Dispute Resolution & Litigation – Representing businesses in tax audits, appeals, and customs-related disputes.",
    "Digital Tax Compliance – Assisting with emerging digital tax regimes and e-commerce taxation policies.",
  ]


  const areas: PracticeArea[] = [
    {
      badge: "Investment Law",
      subheading: "Your strategic legal partner for investment opportunities in Ethiopia",
      description:
        "Ethiopia offers significant investment opportunities, driven by economic reforms, tax incentives and trade liberalisation. We help investors structure deals, secure licences, optimise tax benefits and resolve disputes — ensuring a smooth investment journey that complies with local and international regulations.",
      services: investmentLawServices,
      imageSrc: "/practice-areas/investment.jpg",
      imageAlt: "Investment law professionals reviewing documents",
    },
    {
      badge: "Corporate Law",
      subheading: "Comprehensive solutions for business formation, governance & growth",
      description:
        "Whether launching a start-up, managing expansion or overseeing mergers and acquisitions, SHLO provides expert counsel so that businesses navigate Ethiopia's corporate framework effectively and minimise risk.",
      services: CorporateLawServices,
      imageSrc: "/practice-areas/corporate.jpg",
      imageAlt: "Corporate lawyers in a business meeting",
    },
    {
      badge: "Tax & Customs Law",
      subheading: "Strategic solutions for tax efficiency & trade compliance",
      description:
        "Navigating Ethiopia's tax system and customs regulations is essential for sound financial planning. We advise on taxation, customs duties and regulatory frameworks, helping businesses mitigate risk, maximise benefits and resolve disputes effectively.",
      services: TaxAndCustomsLawServices,
      imageSrc: "/practice-areas/taxandcustom.jpg",
      imageAlt: "Tax and customs legal documentation",
    },
  ]

  return (
    <section id="practice-areas" className="bg-background py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 max-w-3xl">
            <p className="eyebrow mb-5">Practice Areas</p>
            <h2 className="section-title">Unlocking opportunities with strategic legal support</h2>
            <p className="section-lead mt-4">
              Our multidisciplinary team provides guidance and representation tailored to Ethiopia&apos;s evolving
              regulatory and business landscape — helping investors, businesses, individuals and organisations grow
              while remaining fully compliant.
            </p>
          </div>

          <div className="space-y-14">
            {areas.map((area, i) => (
              <PracticeAreaRow key={area.badge} area={area} reverse={i % 2 === 1} />
            ))}
          </div>

          <div className="mt-16 flex flex-col items-center justify-between gap-6 bg-secondary px-8 py-10 text-secondary-foreground md:flex-row">
            <div>
              <h3 className="text-2xl font-semibold">Sixteen practice areas. One trusted partner.</h3>
              <p className="mt-2 text-secondary-foreground/75">
                From energy and healthcare to fintech and agribusiness, explore every area in which we advise.
              </p>
            </div>
            <Link
              href="/practice-areas-inner"
              className="inline-flex shrink-0 items-center gap-2 rounded-sm bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-brand-gold-600"
            >
              View all areas <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PracticeAreas
