"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
//import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const slides = [
  { 
    id: 1, 
    title: "Green Legacy Initiative", 
    description: "Tree planting at Millennium Park Medicinal Plant Zone",
    imageSrc: "/shOfficeRight.jpg" 
  },
  { 
    id: 2, 
    title: "Team Participation", 
    description: "MLA team organizing and participating in environmental events",
    imageSrc: "/buildings.jpg" 
  },
  { 
    id: 3, 
    title: "Community Engagement", 
    description: "Our lawyers in action during CSR activities",
    imageSrc: "/search.jpg" 
  },
  { 
    id: 4, 
    title: "Sustainable Commitment", 
    description: "Ongoing efforts for environmental conservation",
    imageSrc: "/assets.jpg" 
  },
]

export default function CSRPage() {
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
    <section id="who-we-are" className="py-20 bg-[hsl(var(--background))]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[hsl(var(--secondary))] mb-6">
              Green Legacy
            </h2>
            <p className="text-lg text-[hsl(var(--secondary))] mb-6 leading-relaxed">
              Please join me in thanking and congratulating team MLA for organizing and participating in such a momentous event.<br/><br/>

              Following Prime Minister Abiy Ahmed&apos;s campaign to plant 6 billion trees across the country this year as part of the national &quot;Green Legacy&quot; initiative, which aims at curbing the effects of climate change and deforestation, we proudly took part in planting trees for the second time at the Millennium Park Medicinal Plant Zone.<br/><br/>

              Besides our annual pro bono service program in which our lawyers generously provide hundreds of unpaid hours to assist disadvantaged clients and communities, we firmly believe our commitment to a sustainable corporate and social responsibility program is vital for us, and we promise to keep on doing it.<br/><br/>

              Thank you all once again Mehretab & Getu Advocates LLP Law Office
            </p>

            {/* Read More Button */}
            <Link
              href="/csr"
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

          {/* Right side - Image Slider - FIXED */}
          <div className="relative w-full">
                {/* Image Slider Container - REMOVED fixed aspect ratio */}
                <div className="relative w-full h-[400px] lg:h-[500px] overflow-hidden">
                  {/* Current Slide Image */}
                  <Image
                    src={slides[currentSlide].imageSrc}
                    alt={slides[currentSlide].description}
                    fill
                    className="object-cover"
                    priority={currentSlide === 0}
                  />
                  
                  {/* Image Overlay for Text */}
                  <div className="absolute inset-0 bg-black/10"></div>
                  
                  {/* Slide Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-6 text-white bg-gradient-to-t from-black/70 to-transparent">
                    <h3 className="text-lg lg:text-xl font-bold mb-1 lg:mb-2">
                      {slides[currentSlide].title}
                    </h3>
                    <p className="text-xs lg:text-sm opacity-90">
                      {slides[currentSlide].description}
                    </p>
                  </div>

                  {/* Navigation Arrows */}
                  <button
                    onClick={goToPrevious}
                    className="absolute left-2 lg:left-4 top-1/2 transform -translate-y-1/2 z-20 
                             bg-white/80 hover:bg-white backdrop-blur-sm rounded-full p-1 lg:p-2 
                             transition-all duration-300 shadow-lg"
                    aria-label="Previous slide"
                  >
                    <ChevronLeft className="h-4 w-4 lg:h-5 lg:w-5 text-gray-800" />
                  </button>

                  <button
                    onClick={goToNext}
                    className="absolute right-2 lg:right-4 top-1/2 transform -translate-y-1/2 z-20 
                             bg-white/80 hover:bg-white backdrop-blur-sm rounded-full p-1 lg:p-2 
                             transition-all duration-300 shadow-lg"
                    aria-label="Next slide"
                  >
                    <ChevronRight className="h-4 w-4 lg:h-5 lg:w-5 text-gray-800" />
                  </button>

                  {/* Slide Indicators */}
                  <div className="absolute bottom-2 lg:bottom-4 left-1/2 transform -translate-x-1/2 z-10 flex space-x-1 lg:space-x-2">
                    {slides.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full transition-all duration-300 ${
                          index === currentSlide
                            ? "bg-white scale-125"
                            : "bg-white/50 hover:bg-white/70"
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
          </div>
        </div>
      </div>
    </section>
  )
}