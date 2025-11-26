import Link from "next/link"
import Image from "next/image"

export function WhoWeAreSection() {
  return (
    <section id="who-we-are" className="py-20 bg-[hsl(var(--background))]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[hsl(var(--secondary))] mb-6">
                Welcome to (SHLO){" "}<br />
               <span className="italic text-lg lg:text-xl font-normal">
                 &quot;Empowering Success with Justice: Strategic Legal Solutions for Corporate and Investment Ambitions.&quot;
               </span>
            </h2>
            <p className="text-lg text-[hsl(var(--secondary))] mb-6 leading-relaxed">
              Founded by Sadam Hussien, SHLO Law Office is a distinguished full-service legal practice based in Ethiopia. 
              The office possesses substantial experience in advising and representing clients in matters primarily related 
              to corporate law, finance, and investment, taxation, real estate, intellectual property, mining and energy, 
              fintech, labor and employment, immigration, hospitality and leisure, international trade and commercial 
              transactions, Nonprofit law, and alternative dispute resolution in Ethiopia.
              <br />
              <br />
              SHLO serves a diverse clientele, including individual investors, start-ups, government entities, and multinational corporations. Committed to delivering the highest standard of legal services by fostering a personalized environment where mutual trust is built, clients&apos; objectives, professionalism and excellence are thoroughly understood.
              <br />
              <br />
              We provide strategic legal solutions through an experienced legal team striving to deliver services that are underpinned by the basic pillars of professionalism and excellence.
            </p>

            {/* Read More Button */}
            <Link
              href="/who-we-are"
              className="inline-block mt-4 px-5 py-2 border rounded-md 
                         text-[hsl(var(--secondary))] 
                         border-[hsl(var(--primary))] 
                         hover:border-[hsl(var(--secondary))] 
                         hover:text-[hsl(var(--primary))] 
                         transition-colors duration-300"
            >
              Read More...
            </Link>
          </div>

          {/* Right side - Clean Image */}
          <div className="relative w-full">
            <div className="w-full h-[500px] lg:h-[700px] overflow-hidden">
              <Image
                src="/sadam-welcome-first.png"
                alt="Sadam Hussien"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}