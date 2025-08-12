"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Moon, Sun, Globe } from "lucide-react"
import { useTheme } from "next-themes"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Resources", href: "#resources" },
  { name: "Cases", href: "#cases" },
]

export function Navigation() {
  const [isHidden, setIsHidden] = useState(false)
  const [prevScrollY, setPrevScrollY] = useState(0)
  const [currentLanguage, setCurrentLanguage] = useState("EN")
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Determine scroll direction
      if (currentScrollY > prevScrollY && currentScrollY > 100) {
        // Scrolling down and past a threshold, hide the navbar
        setIsHidden(true)
      } else if (currentScrollY < prevScrollY || currentScrollY < 50) {
        // Scrolling up or near the top, show the navbar
        setIsHidden(false)
      }
      setPrevScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [prevScrollY]) // Re-run effect when prevScrollY changes

  const toggleLanguage = () => {
    setCurrentLanguage(currentLanguage === "EN" ? "AMH" : "EN")
  }

  return (
    <nav
      className={`sticky top-0 left-0 right-0 z-50 transition-transform duration-300 `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">

          {/* Desktop Navigation - Centered */}
          {/* Logo */}
          <div className="flex items-center justify-center space-x-1 bg-brand-gold-500/20 backdrop-blur-md shadow-lg border border-brand-gold-500/30 rounded-md px-4 py-1">
            <div className="flex-shrink-0">
              <img
                src="/placeholder-logo.svg"
                alt="Sadam Hussein Law Office"
                className="h-14 w-auto"
              />
            </div>
          </div>
          <div className="hidden md:flex justify-center flex-1 px-8">
            <div className="flex items-center justify-center space-x-1 bg-brand-gold-500/20 backdrop-blur-md shadow-lg border border-brand-gold-500/30 rounded-md px-4 py-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative px-6 py-3 mx-1 text-brand-navy-800 dark:text-brand-gold-100 hover:text-brand-gold-600 dark:hover:text-brand-gold-300 font-semibold transition-all duration-300 text-sm rounded-full transform hover:-translate-y-0.5 active:scale-95 text-center"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Language Toggle and Theme Toggle */}
          <div className="flex items-center space-x-2">
            {/* Language Toggle */}
            <div className="flex items-center justify-center space-x-1 bg-brand-gold-500/20 backdrop-blur-md shadow-lg border border-brand-gold-500/30 rounded-md px-4 py-1">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleLanguage}
                className="text-brand-navy-800 dark:text-brand-gold-100 hover:bg-brand-gold-100 dark:hover:bg-brand-navy-800 rounded-md p-3 flex items-center space-x-1"
              >
                <Globe className="h-4 w-4" />
                <span className="text-xs font-medium">{currentLanguage}</span>
              </Button>

              {/* Theme Toggle */}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="text-brand-navy-800 dark:text-brand-gold-100 hover:bg-brand-gold-100 dark:hover:bg-brand-navy-800 rounded-md p-3"
              >
                <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-brand-navy-800 dark:text-brand-gold-100 rounded-md p-3"
                  >
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side="left"
                  className="w-[320px] sm:w-[400px] bg-white/95 dark:bg-brand-navy-900/95 backdrop-blur-md"
                >
                  <nav className="flex flex-col gap-3 mt-12 px-4">
                    <div className="bg-brand-gold-500/20 backdrop-blur-md shadow-lg border border-brand-gold-500/30 rounded-full p-4">
                      {navItems.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="block px-6 py-4 text-brand-navy-800 dark:text-brand-gold-100 hover:text-brand-gold-600 dark:hover:text-brand-gold-300 font-semibold transition-all duration-300 text-lg rounded-full transform hover:-translate-y-0.5 active:scale-95 text-left"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
