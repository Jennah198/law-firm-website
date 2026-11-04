import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { InsightsSection } from "@/features/sections/insights-section"
import { ContactSection } from "@/features/sections/contact-section"

export const metadata: Metadata = {
  title: "Insights",
  description: "Expert perspectives on corporate, investment and regulatory law in Ethiopia.",
}

export default function InsightsPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Insights"
        title="Thought leadership from our legal team"
        description="Clear, practical analysis of the legal issues shaping business and investment in Ethiopia."
        image="/insights/journal.jpg"
      />
      <InsightsSection />
      <ContactSection />
    </main>
  )
}
