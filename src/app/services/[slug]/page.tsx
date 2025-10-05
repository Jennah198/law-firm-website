import { notFound } from "next/navigation"
import { SERVICES_DATA } from "@/lib/services-data"
import { ContactSection } from "@/features/sections/contact-section"
import { Footer } from "@/components/footer"

type Params = { params: Promise<{ slug: string }> }

export default async function ServiceDetailPage({ params }: Params) {
  const { slug } = await params; // Add 'await' here
  const service = SERVICES_DATA.find((s) => s.slug === slug) // Use 'slug' instead of 'params.slug'
  
  if (!service) return notFound()

  return (
    <main className="min-h-screen" style={{ backgroundColor: "#e6e2eb" }}>
      <section className="py-14">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div>
              <h5 className="text-2xl font-semibold mb-4" style={{ color: "#23345b" }}>
                {service.title}
              </h5>
              <div className="mb-6">
                <div className="w-full h-56 bg-gray-100 border border-dashed border-gray-300 flex items-center justify-center">
                  <span className="text-gray-400">Image Placeholder</span>
                </div>
              </div>
              <div className="mb-8">
                <div className="text-base font-semibold mb-2" style={{ color: "#947458" }}>
                  Overview:
                </div>
                <p className="text-gray-800 leading-relaxed">{service.overview}</p>
              </div>
            </div>
            <div className="md:pt-0">
              <div className="text-base font-semibold mb-2" style={{ color: "#947458" }}>
                How We Add Value:
              </div>
              <p className="text-gray-800 leading-relaxed">{service.value}</p>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </main>
  )
}