"use client"

import { useState } from "react"
import { CheckCircle } from "lucide-react"

export function SchedulingSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    practiceArea: "",
    urgencyLevel: "",
    description: ""
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  return (
    <section id="scheduling" className="py-20 bg-[hsl(var(--secondary))] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Area */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-[hsl(var(--primary))] mb-4">
            Schedule Your Legal Consultation
          </h2>
          <p className="text-xl text-[hsl(var(--muted-foreground))] max-w-4xl mx-auto leading-relaxed">
            Get expert legal advice from our experienced attorneys. Book a consultation that fits your schedule and needs.
          </p>
        </div>

        {/* What You Can Expect Box */}
        <div className="bg-[hsl(var(--card))] rounded-xl p-8 mb-10 max-w-4xl mx-auto shadow-lg border border-[hsl(var(--border))]">
          <h3 className="text-2xl font-bold text-[hsl(var(--primary))] text-center mb-4">
            What You Can Expect
          </h3>
          <p className="text-[hsl(var(--muted-foreground))] text-center mb-6 text-lg">
            Our consultation sessions provide you with immediate, actionable legal guidance tailored to your specific needs.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-5 w-5 text-[hsl(var(--primary))] mt-0.5 flex-shrink-0" />
              <span className="text-[hsl(var(--foreground))] text-base">Present your business or investment situation and receive expert analysis</span>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-5 w-5 text-[hsl(var(--primary))] mt-0.5 flex-shrink-0" />
              <span className="text-[hsl(var(--foreground))] text-base">Receive a clear action plan tailored to your corporate or investment case</span>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-5 w-5 text-[hsl(var(--primary))] mt-0.5 flex-shrink-0" />
              <span className="text-[hsl(var(--foreground))] text-base">Understand your legal rights, obligations, and available strategic options</span>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-5 w-5 text-[hsl(var(--primary))] mt-0.5 flex-shrink-0" />
              <span className="text-[hsl(var(--foreground))] text-base">Get answers to urgent legal questions affecting your transactions or operations</span>
            </div>
          </div>
        </div>

        {/* Book Your Session Form Box */}
        <div className="bg-[hsl(var(--card))] rounded-xl p-8 max-w-4xl mx-auto shadow-lg border border-[hsl(var(--border))]">
          <div className="text-center mb-4">
            <h3 className="text-2xl font-bold text-[hsl(var(--primary))] mb-2">
              Book Your Session
            </h3>
            <p className="text-[hsl(var(--muted-foreground))] text-lg">
              Select a convenient time for your consultation
            </p>
          </div>

          {/* Form */}
          <div className="bg-[hsl(var(--muted))] rounded-xl p-6 shadow-inner mb-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Row 1: First Name + Last Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="relative">
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 pt-6 border border-[hsl(var(--border))] rounded-lg bg-white text-[hsl(var(--foreground))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))] focus:border-transparent peer transition-colors"
                    placeholder=" "
                  />
                  <label className="absolute left-3 top-2 text-sm text-[hsl(var(--muted-foreground))] transition-all duration-200 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-[hsl(var(--muted-foreground))] peer-focus:top-2 peer-focus:text-sm peer-focus:text-[hsl(var(--primary))] pointer-events-none">
                    First Name 
                  </label>
                </div>
                <div className="relative">
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 pt-6 border border-[hsl(var(--border))] rounded-lg bg-white text-[hsl(var(--foreground))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))] focus:border-transparent peer transition-colors"
                    placeholder=" "
                  />
                  <label className="absolute left-3 top-2 text-sm text-[hsl(var(--muted-foreground))] transition-all duration-200 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-[hsl(var(--muted-foreground))] peer-focus:top-2 peer-focus:text-sm peer-focus:text-[hsl(var(--primary))] pointer-events-none">
                    Last Name 
                  </label>
                </div>
              </div>

              {/* Row 2: Email + Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 pt-6 border border-[hsl(var(--border))] rounded-lg bg-white text-[hsl(var(--foreground))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))] focus:border-transparent peer transition-colors"
                    placeholder=" "
                  />
                  <label className="absolute left-3 top-2 text-sm text-[hsl(var(--muted-foreground))] transition-all duration-200 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-[hsl(var(--muted-foreground))] peer-focus:top-2 peer-focus:text-sm peer-focus:text-[hsl(var(--primary))] pointer-events-none">
                    Email Address 
                  </label>
                </div>
                <div className="relative">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 pt-6 border border-[hsl(var(--border))] rounded-lg bg-white text-[hsl(var(--foreground))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))] focus:border-transparent peer transition-colors"
                    placeholder=" "
                  />
                  <label className="absolute left-3 top-2 text-sm text-[hsl(var(--muted-foreground))] transition-all duration-200 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-[hsl(var(--muted-foreground))] peer-focus:top-2 peer-focus:text-sm peer-focus:text-[hsl(var(--primary))] pointer-events-none">
                    Phone Number 
                  </label>
                </div>
              </div>

              {/* Row 3: Company */}
              <div className="relative">
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full p-3 pt-6 border border-[hsl(var(--border))] rounded-lg bg-white text-[hsl(var(--foreground))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))] focus:border-transparent peer transition-colors"
                  placeholder=" "
                />
                <label className="absolute left-3 top-2 text-sm text-[hsl(var(--muted-foreground))] transition-all duration-200 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-[hsl(var(--muted-foreground))] peer-focus:top-2 peer-focus:text-sm peer-focus:text-[hsl(var(--primary))] pointer-events-none">
                  Company/Organization (Optional)
                </label>
              </div>

              {/* Row 4: Practice Area + Urgency Level */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="relative">
                  <select
                    name="practiceArea"
                    value={formData.practiceArea}
                    onChange={handleInputChange}
                    className="w-full p-3 pt-6 border border-[hsl(var(--border))] rounded-lg bg-white text-[hsl(var(--foreground))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))] focus:border-transparent appearance-none cursor-pointer"
                  >
                    <option value="">Select practice area</option>
                    <option value="corporate">Corporate Law</option>
                    <option value="investment">Investment Law</option>
                    <option value="commercial">Commercial Law</option>
                    <option value="real-estate">Real Estate Law</option>
                    <option value="employment">Employment Law</option>
                    <option value="other">Other</option>
                  </select>
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <svg className="w-4 h-4 text-[hsl(var(--muted-foreground))]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  <label className="absolute left-3 top-2 text-sm text-[hsl(var(--muted-foreground))] pointer-events-none">
                    Practice Area
                  </label>
                </div>
                <div className="relative">
                  <select
                    name="urgencyLevel"
                    value={formData.urgencyLevel}
                    onChange={handleInputChange}
                    className="w-full p-3 pt-6 border border-[hsl(var(--border))] rounded-lg bg-white text-[hsl(var(--foreground))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))] focus:border-transparent appearance-none cursor-pointer"
                  >
                    <option value="">Select urgency level</option>
                    <option value="low">Low - Within 2 weeks</option>
                    <option value="medium">Medium - Within 1 week</option>
                    <option value="high">High - Within 3 days</option>
                    <option value="urgent">Urgent - Within 24 hours</option>
                  </select>
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <svg className="w-4 h-4 text-[hsl(var(--muted-foreground))]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  <label className="absolute left-3 top-2 text-sm text-[hsl(var(--muted-foreground))] pointer-events-none">
                    Urgency Level
                  </label>
                </div>
              </div>

              {/* Row 5: Description */}
              <div className="relative">
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full p-3 pt-6 border border-[hsl(var(--border))] rounded-lg bg-white text-[hsl(var(--foreground))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))] focus:border-transparent peer resize-none transition-colors"
                  placeholder=" "
                />
                <label className="absolute left-3 top-2 text-sm text-[hsl(var(--muted-foreground))] transition-all duration-200 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-[hsl(var(--muted-foreground))] peer-focus:top-2 peer-focus:text-sm peer-focus:text-[hsl(var(--primary))] pointer-events-none">
                  Brief Description of Your Legal Matter
                </label>
              </div>
            </form>
          </div>

          {/* Submit Button - Now outside the white background */}
          <div className="text-center">
            <button
              type="submit"
              onClick={handleSubmit}
              className="bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] font-bold py-4 px-12 rounded-lg hover:bg-[hsl(var(--secondary))] hover:text-white transition-all duration-300 shadow-lg text-lg"
            >
              Book Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}