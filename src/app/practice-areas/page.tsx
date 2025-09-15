import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PracticeAreas } from "@/features/sections/practice-areas"

export default function PracticeAreasPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-20">
        <PracticeAreas />
      </div>
      <Footer />
    </main>
  )
}
