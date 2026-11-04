import { Phone, Mail, Clock, MapPin } from "lucide-react"

export function PreHeader() {
  return (
    <div className="fixed top-0 left-0 z-50 h-9 w-full bg-brand-navy-950 text-[13px] text-white/80">
      <div className="container mx-auto flex h-full items-center justify-between gap-4 px-4">
        <div className="flex items-center gap-5">
          <a
            href="tel:+251913693679"
            className="flex items-center gap-2 transition-colors hover:text-brand-gold-400"
          >
            <Phone className="h-3.5 w-3.5 text-brand-gold-500" />
            <span className="font-medium">+251 91 369 3679</span>
          </a>
          <a
            href="mailto:info@sadamhusseinlaw.com"
            className="flex items-center gap-2 transition-colors hover:text-brand-gold-400"
            aria-label="Email info@sadamhusseinlaw.com"
          >
            <Mail className="h-3.5 w-3.5 text-brand-gold-500" />
            <span className="hidden sm:inline">info@sadamhusseinlaw.com</span>
          </a>
        </div>

        <div className="flex items-center gap-5">
          <span className="hidden items-center gap-2 lg:flex">
            <MapPin className="h-3.5 w-3.5 text-brand-gold-500" />
            Meskel Flower, Addis Ababa
          </span>
          <span className="hidden items-center gap-2 md:flex">
            <Clock className="h-3.5 w-3.5 text-brand-gold-500" />
            Mon–Fri: 8:00 AM – 6:00 PM
          </span>
        </div>
      </div>
    </div>
  )
}
