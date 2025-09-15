import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhoWeAreSection } from "@/features/sections/who-we-are-section"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-20">
        <WhoWeAreSection />
      </div>
      <Footer />
    </main>
  )
}
