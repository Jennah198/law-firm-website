"use client"

import { Phone } from "lucide-react" 

export function ContactSection() {
  return (
    <section id="contact" className="bg-[hsl(var(--primary))] px-10 sm:px-12 lg:px-16 py-20 sm:py-24">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
        {/* Main Heading */}
        <h2 className="font-bold text-[hsl(var(--secondary))] text-3xl sm:text-4xl mb-5">
          Let SHLO Law Office Secure Your Future
        </h2>

        {/* Body Paragraph */}
        <p className="tex-black opacity-90 leading-8 max-w-3xl mx-auto mb-5">
          Every legal challenge is unique, and at SHLO Law Office, we are committed to tailoring our services to your specific needs. With deep expertise across a wide array of legal practice areas and strong relationships with government authorities, our strategic counsel and robust representation empower you to navigate Ethiopia&apos;s legal landscape with confidence.
        </p>

        {/* Subheading / Secondary CTA */}
        <p className="font-semibold text-[hsl(var(--secondary))] mb-8 max-w-3xl">
          Contact us today for a free consultation.
          <br className="hidden sm:block" />
          Let SHLO Law Office unlock opportunities and protect your interests so you can focus on growth, innovation, and success.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#scheduling"
            className="inline-flex items-center justify-center bg-[hsl(var(--secondary))] hover:bg-[hsl(var(--secondary-dark))] text-[hsl(var(--secondary-foreground))] font-bold px-6 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            📑 Book Free Consultation
          </a>
          <a
            href="tel:+251913693679"
            className="inline-flex items-center justify-center border-2 border-[hsl(var(--secondary))] text-[hsl(var(--secondary))] hover:bg-[hsl(var(--secondary))] hover:text-[hsl(var(--secondary-foreground))] font-bold px-6 py-3 rounded-xl transition-all duration-300"
          >
            <Phone className="w-5 h-5 mr-2" />
            Call now: +251 91 369 3679
          </a>
        </div>

        {/* Bottom Note */}
        <div className="mt-5 text-sm text-black opacity-80">
          Available 24/7 for urgent legal matters • Free initial consultation
        </div>
      </div>
    </section>
  )
}