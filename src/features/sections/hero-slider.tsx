"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Globe, Sun } from "lucide-react"
import Image from "next/image"

interface SlideData {
  id: number
  title: string
  subtitle: string
  imageSrc: string
}

const slides: SlideData[] = [
  { id: 1, title: "Corporate", subtitle: "Law in Ethiopia", imageSrc: "/buildings.jpg" },
  { id: 2, title: "Investment", subtitle: "Law in Ethiopia", imageSrc: "/search.jpg" },
  { id: 3, title: "Int. Trade", subtitle: "Law in Ethiopia", imageSrc: "/assets.jpg" },
  { id: 4, title: "Mergers & Acquisitions", subtitle: "Law in Ethiopia", imageSrc: "/shOfficeFront.jpg" },
  { id: 5, title: "Regulatory", subtitle: "Compliance", imageSrc: "/placeholder.jpg" },
  { id: 6, title: "Strategic", subtitle: "Legal Support", imageSrc: "/placeholder.jpg" },
]

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-slide every 5 seconds
  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
  }

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setIsAutoPlaying(false)
  }

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setIsAutoPlaying(false)
  }

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* ✅ Optimized Background Image */}
      <div className="absolute inset-0 transition-all duration-1000 ease-in-out">
        <Image
          src={slides[currentSlide].imageSrc}
          alt={`${slides[currentSlide].title} ${slides[currentSlide].subtitle}`}
          fill
          priority={currentSlide === 0} // preload first image
          quality={75} // reduce size without losing quality
          sizes="100vw" // responsive optimization hint
          className="object-cover object-center"
          style={{ filter: "blur(1px)" }}
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Language and Theme Toggles */}
      <div className="absolute top-6 right-6 z-20 flex items-center space-x-4">
        <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-lg px-3 py-2">
          <Globe className="h-4 w-4 text-white" />
          <span className="text-white text-sm font-medium">En</span>
        </div>
        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2">
          <Sun className="h-4 w-4 text-white" />
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30 transition-all duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30 transition-all duration-300"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </button>

      {/* Centered Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center text-white">
          {/* Title */}
          <div className="relative inline-block mb-4">
            <div className="absolute inset-0 bg-[#C5AA88] rounded-2xl transform rotate-1 scale-105 opacity-90"></div>
            <h1 className="relative text-5xl lg:text-7xl font-bold text-[#2A3B72] px-8 py-4">
              {slides[currentSlide].title}
            </h1>
          </div>

          {/* Subtitle */}
          <h2 className="text-4xl lg:text-6xl font-bold text-[#2A3B72] mb-8">
            {slides[currentSlide].subtitle}
          </h2>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-white scale-125"
                : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Pause / Play */}
      <button
        onClick={() => setIsAutoPlaying(!isAutoPlaying)}
        className="absolute bottom-6 right-6 z-20 bg-white/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30 transition-all duration-300"
        aria-label={isAutoPlaying ? "Pause slideshow" : "Play slideshow"}
      >
        {isAutoPlaying ? (
          <div className="w-3 h-3 bg-white rounded-sm" />
        ) : (
          <div className="w-0 h-0 border-l-[8px] border-l-white border-y-[6px] border-y-transparent ml-1" />
        )}
      </button>
    </section>
  )
}
