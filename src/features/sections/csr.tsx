import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function CsrPage() {
  const csrInitiatives = [
    {
      title: "Ethiopia begins selling stakes in state-owned company",
      description:
        "Ethiopia's state-owned telecommunications company has started selling shares to the public, in a move aimed at establishing a new national stock market.",
      image: "/assets.jpg",
      category: "Corporate Law",
      link: "/csr/ethiopia-company-stakes",
    },
    {
      title: "Government to Levy Tax on Social Media Income",
      description:
        "Stay informed about the latest changes in employment legislation, workplace policies, and employee rights. Our expert analysis helps employers understand their obligations and implement compliant practices in today's dynamic work environment.",
      image: "/practice-areas/EmploymentandLabor.jpg",
      category: "Employment Law",
      link: "/csr/employment-law-updates",
    },
    {
      title: "Real Estate Transactions: A Complete Legal Framework",
      description:
        "Explore the intricacies of real estate law with our detailed overview of property transactions, contract negotiations, due diligence processes, and risk mitigation strategies for both commercial and residential real estate deals.",
      image: "/realstates.jpg",
      category: "Real Estate Law",
      link: "/csr/real-estate-framework",
    },
  ]

  return (
    <section id="csr" className="py-20 bg-[hsl(var(--muted))]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[hsl(var(--secondary))] mb-6">
            Corporate Social Responsibility
          </h2>
          <div className="max-w-4xl mx-auto space-y-4">
            <p className="text-lg text-[hsl(var(--muted-foreground))] leading-relaxed">
              Read expert insights on a variety of legal topics. From business and family law to criminal defense, get the knowledge you need to stay informed.
            </p>
          </div>
        </div>

        {/* CSR Grid - 3 cards in a row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {csrInitiatives.map((csr, index) => (
            <Card
              key={index}
              className="border-0 shadow-md bg-[hsl(var(--card))] rounded-xl cursor-pointer transition-all duration-300 border border-[hsl(var(--border))]"
            >
              <CardContent className="p-6 flex flex-col h-full">
                {/* Rectangular Image */}
                <div className="relative mb-6">
                  <div className="w-full h-48 rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src={csr.image || "/placeholder.svg"}
                      alt={csr.title}
                      width={300}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute top-3 left-3">
                    <span className="bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] text-xs font-semibold px-3 py-1 rounded-full">
                      {csr.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="text-left flex-1 flex flex-col">
                  {/* <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-[hsl(var(--muted-foreground))]">
                      {csr.readTime}
                    </span>
                  </div> */}

                  <h3 className="text-xl font-semibold text-[hsl(var(--secondary))] mb-3 leading-tight">
                    {csr.title}
                  </h3>

                  <p className="text-[hsl(var(--muted-foreground))] leading-relaxed text-sm mb-6 flex-1">
                    {csr.description}
                  </p>

                  {/* Read More Link Button - Now at equal height for all cards */}
                  <div className="mt-auto pt-4">
                    <Link href={csr.link}>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-2 border-[hsl(var(--primary))] text-[hsl(var(--primary))] hover:bg-[hsl(var(--secondary))] hover:text-white hover:border-[hsl(var(--secondary))] px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 bg-transparent w-auto"
                      >
                        Read More
                      </Button>                      
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Centered See More Button */}
        <div className="text-center">
          <Link
            href="/csr"
            className="inline-block px-8 py-2 rounded-lg font-medium bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] transition-colors hover:bg-[hsl(var(--secondary))] hover:text-white text-lg"
          >
            See more CSR →
          </Link>
        </div>
      </div>
    </section>
  )
}