import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { PracticeAreasInner } from "@/features/sections/practice-areas-inner"
import LegalTopicsGrid from "@/features/sections/legal-topics-grid"
import { ContactSection } from "@/features/sections/contact-section"

export const metadata: Metadata = {
  title: "All Practice Areas",
  description: "Sixteen practice areas spanning investment, corporate, tax, energy, healthcare, fintech and more.",
}

export default function PracticeAreasInnerPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Practice Areas"
        title="Sixteen practice areas. One trusted partner."
        description="Comprehensive guidance and representation across the sectors driving Ethiopia's economy."
        image="/practice-areas/itc.jpg"
      />
      <PracticeAreasInner />
      <LegalTopicsGrid />
      <ContactSection />
    </main>
  )
}
