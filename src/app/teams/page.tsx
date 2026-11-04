import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { Teams } from "@/features/sections/Teams"
import { ContactSection } from "@/features/sections/contact-section"

export const metadata: Metadata = {
  title: "Our Team",
  description: "Meet the legal professionals of Sadam Hussein Law Office.",
}

export default function TeamsPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Our Team"
        title="The people behind SHLO"
        description="Experienced legal professionals united by integrity and a commitment to excellence."
        image="/sadam-office.jpg"
      />
      <Teams />
      <ContactSection />
    </main>
  )
}
