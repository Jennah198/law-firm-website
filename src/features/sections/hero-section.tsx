import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Briefcase, Landmark, Scale } from "lucide-react"

const pillars = [
  { icon: Briefcase, title: "Corporate", text: "Formation, governance and transactions." },
  { icon: Landmark, title: "Investment", text: "Licensing, incentives and structuring." },
  { icon: Scale, title: "Disputes", text: "Litigation, arbitration and mediation." },
]

export function HeroSection() {
  return (
    <section className="bg-muted py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="eyebrow mb-5">Legal Solutions</p>
            <h2 className="font-serif text-3xl font-semibold leading-tight text-secondary dark:text-foreground md:text-5xl">
              Legal solutions for <span className="italic text-primary">corporate</span> &amp;{" "}
              <span className="italic text-primary">investment</span> success.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              A full-service Ethiopian law office providing comprehensive legal counsel with deep local expertise,
              practical judgment and a steady focus on results.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {pillars.map(({ icon: Icon, title, text }) => (
                <div key={title} className="border-l-2 border-primary pl-4">
                  <Icon className="mb-3 h-5 w-5 text-primary" />
                  <div className="font-serif text-lg font-semibold text-secondary dark:text-foreground">{title}</div>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{text}</p>
                </div>
              ))}
            </div>

            <Link
              href="/practice-areas-inner"
              className="mt-10 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-secondary transition-colors hover:text-primary dark:text-foreground"
            >
              Explore our practice areas <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -bottom-4 -right-4 h-full w-full border-2 border-primary" aria-hidden />
            <div className="relative aspect-[4/5] overflow-hidden bg-accent">
              <Image
                src="/sadam-hero.png"
                alt="Sadam Hussein, Founder & Principal Attorney"
                fill
                sizes="(min-width: 1024px) 448px, 90vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -left-4 bottom-8 bg-secondary px-5 py-4 text-secondary-foreground shadow-xl sm:-left-8">
              <div className="font-serif text-lg font-semibold">Sadam Hussein</div>
              <div className="text-xs uppercase tracking-wider text-brand-gold-400">Founder &amp; Principal Attorney</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
