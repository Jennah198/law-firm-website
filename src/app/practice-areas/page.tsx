import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { PracticeAreas } from "@/features/sections/practice-areas"
import { ContactSection } from "@/features/sections/contact-section"

export const metadata: Metadata = {
  title: "Practice Areas",
  description: "Investment, corporate, tax and customs law and more — legal expertise across Ethiopia's key sectors.",
}

export default function PracticeAreasPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Practice Areas"
        title="Expertise across Ethiopia's key sectors"
        description="Strategic legal support for investors, businesses, individuals and organisations."
        image="/practice-areas/corporate.jpg"
      />
      <PracticeAreas />
      <ContactSection />
    </main>
  )
}
