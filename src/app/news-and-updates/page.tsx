import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import { ContactSection } from "@/features/sections/contact-section"
import { NewsAndUpdates } from "@/features/sections/news-and-updates"

export default function NewsAndUpdatesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />  
        <NewsAndUpdates />
      <div className="pt-20">
      </div>
      <ContactSection />
      <Footer />
    </main>
  )
}
