import { Card, CardContent } from "@/components/ui/card"

export function ClientsSection() {
  const clients = [
    {
      name: "TechCorp Industries",
      description:
        "Leading technology company specializing in innovative software solutions and digital transformation services for enterprise clients worldwide.",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Global Finance Group",
      description:
        "Premier financial services provider offering comprehensive banking, investment, and wealth management solutions to institutional and retail clients.",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Healthcare Partners",
      description:
        "Integrated healthcare network providing quality medical services, advanced treatments, and patient-centered care across multiple locations.",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Metro Construction Ltd",
      description:
        "Award-winning construction company delivering exceptional commercial and residential projects with a focus on sustainability and innovation.",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Retail Solutions Inc",
      description:
        "Dynamic retail corporation operating multiple brands and providing comprehensive consumer goods and services across various market segments.",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Energy Systems Corp",
      description:
        "Renewable energy leader developing cutting-edge solutions for sustainable power generation and environmental conservation initiatives.",
      image: "/placeholder.svg?height=200&width=200",
    },
  ]

  return (
    <section id="clients" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-brand-navy-800 mb-4">Our Trusted Clients</h2>
          <div className="w-24 h-1 bg-brand-gold-500 mx-auto mb-6"></div>
          <p className="text-xl text-brand-navy-700 max-w-3xl mx-auto">
            We are proud to serve these exceptional organizations and help them achieve their legal objectives
          </p>
        </div>

        {/* Clients Grid - 2 rows, 3 clients each */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {clients.slice(0, 3).map((client, index) => (
            <div
              key={index}
              className={`${index === 1 ? "overflow-hidden" : ""}`}
              style={index === 1 ? { transform: "rotate(-5deg)" } : {}}
            >
              <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 shadow-md bg-white rounded-xl">
                <CardContent className="p-6 text-center">
                  <div className="relative mb-6">
                    <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-brand-gold-500 shadow-lg">
                      <img
                        src={client.image || "/placeholder.svg"}
                        alt={client.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="text-left">
                    <h3 className="text-xl font-semibold text-brand-navy-800 mb-3">{client.name}</h3>
                    <p className="text-brand-navy-700 leading-relaxed text-sm">{client.description}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {clients.slice(3, 6).map((client, index) => (
            <div key={index + 3}>
              <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 shadow-md bg-white rounded-xl">
                <CardContent className="p-6 text-center">
                  <div className="relative mb-6">
                    <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-brand-gold-500 shadow-lg">
                      <img
                        src={client.image || "/placeholder.svg"}
                        alt={client.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="text-left">
                    <h3 className="text-xl font-semibold text-brand-navy-800 mb-3">{client.name}</h3>
                    <p className="text-brand-navy-700 leading-relaxed text-sm">{client.description}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
