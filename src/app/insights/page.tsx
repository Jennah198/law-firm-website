import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { InsightsSection } from "@/features/sections/insights-section"

export default function InsightsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-20">
        <InsightsSection />
      </div>
      <Footer />
    </main>
  )
}
