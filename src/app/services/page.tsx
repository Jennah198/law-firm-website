import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { SERVICES_DATA } from "@/lib/services-data"

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-muted">
      <section className="py-14">
        <div className="max-w-4xl mx-auto px-4">
          <h4 className="text-center text-xl font-semibold mb-3 text-secondary">
            sadam hussein law office (ShLO)
          </h4>
          <h3 className="text-center text-3xl font-bold mb-6 text-primary">
            legal services
          </h3>
          <p className="text-center max-w-3xl mx-auto text-base text-muted-foreground leading-relaxed mb-10">
            We provide comprehensive, business-conscious legal services designed to protect your interests and enable
            growth. Our team blends deep expertise with practical experience to deliver clear, timely, and effective
            guidance across key areas of law. Partner with us to navigate complexity with confidence and clarity.
          </p>

          <div className="space-y-8">
            {SERVICES_DATA.map((svc) => (
              <Card
                key={svc.slug}
                className="group transition-colors rounded-xl border border-primary hover:bg-secondary hover:border-secondary"
              >
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center min-h-[260px]">
                    <div>
                      <h6 className="text-base font-semibold mb-2 text-secondary transition-colors group-hover:text-secondary-foreground">
                        {svc.title}
                      </h6>
                      <p className="text-muted-foreground mb-4 transition-colors group-hover:text-secondary-foreground line-clamp-2">
                        {svc.summary}
                      </p>
                      <Link
                        href={`/services/${svc.slug}`}
                        className="inline-block px-4 py-2 rounded-md text-secondary-foreground transition-colors bg-secondary group-hover:bg-primary group-hover:text-primary-foreground"
                      >
                        Details
                      </Link>
                    </div>
                    <div className="md:justify-self-end">
                      <div className="w-64 h-40 bg-accent border border-dashed border-border flex items-center justify-center">
                        <span className="text-muted-foreground group-hover:text-secondary-foreground">Image Placeholder</span>
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
              className="inline-block px-6 py-3 rounded-md font-medium bg-accent text-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Explore More Services →
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}