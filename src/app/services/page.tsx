import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { SERVICES_DATA } from "@/lib/services-data"

export default function ServicesPage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#e6e2eb" }}>
      <section className="py-14">
        <div className="max-w-4xl mx-auto px-4">
          <h4 className="text-center text-xl font-semibold mb-3" style={{ color: "#23345b" }}>
            sadam hussein law office (ShLO)
          </h4>
          <h3 className="text-center text-3xl font-bold mb-6" style={{ color: "#947458" }}>
            legal services
          </h3>
          <p className="text-center max-w-3xl mx-auto text-base text-gray-700 leading-relaxed mb-10">
            We provide comprehensive, business-conscious legal services designed to protect your interests and enable
            growth. Our team blends deep expertise with practical experience to deliver clear, timely, and effective
            guidance across key areas of law. Partner with us to navigate complexity with confidence and clarity.
          </p>

          <div className="space-y-8">
            {SERVICES_DATA.map((svc) => (
              <Card
                key={svc.slug}
                className="group transition-colors rounded-xl border border-[#947458] hover:bg-[#23345b] hover:border-[#23345b]"
              >
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center min-h-[260px]">
                    <div>
                      <h6 className="text-base font-semibold mb-2 text-[#23345b] transition-colors group-hover:text-white">
                        {svc.title}
                      </h6>
                      <p className="text-gray-700 mb-4 transition-colors group-hover:text-white line-clamp-2">
                        {svc.summary}
                      </p>
                      <Link
                        href={`/services/${svc.slug}`}
                        className="inline-block px-4 py-2 rounded-md text-white transition-colors bg-[#23345b] group-hover:bg-[#947458]"
                      >
                        Details
                      </Link>
                    </div>
                    <div className="md:justify-self-end">
                      <div className="w-64 h-40 bg-gray-100 border border-dashed border-gray-300 flex items-center justify-center">
                        <span className="text-gray-400 group-hover:text-white">Image Placeholder</span>
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
              className="inline-block px-6 py-3 rounded-md font-medium"
              style={{ backgroundColor: "#cfcbd4", color: "#23345b" }}
            >
              Explore More Services →
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}