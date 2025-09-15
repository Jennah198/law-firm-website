import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const stats = [
  { number: "500+", label: "Cases Won" },
  { number: "20+", label: "Years Experience" },
  { number: "98%", label: "Success Rate" },
  { number: "1000+", label: "Happy Clients" },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-brand-gold-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-navy-800 mb-6">
              Committed to Excellence in Legal Practice
            </h2>
            <p className="text-lg text-brand-navy-700 mb-6 leading-relaxed">
              With over two decades of combined experience, our team of dedicated attorneys has built a reputation for
              providing exceptional legal services. We believe that every client deserves personalized attention and
              strategic legal solutions tailored to their unique circumstances.
            </p>
            <p className="text-lg text-brand-navy-700 mb-8 leading-relaxed">
              Our commitment to justice, integrity, and client success drives everything we do. We stay current with
              legal developments and leverage innovative approaches to achieve the best possible outcomes for our
              clients.
            </p>
            <Button className="bg-brand-navy-800 hover:bg-brand-navy-900 text-white px-8 py-3 rounded-full">
              Learn More About Us
            </Button>
          </div>

          <div className="relative">
            <Card className="bg-gradient-to-br from-brand-gold-100 to-brand-navy-100 border-0 shadow-lg rounded-xl">
              <CardContent className="p-8">
                <div className="grid grid-cols-2 gap-8">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-4xl font-bold text-brand-gold-600 mb-2">{stat.number}</div>
                      <div className="text-brand-navy-700 font-medium">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}