import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { NewsAndUpdates } from "@/features/sections/news-and-updates"
import { ContactSection } from "@/features/sections/contact-section"

export const metadata: Metadata = {
  title: "News & Updates",
  description: "Legal and regulatory developments affecting businesses and investors in Ethiopia.",
}

export default function NewsAndUpdatesPage() {
  return (
    <main>
      <PageHeader
        eyebrow="News & Updates"
        title="Legal developments in Ethiopia"
        description="Regulatory changes and market developments that matter to businesses and investors."
        image="/buildings.jpg"
      />
      <NewsAndUpdates showAllLink={false} />
      <ContactSection />
    </main>
  )
}
