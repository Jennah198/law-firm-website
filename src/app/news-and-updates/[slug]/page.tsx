import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Clock } from "lucide-react"
import { newsItems } from "@/lib/new-and-updates"
import { slugify } from "@/lib/utils"
import { ContactSection } from "@/features/sections/contact-section"

type Params = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return newsItems.map((item) => ({ slug: slugify(item.title) }))
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params
  const item = newsItems.find((n) => slugify(n.title) === slug)
  return item ? { title: item.title, description: item.description } : {}
}

export default async function NewsDetailPage({ params }: Params) {
  const { slug } = await params
  const newsItem = newsItems.find((item) => slugify(item.title) === slug)
  if (!newsItem) notFound()

  const related = newsItems.filter((item) => item.title !== newsItem.title).slice(0, 3)

  return (
    <main>
      <article className="bg-background py-14 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <Link
              href="/news-and-updates"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary"
            >
              <ArrowLeft className="h-4 w-4" /> News &amp; Updates
            </Link>

            <header className="mt-8 max-w-3xl">
              <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wider">
                <span className="text-primary">{newsItem.category}</span>
                <span className="h-3 w-px bg-border" />
                <span className="flex items-center gap-1 font-normal normal-case tracking-normal text-muted-foreground">
                  <Clock className="h-3 w-3" /> {newsItem.readTime}
                </span>
              </div>
              <h1 className="mt-4 font-serif text-3xl font-semibold leading-tight text-secondary dark:text-foreground md:text-5xl">
                {newsItem.title}
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{newsItem.description}</p>
            </header>

            <div className="relative mt-10 aspect-[21/9] overflow-hidden bg-accent">
              <Image src={newsItem.image} alt="" fill priority sizes="(min-width: 1280px) 1152px, 100vw" className="object-cover" />
            </div>

            <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-3">
              <div className="space-y-10 lg:col-span-2">
                {newsItem.body ? (
                  newsItem.body.map((section) => (
                    <section key={section.heading}>
                      <h2 className="text-2xl font-semibold text-secondary dark:text-foreground">{section.heading}</h2>
                      {section.paragraphs?.map((p) => (
                        <p key={p} className="mt-4 leading-relaxed text-foreground/85">{p}</p>
                      ))}
                      {section.points && (
                        <div className="mt-6 space-y-6">
                          {section.points.map((pt) => (
                            <div key={pt.title} className="border-l-2 border-primary pl-5">
                              <h3 className="font-sans text-base font-semibold text-secondary dark:text-foreground">{pt.title}</h3>
                              <ul className="mt-2 space-y-2">
                                {pt.items.map((it) => (
                                  <li key={it} className="leading-relaxed text-muted-foreground">{it}</li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      )}
                    </section>
                  ))
                ) : (
                  <div className="border border-border bg-muted p-8">
                    <h2 className="text-2xl font-semibold text-secondary dark:text-foreground">How this may affect you</h2>
                    <p className="mt-4 leading-relaxed text-muted-foreground">
                      Our team is following this development closely. If you would like to understand how it affects
                      your business or investment, please get in touch for a tailored briefing.
                    </p>
                    <Link
                      href="/contact#scheduling"
                      className="mt-6 inline-flex rounded-sm bg-secondary px-6 py-3 text-sm font-semibold uppercase tracking-wider text-secondary-foreground hover:bg-primary"
                    >
                      Request a briefing
                    </Link>
                  </div>
                )}
                <p className="border-t border-border pt-6 text-xs text-muted-foreground">
                  This article is for general information only and does not constitute legal advice.
                </p>
              </div>

              <aside className="space-y-8">
                <div className="border border-border p-6">
                  <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-primary">Related</h2>
                  <ul className="mt-4 divide-y divide-border">
                    {related.map((item) => (
                      <li key={item.title} className="py-4 first:pt-0 last:pb-0">
                        <Link href={`/news-and-updates/${slugify(item.title)}`} className="group block">
                          <span className="text-xs text-muted-foreground">{item.category}</span>
                          <span className="mt-1 block font-serif font-semibold leading-snug text-secondary group-hover:text-primary dark:text-foreground">
                            {item.title}
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
