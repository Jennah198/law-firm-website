import { notFound } from "next/navigation"
import { SERVICES_DATA } from "@/lib/services-data"
import { ContactSection } from "@/features/sections/contact-section"
import { Footer } from "@/components/footer"
import Image from "next/image"

type Params = { params: Promise<{ slug: string }> }

export default async function ServiceDetailPage({ params }: Params) {
  const { slug } = await params;
  const service = SERVICES_DATA.find((s) => s.slug === slug)
  
  if (!service) return notFound()

  // ✅ Array of your specific service images
  const serviceImages = [
    "/services/LegalRepresentation.jpg",
    "/services/CorporateGovernance.jpg",
    "/services/RiskManagement.jpg",
    "/services/LegalTraining.jpg",
    "/services/LegalConsulting.jpg",
    "/services/LegalDocumentsPreparation.jpg",
  ]

  // Get image based on service index, fallback to first image if not found
  const serviceIndex = SERVICES_DATA.findIndex(s => s.slug === slug)
  const serviceImage = serviceImages[serviceIndex] || serviceImages[0]

  return (
    <main className="min-h-screen bg-muted">
      <section id="inner-service" className="py-14">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div>
              <h5 className="text-2xl font-semibold mb-4 text-secondary">
                {service.title}
              </h5>
              <div className="mb-6">
                <div className="w-full h-56 bg-accent rounded-lg overflow-hidden">
                  <Image
                    src={serviceImage}
                    alt={`${service.title} illustration`}
                    width={600}
                    height={224}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="mb-8">
                <div className="text-base font-semibold mb-2 text-primary">
                  Overview:
                </div>
                <p className="text-foreground leading-relaxed">{service.overview}</p>
              </div>
            </div>
            <div className="md:pt-0">
              <div className="text-base font-semibold mb-2 text-primary">
                How We Add Value:
              </div>
              <p className="text-foreground leading-relaxed">{service.value}</p>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </main>
  )
}