import { Navigation } from "@/components/navigation"
import { HeroSlider } from "@/features/sections/hero-slider"
import { HeroSection } from "@/features/sections/hero-section"
import { WhoWeAreSection } from "@/features/sections/who-we-are-section"
import { ServicesSection } from "@/features/sections/services-section"
import { NewsAndUpdates } from "@/features/sections/news-and-updates"
import { Teams } from "@/features/sections/Teams"
import { SchedulingSection } from "@/features/sections/scheduling-section"
import { PracticeAreas } from "@/features/sections/practice-areas"
import { InsightsSection } from "@/features/sections/insights-section"
import { FaqSection } from "@/features/sections/faq-section"
import { ContactSection } from "@/features/sections/contact-section"
import { Footer } from "@/components/footer"
import Csr from "@/features/sections/csr"


export default function HomePage() {
  return (
    <main className="pt-16">
      <Navigation />
      <HeroSlider />  
      <HeroSection />
      <WhoWeAreSection />
      <ServicesSection />
      <PracticeAreas />   
      <Teams />
      <SchedulingSection />
      <InsightsSection />
      <NewsAndUpdates />
      {/*<ClientsSection />*/}
      <Csr />
      <FaqSection />
      <ContactSection />
      <Footer />
      </main>
      )
    }