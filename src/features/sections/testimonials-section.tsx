import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Business Owner",
    content:
      "The team provided exceptional legal guidance during our corporate restructuring. Their expertise and attention to detail were invaluable to our success.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Individual Client",
    content:
      "Professional, responsive, and results-driven. They handled my case with care and achieved an outcome beyond my expectations. Highly recommended.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Startup Founder",
    content:
      "From contract negotiations to compliance issues, they've been our trusted legal partners. Their strategic advice has been crucial to our growth.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-brand-navy-800 mb-4">What Our Clients Say</h2>
          <p className="text-xl text-brand-navy-700 max-w-3xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our clients have to say about our legal services and commitment
            to excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 shadow-md relative rounded-xl"
            >
              <CardContent className="p-8">
                <div className="absolute top-4 right-4">
                  <Quote className="h-8 w-8 text-brand-gold-200" />
                </div>

                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <p className="text-brand-navy-700 mb-6 italic leading-relaxed">&ldquo;{testimonial.content}&rdquo;</p>

                <div className="border-t pt-4">
                  <div className="font-semibold text-brand-navy-800">{testimonial.name}</div>
                  <div className="text-sm text-brand-gold-600">{testimonial.role}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}