import { Navigation } from "@/components/navigation"
import { HeroSlider } from "@/features/sections/hero-slider"
import { HeroSection } from "@/features/sections/hero-section"
import { WhoWeAreSection } from "@/features/sections/who-we-are-section"
import { ServicesSection } from "@/features/sections/services-section"
import { PracticeAreas } from "@/features/sections/practice-areas"
import { Teams } from "@/features/sections/Teams"
import { SchedulingSection } from "@/features/sections/scheduling-section"
import { PartnersSection } from "@/features/sections/partners-section"
import { ClientsSection } from "@/features/sections/clients-section"
import { InsightsSection } from "@/features/sections/insights-section"
import { FaqSection } from "@/features/sections/faq-section"
import { ContactSection } from "@/features/sections/contact-section"
import { Footer } from "@/components/footer"


export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSlider />  
      <HeroSection />
      <WhoWeAreSection />
      <ServicesSection />
      <PracticeAreas />   
      <Teams />
      <SchedulingSection />
      <PartnersSection />
      {/*<ClientsSection />*/}
      <InsightsSection />
      <FaqSection />
      <ContactSection />
      <Footer />
    </main>
  )
}