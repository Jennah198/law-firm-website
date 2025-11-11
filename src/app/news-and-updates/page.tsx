import { Footer } from "@/components/footer"
import { ContactSection } from "@/features/sections/contact-section"
import { NewsAndUpdates } from "@/features/sections/news-and-updates"

export default function NewsAndUpdatesPage() {
  return (
    <main className="min-h-screen">
        <NewsAndUpdates />
      <div className="pt-20">
      </div>
      <ContactSection />
      <Footer />
    </main>
  )
}
