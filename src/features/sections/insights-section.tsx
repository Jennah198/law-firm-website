import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Calendar } from "lucide-react"
import { insightsData } from "@/lib/insights"
import { cn } from "@/lib/utils"

export function InsightsSection() {
  return (
    <section id="insights" className="bg-background py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 max-w-2xl">
            <p className="eyebrow mb-5">Insights</p>
            <h2 className="section-title">Perspectives on law, business &amp; investment</h2>
            <p className="section-lead mt-4">
              Our insights turn complexity into clarity, helping you make informed decisions with thought leadership
              tailored to your industry.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-6">
            {insightsData.map((insight, i) => (
              <Link
                key={insight.slug}
                href={`/insights/${insight.slug}`}
                className={cn(
                  "group flex flex-col overflow-hidden border border-border bg-card transition-all duration-300 hover:border-primary hover:shadow-xl",
                  i < 2 ? "md:col-span-3" : "md:col-span-2"
                )}
              >
                <div className={cn("relative overflow-hidden bg-accent", i < 2 ? "aspect-[16/9]" : "aspect-[16/10]")}>
                  <Image
                    src={insight.image}
                    alt=""
                    fill
                    sizes={i < 2 ? "(min-width: 768px) 50vw, 100vw" : "(min-width: 768px) 33vw, 100vw"}
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 bg-background/95 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary">
                    {insight.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Calendar className="h-3.5 w-3.5" /> {insight.date} · {insight.author}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold leading-snug text-secondary group-hover:text-primary dark:text-foreground">
                    {insight.title}
                  </h3>
                  <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {insight.overview}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                    Read insight
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
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
