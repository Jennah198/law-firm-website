"use client"

import { useState } from "react"
import Link from "next/link"
import { Plus } from "lucide-react"
import { cn } from "@/lib/utils"

const faqs = [
  {
    question: "Can foreign investors establish a business in Ethiopia?",
    answer:
      "Yes. Ethiopia has progressively opened its economy to foreign investment, and many sectors now permit full foreign ownership. Some activities remain reserved for domestic investors or require a joint venture, and minimum capital requirements may apply. We assess your proposed activity against the current investment regulations and guide you through licensing and registration.",
  },
  {
    question: "What business structure is right for my company?",
    answer:
      "The right vehicle — such as a private limited company (PLC), share company, partnership or branch of a foreign company — depends on your ownership, liability, capital and governance needs. We advise on the most suitable structure and handle formation, registration and the drafting of memoranda, articles and shareholder agreements.",
  },
  {
    question: "What should I bring to my initial consultation?",
    answer:
      "Please bring any documents relevant to your matter: company registration and licensing documents, existing contracts or agreements, correspondence with counterparties or authorities, and any court or tribunal papers. A short written summary of your objectives and key dates also helps us evaluate your matter efficiently.",
  },
  {
    question: "How are your legal fees structured?",
    answer:
      "Depending on the nature of the engagement, we work on an hourly, fixed-fee or retainer basis. We discuss our fee arrangement openly at the outset and confirm it in a written engagement letter, so you know what to expect before any work begins.",
  },
  {
    question: "Can you help resolve a dispute without going to court?",
    answer:
      "Yes. We regularly represent clients in negotiation, mediation, conciliation and arbitration. Alternative dispute resolution is often faster, more confidential and more cost-effective than litigation, and we can also draft dispute-resolution clauses that protect you in future contracts.",
  },
  {
    question: "Do you advise on tax incentives and customs matters?",
    answer:
      "Yes. We advise on available investment incentives such as income-tax holidays and duty exemptions, corporate tax structuring, VAT and customs compliance, and we represent clients in tax audits, objections and appeals.",
  },
]

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="bg-muted py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-3">
          <div>
            <p className="eyebrow mb-5">FAQ</p>
            <h2 className="section-title">Frequently asked questions</h2>
            <p className="section-lead mt-4">
              Answers to common questions from investors and businesses. Every situation is different — for advice
              on your specific matter, please speak with us.
            </p>
            <Link
              href="/contact#scheduling"
              className="mt-8 inline-flex rounded-sm bg-secondary px-6 py-3 text-sm font-semibold uppercase tracking-wider text-secondary-foreground transition-colors hover:bg-primary"
            >
              Ask a question
            </Link>
          </div>

          <div className="divide-y divide-border border-y border-border lg:col-span-2">
            {faqs.map((faq, i) => {
              const open = openIndex === i
              return (
                <div key={faq.question}>
                  <h3>
                    <button
                      type="button"
                      id={`faq-q-${i}`}
                      aria-expanded={open}
                      aria-controls={`faq-a-${i}`}
                      onClick={() => setOpenIndex(open ? null : i)}
                      className="flex w-full items-center justify-between gap-6 py-6 text-left"
                    >
                      <span className="font-serif text-lg font-semibold text-secondary dark:text-foreground">
                        {faq.question}
                      </span>
                      <Plus
                        className={cn(
                          "h-5 w-5 shrink-0 text-primary transition-transform duration-300",
                          open && "rotate-45"
                        )}
                      />
                    </button>
                  </h3>
                  <div
                    id={`faq-a-${i}`}
                    role="region"
                    aria-labelledby={`faq-q-${i}`}
                    className={cn(
                      "grid transition-all duration-300 ease-in-out",
                      open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="pb-6 pr-10 leading-relaxed text-muted-foreground">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
