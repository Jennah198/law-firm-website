"use client"

import { useState, useEffect } from "react"
import { Calendar, Clock, Users, CheckCircle, Star } from "lucide-react"

export function SchedulingSection() {
  const [isCalendlyLoaded, setIsCalendlyLoaded] = useState(false)

  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement("script")
    script.src = "https://assets.calendly.com/assets/external/widget.js"
    script.async = true
    script.onload = () => setIsCalendlyLoaded(true)
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [])

  // Benefits array
  /*
  const benefits = [
    {
      icon: Clock,
      title: "Quick 20-Minute Sessions",
      description: "Efficient, focused consultations that respect your time while delivering maximum value."
    },
    {
      icon: Users,
      title: "Expert Legal Consultation",
      description: "Direct access to experienced attorneys who can provide immediate guidance on your legal matters."
    },
    {
      icon: CheckCircle,
      title: "Immediate Action Plan",
      description: "Walk away with a clear understanding of your legal options and next steps."
    },
    {
      icon: Star,
      title: "Affordable Expertise",
      description: "Professional legal advice at an accessible price point of only 700 Birr."
    }
  ]
  */

  return (
    <section id="scheduling" className="py-24 bg-gradient-to-br from-brand-navy-900 via-brand-navy-800 to-brand-navy-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl lg:text-4xl font-bold text-brand-gold-400 mb-6">
            Schedule a 20-Minute Online Meeting with Experts
          </h2>
          <div className="w-24 h-1 bg-brand-gold-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Get direct access to our experienced legal professionals for a focused consultation. 
            Whether you need guidance on a legal matter, want to understand your options, or 
            need immediate advice, our 20-minute sessions provide the perfect opportunity to 
            connect with experts who can help you navigate your legal challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Consultation Details */}
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-10 border border-white/20 shadow-xl">
              <h3 className="text-2xl font-bold text-brand-gold-400 mb-8">What You Can Expect</h3>
              <div className="space-y-6">
                <p className="text-gray-300 leading-relaxed text-lg">
                  Our 20-minute consultation sessions are designed to provide you with immediate, 
                  actionable legal guidance. During your session, you'll have the opportunity to:
                </p>
                <ul className="space-y-5 text-gray-300">
                  <li className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-brand-gold-400 mt-0.5 flex-shrink-0" />
                    <span className="text-lg">Present your legal situation and receive expert analysis</span>
                  </li>
                  <li className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-brand-gold-400 mt-0.5 flex-shrink-0" />
                    <span className="text-lg">Understand your legal rights and available options</span>
                  </li>
                  <li className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-brand-gold-400 mt-0.5 flex-shrink-0" />
                    <span className="text-lg">Receive a clear action plan tailored to your specific case</span>
                  </li>
                  <li className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-brand-gold-400 mt-0.5 flex-shrink-0" />
                    <span className="text-lg">Get answers to your immediate legal questions</span>
                  </li>
                  <li className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-brand-gold-400 mt-0.5 flex-shrink-0" />
                    <span className="text-lg">Learn about potential next steps and timeline expectations</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Session Highlights*/}
            {/*
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <h4 className="text-xl font-semibold text-brand-gold-400 mb-6">Session Highlights</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-brand-gold-400/20 rounded-lg">
                    <Clock className="h-5 w-5 text-brand-gold-400" />
                  </div>
                  <div>
                    <p className="text-brand-gold-300 font-medium">20 Minutes</p>
                    <p className="text-gray-400 text-sm">Focused consultation</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-brand-gold-400/20 rounded-lg">
                    <Users className="h-5 w-5 text-brand-gold-400" />
                  </div>
                  <div>
                    <p className="text-brand-gold-300 font-medium">Expert Lawyers</p>
                    <p className="text-gray-400 text-sm">Direct consultation</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-brand-gold-400/20 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-brand-gold-400" />
                  </div>
                  <div>
                    <p className="text-brand-gold-300 font-medium">Action Plan</p>
                    <p className="text-gray-400 text-sm">Clear next steps</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-brand-gold-400/20 rounded-lg">
                    <Star className="h-5 w-5 text-brand-gold-400" />
                  </div>
                  <div>
                    <p className="text-brand-gold-300 font-medium">Affordable</p>
                    <p className="text-gray-400 text-sm">700 Birr only</p>
                  </div>
                </div>
              </div>
            </div>
            */}

            {/* Benefits Grid*/}
            {/*
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon
                return (
                  <div key={index} className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="p-3 bg-brand-gold-400/20 rounded-lg">
                        <IconComponent className="h-7 w-7 text-brand-gold-400" />
                      </div>
                      <h4 className="text-xl font-semibold text-brand-gold-400">{benefit.title}</h4>
                    </div>
                    <p className="text-gray-300 text-base leading-relaxed">{benefit.description}</p>
                  </div>
                )
              })}
            </div>
            */}

            {/* Pricing Highlight*/}
            {/*<div className="bg-brand-gold-400/10 backdrop-blur-sm rounded-xl p-6 border border-brand-gold-400/30">
              <div className="text-center">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <Calendar className="h-6 w-6 text-brand-gold-400" />
                  <span className="text-2xl font-bold text-brand-gold-400">700 Birr</span>
                </div>
                <p className="text-gray-300 text-sm">One-time consultation fee</p>
                <p className="text-brand-gold-300 text-xs mt-1">No hidden fees • No commitment required</p>
              </div>
            </div>*/}
          </div>

          {/* Right Side - Calendly Widget */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-10 border border-white/20 shadow-xl">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-brand-gold-400 mb-3">Book Your Session</h3>
              <p className="text-gray-300 text-lg">Select a convenient time for your consultation</p>
            </div>
            
            {isCalendlyLoaded ? (
              <div 
                className="calendly-inline-widget" 
                data-url="https://calendly.com/your-calendly-link/20min-consultation"
                style={{ minWidth: '100%', height: '500px' }}
              />
            ) : (
              <div className="flex items-center justify-center h-96">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-gold-400 mx-auto mb-4"></div>
                  <p className="text-gray-300">Loading scheduling widget...</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Additional Information - Commented Out */}
        {/*<div className="mt-16 text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
            <h3 className="text-xl font-semibold text-brand-gold-400 mb-4">Important Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-300">
              <div>
                <h4 className="font-semibold text-brand-gold-300 mb-2">Preparation</h4>
                <p>Please have your legal documents and questions ready for the most productive session.</p>
              </div>
              <div>
                <h4 className="font-semibold text-brand-gold-300 mb-2">Technology</h4>
                <p>Meetings are conducted via secure video conferencing. A stable internet connection is required.</p>
              </div>
              <div>
                <h4 className="font-semibold text-brand-gold-300 mb-2">Confidentiality</h4>
                <p>All consultations are strictly confidential and protected by attorney-client privilege.</p>
              </div>
            </div>
          </div>
        </div>*/}
      </div>
    </section>
  )
} 