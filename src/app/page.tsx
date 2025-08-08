import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/features/sections/hero-section"
import { WhoWeAreSection } from "@/features/sections/who-we-are-section"
import { ServicesSection } from "@/features/sections/services-section"
import { TeamSection } from "@/features/sections/team-section"
import { PartnersSection } from "@/features/sections/partners-section"
import { ClientsSection } from "@/features/sections/clients-section"
import { SchedulingSection } from "@/features/sections/scheduling-section"
import { InsightsSection } from "@/features/sections/insights-section"
import { FaqSection } from "@/features/sections/faq-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-brand-page-bg">
      <Navigation />
      <HeroSection />
      <WhoWeAreSection />
      <ServicesSection />
      <TeamSection />
      <PartnersSection />
      <ClientsSection />
      <SchedulingSection />
      <InsightsSection />
      <FaqSection />
      <Footer />
    </main>
  )
}
