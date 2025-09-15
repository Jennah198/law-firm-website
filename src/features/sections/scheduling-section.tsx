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
    <section id="scheduling" className="py-24 bg-[#2A3B72] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Area */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#C5AA88] mb-6">
            Schedule Your Legal Consultation
          </h2>
          <p className="text-xl text-[#EDEDED] max-w-4xl mx-auto leading-relaxed">
            Get expert legal advice from our experienced attorneys. Book a consultation that fits your schedule and needs.
          </p>
        </div>

        {/* What You Can Expect Box */}
        <div className="bg-[#4B597D] rounded-xl p-10 mb-12 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-[#C5AA88] text-center mb-6">
            What You Can Expect
          </h3>
          <p className="text-white text-center mb-8 text-lg">
            Our consultation sessions provide you with immediate, actionable legal guidance tailored to your specific needs.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-4">
              <CheckCircle className="h-6 w-6 text-orange-500 mt-0.5 flex-shrink-0" />
              <span className="text-white text-lg">Present your business or investment situation and receive expert analysis</span>
            </div>
            <div className="flex items-start space-x-4">
              <CheckCircle className="h-6 w-6 text-orange-500 mt-0.5 flex-shrink-0" />
              <span className="text-white text-lg">Receive a clear action plan tailored to your corporate or investment case</span>
            </div>
            <div className="flex items-start space-x-4">
              <CheckCircle className="h-6 w-6 text-orange-500 mt-0.5 flex-shrink-0" />
              <span className="text-white text-lg">Understand your legal rights, obligations, and available strategic options</span>
            </div>
            <div className="flex items-start space-x-4">
              <CheckCircle className="h-6 w-6 text-orange-500 mt-0.5 flex-shrink-0" />
              <span className="text-white text-lg">Get answers to urgent legal questions affecting your transactions or operations</span>
            </div>
          </div>
        </div>

        {/* Book Your Session Form Box */}
        <div className="bg-[#4B597D] rounded-xl p-10 max-w-xl mx-auto">
          <div className="text-center mb-2">
            <h3 className="text-2xl font-bold text-[#C5AA88] mb-3">
              Book Your Session
            </h3>
            <p className="text-[#EDEDED] text-lg">
              Select a convenient time for your consultation
            </p>
          </div>

          {/* Form */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Row 1: First Name + Last Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 pt-6 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#2A3B72] peer"
                    placeholder=" "
                  />
                  <label className="absolute left-3 top-2 text-sm text-gray-500 transition-all duration-200 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-gray-500">
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
                    className="w-full p-3 pt-6 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#2A3B72] peer"
                    placeholder=" "
                  />
                  <label className="absolute left-3 top-2 text-sm text-gray-500 transition-all duration-200 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-gray-500">
                    Last Name 
                  </label>
                </div>
              </div>

              {/* Row 2: Email + Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 pt-6 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#2A3B72] peer"
                    placeholder=" "
                  />
                  <label className="absolute left-3 top-2 text-sm text-gray-500 transition-all duration-200 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-gray-500">
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
                    className="w-full p-3 pt-6 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#2A3B72] peer"
                    placeholder=" "
                  />
                  <label className="absolute left-3 top-2 text-sm text-gray-500 transition-all duration-200 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-gray-500">
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
                  className="w-full p-3 pt-6 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#2A3B72] peer"
                  placeholder=" "
                />
                <label className="absolute left-3 top-2 text-sm text-gray-500 transition-all duration-200 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-gray-500">
                  Company/Organization (Optional)
                </label>
              </div>

              {/* Row 4: Practice Area + Urgency Level */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <select
                    name="practiceArea"
                    value={formData.practiceArea}
                    onChange={handleInputChange}
                    className="w-full p-3 pt-6 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#2A3B72] peer"
                  >
                    <option value="">Select practice area</option>
                    <option value="corporate">Corporate Law</option>
                    <option value="investment">Investment Law</option>
                    <option value="commercial">Commercial Law</option>
                    <option value="real-estate">Real Estate Law</option>
                    <option value="employment">Employment Law</option>
                    <option value="other">Other</option>
                  </select>
                  <label className="absolute left-3 top-2 text-sm text-gray-500 transition-all duration-200 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-gray-500">
                  </label>
                </div>
                <div className="relative">
                  <select
                    name="urgencyLevel"
                    value={formData.urgencyLevel}
                    onChange={handleInputChange}
                    className="w-full p-3 pt-6 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#2A3B72] peer"
                  >
                    <option value="">Select urgency level</option>
                    <option value="low">Low - Within 2 weeks</option>
                    <option value="medium">Medium - Within 1 week</option>
                    <option value="high">High - Within 3 days</option>
                    <option value="urgent">Urgent - Within 24 hours</option>
                  </select>
                  <label className="absolute left-3 top-2 text-sm text-gray-500 transition-all duration-200 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-gray-500">
                  </label>
                </div>
              </div>

              {/* Row 5: Description */}
              <div className="relative">
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full p-3 pt-6 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#2A3B72] peer resize-none"
                  placeholder=" "
                />
                <label className="absolute left-3 top-2 text-sm text-gray-500 transition-all duration-200 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-gray-500">
                  Brief Description of Your Legal Matter
                </label>
              </div>

            </form>
          </div>
          {/* Submit Button */}
            <div className="text-center pt-4">
                <button
                  type="submit"
                  className="bg-brand-navy-300 text-[#2A3B72] font-bold py-4 px-8 rounded-lg hover:bg-[#1e2a5a] hover: text-white transition-all duration-300 shadow-lg"
                >
                  Book consultation
                </button>
              </div>
        </div>
      </div>
    </section>
  )
}