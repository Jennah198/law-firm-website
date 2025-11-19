"use client"

import { useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { ContactSection } from "@/features/sections/contact-section"
import { Footer } from "@/components/footer"

export default function WhoWeArePage() {
  const router = useRouter()

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      {/* Simple Back Arrow */}
      <button
        onClick={() => router.back()}
        className="fixed top-40 left-4 z-40 p-2 bg-[hsl(var(--secondary))]/80 backdrop-blur-sm rounded-full shadow-lg hover:bg-[hsl(var(--primary))] transition-colors"
      >
        <ArrowLeft className="h-5 w-5 text-white" />
      </button>

      <section className="py-16 mt-[90px]">
        <div className="max-w-4xl mx-auto px-4 text-justify">
          <div className="mx-auto mb-8 flex items-center justify-center">
            <div className="relative w-120 h-96 bg-muted border border-dashed border-border flex items-center justify-center overflow-hidden">
              <Image
                src="/sadam-welcome-detail.png"
                alt="SHLO Law Office Front"
                width={600}
                height={400}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-secondary text-center">
            Welcome to (SHLO)
          </h1>
          <p className="text-lg text-foreground leading-relaxed">
            At SHLO, Ethiopia&apos;s premier full-service law office, we are committed to delivering strategic, high-caliber legal solutions that drive success for businesses, investors, and institutions. Founded by Sadam Hussien, our office has built a strong reputation as a trusted legal advocate, providing expert guidance and representation across a broad spectrum of practice areas.
            <br />
            <br />
            With deep expertise in Ethiopia&apos;s legal and regulatory landscape, we serve both domestic and international clients, offering comprehensive counsel in corporate and investment law, fintech and financial services, capital markets, taxation and customs regulation, international trade and commercial transactions, mergers and acquisitions (M&A), real estate and property law, intellectual property and technology rights, healthcare law, agriculture, mining and energy regulations, labor and employment matters, immigration and mobility, hospitality and leisure compliance, alternative dispute resolution, and advocacy for nonprofit organizations.
            <br />
            <br />
            Our diverse clientele includes startups, SMEs, multinational corporations, government entities, and private investors. Recognizing that every client has unique goals and challenges, we customize our legal services to provide comprehensive, tailored solutions. Our commitment to precision, strategic foresight and unwavering professionalism ensures that our clients are fully equipped to navigate complex legal frameworks with confidence.
            To further enhance our service quality and efficiency, SHLO has established strategic partnerships with multidisciplinary professionals. By collaborating with experts in finance, tax, technology, engineering, and healthcare, we broaden our capabilities and uphold the highest standards of justice. This integrated approach ensures that our clients receive not only specialized legal expertise but also innovative solutions designed for immediate implementation and long-term success.
            <br />
            <br />
            At SHLO, our core values—justice, excellence, integrity, and innovation—guide everything we do. We work closely with our clients to resolve legal challenges, mitigate risks, and unlock new growth opportunities, whether through regulatory compliance, investment structuring, dispute resolution, or high-stakes negotiations.
            <br />
            <br />
            <span className="font-bold text-secondary">SHLO: Empowering Success with Justice—Strategic Legal Solutions for Corporate and Investment Ambitions</span>
          </p>
        </div>
      </section>

      <ContactSection />

      <Footer />
    </main>
  )
}