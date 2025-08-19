import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "../components/theme-provider"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Sadam Hussein Law Office - Expert Legal Services",
  description:
    "Professional legal services grounded in ethics, driven by innovation, and designed to create real-world impact. Expert attorneys committed to justice and client success.",
  keywords: "law firm, legal services, attorney, lawyer, justice, legal consultation, Sadam Hussein",
  generator: "GoldenAge Technology PLC",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
