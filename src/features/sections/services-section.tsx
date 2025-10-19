import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { SERVICES_DATA } from "@/lib/services-data"
import Image from "next/image"

export function ServicesSection() {
  // Different placeholder images for each service
  const placeholderImages = [
  "/services/LegalRepresentation.jpg",
  "/services/CorporateGovernance.jpg",
  "/services/RiskManagement.jpg",
  "/services/LegalTraining.jpg",
  "/services/LegalConsulting.jpg",
  "/services/LegalDocumentsPreparation.jpg",
]

  return (
    <section
      id="services"
      className="py-20 bg-[hsl(var(--muted))]"
    >
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-center text-3xl font-semibold mb-3 text-[hsl(var(--secondary))]">
          Sadam Hussein Law Office (SHLO)
        </h1>
        <h2 className="text-center text-3xl font-bold mb-6 text-[hsl(var(--primary))]">
          Legal Services
        </h2>
        <p className="text-center max-w-3xl mx-auto text-base text-[hsl(var(--muted-foreground))] leading-relaxed mb-10">
          We deliver comprehensive legal solutions across diverse industries, empowering businesses, investors, and organizations to operate with confidence. Our expertise spans traditional sectors and emerging fields, combining regulatory insight with practical business understanding. Explore our core practice areas below:
        </p>

        <div className="space-y-8">
          {SERVICES_DATA.map((svc, index) => (
            <Card
              key={svc.slug}
              className="group transition-colors rounded-xl border border-[hsl(var(--primary))] hover:bg-[hsl(var(--secondary))] hover:border-[hsl(var(--secondary))]"
            >
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center min-h-[180px]"> {/* Reduced height */}
                  <div>
                    <h6 className="text-base font-semibold mb-2 text-[hsl(var(--secondary))] transition-colors group-hover:text-white">
                      {svc.title}
                    </h6>
                    <p className="text-[hsl(var(--muted-foreground))] mb-4 transition-colors group-hover:text-white line-clamp-2">
                      {svc.summary}
                    </p>
                    <Link
                      href={`/services/${svc.slug}`}
                      className="inline-block px-4 py-2 rounded-md text-white transition-colors bg-[hsl(var(--secondary))] group-hover:bg-[hsl(var(--primary))]"
                    >
                      Details
                    </Link>
                  </div>
                  <div className="md:justify-self-end">
                    <div className="w-64 h-32 bg-[hsl(var(--muted))] rounded-lg overflow-hidden"> {/* Reduced height */}
                      <Image
                        src={placeholderImages[index] || "/images/legal-service.jpg"}
                        alt={`${svc.title} illustration`}
                        width={256}
                        height={128}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-block px-6 py-3 rounded-md font-medium bg-[hsl(var(--accent))] text-[hsl(var(--secondary))] transition-colors hover:bg-[#2F3A56] hover:text-white"
          >
            Explore More Services →
          </Link>
        </div>
      </div>
    </section>
  )
}