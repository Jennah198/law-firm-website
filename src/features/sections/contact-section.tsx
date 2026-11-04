import Link from "next/link"
import { Phone } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="relative overflow-hidden bg-primary py-20 lg:py-24">
      <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full border-[40px] border-white/10" aria-hidden />
      <div className="container relative mx-auto px-4">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <h2 className="font-serif text-3xl font-semibold leading-tight text-brand-navy-950 md:text-4xl">
              Let SHLO secure your future.
            </h2>
            <p className="mt-4 leading-relaxed text-brand-navy-950/80">
              Every legal challenge is unique. With deep expertise across a wide range of practice areas, our strategic
              counsel and robust representation help you navigate Ethiopia&apos;s legal landscape with confidence — so
              you can focus on growth.
            </p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row lg:flex-col xl:flex-row">
            <Link
              href="/contact#scheduling"
              className="inline-flex items-center justify-center rounded-sm bg-brand-navy-950 px-7 py-4 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-secondary"
            >
              Book a Consultation
            </Link>
            <a
              href="tel:+251913693679"
              className="inline-flex items-center justify-center gap-2 rounded-sm border-2 border-brand-navy-950 px-7 py-4 text-sm font-semibold uppercase tracking-wider text-brand-navy-950 transition-colors hover:bg-brand-navy-950 hover:text-white"
            >
              <Phone className="h-4 w-4" /> +251 91 369 3679
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
