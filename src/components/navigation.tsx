"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetClose } from "@/components/ui/sheet"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import {
  Menu,
  ChevronDown,
  ArrowRight,
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
  Sun,
  Moon,
} from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "/", label: "Home" },
  { href: "/who-we-are", label: "About" },
  { href: "/practice-areas", label: "Practice Areas", dropdown: true },
  { href: "/teams", label: "Our Team" },
  { href: "/insights", label: "Insights" },
  { href: "/csr", label: "CSR" },
  { href: "/contact", label: "Contact" },
]

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

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/"
  return pathname === href || pathname.startsWith(`${href}/`)
}

function Brand() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  const logo = mounted && resolvedTheme === "dark" ? "/logo-dark.svg" : "/logo-light.svg"

  return (
    <Link href="/" className="flex items-center gap-3" aria-label="Sadam Hussein Law Office — Home">
      <Image src={logo} alt="" width={44} height={44} className="rounded" priority />
      <span className="h-9 w-px bg-brand-gold-500/60" aria-hidden />
      <span className="leading-tight">
        <span className="block font-serif text-lg font-bold tracking-[0.3em] text-secondary dark:text-foreground">
          SHLO
        </span>
        <span className="block text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
          Sadam Hussein Law Office
        </span>
      </span>
    </Link>
  )
}

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  const isDark = mounted && resolvedTheme === "dark"

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="grid h-9 w-9 place-items-center rounded-full text-secondary transition-colors hover:bg-accent hover:text-primary dark:text-foreground"
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  )
}

export function Navigation() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const linkClass = (href: string) =>
    cn(
      "relative py-2 text-sm font-medium transition-colors hover:text-primary",
      "after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left after:scale-x-0 after:bg-primary after:transition-transform hover:after:scale-x-100",
      isActive(pathname, href)
        ? "text-primary after:scale-x-100"
        : "text-secondary dark:text-foreground/90"
    )

  return (
    <nav
      className={cn(
        "fixed top-9 z-40 w-full border-b transition-all duration-300",
        scrolled
          ? "border-border bg-background/95 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-background/85"
          : "border-transparent bg-background"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-[72px] items-center justify-between">
          <Brand />

          {/* Desktop */}
          <div className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) =>
              item.dropdown ? (
                <DropdownMenu key={item.href}>
                  <DropdownMenuTrigger className={cn(linkClass(item.href), "flex items-center gap-1 outline-none")}>
                    {item.label}
                    <ChevronDown className="h-3.5 w-3.5" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="center" sideOffset={14} className="w-[640px] border-border bg-popover p-4">
                    <div className="grid grid-cols-2 gap-1">
                      {practiceAreas.map(({ href, label, icon: Icon }) => (
                        <DropdownMenuItem key={href} asChild className="p-0">
                          <Link
                            href={href}
                            className="flex cursor-pointer items-center gap-3 rounded-md p-2.5 text-sm text-secondary hover:bg-accent focus:bg-accent dark:text-foreground"
                          >
                            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-md bg-brand-gold-100 text-brand-gold-700 dark:bg-brand-gold-900/40 dark:text-brand-gold-400">
                              <Icon className="h-4 w-4" />
                            </span>
                            {label}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </div>
                    <div className="mt-3 border-t border-border pt-3">
                      <Link
                        href="/practice-areas-inner"
                        className="flex items-center justify-center gap-2 text-sm font-semibold text-primary hover:underline"
                      >
                        View all practice areas <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link key={item.href} href={item.href} className={linkClass(item.href)}>
                  {item.label}
                </Link>
              )
            )}
            <ThemeToggle />
            <Button asChild className="rounded-sm bg-secondary px-5 text-secondary-foreground hover:bg-primary">
              <Link href="/contact#scheduling">Book a Consultation</Link>
            </Button>
          </div>

          {/* Mobile */}
          <div className="flex items-center gap-1 lg:hidden">
            <ThemeToggle />
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Open menu">
                  <Menu className="h-5 w-5 text-secondary dark:text-foreground" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 overflow-y-auto sm:w-96">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <div className="flex h-full flex-col px-2 pt-10">
                  <div className="space-y-1">
                    {navItems.map((item) =>
                      item.dropdown ? (
                        <Collapsible key={item.href}>
                          <CollapsibleTrigger className="group flex w-full items-center justify-between border-b border-border py-3 text-base font-medium text-secondary dark:text-foreground">
                            {item.label}
                            <ChevronDown className="h-4 w-4 transition-transform group-data-[state=open]:rotate-180" />
                          </CollapsibleTrigger>
                          <CollapsibleContent className="space-y-1 py-2">
                            {practiceAreas.map(({ href, label, icon: Icon }) => (
                              <SheetClose asChild key={href}>
                                <Link
                                  href={href}
                                  className="flex items-center gap-3 rounded-md px-2 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-primary"
                                >
                                  <Icon className="h-4 w-4 text-primary" />
                                  {label}
                                </Link>
                              </SheetClose>
                            ))}
                          </CollapsibleContent>
                        </Collapsible>
                      ) : (
                        <SheetClose asChild key={item.href}>
                          <Link
                            href={item.href}
                            className={cn(
                              "block border-b border-border py-3 text-base font-medium",
                              isActive(pathname, item.href) ? "text-primary" : "text-secondary dark:text-foreground"
                            )}
                          >
                            {item.label}
                          </Link>
                        </SheetClose>
                      )
                    )}
                  </div>
                  <div className="mt-auto pb-6 pt-8">
                    <SheetClose asChild>
                      <Button asChild className="w-full rounded-sm bg-secondary py-6 text-base hover:bg-primary">
                        <Link href="/contact#scheduling">Book a Consultation</Link>
                      </Button>
                    </SheetClose>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}
