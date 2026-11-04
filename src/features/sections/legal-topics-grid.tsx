
export default function LegalTopicsGrid() {
  const topics = [
    [
      "Agency",
      "Agricultural Resources",
      "Alternative Dispute Resolution",
      "Alternative Financing",
      "Art and Cultural Heritage",
      "Aviation",
      "Venture Capital",
      "Natural Resources",
      "Insolvency and Restructuring",
      "Manufacturing",
      "Media",
      "Real Estate",
      "Sports and Entertainment",
      "Taxation",
    ],
    [
      "Banking and Insurance",
      "Competition",
      "Construction",
      "Consumer Protection",
      "Corporate",
      "Cyber Regulation",
      "Data Protection",
      "Distribution",
      "Intellectual Property and Licensing",
      "International Trade and Investment",
      "Privacy",
      "Public and Administrative Law",
      "Public Procurement",
      "Technology and Innovation",
    ],
    [
      "Employment and Immigration",
      "Energy",
      "Environmental and Sustainability",
      "Finance",
      "Food and Beverage",
      "Franchising",
      "Healthcare and Life Sciences",
      "Hospitality and Leisure",
      "Mining",
      "Non-governmental Organizations",
      "Oil and Gas",
      "Telecommunication Regulation",
      "Transportation and Logistics",
    ],
  ];

  const all = topics.flat().sort((a, b) => a.localeCompare(b))

  return (
    <section className="bg-muted py-20 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 max-w-2xl">
            <p className="eyebrow mb-5">Sectors &amp; Topics</p>
            <h2 className="section-title">Areas in which we advise</h2>
            <p className="section-lead mt-4">A broader view of the industries and legal topics our team regularly handles.</p>
          </div>
          <ul className="grid grid-cols-1 gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
            {all.map((topic) => (
              <li
                key={topic}
                className="flex items-center gap-3 border-b border-border py-3 text-sm font-medium text-secondary dark:text-foreground"
              >
                <span className="h-1.5 w-1.5 shrink-0 bg-primary" /> {topic}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
