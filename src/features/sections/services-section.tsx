import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { SERVICES } from "@/constants/data"

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-brand-gold-50 dark:bg-brand-navy-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-brand-navy-900 dark:text-brand-gold-100 mb-4">
            Our Practice Areas
          </h2>
          <p className="text-xl text-brand-navy-700 dark:text-brand-navy-200 max-w-3xl mx-auto">
            We provide comprehensive legal services across multiple practice areas with expertise and dedication.
          </p>
        </div>

        {/* First Row - 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {SERVICES.slice(0, 3).map((service, index) => {
            const IconComponent = service.icon
            const isCenter = index === 1
            return (
              <Card
                key={index}
                className={`hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 shadow-md rounded-xl min-h-[280px] ${
                  isCenter
                    ? "bg-brand-navy-900 dark:bg-brand-gold-500 text-white dark:text-brand-navy-900"
                    : "bg-white dark:bg-brand-navy-800"
                }`}
              >
                <CardHeader className="text-center pb-4 px-6">
                  <div className="flex justify-center mb-4">
                    <div
                      className={`p-3 rounded-full ${
                        isCenter
                          ? "bg-white/20 dark:bg-brand-navy-900/20"
                          : "bg-brand-gold-100 dark:bg-brand-gold-900/30"
                      }`}
                    >
                      <IconComponent
                        className={`h-8 w-8 ${
                          isCenter
                            ? "text-white dark:text-brand-navy-900"
                            : "text-brand-gold-600 dark:text-brand-gold-400"
                        }`}
                      />
                    </div>
                  </div>
                  <CardTitle
                    className={`text-xl font-semibold ${
                      isCenter ? "text-white dark:text-brand-navy-900" : "text-brand-navy-900 dark:text-brand-gold-100"
                    }`}
                  >
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-6 pb-6">
                  <p
                    className={`text-center leading-relaxed ${
                      isCenter
                        ? "text-white/90 dark:text-brand-navy-800"
                        : "text-brand-navy-700 dark:text-brand-navy-200"
                    }`}
                  >
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Second Row - 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {SERVICES.slice(3, 6).map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card
                key={index + 3}
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 shadow-md bg-white dark:bg-brand-navy-800 rounded-xl min-h-[280px]"
              >
                <CardHeader className="text-center pb-4 px-6">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-brand-gold-100 dark:bg-brand-gold-900/30 rounded-full">
                      <IconComponent className="h-8 w-8 text-brand-gold-600 dark:text-brand-gold-400" />
                    </div>
                  </div>
                  <CardTitle className="text-xl font-semibold text-brand-navy-900 dark:text-brand-gold-100">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-6 pb-6">
                  <p className="text-brand-navy-700 dark:text-brand-navy-200 text-center leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Explore More Services Button - Centered */}
        <div className="flex justify-center">
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-brand-navy-800 text-brand-navy-800 hover:bg-brand-navy-800 hover:text-white dark:border-brand-gold-400 dark:text-brand-gold-400 dark:hover:bg-brand-gold-400 dark:hover:text-brand-navy-900 px-8 py-3 rounded-lg bg-transparent text-base font-medium transition-all duration-300 flex items-center space-x-2"
          >
            <span>Explore More Services</span>
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
