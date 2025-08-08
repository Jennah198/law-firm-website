"use client"

import { useState } from "react"

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "What should I do immediately after being involved in a car accident?",
      answer: "Immediately after a car accident, prioritize your safety and the safety of others. Call 911 if there are injuries or significant damage. Exchange contact and insurance information with other drivers, take photos of the scene and damage, and gather witness information if possible. Avoid admitting fault and contact your insurance company promptly. If you're injured, seek medical attention even if symptoms seem minor, as some injuries may not be immediately apparent."
    },
    {
      question: "How long do I have to file a personal injury claim in my state?",
      answer: "The statute of limitations for personal injury claims varies by state, typically ranging from 1-6 years. In most states, you have 2-3 years from the date of injury to file a lawsuit. However, some cases have shorter deadlines, such as claims against government entities (often 6 months to 1 year) or medical malpractice cases. It's crucial to consult with an attorney early to ensure you don't miss important deadlines that could bar your claim entirely."
    },
    {
      question: "What documents do I need to bring for my initial consultation?",
      answer: "For your initial consultation, bring any relevant documents including police reports, medical records and bills, insurance correspondence, photos of injuries or property damage, witness statements, and any communication with insurance companies. Also bring your driver's license, insurance information, and any court documents if a lawsuit has already been filed. While you don't need everything for the first meeting, having these documents helps us better evaluate your case."
    },
    {
      question: "How are attorney fees typically structured for different types of cases?",
      answer: "Attorney fees vary by case type. Personal injury cases typically use contingency fees (25-40% of recovery), meaning you only pay if we win. Family law cases often use hourly rates ($200-400/hour) or flat fees for simple matters. Estate planning usually involves flat fees or hourly rates. Criminal cases may use flat fees or hourly rates. We offer free initial consultations and will clearly explain our fee structure before taking your case, ensuring transparency and no surprises."
    },
    {
      question: "What is the difference between a will and a trust for estate planning?",
      answer: "A will is a legal document that takes effect after death and goes through probate court, becoming public record. It's simpler and less expensive to create but offers less privacy and control. A trust is a legal entity that can hold assets during your lifetime and after death, avoiding probate and providing privacy. Trusts offer more control over asset distribution and can provide tax benefits, but are more complex and expensive to set up. The choice depends on your assets, family situation, and goals."
    },
    {
      question: "Can I handle my divorce case without hiring an attorney?",
      answer: "While it's legally possible to represent yourself in divorce proceedings, it's generally not recommended, especially for complex cases involving children, significant assets, or contested issues. Family law is complex, and mistakes can have long-term consequences for custody, support, and property division. An experienced attorney can help you understand your rights, negotiate favorable terms, and ensure all legal requirements are met. We offer flexible payment options and can help you navigate the process efficiently."
    },
  ]

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-brand-navy-800 mb-6">Most Frequently Asked Questions</h2>
        </div>

        {/* FAQ List */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-gold-600 focus:ring-opacity-50"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-brand-navy-800 pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    <svg
                      className={`w-5 h-5 text-brand-navy-800 transition-transform duration-300 ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-4 pt-2">
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
