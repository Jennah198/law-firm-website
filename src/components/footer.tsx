import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    
    <footer className="bg-[#2F3A56] text-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Left: Branding & Social */}
          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              {/* Local logo */}
              <div className="shrink-0">
            <Image
              src={"/logo-light.svg"}
              alt="SHLO Logo"
              width={64}
              height={64}
              className="rounded"
            />
              </div>
              <div>
                <div className="text-sm text-white">
                  Strategic Legal Excellence for Corporate & Investment Success
                </div>
              </div>
            </div>

            <div className="font-bold text-[#D9A441]">Sadam Hussein Law Office</div>
            <p className="text-sm text-white/90 leading-relaxed">
              Join our socials and stay connected with us for more exciting updates and news about our services and team.
            </p>

            <div className="flex items-center space-x-3 pt-1">
              <Link href="#" aria-label="LinkedIn" className="group">
                <Linkedin className="h-5 w-5 stroke-[1.75] text-white group-hover:text-[#D9A441] transition-colors" />
              </Link>
              <Link href="#" aria-label="Facebook" className="group">
                <Facebook className="h-5 w-5 stroke-[1.75] text-white group-hover:text-[#D9A441] transition-colors" />
              </Link>
              <Link href="#" aria-label="Twitter" className="group">
                <Twitter className="h-5 w-5 stroke-[1.75] text-white group-hover:text-[#D9A441] transition-colors" />
              </Link>
              <Link href="#" aria-label="Instagram" className="group">
                <Instagram className="h-5 w-5 stroke-[1.75] text-white group-hover:text-[#D9A441] transition-colors" />
              </Link>
            </div>
          </div>

          {/* Middle: Quick Links */}
          <div className="text-left">
            <div className="text-white font-bold mb-4">Quick Links</div>
            <ul className="space-y-2 text-white/95">
              <li><Link href="#home" className="hover:text-[#D9A441] transition-colors">Home</Link></li>
              <li><Link href="#about" className="hover:text-[#D9A441] transition-colors">About</Link></li>
              <li><Link href="#services" className="hover:text-[#D9A441] transition-colors">Practice Area & Service</Link></li>
              <li><Link href="#teams" className="hover:text-[#D9A441] transition-colors">Teams</Link></li>
              <li><Link href="#csr" className="hover:text-[#D9A441] transition-colors">CSR</Link></li>
              <li><Link href="#contact" className="hover:text-[#D9A441] transition-colors">Contacts</Link></li>
            </ul>
          </div>

          {/* Right: Contact & Map */}
          <div className="text-left space-y-4">
            <div className="text-white font-bold">Contact Us:</div>
            <div className="space-y-2">
              <div className="flex items-center justify-left space-x-2">
                <Phone className="h-4 w-4 text-white" />
                <span className="text-white">+251 91 369 3679</span>
              </div>
              <div className="flex items-center justify-left space-x-2">
                <Mail className="h-4 w-4 text-white" />
                <span className="text-white">contact@sadamhusseiinlaw.com</span>
              </div>
              <div className="flex items-start justify-left space-x-2">
                <MapPin className="h-4 w-4 text-white mt-1" />
                <span className="text-white max-w-xs text-sm">
                  Meskel Flower, Gaben Street, Etalemaw A. Bldg, 5th Floor, Office No. 502, Addis Ababa, Ethiopia
                </span>
              </div>
            </div>

            <div className="pt-2">
              <div className="overflow-hidden rounded-md ring-1 ring-white/20">
                <iframe
                  title="SHLO Location"
                  src="https://www.google.com/maps?q=Meskel%20Flower%2C%20Addis%20Ababa&output=embed"
                  loading="lazy"
                  className="w-full h-36"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Links row */}
        <div className="mt-8 text-left space-x-3">
          <Link href="#" className="hover:text-[#D9A441] transition-colors">Privacy Policy</Link>
          <span className="opacity-70">|</span>
          <Link href="#" className="hover:text-[#D9A441] transition-colors">Terms</Link>
          <span className="opacity-70">|</span>
          <Link href="#" className="hover:text-[#D9A441] transition-colors">Legal Notice</Link>
        </div>

        {/* Bottom Row */}
        <div className="mt-10 border-t border-white/20 pt-4">
          <div className="text-center text-white opacity-90 space-y-1">
            <div>© All Right is Reserved.</div>
            <div>Developed by Golden Age Technology P.L.C.</div>
          </div>
        </div>
      </div>
    </footer>
  )
}
