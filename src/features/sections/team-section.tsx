export function TeamSection() {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      title: "Senior Partner",
      image: "/placeholder-logo.svg?height=300&width=300",
    },
    {
      name: "Michael Chen",
      title: "Corporate Attorney",
      image: "/placeholder-logo.svg?height=300&width=300",
    },
    {
      name: "Emily Rodriguez",
      title: "Litigation Specialist",
      image: "/placeholder-logo.svg?height=300&width=300",
    },
    {
      name: "David Thompson",
      title: "Criminal Defense Lawyer",
      image: "/placeholder-logo.svg?height=300&width=300",
    },
    {
      name: "Lisa Wang",
      title: "Real Estate Attorney",
      image: "/placeholder-logo.svg?height=300&width=300",
    },
    {
      name: "Robert Martinez",
      title: "Employment Law Expert",
      image: "/placeholder-logo.svg?height=300&width=300",
    },
  ]

  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-brand-navy-800 mb-4">Meet Our Dedicated Team</h2>
          <div className="w-24 h-1 bg-brand-gold-500 mx-auto mb-6"></div>
          <p className="text-xl text-brand-navy-700 max-w-3xl mx-auto">
            Our experienced attorneys are committed to providing exceptional legal representation
          </p>
        </div>

        {/* Team Grid - 2 rows, 3 members each */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {teamMembers.slice(0, 3).map((member, index) => (
            <div key={index} className="text-center">
              <div className="relative mb-6">
                <div className="w-64 h-64 mx-auto rounded-lg overflow-hidden border-4 border-brand-gold-500 shadow-lg">
                  <img
                    src={member.image || "/placeholder-logo.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Name and Title Outside the Picture - Pushed Down */}
                <div className="mt-4 text-center">
                  <h3 className="text-base font-semibold text-brand-navy-800 mb-1">{member.name}</h3>
                  <p className="text-brand-gold-600 font-medium text-sm">{member.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.slice(3, 6).map((member, index) => (
            <div key={index + 3} className="text-center">
              <div className="relative mb-6">
                <div className="w-64 h-64 mx-auto rounded-lg overflow-hidden border-4 border-brand-gold-500 shadow-lg">
                  <img
                    src={member.image || "/placeholder-logo.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Name and Title Outside the Picture - Pushed Down */}
                <div className="mt-4 text-center">
                  <h3 className="text-base font-semibold text-brand-navy-800 mb-1">{member.name}</h3>
                  <p className="text-brand-gold-600 font-medium text-sm">{member.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
