import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function InsightsSection() {
  const insights = [
    {
      title: "Understanding Corporate Compliance in 2024",
      description:
        "Navigate the evolving landscape of corporate compliance with our comprehensive guide covering new regulations, best practices, and strategic approaches to ensure your business stays ahead of legal requirements while maintaining operational efficiency.",
      image: "/placeholder.svg?height=200&width=300&text=Legal+Compliance",
      category: "Corporate Law",
      readTime: "5 min read",
    },
    {
      title: "Employment Law Updates: What Employers Need to Know",
      description:
        "Stay informed about the latest changes in employment legislation, workplace policies, and employee rights. Our expert analysis helps employers understand their obligations and implement compliant practices in today's dynamic work environment.",
      image: "/placeholder.svg?height=200&width=300&text=Employment+Law",
      category: "Employment Law",
      readTime: "7 min read",
    },
    {
      title: "Real Estate Transactions: A Complete Legal Framework",
      description:
        "Explore the intricacies of real estate law with our detailed overview of property transactions, contract negotiations, due diligence processes, and risk mitigation strategies for both commercial and residential real estate deals.",
      image: "/placeholder.svg?height=200&width=300&text=Real+Estate",
      category: "Real Estate Law",
      readTime: "6 min read",
    },
  ]

  return (
    <section id="insights" className="py-20 bg-brand-gold-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-brand-navy-800 mb-6">
            Expert Thought and Insights: Your Legal Guide
          </h2>
          <div className="max-w-4xl mx-auto space-y-4">
            <p className="text-xl text-brand-navy-700 leading-relaxed">
              Stay informed with our latest legal insights, industry analysis, and expert commentary on current legal
              trends that matter to your business and personal legal needs.
            </p>
            <p className="text-lg text-brand-navy-600 leading-relaxed">
              Our experienced attorneys share their knowledge and perspectives to help you navigate complex legal
              landscapes with confidence and make informed decisions.
            </p>
          </div>
        </div>

        {/* Insights Grid - 3 cards in a row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {insights.map((insight, index) => (
            <Card
              key={index}
              className="group hover:bg-brand-navy-800 hover:text-white transition-all duration-300 hover:-translate-y-1 border-0 shadow-md bg-white rounded-xl cursor-pointer"
            >
              <CardContent className="p-6">
                {/* Rectangular Image */}
                <div className="relative mb-6">
                  <div className="w-full h-48 rounded-lg overflow-hidden shadow-lg">
                    <img
                      src={insight.image || "/placeholder.svg"}
                      alt={insight.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute top-3 left-3">
                    <span className="bg-brand-gold-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {insight.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="text-left">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-brand-navy-600 group-hover:text-brand-gold-200">
                      {insight.readTime}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-brand-navy-800 group-hover:text-white mb-3 leading-tight">
                    {insight.title}
                  </h3>

                  <p className="text-brand-navy-700 group-hover:text-brand-gold-100 leading-relaxed text-sm mb-6">
                    {insight.description}
                  </p>

                  {/* Read More Button */}
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-2 border-brand-gold-400 text-brand-gold-600 hover:bg-brand-gold-50 group-hover:border-white group-hover:text-white group-hover:bg-transparent px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 bg-transparent"
                  >
                    Read More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
