import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react"

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
]

const legalLinks = [
  { name: "Privacy Policy", href: "#" },
  { name: "Terms of Service", href: "#" },
  { name: "Cookie Policy", href: "#" },
  { name: "Disclaimer", href: "#" },
]

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
]

export function Footer() {
  return (
    <footer className="bg-brand-navy-900 dark:bg-brand-navy-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <img
                src="placeholder-logo.png"
                alt="Sadam Hussein Law Office"
                className="h-16 w-auto mr-4"
              />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-brand-gold-400">Sadam Hussein Law Office</h3>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Committed to providing exceptional legal services with integrity, innovation, and a dedication to justice.
              Your trusted legal partners for over two decades.
            </p>

            <div className="space-y-2 mb-6">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-brand-gold-400" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-brand-gold-400" />
                <span className="text-gray-300">info@sadamhusseinlaw.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-brand-gold-400" />
                <span className="text-gray-300">123 Legal Street, Suite 456, City, State 12345</span>
              </div>
            </div>

            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon
                return (
                  <Link
                    key={index}
                    href={social.href}
                    className="p-2 bg-brand-navy-800 dark:bg-brand-navy-900 rounded-lg hover:bg-brand-gold-600 transition-colors duration-300"
                    aria-label={social.label}
                  >
                    <IconComponent className="h-5 w-5" />
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-brand-gold-400">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-brand-gold-400 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-brand-gold-400">Legal</h4>
            <ul className="space-y-3">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-brand-gold-400 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-4 -mb-8">
          <h4 className="text-lg font-semibold mb-4 text-brand-gold-400 text-center">Visit Our Office</h4>
          <div className="max-w-xl mx-auto ml-auto mr-8">
            <Link
              href="https://maps.app.goo.gl/Xk4KoXuUJfbyKFQ16"
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
              aria-label="View our location on Google Maps"
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="bg-gray-800 h-40 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-10 w-10 text-brand-gold-400 mx-auto mb-2" />
                    <p className="text-white font-medium mb-1 text-sm">123 Legal Street, Suite 456</p>
                    <p className="text-gray-300 text-xs">City, State 12345</p>
                    <div className="mt-2 inline-flex items-center text-brand-gold-400 text-xs font-medium group-hover:text-brand-gold-300 transition-colors duration-300">
                      <span>View on Google Maps</span>
                      <svg className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>

        <div className="border-t border-brand-navy-800 dark:border-brand-navy-900 mt-12 pt-8 text-center">
          <p className="text-gray-400">© {new Date().getFullYear()} Sadam Hussein Law Office. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
