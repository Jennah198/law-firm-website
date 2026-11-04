"use client"

import { useState } from "react"
import { CheckCircle2, ChevronDown, Clock, Mail, MapPin, Phone } from "lucide-react"

const FIRM_EMAIL = "info@sadamhusseinlaw.com"

const expectations = [
  "Present your business or investment situation and receive expert analysis",
  "Receive a clear action plan tailored to your corporate or investment matter",
  "Understand your legal rights, obligations and available strategic options",
  "Get answers to urgent questions affecting your transactions or operations",
]

const practiceAreaOptions = [
  "Corporate Law",
  "Investment Law",
  "Tax & Customs Law",
  "Mergers & Acquisitions",
  "Intellectual Property",
  "Construction & Real Estate",
  "Employment & Labor",
  "Dispute Resolution",
  "FinTech Law",
  "Other",
]

const urgencyOptions = [
  "Standard – within 2 weeks",
  "Soon – within 1 week",
  "High – within 3 days",
  "Urgent – within 24 hours",
]

const emptyForm = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  company: "",
  practiceArea: "",
  urgencyLevel: "",
  description: "",
}

const inputClass =
  "peer w-full rounded-sm border border-input bg-background px-3 pb-2 pt-6 text-sm text-foreground transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
const floatingLabel =
  "pointer-events-none absolute left-3 top-2 text-xs text-muted-foreground transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs peer-focus:text-primary"

export function SchedulingSection() {
  const [formData, setFormData] = useState(emptyForm)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const f = formData
    const subject = `Consultation request – ${f.firstName} ${f.lastName}${f.practiceArea ? ` (${f.practiceArea})` : ""}`
    const body = [
      `Name: ${f.firstName} ${f.lastName}`,
      `Email: ${f.email}`,
      `Phone: ${f.phone}`,
      f.company ? `Company / Organisation: ${f.company}` : null,
      f.practiceArea ? `Practice area: ${f.practiceArea}` : null,
      f.urgencyLevel ? `Urgency: ${f.urgencyLevel}` : null,
      "",
      "Matter description:",
      f.description || "(not provided)",
    ]
      .filter((l) => l !== null)
      .join("\n")
    window.location.href = `mailto:${FIRM_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSubmitted(true)
  }

  return (
    <section id="scheduling" className="scroll-mt-28 bg-secondary py-20 text-secondary-foreground lg:py-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-5 lg:gap-16">
          {/* Left: info */}
          <div className="lg:col-span-2">
            <p className="eyebrow mb-5 text-brand-gold-400 before:bg-brand-gold-400">Consultation</p>
            <h2 className="font-serif text-3xl font-semibold leading-tight md:text-4xl">
              Schedule your legal consultation
            </h2>
            <p className="mt-4 leading-relaxed text-secondary-foreground/75">
              Get expert advice from our experienced attorneys. Tell us about your matter and we will arrange a time
              that suits you.
            </p>

            <h3 className="mt-10 text-lg font-semibold text-brand-gold-400">What you can expect</h3>
            <ul className="mt-4 space-y-3">
              {expectations.map((e) => (
                <li key={e} className="flex gap-3 text-sm leading-relaxed text-secondary-foreground/85">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold-400" /> {e}
                </li>
              ))}
            </ul>

            <div className="mt-10 space-y-3 border-t border-white/15 pt-8 text-sm text-secondary-foreground/85">
              <a href="tel:+251913693679" className="flex items-center gap-3 hover:text-brand-gold-400">
                <Phone className="h-4 w-4 text-brand-gold-400" /> +251 91 369 3679
              </a>
              <a href={`mailto:${FIRM_EMAIL}`} className="flex items-center gap-3 hover:text-brand-gold-400">
                <Mail className="h-4 w-4 text-brand-gold-400" /> {FIRM_EMAIL}
              </a>
              <p className="flex items-center gap-3">
                <Clock className="h-4 w-4 text-brand-gold-400" /> Mon–Fri: 8:00 AM – 6:00 PM
              </p>
              <p className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold-400" />
                Meskel Flower, Gaben Street, Etalemaw A. Bldg, 5th Floor, Office 502, Addis Ababa
              </p>
            </div>
          </div>

          {/* Right: form */}
          <div className="bg-card p-6 text-card-foreground shadow-2xl sm:p-10 lg:col-span-3">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center py-12 text-center">
                <CheckCircle2 className="h-12 w-12 text-primary" />
                <h3 className="mt-6 text-2xl font-semibold text-secondary dark:text-foreground">Thank you</h3>
                <p className="mt-3 max-w-sm text-muted-foreground">
                  Your email application should now be open with your request ready to send. If it did not open,
                  please email us directly at{" "}
                  <a className="font-medium text-primary underline" href={`mailto:${FIRM_EMAIL}`}>
                    {FIRM_EMAIL}
                  </a>
                  .
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setFormData(emptyForm)
                    setSubmitted(false)
                  }}
                  className="mt-8 text-sm font-semibold text-primary hover:underline"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-2xl font-semibold text-secondary dark:text-foreground">Book your session</h3>
                <p className="pb-2 text-sm text-muted-foreground">Fields marked * are required.</p>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {(
                    [
                      ["firstName", "First name *", "text", true, "given-name"],
                      ["lastName", "Last name *", "text", true, "family-name"],
                      ["email", "Email address *", "email", true, "email"],
                      ["phone", "Phone number *", "tel", true, "tel"],
                    ] as const
                  ).map(([name, label, type, required, autoComplete]) => (
                    <div key={name} className="relative">
                      <input
                        id={`sched-${name}`}
                        type={type}
                        name={name}
                        value={formData[name]}
                        onChange={handleChange}
                        required={required}
                        autoComplete={autoComplete}
                        placeholder=" "
                        className={inputClass}
                      />
                      <label htmlFor={`sched-${name}`} className={floatingLabel}>
                        {label}
                      </label>
                    </div>
                  ))}
                </div>

                <div className="relative">
                  <input
                    id="sched-company"
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    autoComplete="organization"
                    placeholder=" "
                    className={inputClass}
                  />
                  <label htmlFor="sched-company" className={floatingLabel}>
                    Company / organisation (optional)
                  </label>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {(
                    [
                      ["practiceArea", "Practice area", practiceAreaOptions],
                      ["urgencyLevel", "Urgency", urgencyOptions],
                    ] as const
                  ).map(([name, label, options]) => (
                    <div key={name} className="relative">
                      <select
                        id={`sched-${name}`}
                        name={name}
                        value={formData[name]}
                        onChange={handleChange}
                        className={`${inputClass} cursor-pointer appearance-none pr-9`}
                      >
                        <option value="">Select…</option>
                        {options.map((o) => (
                          <option key={o} value={o}>
                            {o}
                          </option>
                        ))}
                      </select>
                      <label htmlFor={`sched-${name}`} className="pointer-events-none absolute left-3 top-2 text-xs text-muted-foreground">
                        {label}
                      </label>
                      <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    </div>
                  ))}
                </div>

                <div className="relative">
                  <textarea
                    id="sched-description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows={4}
                    placeholder=" "
                    className={`${inputClass} resize-none`}
                  />
                  <label htmlFor="sched-description" className={floatingLabel}>
                    Brief description of your legal matter
                  </label>
                </div>

                <p className="text-xs leading-relaxed text-muted-foreground">
                  Please do not include confidential information. Submitting this form does not create an
                  attorney–client relationship.
                </p>

                <button
                  type="submit"
                  className="w-full rounded-sm bg-primary px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-secondary sm:w-auto"
                >
                  Request consultation
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
