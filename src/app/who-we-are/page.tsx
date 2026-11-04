import type { Metadata } from "next"
import Image from "next/image"
import { Award, Lightbulb, Scale, ShieldCheck } from "lucide-react"
import { PageHeader } from "@/components/page-header"
import { Teams } from "@/features/sections/Teams"
import { ContactSection } from "@/features/sections/contact-section"

export const metadata: Metadata = {
  title: "About Us",
  description:
    "SHLO is a full-service Ethiopian law office delivering strategic, high-calibre legal solutions for businesses, investors and institutions.",
}

const values = [
  { icon: Scale, title: "Justice", text: "We uphold the highest standards of justice in every matter we handle." },
  { icon: Award, title: "Excellence", text: "Precision, strategic foresight and unwavering professionalism." },
  { icon: ShieldCheck, title: "Integrity", text: "Relationships built on trust, transparency and candour." },
  { icon: Lightbulb, title: "Innovation", text: "Practical solutions designed for immediate implementation." },
]

export default function WhoWeArePage() {
  return (
    <main>
      <PageHeader
        eyebrow="About Us"
        title="Empowering success with justice"
        description="Strategic legal solutions for corporate and investment ambitions."
        image="/shOfficeFront.jpg"
      />

      <section className="bg-background py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5] overflow-hidden bg-accent lg:sticky lg:top-32">
                <Image
                  src="/sadam-welcome-detail.png"
                  alt="Sadam Hussein Law Office"
                  fill
                  priority
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-7">
              <p className="eyebrow mb-5">Who We Are</p>
              <h2 className="section-title">Welcome to Sadam Hussein Law Office</h2>
              <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted-foreground">
                <p>
                  At SHLO, a full-service Ethiopian law office, we are committed to delivering strategic, high-calibre
                  legal solutions that drive success for businesses, investors and institutions. Founded by Sadam
                  Hussein, our office has built a strong reputation as a trusted legal advocate, providing expert
                  guidance and representation across a broad spectrum of practice areas.
                </p>
                <p>
                  With deep expertise in Ethiopia&apos;s legal and regulatory landscape, we serve both domestic and
                  international clients, offering counsel in corporate and investment law, fintech and financial
                  services, capital markets, taxation and customs, international trade, mergers and acquisitions, real
                  estate, intellectual property, healthcare, agriculture, mining and energy, labour and employment,
                  immigration, hospitality, alternative dispute resolution and nonprofit advocacy.
                </p>
                <p>
                  Our clientele includes start-ups, SMEs, multinational corporations, government entities and private
                  investors. Recognising that every client has unique goals and challenges, we tailor our services to
                  provide comprehensive solutions.
                </p>
                <p>
                  To further enhance our service, SHLO has established strategic partnerships with professionals in
                  finance, tax, technology, engineering and healthcare — so that our clients receive not only
                  specialised legal expertise but also innovative solutions designed for long-term success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-20 text-secondary-foreground lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow mb-5 text-brand-gold-400 before:bg-brand-gold-400">Our Values</p>
            <h2 className="font-serif text-3xl font-semibold md:text-4xl">The principles that guide our work</h2>
            <div className="mt-12 grid grid-cols-1 gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
              {values.map(({ icon: Icon, title, text }) => (
                <div key={title} className="bg-secondary p-8">
                  <Icon className="h-7 w-7 text-brand-gold-400" />
                  <h3 className="mt-5 text-xl font-semibold">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-secondary-foreground/75">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Teams />
      <ContactSection />
    </main>
  )
}
