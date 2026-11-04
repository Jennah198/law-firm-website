import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { SERVICES_DATA } from "@/lib/services-data"

export function ServicesSection({ showAllLink = true }: { showAllLink?: boolean }) {
  return (
    <section id="services" className="bg-muted py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-14 flex max-w-6xl flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow mb-5">Our Services</p>
            <h2 className="section-title">Comprehensive legal services</h2>
            <p className="section-lead mt-4">
              We empower businesses, investors and organisations to operate with confidence, combining regulatory
              insight with a practical understanding of business.
            </p>
          </div>
          {showAllLink && (
          <Link
            href="/services"
            className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold uppercase tracking-wider text-secondary transition-colors hover:text-primary dark:text-foreground"
          >
            All services <ArrowRight className="h-4 w-4" />
          </Link>
          )}
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES_DATA.map((svc, i) => (
            <Link
              key={svc.slug}
              href={`/services/${svc.slug}`}
              className="group flex flex-col overflow-hidden border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-xl"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-accent">
                {svc.image && (
                  <Image
                    src={svc.image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}
                <span className="absolute left-0 top-0 bg-secondary px-3 py-1.5 font-serif text-sm text-secondary-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-semibold leading-snug text-secondary dark:text-foreground">{svc.title}</h3>
                <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-muted-foreground">{svc.summary}</p>
                <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                  Learn more
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
