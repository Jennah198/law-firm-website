"use client"

import { Phone, Mail, Clock } from "lucide-react"

export function PreHeader() {
  return (
    <div className="fixed top-0 left-0 w-full bg-[#e6e2eb] text-[#23345b] py-2 text-sm z-50">
      <div className="container mx-auto px-4">
        <div className="hidden md:flex justify-between items-center">
          
          {/* Desktop View - Original Layout */}
          <div className="flex items-center space-x-6">
            <a
              href="tel:+251913693679"
              className="flex items-center space-x-2 hover:text-[#947458] transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span className="font-medium">+251 91 369 3679</span>
            </a>
            <a
              href="mailto:info@sadamhusseinlaw.com"
              className="flex items-center space-x-2 hover:text-[#947458] transition-colors"
            >
              <Mail className="h-4 w-4" />
              <span>info@sadamhusseinlaw.com</span>
            </a>
          </div>

          <div className="flex items-center space-x-2 text-gray-700">
            <Clock className="h-4 w-4" />
            <span>Mon-Fri: 8:00 AM - 6:00 PM</span>
          </div>
        </div>

        {/* Mobile View - Compact Layout */}
        <div className="flex md:hidden justify-between items-center gap-2">
          <div className="flex items-center space-x-4">
            <a
              href="tel:+251913693679"
              className="flex items-center space-x-1 hover:text-[#947458] transition-colors"
            >
              <Phone className="h-3 w-3" />
              <span className="text-xs font-medium">+251 91 369 3679</span>
            </a>
            <a
              href="mailto:info@sadamhusseinlaw.com"
              className="flex items-center space-x-1 hover:text-[#947458] transition-colors"
            >
              <Mail className="h-3 w-3" />
              <span className="text-xs">info@sadamhusseinlaw.com</span>
            </a>
          </div>

          <div className="flex items-center space-x-1 text-gray-700">
            <Clock className="h-3 w-3" />
            <span className="text-xs">Mon-Fri: 8:00 AM - 6:00 PM</span>
          </div>
        </div>
      </div>
    </div>
  )
}