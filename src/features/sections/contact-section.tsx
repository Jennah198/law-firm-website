"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: "+251 123 456 789",
    subtitle: "Call us anytime",
  },
  {
    icon: Mail,
    title: "Email",
    details: "info@lawfirm.com",
    subtitle: "Send us a message",
  },
  {
    icon: MapPin,
    title: "Address",
    details: "123 Legal Street, Suite 456",
    subtitle: "City, State 12345",
  },
  {
    icon: Clock,
    title: "Office Hours",
    details: "Mon-Fri: 9:00 AM - 6:00 PM",
    subtitle: "Sat: 10:00 AM - 2:00 PM",
  },
]

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission here
  }

  return (
    <section id="contact" className="py-20 bg-brand-gold-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-brand-navy-800 mb-4">Get In Touch</h2>
          <p className="text-xl text-brand-navy-700 max-w-3xl mx-auto">
            Ready to discuss your legal needs? Contact us today for a consultation and let us help you navigate your
            legal challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon
              return (
                <Card key={index} className="hover:shadow-md transition-shadow duration-300 rounded-xl">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-2 bg-brand-gold-100 rounded-lg">
                        <IconComponent className="h-6 w-6 text-brand-gold-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-brand-navy-800 mb-1">{info.title}</div>
                        <div className="text-brand-navy-700 mb-1">{info.details}</div>
                        <div className="text-sm text-brand-navy-600">{info.subtitle}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg rounded-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-brand-navy-800">Send us a message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="Enter subject"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Please describe your legal needs..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-brand-navy-800 hover:bg-brand-navy-900 text-white py-3 rounded-full text-base font-medium"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
