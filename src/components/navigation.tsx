"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { 
  Menu, 
  Search, 
  ChevronDown, 
  ChevronRight,
  Building,
  TrendingUp,
  Receipt,
  Copyright,
  Merge,
  Home,
  Zap,
  Factory,
  Users,
  Briefcase,
  Scale,
  Heart,
  Sprout,
  Landmark,
  Smartphone,
  Globe,
  Gem
} from "lucide-react"
import Image from "next/image"
import { useTheme } from "next-themes"

const navItems = [
  { href: "/", label: "Home" },
  { href: "/who-we-are", label: "About" },
  { href: "/practice-areas", label: "Practice Area & Services" },
  { href: "/teams", label: "Teams" },
  { href: "/insights", label: "Insights" },
  { href: "/csr", label: "CSR" },
  { href: "/contact", label: "Contacts" },
]

// Updated practice areas with icons
const practiceAreas = [
  { href: "/practice-areas/investment-law", label: "Investment Law", icon: TrendingUp },
  { href: "/practice-areas/corporate-law", label: "Corporate Law", icon: Building },
  { href: "/practice-areas/tax-customs-law", label: "Tax & Customs Law", icon: Receipt },
  { href: "/practice-areas/intellectual-property", label: "Intellectual Property", icon: Copyright },
  { href: "/practice-areas/mergers-acquisitions", label: "Mergers & Acquisitions", icon: Merge },
  { href: "/practice-areas/engineering-construction-real-estate", label: "Construction & Real Estate", icon: Home },
  { href: "/practice-areas/energy-natural-resources", label: "Energy & Natural Resources", icon: Zap },
  { href: "/practice-areas/manufacturing-industry", label: "Manufacturing & Industry", icon: Factory },
  { href: "/practice-areas/ngo-civil-society", label: "NGO & Civil Society", icon: Users },
  { href: "/practice-areas/employment-labor", label: "Employment & Labor", icon: Briefcase },
  { href: "/practice-areas/dispute-resolution", label: "Dispute Resolution", icon: Scale },
  { href: "/practice-areas/healthcare-law", label: "Healthcare Law", icon: Heart },
  { href: "/practice-areas/agriculture-agribusiness", label: "Agriculture & Agribusiness", icon: Sprout },
  { href: "/practice-areas/property-successions", label: "Property & Successions", icon: Landmark },
  { href: "/practice-areas/fintech-law", label: "FinTech Law", icon: Smartphone },
  { href: "/practice-areas/international-trade-commercial", label: "International Trade", icon: Globe },
]

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
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
      className={`fixed top-20 md:top-9 w-full z-50 transition-all duration-300 ${
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
                  <DropdownMenu key={item.href}>
                    <DropdownMenuTrigger asChild>
                      <Button 
                        variant="ghost" 
                        className="flex items-center space-x-1 text-sm font-medium text-brand-navy-900 hover:text-brand-gold-400 hover:bg-transparent data-[state=open]:text-brand-gold-400"
                      >
                        <span>{item.label}</span>
                        <ChevronDown className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent 
                      align="start" 
                      className="w-[600px] max-h-96 overflow-y-auto bg-white border-brand-navy-200 p-4"
                    >
                      {/* Grid Layout for Practice Areas */}
                      <div className="grid grid-cols-2 gap-3">
                        {practiceAreas.map((area) => {
                          const IconComponent = area.icon
                          return (
                            <DropdownMenuItem key={area.href} asChild className="p-0">
                              <Link
                                href={area.href}
                                className="flex items-center space-x-3 p-3 rounded-lg cursor-pointer text-brand-navy-900 hover:bg-brand-gold-50 hover:text-brand-gold-600 focus:bg-brand-gold-50 focus:text-brand-gold-600 transition-colors border border-transparent hover:border-brand-gold-200"
                              >
                                <div className="flex-shrink-0 w-10 h-10 bg-brand-gold-100 rounded-lg flex items-center justify-center">
                                  <IconComponent className="h-5 w-5 text-brand-gold-600" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <span className="text-sm font-medium leading-tight">
                                    {area.label}
                                  </span>
                                </div>
                              </Link>
                            </DropdownMenuItem>
                          )
                        })}
                      </div>
                      
                    </DropdownMenuContent>
                  </DropdownMenu>
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
            <SheetContent side="right" className="w-80 sm:w-96">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              
              <div className="flex flex-col h-full">
                {/* Main Navigation Items */}
                <div className="space-y-4 mt-8 flex-shrink-0">
                  {navItems.map((item) => {
                    if (item.label === "Practice Area & Services") {
                      return (
                        <Collapsible key={item.href} className="space-y-2">
                          <CollapsibleTrigger asChild>
                            <Button
                              variant="ghost"
                              className="flex items-center justify-between w-full text-brand-navy-900 hover:text-brand-gold-400 hover:bg-transparent text-lg border-b pb-2"
                            >
                              <span>Practice Areas</span>
                              <ChevronRight className="h-4 w-4 transition-transform duration-200 collapsible-open:rotate-90" />
                            </Button>
                          </CollapsibleTrigger>
                          <CollapsibleContent>
                            {/* Scrollable Practice Areas Container */}
                            <div className="pl-4 mt-2">
                              <div className="max-h-64 overflow-y-auto pr-2 space-y-2">
                                {/* Mobile Grid Layout */}
                                <div className="grid grid-cols-1 gap-2">
                                  {practiceAreas.map((area) => {
                                    const IconComponent = area.icon
                                    return (
                                      <Link
                                        key={area.href}
                                        href={area.href}
                                        className="flex items-center space-x-3 p-3 rounded-lg text-brand-navy-700 hover:text-brand-gold-600 hover:bg-brand-gold-50 transition-colors border border-gray-200"
                                      >
                                        <div className="flex-shrink-0 w-8 h-8 bg-brand-gold-100 rounded-lg flex items-center justify-center">
                                          <IconComponent className="h-4 w-4 text-brand-gold-600" />
                                        </div>
                                        <span className="text-sm font-medium flex-1">
                                          {area.label}
                                        </span>
                                      </Link>
                                    )
                                  })}
                                </div>
                              </div>
                              
                              {/* View All Link for Mobile */}
                              <Link
                                href="/practice-areas"
                                className="flex items-center justify-center space-x-2 text-brand-gold-600 hover:text-brand-gold-700 font-semibold text-sm py-3 mt-3 rounded-md border-2 border-brand-gold-200 hover:bg-brand-gold-50 transition-colors"
                              >
                                <Gem className="h-4 w-4" />
                                <span>View All Practice Areas</span>
                              </Link>
                            </div>
                          </CollapsibleContent>
                        </Collapsible>
                      )
                    }
                    
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="text-brand-navy-900 hover:text-brand-gold-400 transition-colors text-lg border-b pb-2 block"
                      >
                        {item.label}
                      </Link>
                    )
                  })}
                </div>

                {/* Get Consultation Button - Pushed to bottom */}
                <div className="mt-auto pt-6 pb-4 flex-shrink-0">
                  <Link href="/contact" className="w-full">
                    <Button className="bg-brand-gold-400 hover:bg-brand-gold-500 text-white w-full rounded-md py-3 text-base">
                      Get Consultation
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}