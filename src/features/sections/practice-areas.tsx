"use client"

import type { FC } from "react"
import Link from "next/link"

type PracticeAreaCardProps = {
  badge: string
  subheading: string
  description: string
  services: string[]
  contactDescription: string // New prop for dynamic contact description
}

const PracticeAreaCard: FC<PracticeAreaCardProps> = ({ 
  badge, 
  subheading, 
  description, 
  services, 
  contactDescription 
}) => {
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
            {services.slice(0, Math.ceil(services.length / 2)).map((service, index) => (
              <div key={index} className="text-[#333333] text-lg">
                {service}
              </div>
            ))}
          </div>
          <div className="space-y-4">
            {services.slice(Math.ceil(services.length / 2)).map((service, index) => (
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

  const IntellectualPropertyAndTechnologyRights = [
    "- Trademark, Patent & Copyright Registration – Assisting with filings, renewals, and enforcement through the Ethiopian Intellectual Property Authority (EIPA).",
    "- Technology Licensing & Commercialization – Structuring agreements for SaaS platforms, AI technologies, and digital assets.",
    "- IP Enforcement & Litigation – Protecting against infringement, securing injunctions, and managing legal disputes.",
    "- Data Privacy & Cybersecurity Compliance – Ensuring adherence to Ethiopia's Personal Data Protection Proclamation.",
    "- Emerging Tech & AI Ethics – Advising on blockchain, cryptocurrency, and AI governance frameworks.",
    "- International IP Protection – Navigating global trademarks and cross-border intellectual property agreements.",
  ]

  const iMergersAndAcquisitions = [
    "- Deal Structuring & Negotiation – Advising on optimal transaction frameworks, valuation strategies, and contractual protections.",
    "- Regulatory Approvals & Compliance – Facilitating approvals under Ethiopian competition laws and investment regulations.",
    "- Due Diligence & Risk Assessment – Conducting thorough legal audits to ensure financial and operational transparency.",
    "- Tax & Financial Implications – Structuring deals to optimize tax benefits and minimize financial risks.",
    "- Post-Merger Integration – Supporting businesses in workforce transition, corporate governance adjustments, and operational realignment.",
    "- Dispute Resolution & Litigation – Managing conflicts related to acquisitions, shareholder rights, and contractual breaches.",
  ]

  const EngineeringConstructionRealEstateLaw = [
    "- Real Estate Transactions – Secure property purchases, leases, and title registration.",
    "- Construction Contracts – Draft and negotiate EPC agreements for project protection.",
    "- Regulatory Compliance – Navigate planning laws, environmental requirements, and permits.",
    "- Dispute Resolution – Handle contract disputes, defects, and land conflicts.",
    "- Public-Private Partnerships (PPP) – Structure agreements for large-scale infrastructure projects.",
    "- Sustainability & Compliance – Ensure adherence to green building standards and land-use regulations.",
  ]

  const energyAndNaturalResources = [
    "- Regulatory Compliance & Licensing – Assisting with energy permits, mineral rights, and environmental approvals.",
    "- Contracts & Agreements – Structuring EPC contracts, PSAs, and power purchase agreements (PPAs).",
    "- Sustainability & Climate Strategy – Advising on GHG measurement, climate regulations, and green investment incentives.",
    "- Mining & Petroleum Law – Ensuring compliance with resource extraction laws and ethical sourcing standards.",
    "- Community Engagement & Land Rights – Developing social investment plans and managing stakeholder agreements.",
    "- Dispute Resolution & Risk Management – Representing businesses in regulatory disputes and contract negotiations.",
  ]

  const ManufacturingAndIndustryLaw = [
    "- Industrial Licensing & Compliance – Assisting with sector-specific regulations, factory setup, and production standards.",
    "- Manufacturing Contracts & Trade Agreements – Structuring supplier, distributor, and export-import agreements for seamless operations.",
    "- Investment Incentives & Tax Optimization – Advising on industrial tax incentives, duty exemptions, and financial structuring.",
    "- Intellectual Property Protection – Safeguarding patents, trademarks, and trade secrets in manufacturing innovations.",
    "- Regulatory & Environmental Compliance – Ensuring adherence to safety laws, waste management policies, and labor standards.",
    "- Dispute Resolution & Litigation – Representing manufacturers in contract disputes, regulatory challenges, and industry-specific legal matters.",
  ]

  const NGOAndCivilSocietyOrganizations = [
    "- Registration & Legal Structuring – Advising on entity formation, governance policies, and compliance with Ethiopian nonprofit regulations.",
    "- Grant Agreements & Financial Oversight – Drafting trust deeds, funding agreements, and ensuring transparent financial management.",
    "- Regulatory Compliance & Reporting – Guiding nonprofits through audits, annual filings, and government oversight.",
    "- Employment & Volunteer Agreements – Structuring contracts and policies for staff, volunteers, and board members.",
    "- Advocacy & Policy Engagement – Assisting with legal frameworks for public advocacy, lobbying, and policy initiatives.",
    "- Dispute Resolution & Operational Risk Management – Managing internal conflicts, funding disputes, and regulatory challenges.",
  ]

  const EmploymentAndLaborLaw = [
    "- Employment Contracts & Policy Development – Drafting legally sound contracts, employee handbooks, and workplace policies.",
    "- Workplace Dispute Resolution – Handling mediation, arbitration, and internal investigations to maintain workplace stability.",
    "- Expatriate Employment & Compliance – Managing visa applications, work permits, and residency approvals for foreign workers.",
    "- Regulatory Compliance & Labor Audits – Ensuring businesses meet Ethiopian labor laws, social security obligations, and industry-specific regulations.",
    "- Termination & Severance Advisory – Navigating lawful employee terminations, severance structuring, and compliance with dismissal regulations.",
    "- Litigation & Legal Representation – Defending businesses in labor tribunals and court cases involving employment disputes.",
  ]

  const DisputeResolutionLitigationLegalRepresentation = [
    "- Risk Mitigation & Legal Advisory – Conducting contract reviews and compliance assessments to prevent disputes.",
    "- Litigation & Tribunal Representation – Providing strong advocacy in Ethiopian courts, arbitration panels, and administrative tribunals.",
    "- Mediation & Arbitration – Facilitating cost-effective resolutions outside of court to maintain business relationships.",
    "- Corporate & Commercial Disputes – Handling shareholder conflicts, breach of contract cases, and regulatory claims.",
    "- Employment & Labor Dispute Resolution – Managing workplace conflicts and wrongful termination claims.",
    "- Enforcement of Foreign Judgments – Assisting with cross-border legal matters and enforcing international rulings in Ethiopia.",
  ]

  const HealthcareLaw = [
    "- Healthcare Licensing & Regulatory Compliance – Assisting hospitals, clinics, and pharmaceutical companies with legal certifications and operational permits.",
    "- Transactions & Mergers in Healthcare – Structuring acquisitions, joint ventures, and strategic collaborations in the medical sector.",
    "- Medical Malpractice & Liability Defense – Providing expert legal protection for healthcare professionals in liability claims.",
    "- Employment & Workforce Compliance – Drafting healthcare employment contracts, handling staff-related disputes, and regulatory obligations.",
    "- Data Protection & Patient Privacy – Ensuring compliance with Ethiopia's Personal Data Protection Proclamation for healthcare records.",
    "- Dispute Resolution & Healthcare Litigation – Managing insurance claims, contractual disputes, and regulatory enforcement issues.",
  ]

  const AgricultureAndAgribusinessLaw = [
    "- Land Tenure & Acquisition – Advising on agricultural land leases, investment incentives, and regulatory compliance.",
    "- Agribusiness Contracts & Trade Law – Drafting agreements for suppliers, exporters, and distributors while ensuring compliance with import/export laws.",
    "- Agri-Finance & Tax Planning – Structuring financing strategies, accessing agricultural subsidies, and optimizing tax benefits.",
    "- Intellectual Property in Agritech – Protecting patents, trademarks, and trade secrets related to farming innovations and biotechnology.",
    "- Environmental & Sustainability Compliance – Ensuring adherence to eco-friendly regulations, food safety laws, and climate policies.",
    "- Dispute Resolution & Litigation – Representing agribusinesses in land disputes, contractual conflicts, and regulatory matters.",
  ]

  const PropertyLawAndSuccessions = [
    "- Real Estate Transactions & Development – Secure property purchases, lease agreements, and title registration.",
    "- Land Tenure & Investment – Advising on urban and rural land acquisition, leasing, and regulatory compliance.",
    "- Succession Planning & Estate Administration – Structuring wills, trusts, and inheritance strategies to protect assets.",
    "- Dispute Resolution & Litigation – Handling property conflicts, inheritance claims, and ownership disputes.",
    "- Foreign Ownership & Investment Property Law – Guiding expatriates and investors on property acquisition frameworks.",
    "- Regulatory Compliance – Ensuring adherence to Ethiopian property laws and inheritance statutes.",
  ]

  const FinTechLaw = [
    "- FinTech Licensing & Regulatory Compliance – Assisting businesses in obtaining approvals under National Bank of Ethiopia (NBE) guidelines.",
    "- Digital Banking & Payment Systems – Structuring legal frameworks for mobile banking, e-wallets, and online transactions.",
    "- Blockchain, Crypto & Digital Assets – Advising on cryptocurrency regulations, blockchain integration, and token-based financing.",
    "- Data Privacy & Cybersecurity – Ensuring compliance with Ethiopia's Personal Data Protection Proclamation for financial security.",
    "- Investor Due Diligence & Risk Assessment – Conducting audits and regulatory checks to protect FinTech investors and startups.",
    "- Dispute Resolution & Financial Litigation – Handling FinTech-related conflicts, fraud prevention, and compliance disputes.",
  ]

  const InternationalTradeAndCommercialLaw = [
    "- Trade Agreement Structuring – Drafting international trade contracts in line with global standards (CISG, Incoterms®).",
    "- Customs & Regulatory Compliance – Guiding businesses through tariff classifications, bonded warehousing, and export controls.",
    "- E-Commerce & Consumer Protection – Ensuring adherence to digital trade regulations and consumer rights laws.",
    "- Dispute Resolution & Arbitration – Representing clients in trade-related conflicts, mediation, and litigation.",
    "- Supply Chain Due Diligence – Managing forced labor audits and sanctions screening for ethical trade practices.",
    "- Cross-Border Transactions & Investment – Advising on financing, taxation, and compliance in international trade deals.",
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
            At SHLO Law Office, we provide expert legal solutions tailored to Ethiopia&apos;s evolving regulatory and business landscape. Our multidisciplinary Legal Services offers comprehensive guidance and representation across diverse practice areas—ensuring investors, businesses, individuals and organizations achieve growth while maintaining full compliance with local and international laws.
          </p>
        </div>

        {/* 16 Practice Area Cards */}
        <div className="space-y-12">
          {/* Card 1 */}
          <PracticeAreaCard
            badge="Investment Law"
            subheading="Your Strategic Legal Partner for Investment Opportunities in Ethiopia"
            description="Ethiopia offers significant investment opportunities, driven by economic reforms, tax incentives, and trade liberalization. Navigating the legal framework requires expert guidance to maximize benefits while ensuring compliance with local and international regulations. At SHLO Law Office, we help investors structure deals, secure licenses, optimize tax benefits, and resolve disputes, ensuring a smooth investment journey."
            services={investmentLawServices}
            contactDescription="📞 Contact us for a free consultation and unlock Ethiopia’s investment potential with our strategic legal guidance."
          />

          {/* Card 2 */}
          <PracticeAreaCard
            badge="Corporate Law"
            subheading="Comprehensive Legal Solutions for Business Formation, Governance & Growth"
            description="Ethiopia's corporate legal framework supports structured business development, investor protection, and operational compliance. Whether launching a startup, managing expansion, or overseeing mergers and acquisitions, SHLO Law Office provides expert legal counsel to ensure businesses navigate regulations effectively and minimize risks."
            services={CorporateLawServices}
            contactDescription="📞 Contact us today to ensure your business operations align perfectly with Ethiopia’s dynamic corporate environment."
          />

          {/* Card 3 */}
          <PracticeAreaCard
            badge="Tax & Customs Law"
            subheading="Strategic Legal Solutions for Tax Efficiency & Trade Compliance in Ethiopia"
            description="Navigating Ethiopia's tax system and customs regulations is essential for businesses and investors looking to optimize financial planning and ensure compliance. SHLO Law Office provides expert legal counsel on taxation, customs duties, and regulatory frameworks, helping businesses mitigate risks, maximize benefits, and resolve disputes effectively."
            services={TaxAndCustomsLawServices}
            contactDescription="📞 Secure your tax efficiency and compliance—contact SHLO Law Office for expert advice today."
          />

          {/* Card 4 */}
          <PracticeAreaCard
            badge="Intellectual Property & Technology Rights"
            subheading="Protecting Your Innovations, Securing Your Business"
            description="Innovation drives business growth, and securing intellectual property (IP) is essential for protecting competitive advantages. Ethiopia's evolving digital and technology landscape requires strategic legal guidance to safeguard trademarks, patents, copyrights, and trade secrets. SHLO Law Office provides expert legal support for creators, businesses, and tech innovators, ensuring compliance with local and international IP regulations."
            services={IntellectualPropertyAndTechnologyRights}
            contactDescription="📞 Protect your innovations—contact SHLO Law Office to secure your intellectual property rights today."
          />

          {/* Card 5 */}
          <PracticeAreaCard
            badge="Mergers & Acquisitions (M&A)"
            subheading="Strategic Legal Support for Business Growth & Corporate Consolidation"
            description="Ethiopia's evolving M&A landscape presents significant opportunities for businesses looking to expand, restructure, or consolidate operations. Navigating regulatory approvals, competition laws, and complex transactions requires expert legal guidance. SHLO Law Office provides comprehensive M&A legal support, ensuring seamless deal execution and compliance."
            services={iMergersAndAcquisitions}
            contactDescription="📞 Contact us to receive expert legal support for your M&A transactions in Ethiopia."
          />

          {/* Card 6 */}
          <PracticeAreaCard
            badge="Engineering, Construction & Real Estate Law"
            subheading="Legal Solutions for Ethiopia's Growing Infrastructure & Property Market"
            description="SHLO Law Office provides expert legal support for developers, investors, and contractors, ensuring compliance and risk mitigation in real estate and construction projects."
            services={EngineeringConstructionRealEstateLaw}
            contactDescription="📞 Contact SHLO Law Office to safeguard your construction and real estate ventures today."
          />

          {/* Card 7 */}
          <PracticeAreaCard
            badge="Energy & Natural Resources"
            subheading="Expert Legal Solutions for Ethiopia's Expanding Energy & Resource Sectors"
            description="Ethiopia's energy and natural resources sector is vital to economic growth, yet highly regulated. Businesses in power generation, mining, and environmental sustainability require strategic legal guidance to navigate complex licensing, contracts, and compliance frameworks. SHLO Law Office provides tailored legal support, ensuring smooth operations and regulatory adherence."
            services={energyAndNaturalResources}
            contactDescription="📞 Navigate Ethiopia’s energy and natural resources sector—contact SHLO Law Office today for expert legal solutions."
          />

          {/* Card 8 */}
          <PracticeAreaCard
            badge="Manufacturing & Industry Law"
            subheading="Legal Solutions for Ethiopia's Expanding Industrial & Manufacturing Sector"
            description="Ethiopia's manufacturing industry is a key driver of economic growth, attracting investment in textiles, agro-processing, pharmaceuticals, and heavy industries. Navigating regulations, compliance frameworks, and industrial policies requires expert legal guidance to protect operations and optimize business strategies. SHLO Law Office provides comprehensive legal support to manufacturers, suppliers, and investors, ensuring compliance while enhancing efficiency and growth."
            services={ManufacturingAndIndustryLaw}
            contactDescription="📞 Contact SHLO Law Office today for expert legal support tailored to Ethiopia’s industrial and manufacturing sector. "
          />

          {/* Card 9 */}
          <PracticeAreaCard
            badge="NGO & Civil Society Organizations"
            subheading="Empowering Charities & Civil Society with Expert Legal Guidance"
            description="Nonprofit organizations and civil society groups play a vital role in Ethiopia's development, yet navigating regulatory compliance, governance, and financial accountability requires structured legal expertise. SHLO Law Office provides comprehensive legal support tailored to NGOs, charities, and advocacy groups, ensuring full compliance while enhancing operational efficiency."
            services={NGOAndCivilSocietyOrganizations}
            contactDescription="📞 Ready to make a lasting impact? Contact SHLO Law Office for a free consultation and ensure your nonprofit is built to last."
          />

          {/* Card 10 */}
          <PracticeAreaCard
            badge="Employment & Labor Law"
            subheading="Strategic Legal Solutions for Workforce Management & Compliance in Ethiopia"
            description="Managing a workforce in Ethiopia requires a thorough understanding of labor laws and employment regulations. Whether you're hiring locally or bringing in expatriates, SHLO Law Office ensures businesses remain compliant while fostering productive workplace environments. Our expertise covers employment contracts, HR policies, dispute resolution, and labor law compliance."
            services={EmploymentAndLaborLaw}
            contactDescription="📞 Contact SHLO Law Office today for expert legal support in employment and labor matters, ensuring compliance and workforce stability."
          />

          {/* Card 11 */}
          <PracticeAreaCard
            badge="Dispute Resolution, Litigation & Legal Representation"
            subheading="Expert Legal Advocacy in Courts, Tribunals, Administrative and Alternative Dispute Resolution"
            description="Legal disputes can disrupt operations, impact financial stability, and challenge contractual relationships. Whether through negotiation, arbitration, or courtroom litigation, SHLO Law Office provides strategic legal representation to resolve conflicts efficiently while protecting your interests."
            services={DisputeResolutionLitigationLegalRepresentation}
            contactDescription="📞 Resolve disputes with confidence—contact SHLO Law Office for personalized dispute resolution and litigation services."
          />

          {/* Card 12 */}
          <PracticeAreaCard
            badge="Healthcare Law"
            subheading="Legal Expertise for Healthcare Providers, Institutions & Medical Innovation in Ethiopia"
            description="Ethiopia's healthcare sector is evolving rapidly, with increasing regulatory demands and operational challenges. Whether you're managing a hospital, running a pharmaceutical business, or navigating compliance as a healthcare provider, SHLO Law Office ensures your legal matters are handled efficiently and in full compliance with national regulations."
            services={HealthcareLaw}
            contactDescription="📞 Ensure legal and operational excellence in healthcare—contact SHLO Law Office for dedicated healthcare legal support."
          />

          {/* Card 13 */}
          <PracticeAreaCard
            badge="Agriculture & Agribusiness Law"
            subheading="Expert Legal Solutions for Ethiopia's Growing Agricultural Sector"
            description="Agriculture remains the backbone of Ethiopia's economy, contributing significantly to GDP and employment. As agribusiness evolves with new investment opportunities, sustainability policies, and export regulations, businesses must navigate complex legal frameworks to secure operations and growth. SHLO Law Office provides specialized legal support to agribusiness investors, farmers, and supply chain stakeholders, ensuring compliance and strategic advantage."
            services={AgricultureAndAgribusinessLaw}
            contactDescription="📞 Contact SHLO Law Office today for strategic legal guidance tailored to Ethiopia’s agricultural and agribusiness sector."
          />

          {/* Card 14 */}
          <PracticeAreaCard
            badge="Property Law & Successions"
            subheading="Legal Solutions for Real Estate, Asset Protection, and Estate Planning in Ethiopia"
            description="Navigating property ownership and inheritance laws in Ethiopia requires strategic legal guidance to secure assets, execute transactions, and plan estates effectively. SHLO Law Office provides expert legal solutions for individuals, businesses, and investors, ensuring compliance and protecting property rights."
            services={PropertyLawAndSuccessions}
            contactDescription="📞 Contact SHLO Law Office today to secure your property rights and protect your legacy."
          />

          {/* Card 15 */}
          <PracticeAreaCard
            badge="FinTech Law"
            subheading="Empowering Financial Technology Innovators with Strategic Legal Solutions"
            description="The financial technology (FinTech) industry is transforming Ethiopia's economy, driving digital banking, mobile payments, and blockchain adoption. Navigating regulatory complexities, licensing requirements, and cybersecurity risks requires expert legal guidance. SHLO Law Office provides strategic FinTech legal solutions for startups, financial institutions, and investors, ensuring compliance and secure digital transactions."
            services={FinTechLaw}
            contactDescription="📞 Power the future of FinTech—contact SHLO Law Office for tailored legal solutions that keep your digital venture secure and compliant."
          />

          {/* Card 16 */}
          <PracticeAreaCard
            badge="International Trade & Commercial Law"
            subheading="Seamless Trade and Secure Transactions with Expert Legal Guidance"
            description="Ethiopia's dynamic commercial and trade environment offers vast opportunities across import and export markets, fueled by government policies and a strong domestic consumer base. Navigating international trade laws, customs regulations, and commercial contracts requires expert legal support to ensure compliance and mitigate risks. SHLO Law Office provides strategic legal solutions for businesses engaging in global trade."
            services={InternationalTradeAndCommercialLaw}
            contactDescription="📞 Optimize your global trade operations—contact SHLO Law Office to secure expert legal support for international commercial transactions."
          />
        </div>
      </div>
    </section>
  )
}

export default PracticeAreas