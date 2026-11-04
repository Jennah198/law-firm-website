"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Pause, Play, Phone } from "lucide-react"
import { cn } from "@/lib/utils"

interface SlideData {
  title: string
  subtitle: string
  description: string
  imageSrc: string
}

const slides: SlideData[] = [
  {
    title: "Corporate Law",
    subtitle: "in Ethiopia",
    description: "Business formation, governance and compliance counsel for companies operating in Ethiopia.",
    imageSrc: "/hero-slider/corporate.jpg",
  },
  {
    title: "Investment Law",
    subtitle: "in Ethiopia",
    description: "Licensing, incentives and deal structuring for domestic and foreign investors.",
    imageSrc: "/hero-slider/investment.jpg",
  },
  {
    title: "International Trade",
    subtitle: "& Commercial Law",
    description: "Cross-border transactions, customs and trade compliance handled with precision.",
    imageSrc: "/hero-slider/InternationalTradeCommercialLaw.jpg",
  },
  {
    title: "Mergers & Acquisitions",
    subtitle: "in Ethiopia",
    description: "Due diligence, negotiation and closing support for transactions of every size.",
    imageSrc: "/hero-slider/mergandaqusition.jpg",
  },
  {
    title: "Regulatory",
    subtitle: "Compliance",
    description: "Practical guidance through Ethiopia's evolving regulatory landscape.",
    imageSrc: "/hero-slider/regulatory.jpg",
  },
  {
    title: "FinTech & Strategic",
    subtitle: "Legal Support",
    description: "Advising innovators on licensing, digital payments and emerging-technology regulation.",
    imageSrc: "/hero-slider/FintecLaws.jpg",
  },
]

export function HeroSlider() {
  const [current, setCurrent] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const next = useCallback(() => setCurrent((p) => (p + 1) % slides.length), [])
  const prev = useCallback(() => setCurrent((p) => (p - 1 + slides.length) % slides.length), [])

  useEffect(() => {
    if (!isAutoPlaying) return
    const id = setInterval(next, 6000)
    return () => clearInterval(id)
  }, [isAutoPlaying, next])

  const slide = slides[current]

  return (
    <section
      className="relative h-[calc(100svh-108px)] min-h-[560px] max-h-[860px] w-full overflow-hidden bg-brand-navy-950"
      aria-roledescription="carousel"
      aria-label="Our practice highlights"
    >
      {slides.map((s, i) => (
        <Image
          key={s.imageSrc}
          src={s.imageSrc}
          alt=""
          fill
          priority={i === 0}
          quality={80}
          sizes="100vw"
          className={cn(
            "object-cover transition-opacity duration-1000 ease-in-out",
            i === current ? "opacity-100" : "opacity-0"
          )}
        />
      ))}

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-navy-950/90 via-brand-navy-950/60 to-brand-navy-950/20" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-brand-navy-950/70 to-transparent" />

      {/* Content */}
      <div className="container relative z-10 mx-auto flex h-full items-center px-4">
        <div className="max-w-2xl text-white" aria-live="polite">
          <p className="eyebrow mb-6 text-brand-gold-400 before:bg-brand-gold-400">
            Sadam Hussein Law Office
          </p>
          <h1 key={slide.title} className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="block font-serif text-4xl font-semibold leading-[1.1] sm:text-5xl lg:text-7xl">
              {slide.title}
            </span>
            <span className="mt-2 block font-serif text-3xl italic text-brand-gold-400 sm:text-4xl lg:text-5xl">
              {slide.subtitle}
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">{slide.description}</p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact#scheduling"
              className="inline-flex items-center justify-center rounded-sm bg-primary px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-brand-gold-600"
            >
              Book a Consultation
            </Link>
            <a
              href="tel:+251913693679"
              className="inline-flex items-center justify-center gap-2 rounded-sm border border-white/40 px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:border-white hover:bg-white/10"
            >
              <Phone className="h-4 w-4" /> +251 91 369 3679
            </a>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="absolute bottom-8 left-0 right-0 z-20">
        <div className="container mx-auto flex items-center justify-between px-4">
          <div className="flex items-center gap-2">
            {slides.map((s, i) => (
              <button
                key={s.title}
                onClick={() => {
                  setCurrent(i)
                  setIsAutoPlaying(false)
                }}
                className={cn(
                  "h-1 rounded-full transition-all duration-500",
                  i === current ? "w-10 bg-brand-gold-400" : "w-5 bg-white/40 hover:bg-white/70"
                )}
                aria-label={`Go to slide ${i + 1}: ${s.title}`}
                aria-current={i === current}
              />
            ))}
            <span className="ml-3 hidden font-serif text-sm text-white/70 sm:inline">
              {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {[
              { onClick: () => { prev(); setIsAutoPlaying(false) }, label: "Previous slide", Icon: ChevronLeft },
              { onClick: () => setIsAutoPlaying((p) => !p), label: isAutoPlaying ? "Pause slideshow" : "Play slideshow", Icon: isAutoPlaying ? Pause : Play },
              { onClick: () => { next(); setIsAutoPlaying(false) }, label: "Next slide", Icon: ChevronRight },
            ].map(({ onClick, label, Icon }) => (
              <button
                key={label}
                onClick={onClick}
                aria-label={label}
                className="grid h-10 w-10 place-items-center rounded-full border border-white/30 text-white transition-colors hover:border-brand-gold-400 hover:bg-brand-gold-400/20"
              >
                <Icon className="h-4 w-4" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
