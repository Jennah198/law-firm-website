import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ContactSection } from "@/features/sections/contact-section"
import { SchedulingSection } from "@/features/sections/scheduling-section"

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-20">
        <ContactSection />
        <SchedulingSection />
      </div>
      <Footer />
    </main>
  )
}
