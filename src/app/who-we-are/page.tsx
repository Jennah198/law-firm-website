import Image from "next/image"
import { ContactSection } from "@/features/sections/contact-section"
import { Footer } from "@/components/footer"

export default function WhoWeArePage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-justify">
          <div className="mx-auto mb-8 flex items-center justify-center">
            <div className="relative w-64 h-40 bg-gray-100 border border-dashed border-gray-300 flex items-center justify-center overflow-hidden">
              <Image
                src="/shOfficeFront.jpg"
                alt="SHLO Law Office Front"
                width={256}
                height={160}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#23345b" }}>
            Welcome to (SHLO)
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            At SHLO, Ethiopia's premier full-service law office, we are committed to delivering strategic, high-caliber legal solutions that drive success for businesses, investors, and institutions. Founded by Sadam Hussien, our office has built a strong reputation as a trusted legal advocate, providing expert guidance and representation across a broad spectrum of practice areas.
            <br />
            <br />
            With deep expertise in Ethiopia's legal and regulatory landscape, we serve both domestic and international clients, offering comprehensive counsel in corporate and investment law, fintech and financial services, capital markets, taxation and customs regulation, international trade and commercial transactions, mergers and acquisitions (M&A), real estate and property law, intellectual property and technology rights, healthcare law, agriculture, mining and energy regulations, labor and employment matters, immigration and mobility, hospitality and leisure compliance, alternative dispute resolution, and advocacy for nonprofit organizations.
            <br />
            <br />
            Our diverse clientele includes startups, SMEs, multinational corporations, government entities, and private investors. Recognizing that every client has unique goals and challenges, we customize our legal services to provide comprehensive, tailored solutions. Our commitment to precision, strategic foresight and unwavering professionalism ensures that our clients are fully equipped to navigate complex legal frameworks with confidence.
            To further enhance our service quality and efficiency, SHLO has established strategic partnerships with multidisciplinary professionals. By collaborating with experts in finance, tax, technology, engineering, and healthcare, we broaden our capabilities and uphold the highest standards of justice. This integrated approach ensures that our clients receive not only specialized legal expertise but also innovative solutions designed for immediate implementation and long-term success.
            <br />
            <br />
            At SHLO, our core values—justice, excellence, integrity, and innovation—guide everything we do. We work closely with our clients to resolve legal challenges, mitigate risks, and unlock new growth opportunities, whether through regulatory compliance, investment structuring, dispute resolution, or high-stakes negotiations.
            <br />
            <br />
            <span className="font-bold">SHLO: Empowering Success with Justice—Strategic Legal Solutions for Corporate and Investment Ambitions</span>
          </p>
        </div>
      </section>

      <ContactSection />

      <Footer />
    </main>
  )
}