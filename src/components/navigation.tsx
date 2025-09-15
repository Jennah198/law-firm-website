"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Search } from "lucide-react"
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
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-brand-navy-900 hover:text-brand-gold-400 transition-colors"
              >
                {item.label}
              </Link>
            ))}
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
            <SheetContent side="right">
              <div className="flex flex-col space-y-6 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-brand-navy-900 hover:text-brand-gold-400 transition-colors text-lg"
                  >
                    {item.label}
                  </Link>
                ))}
                <Link href="/contact" className="w-full">
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
