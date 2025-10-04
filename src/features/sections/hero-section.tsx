"use client"

import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/construction.jpg?height=1080&width=1920&text=Professional+Law+Office+Background"
          alt="Hero Background"
          style={{
                filter: 'blur(2px) brightness(0.9)', // Blur + dim effect
                }}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center max-w-6xl mx-auto">
          {/* Left Column - Text Content */}
          <div className="space-y-4 text-center md:text-left">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight">
              <span className="text-[hsl(var(--secondary))]">Legal Solution for</span>
              <br />
              <span className="text-[hsl(var(--primary))]">Corporate</span>
              <span className="text-[hsl(var(--secondary))]"> &</span>
              <br />
              <span className="text-[hsl(var(--primary))]">Investment.</span>
            </h1>

            <p className="text-lg text-gray-700 max-w-xl mx-auto md:mx-0">
              Ethiopia's premier corporate law firm 
              <br />
              providing comprehensive legal 
              <br />
              solutions with
              <span className="text-[hsl(var(--primary))] font-semibold">
                {" "}unmatched 
                <br />
                expertise
              </span>{" "}
              and
              <span className="text-[hsl(var(--primary))] font-semibold">
                {" "}proven results.
              </span>
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start pt-4">
              {/* Primary Button - Link to Contact Page */}
              <Link 
                href="/scheduling-section">
                <Button
                  size="lg"
                  className="rounded-md text-white font-medium bg-[hsl(var(--secondary))] hover:bg-[hsl(var(--secondary-dark))]"
                >
                  Book a Consultation
                </Button>
              </Link>

              {/* Outline Button */}
              <Button
                size="lg"
                variant="outline"
                className="rounded-md bg-transparent font-medium border-2 border-[hsl(var(--secondary))] text-[hsl(var(--secondary))] hover:bg-[hsl(var(--secondary))/0.05]"
              >
                <Phone className="h-4 w-4 mr-2" />
                <a href="tel:+251913693679">
                  Call Now: +251 91 369 3679
                </a>
              </Button>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative flex justify-center">
            <div className="relative w-72 h-80 md:w-80 md:h-96">
              <Image
                src="/shOfficeFront.jpg?height=400&width=320&text=Professional+Lawyer"
                alt="Professional Legal Team"
                fill
                className="object-cover rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
