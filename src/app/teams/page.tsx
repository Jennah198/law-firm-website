import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Teams } from "@/features/sections/Teams"

export default function TeamsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-20">
        <Teams />
      </div>
      <Footer />
    </main>
  )
}
