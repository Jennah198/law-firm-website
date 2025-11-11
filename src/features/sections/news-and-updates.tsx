import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { slugify } from "@/lib/utils"

export function NewsAndUpdates() {
  const newsItems = [
    {
      title: "Ethiopia begins selling stakes in state-owned company",
      description:
        "Ethiopia&apos;s state-owned telecommunications company has started selling shares to the public, in a move aimed at establishing a new national stock market.",
      image: "/intelectualproperty.jpg",
      category: "Corporate Law",
      readTime: "5 min read",
    },
    {
      title: "Government to Levy Tax on Social Media Income",
      description:
        "Ethiopia&apos;s Social Media Tax targets TikTok too. Social Media. By: Getahun Tsegaye Staff Reporter. Addis Ababa, Ethiopia – Ethiopia plans to...",
      image: "/EmploymentandLabor.jpg",
      category: "Employment Law",
      readTime: "7 min read",
    },
    {
      title: "Ethiopia enacts long-awaited startup law to boost digital economy",
      description:
        "Ethiopia has finally approved its long-anticipated startup law, marking a pivotal moment for the country&apos;s growing tech and innovation landscape.",
      image: "/realstates.jpg",
      category: "Real Estate Law",
      readTime: "6 min read",
    },
  ]

  return (
    <section id="news-and-updates" className="py-20 bg-[hsl(var(--muted))]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[hsl(var(--secondary))] mb-6">
            News & Updates
          </h2>
          <div className="max-w-4xl mx-auto space-y-4">
            <p className="text-xl text-[hsl(var(--muted-foreground))] leading-relaxed">
              Read expert insights on a variety of legal topics. From business and family law to criminal defense, get the knowledge you need to stay informed.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((newsItem, index) => (
            <Card
              key={index}
              className="border-0 shadow-md bg-[hsl(var(--card))] rounded-xl cursor-pointer transition-all duration-300 border border-[hsl(var(--border))]"
            >
              <CardContent className="p-6">
                <div className="relative mb-6">
                  <div className="w-full h-48 rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src={newsItem.image || "/placeholder.svg"}
                      alt={newsItem.title}
                      width={300}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute top-3 left-3">
                    <span className="bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] text-xs font-semibold px-3 py-1 rounded-full">
                      {newsItem.category}
                    </span>
                  </div>
                </div>

                <div className="text-left">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-[hsl(var(--muted-foreground))]">
                      {newsItem.readTime}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-[hsl(var(--secondary))] mb-3 leading-tight">
                    {newsItem.title}
                  </h3>

                  <p className="text-[hsl(var(--muted-foreground))] leading-relaxed text-sm mb-6">
                    {newsItem.description}
                  </p>

                  {/* ✅ Dynamic Read More Button */}
                  <Link href={`/news-and-updates/${slugify(newsItem.title)}`}>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-2 border-[hsl(var(--primary))] text-[hsl(var(--primary))] hover:bg-[hsl(var(--secondary))] hover:text-white hover:border-[hsl(var(--secondary))] px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 bg-transparent"
                    >
                      Read More
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}