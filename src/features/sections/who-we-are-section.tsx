import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export function WhoWeAreSection() {
  return (
    <section id="who-we-are" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-navy-800 mb-6">Who We Are</h2>
            <p className="text-lg text-brand-navy-700 mb-6 leading-relaxed">
              We are a premier law firm dedicated to providing exceptional legal services with unwavering commitment to
              justice and client success. Our team of experienced attorneys brings together diverse expertise and
              innovative approaches to tackle the most complex legal challenges.
            </p>
            <p className="text-lg text-brand-navy-700 mb-6 leading-relaxed">
              With decades of combined experience across multiple practice areas, we continue to evolve and adapt to
              meet the changing legal landscape while maintaining our core values of professionalism, ethics, and
              dedication to justice.
              {/* Read More Link */}
            <Link
              href="/about-us-document.pdf"
              target="_blank"
              className="inline-block text-blue-600 hover:text-blue-800 font-medium transition-colors duration-300 hover:underline"
            >
              Read More...
            </Link>
            </p>
          </div>

          {/* Right side - Image Placeholder */}
          <div className="relative">
            <Card className="overflow-hidden shadow-lg rounded-xl">
              <CardContent className="p-0">
                <div className="aspect-[4/3] bg-gradient-to-br from-brand-gold-100 to-brand-navy-100 flex items-center justify-center">
                  <img
                    src="/placeholder-logo.svg?height=100&width=300"
                    alt="Professional law firm team"
                    className="w-full h-full object-cover"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
