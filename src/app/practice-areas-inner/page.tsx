import { PracticeAreasInner } from "@/features/sections/practice-areas-inner"
import LegalTopicsGrid from "@/features/sections/legal-topics-grid";
import { ContactSection } from "@/features/sections/contact-section"
import { Footer } from "@/components/footer"

export default function PracticeAreasInnerPage() {
  return (
    <main className="min-h-screen">
      <PracticeAreasInner />
      <LegalTopicsGrid />
      <ContactSection />
      <Footer />
    </main>
  )
}
