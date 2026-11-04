import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { csrInitiatives } from "@/lib/csr"

export function Csr() {
  return (
    <section id="csr" className="bg-background py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="eyebrow mb-5 justify-center">Corporate Social Responsibility</p>
            <h2 className="section-title">Committed to our community</h2>
            <p className="section-lead mt-4">
              We believe lawyers carry a special responsibility to contribute to society — through pro bono work,
              research partnerships and environmental stewardship.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {csrInitiatives.map((item) => (
              <Link
                key={item.id}
                href={`/csr#${item.id}`}
                className="group relative flex min-h-[420px] flex-col justify-end overflow-hidden bg-secondary"
              >
                <Image
                  src={item.image}
                  alt=""
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover opacity-70 transition-all duration-500 group-hover:scale-105 group-hover:opacity-50"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-950 via-brand-navy-950/50 to-transparent" />
                <div className="relative p-7 text-white">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-gold-400">{item.category}</p>
                  <h3 className="mt-2 text-2xl font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/80">{item.summary}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-gold-400">
                    Read more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Csr
