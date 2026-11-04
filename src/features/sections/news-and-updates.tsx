import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Clock } from "lucide-react"
import { slugify } from "@/lib/utils"
import { newsItems } from "@/lib/new-and-updates"

export function NewsAndUpdates({ showAllLink = true, limit }: { showAllLink?: boolean; limit?: number }) {
  const items = limit ? newsItems.slice(0, limit) : newsItems
  return (
    <section id="news-and-updates" className="bg-muted py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="eyebrow mb-5">News &amp; Updates</p>
              <h2 className="section-title">Legal developments in Ethiopia</h2>
              <p className="section-lead mt-4">
                Stay informed about regulatory changes and market developments affecting businesses and investors.
              </p>
            </div>
            {showAllLink && (
            <Link
              href="/news-and-updates"
              className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold uppercase tracking-wider text-secondary transition-colors hover:text-primary dark:text-foreground"
            >
              All news <ArrowRight className="h-4 w-4" />
            </Link>
            )}
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {items.map((item) => (
              <Link key={item.title} href={`/news-and-updates/${slugify(item.title)}`} className="group flex flex-col">
                <div className="relative aspect-[16/10] overflow-hidden bg-accent">
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center gap-3 pt-5 text-xs font-semibold uppercase tracking-wider">
                  <span className="text-primary">{item.category}</span>
                  <span className="h-3 w-px bg-border" />
                  <span className="flex items-center gap-1 font-normal normal-case tracking-normal text-muted-foreground">
                    <Clock className="h-3 w-3" /> {item.readTime}
                  </span>
                </div>
                <h3 className="mt-3 text-xl font-semibold leading-snug text-secondary transition-colors group-hover:text-primary dark:text-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
