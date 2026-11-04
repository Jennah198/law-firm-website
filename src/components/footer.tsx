import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

const quickLinks = [
  { href: "/who-we-are", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/teams", label: "Our Team" },
  { href: "/insights", label: "Insights" },
  { href: "/news-and-updates", label: "News & Updates" },
  { href: "/csr", label: "CSR" },
  { href: "/contact", label: "Contact" },
]

const practiceLinks = [
  { href: "/practice-areas/corporate-law", label: "Corporate Law" },
  { href: "/practice-areas/investment-law", label: "Investment Law" },
  { href: "/practice-areas/tax-customs-law", label: "Tax & Customs" },
  { href: "/practice-areas/mergers-acquisitions", label: "Mergers & Acquisitions" },
  { href: "/practice-areas/dispute-resolution", label: "Dispute Resolution" },
  { href: "/practice-areas-inner", label: "All Practice Areas" },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-brand-navy-950 text-white/75">
      <div className="container mx-auto px-4 pb-10 pt-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-3">
              <Image src="/logo-dark.svg" alt="" width={48} height={48} className="rounded" />
              <span className="leading-tight">
                <span className="block font-serif text-xl font-bold tracking-[0.3em] text-white">SHLO</span>
                <span className="block text-[11px] uppercase tracking-[0.12em] text-white/60">Sadam Hussein Law Office</span>
              </span>
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed">
              Strategic legal excellence for corporate and investment success. A full-service law office serving
              investors, businesses and institutions across Ethiopia.
            </p>
          </div>

          <div className="lg:col-span-2">
            <h2 className="mb-5 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold-400">Firm</h2>
            <ul className="space-y-3 text-sm">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="transition-colors hover:text-brand-gold-400">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h2 className="mb-5 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold-400">Practice Areas</h2>
            <ul className="space-y-3 text-sm">
              {practiceLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="transition-colors hover:text-brand-gold-400">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h2 className="mb-5 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold-400">Contact</h2>
            <ul className="space-y-4 text-sm">
              <li>
                <a href="tel:+251913693679" className="flex items-center gap-3 hover:text-brand-gold-400">
                  <Phone className="h-4 w-4 shrink-0 text-brand-gold-400" /> +251 91 369 3679
                </a>
              </li>
              <li>
                <a href="mailto:info@sadamhusseinlaw.com" className="flex items-center gap-3 hover:text-brand-gold-400">
                  <Mail className="h-4 w-4 shrink-0 text-brand-gold-400" /> info@sadamhusseinlaw.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold-400" />
                <span>Meskel Flower, Gaben Street, Etalemaw A. Bldg, 5th Floor, Office No. 502, Addis Ababa, Ethiopia</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="h-4 w-4 shrink-0 text-brand-gold-400" /> Mon–Fri: 8:00 AM – 6:00 PM
              </li>
            </ul>
            <div className="mt-6 overflow-hidden ring-1 ring-white/10">
              <iframe
                title="Sadam Hussein Law Office location"
                src="https://www.google.com/maps?q=Meskel%20Flower%2C%20Addis%20Ababa&output=embed"
                loading="lazy"
                className="h-36 w-full grayscale"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-8 text-xs leading-relaxed text-white/50">
          <p className="max-w-4xl">
            Disclaimer: The information on this website is for general informational purposes only and does not
            constitute legal advice. Viewing this site or contacting us does not create an attorney–client
            relationship.
          </p>
          <div className="mt-6 flex flex-col justify-between gap-2 sm:flex-row">
            <p>© {year} Sadam Hussein Law Office. All rights reserved.</p>
            <p>Developed by Golden Age Technology P.L.C.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
