"use client"

import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="py-20 bg-[hsl(var(--muted))] relative h-screen flex items-center justify-center">
      {/* Background Image */}
      {/* <div className="absolute inset-0 z-0">
        <Image
          src="/construction.jpg"
          alt="Hero Background"
          style={{
                filter: 'blur(2px) brightness(0.9)', // Blur + dim effect
                }}
          fill
          className="object-cover"
          priority
        />
      </div> */}

      {/* Content */}
      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center max-w-6xl mx-auto">
          {/* Left Column - Text Content */}
          <div className="space-y-4 text-center md:text-left">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight">
              <span className="text-secondary">Legal Solution for</span>
              <br />
              <span className="text-primary">Corporate</span>
              <span className="text-secondary"> &</span>
              <br />
              <span className="text-primary">Investment.</span>
            </h1>

            <p className="text-lg text-muted-foreground font-bold max-w-xl mx-auto md:mx-0">
              Ethiopia&apos;s premier corporate law firm 
              <br />
              providing comprehensive legal 
              <br />
              solutions with
              <span className="text-primary font-semibold">
                {" "}unmatched 
                <br />
                expertise
              </span>{" "}
              and
              <span className="text-primary font-semibold">
                {" "}proven results.
              </span>
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start pt-4">
              {/* Primary Button - Link to Contact Page */}
              <Link 
                href="/contact"
                className="flex-1 min-w-0"
              >
                <Button
                  size="lg"
                  className="rounded-md font-medium bg-secondary hover:bg-primary text-secondary-foreground hover:text-primary-foreground transition-all duration-300 w-full"
                >
                  Book a Consultation
                </Button>
              </Link>

              {/* Outline Button */}
              <Button
                size="lg"
                variant="outline"
                className="rounded-md bg-transparent font-medium border-2 border-secondary text-secondary hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 flex-1 min-w-0 w-full"
              >
                <Phone className="h-4 w-4 mr-2" />
                <a href="tel:+251913693679" className="truncate">
                  Call Now: +251 91 369 3679
                </a>
              </Button>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative flex justify-center">
            <div className="relative w-96 h-80 md:w-[400px] md:h-[450px] lg:w-[400px] lg:h-[600px]">
              <Image
                src="/sadam-hero.png"
                alt="Sadam Hussein"
                fill
                className="object-cover rounded-none"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}