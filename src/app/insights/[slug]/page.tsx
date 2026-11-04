import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, Check, Quote, User } from "lucide-react"
import { insightsData } from "@/lib/insights"
import { ContactSection } from "@/features/sections/contact-section"

type Params = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return insightsData.map((i) => ({ slug: i.slug }))
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params
  const insight = insightsData.find((i) => i.slug === slug)
  return insight ? { title: insight.title, description: insight.overview } : {}
}

export default async function InsightDetailPage({ params }: Params) {
  const { slug } = await params
  const insight = insightsData.find((i) => i.slug === slug)
  if (!insight) notFound()

  const related = insightsData.filter((i) => i.slug !== slug).slice(0, 3)

  return (
    <main>
      <article className="bg-background py-14 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <Link href="/insights" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary">
              <ArrowLeft className="h-4 w-4" /> All insights
            </Link>

            <header className="mt-8 max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-wider text-primary">{insight.category}</p>
              <h1 className="mt-4 font-serif text-3xl font-semibold leading-tight text-secondary dark:text-foreground md:text-5xl">
                {insight.title}
              </h1>
              <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
                <span className="flex items-center gap-2"><Calendar className="h-4 w-4" /> {insight.date}</span>
                <span className="flex items-center gap-2"><User className="h-4 w-4" /> {insight.author}</span>
              </div>
            </header>

            <div className="relative mt-10 aspect-[21/9] overflow-hidden bg-accent">
              <Image src={insight.image} alt="" fill priority sizes="(min-width: 1280px) 1152px, 100vw" className="object-cover" />
            </div>

            <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-3">
              <div className="space-y-10 lg:col-span-2">
                <section>
                  <h2 className="text-2xl font-semibold text-secondary dark:text-foreground">Overview</h2>
                  <p className="mt-4 text-lg leading-relaxed text-foreground/85">{insight.overview}</p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-secondary dark:text-foreground">Key changes</h2>
                  <ul className="mt-5 space-y-3">
                    {insight.keyChanges.map((point) => (
                      <li key={point} className="flex gap-3 leading-relaxed text-foreground/85">
                        <Check className="mt-1 h-4 w-4 shrink-0 text-primary" /> {point}
                      </li>
                    ))}
                  </ul>
                </section>

                <section className="relative bg-secondary p-8 text-secondary-foreground">
                  <Quote className="h-8 w-8 text-brand-gold-400" />
                  <h2 className="sr-only">Expert insight</h2>
                  <p className="mt-4 font-serif text-xl italic leading-relaxed">{insight.expertInsight}</p>
                  <p className="mt-4 text-sm text-brand-gold-400">— {insight.author}</p>
                </section>

                <p className="border-t border-border pt-6 text-xs text-muted-foreground">
                  This insight is for general information only and does not constitute legal advice.
                </p>
              </div>

              <aside className="space-y-8">
                <div className="bg-muted p-6">
                  <h2 className="font-serif text-xl font-semibold text-secondary dark:text-foreground">Need tailored advice?</h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    Speak with our team about how these developments affect your organisation.
                  </p>
                  <Link
                    href="/contact#scheduling"
                    className="mt-5 inline-flex rounded-sm bg-secondary px-5 py-3 text-xs font-semibold uppercase tracking-wider text-secondary-foreground hover:bg-primary"
                  >
                    Book a consultation
                  </Link>
                </div>

                <div className="border border-border p-6">
                  <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-primary">Related insights</h2>
                  <ul className="mt-4 divide-y divide-border">
                    {related.map((r) => (
                      <li key={r.slug} className="py-4 first:pt-0 last:pb-0">
                        <Link href={`/insights/${r.slug}`} className="group block">
                          <span className="text-xs text-muted-foreground">{r.date}</span>
                          <span className="mt-1 block font-serif font-semibold leading-snug text-secondary group-hover:text-primary dark:text-foreground">
                            {r.title}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </article>
      <ContactSection />
    </main>
  )
}
