import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { SchedulingSection } from "@/features/sections/scheduling-section"
import { FaqSection } from "@/features/sections/faq-section"

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Book a consultation with Sadam Hussein Law Office in Addis Ababa, Ethiopia.",
}

export default function ContactPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Contact"
        title="Speak with our legal team"
        description="Tell us about your matter and we will arrange a consultation at a time that suits you."
        image="/shOfficeFront.jpg"
      />
      <SchedulingSection />
      <FaqSection />
    </main>
  )
}
