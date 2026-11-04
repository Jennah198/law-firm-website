import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { ThemeProvider } from "../components/theme-provider"
import "./globals.css"
import { PreHeader } from "@/features/sections/pre-header"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" })

export const metadata: Metadata = {
  title: {
    default: "Sadam Hussein Law Office (SHLO) | Corporate & Investment Lawyers in Ethiopia",
    template: "%s | Sadam Hussein Law Office",
  },
  description:
    "Sadam Hussein Law Office (SHLO) is a full-service Ethiopian law firm advising investors, corporations, start-ups and institutions on corporate, investment, tax, M&A, real estate and dispute resolution matters.",
  keywords: [
    "Ethiopia law firm",
    "Addis Ababa lawyer",
    "corporate law Ethiopia",
    "investment law Ethiopia",
    "tax and customs law",
    "mergers and acquisitions",
    "Sadam Hussein Law Office",
    "SHLO",
  ],
  openGraph: {
    title: "Sadam Hussein Law Office (SHLO)",
    description: "Strategic legal solutions for corporate and investment ambitions in Ethiopia.",
    type: "website",
    locale: "en_US",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased overflow-x-clip`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          <PreHeader />
          <Navigation />
          <div className="pt-[108px]">{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
