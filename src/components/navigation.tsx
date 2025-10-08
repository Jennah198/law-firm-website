"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Search, ChevronDown } from "lucide-react"
import Image from "next/image"
import { useTheme } from "next-themes"

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/practice-areas", label: "Practice Area & Services" },
  { href: "/teams", label: "Teams" },
  { href: "/insights", label: "Insights" },
  { href: "/csr", label: "CSR" },
  { href: "/contact", label: "Contacts" },
]

// Practice areas data matching your 16 cards
const practiceAreas = [
  { href: "/practice-areas#investment-law", label: "Investment Law" },
  { href: "/practice-areas#corporate-law", label: "Corporate Law" },
  { href: "/practice-areas#tax-customs-law", label: "Tax & Customs Law" },
  { href: "/practice-areas#intellectual-property", label: "Intellectual Property & Technology Rights" },
  { href: "/practice-areas#mergers-acquisitions", label: "Mergers & Acquisitions (M&A)" },
  { href: "/practice-areas#engineering-construction", label: "Engineering, Construction & Real Estate Law" },
  { href: "/practice-areas#energy-natural-resources", label: "Energy & Natural Resources" },
  { href: "/practice-areas#manufacturing-industry", label: "Manufacturing & Industry Law" },
  { href: "/practice-areas#ngo-civil-society", label: "NGO & Civil Society Organizations" },
  { href: "/practice-areas#employment-labor", label: "Employment & Labor Law" },
  { href: "/practice-areas#dispute-resolution", label: "Dispute Resolution, Litigation & Legal Representation" },
  { href: "/practice-areas#healthcare-law", label: "Healthcare Law" },
  { href: "/practice-areas#agriculture-agribusiness", label: "Agriculture & Agribusiness Law" },
  { href: "/practice-areas#property-law", label: "Property Law & Successions" },
  { href: "/practice-areas#fintech-law", label: "FinTech Law" },
  { href: "/practice-areas#international-trade", label: "International Trade & Commercial Law" },
]

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [isPracticeAreasOpen, setIsPracticeAreasOpen] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-9 w-full z-50 transition-all duration-300 ${
        scrolled ? "nav-blur shadow-md bg-brand-navy-300" : "bg-brand-navy-300"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-2">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-3">
            <Image
              src={theme === "dark" ? "/logo-dark.svg" : "/logo-light.svg"}
              alt="SHLO Logo"
              width={40}
              height={40}
              className="rounded"
            />
            <div className="border-l-2 border-brand-navy-900 h-8"></div>
            <div>
              <div className="text-lg font-bold tracking-widest text-brand-navy-900">
                S H L O
              </div>
              <div className="text-xs text-brand-navy-900">Sadam Hussein</div>
              <div className="text-xs text-brand-navy-900">Law Office</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => {
              if (item.label === "Practice Area & Services") {
                return (
                  <div
                    key={item.href}
                    className="relative"
                    onMouseEnter={() => setIsPracticeAreasOpen(true)}
                    onMouseLeave={() => setIsPracticeAreasOpen(false)}
                  >
                    <button className="flex items-center space-x-1 text-sm font-medium text-brand-navy-900 hover:text-brand-gold-400 transition-colors">
                      <span>{item.label}</span>
                      <ChevronDown className={`h-4 w-4 transition-transform ${isPracticeAreasOpen ? "rotate-180" : ""}`} />
                    </button>
                    
                    {/* Dropdown Menu */}
                    {isPracticeAreasOpen && (
                      <div className="absolute top-full left-0 mt-2 w-80 bg-white shadow-xl rounded-lg border border-gray-200 py-2">
                        <div className="grid grid-cols-1 gap-1 max-h-96 overflow-y-auto">
                          {practiceAreas.map((area) => (
                            <Link
                              key={area.href}
                              href={area.href}
                              className="px-4 py-3 text-sm text-brand-navy-900 hover:bg-brand-gold-50 hover:text-brand-gold-600 transition-colors border-b border-gray-100 last:border-b-0"
                              onClick={() => setIsPracticeAreasOpen(false)}
                            >
                              {area.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )
              }
              
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-brand-navy-900 hover:text-brand-gold-400 transition-colors"
                >
                  {item.label}
                </Link>
              )
            })}
            <button className="text-brand-navy-900 hover:text-brand-gold-400 transition-colors">
              <Search className="h-4 w-4" />
            </button>
            <Link href="/contact">
              <Button size="sm" className="bg-brand-gold-600 hover:bg-brand-gold-500 text-white rounded-md text-sm px-4 py-2">
                Get Consultation
              </Button>
            </Link>
          </div>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5 text-brand-navy-900" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => {
                  if (item.label === "Practice Area & Services") {
                    return (
                      <div key={item.href} className="space-y-2">
                        <div className="text-brand-navy-900 font-medium text-lg border-b pb-2">
                          Practice Areas
                        </div>
                        <div className="grid grid-cols-1 gap-2 pl-4">
                          {practiceAreas.map((area) => (
                            <Link
                              key={area.href}
                              href={area.href}
                              className="text-brand-navy-700 hover:text-brand-gold-600 transition-colors text-sm py-2 border-b border-gray-100 last:border-b-0"
                            >
                              {area.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )
                  }
                  
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-brand-navy-900 hover:text-brand-gold-400 transition-colors text-lg border-b pb-2"
                    >
                      {item.label}
                    </Link>
                  )
                })}
                <Link href="/contact" className="w-full mt-4">
                  <Button className="bg-brand-gold-400 hover:bg-brand-gold-500 text-white w-full rounded-md">
                    Get Consultation
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}