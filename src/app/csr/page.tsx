import type { Metadata } from "next"
import Image from "next/image"
import { ContactSection } from "@/features/sections/contact-section"
import { PageHeader } from "@/components/page-header"

export const metadata: Metadata = {
  title: "Corporate Social Responsibility",
  description: "Pro bono services, research partnerships and community initiatives by Sadam Hussein Law Office.",
}

const research = [
  "Assistance to the World Bank Group through legal research on immigration issues and procurement of infrastructure PPPs in Ethiopia — including a questionnaire on legal integration policies for economic migrants.",
  "Legal research for a not-for-profit international NGO, through the DLA Piper Tokyo Partnership, on labour and employment laws in Ethiopia.",
  "Legal research for the Centre for Reproductive Health.",
  "A UNHCR project in collaboration with DLA Piper, researching how Ethiopian national legislation regulates access to rights for refugees, asylum-seekers and other persons granted international protection.",
  "Assistance to UNAIDS in reviewing legislation against the 2016 UN General Assembly political declaration on HIV/AIDS, including a scorecard to track Ethiopia's legislative progress.",
  "Support for New Perimeter — DLA Piper's non-profit — in its one-week intensive course on international business negotiations at the Addis Ababa University College of Law & Governance Studies.",
]

export default function CSRPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Corporate Social Responsibility"
        title="Giving back to the communities we serve"
        description="Lawyers have a special responsibility to contribute to society. At SHLO, that commitment shapes how we give our time, expertise and energy."
        image="/practice-areas/NGOCivilSocietyOrganization.jpg"
      />

      <section id="green-legacy" className="scroll-mt-28 bg-background py-20">
        <div className="container mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-4 lg:grid-cols-2">
          <div>
            <p className="eyebrow mb-4">Environment</p>
            <h2 className="section-title">Green Legacy</h2>
            <div className="mt-6 space-y-4 leading-relaxed text-muted-foreground">
              <p>
                As part of the national &ldquo;Green Legacy&rdquo; initiative — the campaign to plant billions of trees
                across Ethiopia to curb the effects of climate change and deforestation — team SHLO proudly took part in
                planting trees for the second time at the Millennium Park Medicinal Plant Zone.
              </p>
              <p>
                Alongside our annual pro bono programme, we firmly believe a sustainable corporate social
                responsibility programme is vital, and we are committed to continuing it.
              </p>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden bg-accent">
            <Image src="/practice-areas/AgricultureandAgriBusinessLaw.jpg" alt="Green Legacy tree planting" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          </div>
        </div>
      </section>

      <section id="pro-bono" className="scroll-mt-28 bg-muted py-20">
        <div className="container mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-4 lg:grid-cols-2">
          <div className="relative order-last aspect-[4/3] overflow-hidden bg-accent lg:order-first">
            <Image src="/practice-areas/NGOCivilSocietyOrganization.jpg" alt="Pro bono legal services" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          </div>
          <div>
            <p className="eyebrow mb-4">Access to Justice</p>
            <h2 className="section-title">Pro Bono</h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              We strongly believe lawyers should contribute to their communities by providing pro bono legal services
              to underserved members of society. Mindful of the 50-hour service requirement and the justice gap facing
              those who cannot afford a lawyer, our associates regularly assist fellow citizens without means, and we
              have extended our assistance to governmental and non-governmental organisations.
            </p>
          </div>
        </div>
      </section>

      <section id="research" className="scroll-mt-28 bg-background py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <p className="eyebrow mb-4">Partnerships</p>
          <h2 className="section-title">Research &amp; legal education</h2>
          <p className="section-lead mt-4 max-w-2xl">A few of the recent activities we have undertaken include:</p>
          <ol className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {research.map((r, i) => (
              <li key={i} className="flex gap-5 border-t border-border pt-6">
                <span className="font-serif text-2xl text-primary">{String(i + 1).padStart(2, "0")}</span>
                <p className="leading-relaxed text-muted-foreground">{r}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <ContactSection />
    </main>
  )
}
