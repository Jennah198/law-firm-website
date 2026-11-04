import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { ServicesSection } from "@/features/sections/services-section"
import { ContactSection } from "@/features/sections/contact-section"

export const metadata: Metadata = {
  title: "Legal Services",
  description: "Litigation and ADR, corporate governance, risk management, legal training, consulting and document preparation.",
}

export default function ServicesPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Services"
        title="Legal services built around your business"
        description="Business-conscious legal services designed to protect your interests and enable growth — clear, timely and effective guidance across key areas of law."
        image="/services/LegalConsulting.jpg"
      />
      <ServicesSection showAllLink={false} />
      <ContactSection />
    </main>
  )
}
