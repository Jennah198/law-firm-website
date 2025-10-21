"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Globe, Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"
import Image from "next/image"

interface SlideData {
  id: number
  title: string
  subtitle: string
  imageSrc: string
}

const slides: SlideData[] = [
  { id: 1, title: "Corporate", subtitle: "Law in Ethiopia", imageSrc: "/corporate.jpg" },
  { id: 2, title: "Investment", subtitle: "Law in Ethiopia", imageSrc: "/investment.jpg" },
  { id: 3, title: "Int. Trade", subtitle: "Law in Ethiopia", imageSrc: "/InternationalTradeCommercialLaw.jpg" },
  { id: 4, title: "Mergers & Acquisitions", subtitle: "Law in Ethiopia", imageSrc: "/mergandaqusition.jpg" },
  { id: 5, title: "Regulatory", subtitle: "Compliance", imageSrc: "/regulatory.jpg" },
  { id: 6, title: "Strategic", subtitle: "Legal Support", imageSrc: "/FintecLaws.jpg" },
]

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [currentLanguage, setCurrentLanguage] = useState("En")
  
  // Properly use next-themes
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Ensure component is mounted to avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

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

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  const toggleLanguage = () => {
    const languages = ["En", "AM", "AR"]
    const currentIndex = languages.indexOf(currentLanguage)
    const nextIndex = (currentIndex + 1) % languages.length
    setCurrentLanguage(languages[nextIndex])
  }

  // Avoid rendering until mounted to prevent hydration mismatch
  if (!mounted) {
    return (
      <section className="relative h-screen w-full overflow-hidden bg-gray-200">
        {/* Loading skeleton */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="h-16 bg-gray-300 rounded-2xl w-64 mb-4 mx-auto"></div>
            <div className="h-12 bg-gray-300 rounded-lg w-48 mx-auto"></div>
          </div>
        </div>
      </section>
    )
  }

  const isDarkMode = theme === "dark"

  return (
    <section className="relative h-screen w-full overflow-hidden pt-16">
      {/* ✅ Optimized Background Image */}
      <div className="absolute inset-0 transition-all duration-1000 ease-in-out">
        <Image
          src={slides[currentSlide].imageSrc}
          alt={`${slides[currentSlide].title} ${slides[currentSlide].subtitle}`}
          fill
          priority={currentSlide === 0}
          quality={75}
          sizes="100vw"
          className="object-cover object-center"
          style={{ filter: "blur(1px)" }}
        />
      </div>

      {/* Overlay - adjusted for dark mode */}
      <div className={`absolute inset-0 ${isDarkMode ? 'bg-black/50' : 'bg-black/30'}`} />

      {/* Language and Theme Toggles */}
      <div className="absolute top-40 right-0 z-20 flex flex-col items-end space-y-3">
        {/* Language Toggle Button */}
        <button
          onClick={toggleLanguage}
          className="bg-secondary hover:bg-secondary-dark text-secondary-foreground rounded-lg px-4 py-3 
                     flex items-center space-x-2 transition-all duration-300 
                     shadow-lg hover:shadow-xl active:scale-95 cursor-pointer"
          aria-label={`Change language. Current: ${currentLanguage}`}
        >
          <Globe className="h-4 w-4" />
          <span className="text-sm font-medium">{currentLanguage}</span>
        </button>

        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className="bg-secondary hover:bg-secondary-dark text-secondary-foreground rounded-lg p-3 
                     transition-all duration-300 shadow-lg hover:shadow-xl 
                     active:scale-95 cursor-pointer"
          aria-label={`Switch to ${isDarkMode ? "light" : "dark"} mode`}
        >
          {isDarkMode ? (
            <Sun className="h-4 w-4" />
          ) : (
            <Moon className="h-4 w-4" />
          )}
        </button>
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
            <div className="absolute inset-0 bg-primary rounded-2xl transform rotate-1 scale-105 opacity-90"></div>
            <h1 className="relative text-5xl lg:text-7xl font-bold text-secondary px-8 py-4">
              {slides[currentSlide].title}
            </h1>
          </div>

          {/* Subtitle */}
          <h2 className="text-4xl lg:text-6xl font-bold text-secondary mb-8">
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