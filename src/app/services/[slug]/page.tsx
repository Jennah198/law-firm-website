import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { SERVICES_DATA } from "@/lib/services-data"
import { PageHeader } from "@/components/page-header"
import { ContactSection } from "@/features/sections/contact-section"

type Params = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return SERVICES_DATA.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params
  const service = SERVICES_DATA.find((s) => s.slug === slug)
  return service ? { title: service.title, description: service.summary } : {}
}

export default async function ServiceDetailPage({ params }: Params) {
  const { slug } = await params
  const service = SERVICES_DATA.find((s) => s.slug === slug)
  if (!service) notFound()

  return (
    <main>
      <PageHeader eyebrow="Services" title={service.title} image={service.image} />

      <section className="bg-background py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-3">
            <div className="space-y-12 lg:col-span-2">
              <div>
                <p className="eyebrow mb-5">Overview</p>
                <p className="text-lg leading-relaxed text-foreground/85">{service.overview}</p>
              </div>
              <div>
                <p className="eyebrow mb-5">How we add value</p>
                <p className="leading-relaxed text-foreground/85">{service.value}</p>
              </div>
            </div>

            <aside className="space-y-8">
              <div className="border border-border p-6">
                <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-primary">Our services</h2>
                <ul className="mt-4 space-y-3 text-sm">
                  {SERVICES_DATA.map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={`/services/${s.slug}`}
                        className={s.slug === slug ? "font-semibold text-primary" : "text-secondary hover:text-primary dark:text-foreground"}
                      >
                        {s.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-secondary p-6 text-secondary-foreground">
                <h2 className="font-serif text-xl font-semibold">Need assistance?</h2>
                <p className="mt-3 text-sm text-secondary-foreground/75">Speak with our team about your matter.</p>
                <Link
                  href="/contact#scheduling"
                  className="mt-5 inline-flex rounded-sm bg-primary px-5 py-3 text-xs font-semibold uppercase tracking-wider text-white hover:bg-brand-gold-600"
                >
                  Book a consultation
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <ContactSection />
    </main>
  )
}
