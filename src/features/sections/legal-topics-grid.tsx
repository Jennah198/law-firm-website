import { Card, CardContent } from "@/components/ui/card";

export default function LegalTopicsGrid() {
  const topics = [
    [
      "Agency",
      "Agricultural Resources",
      "Alternative Dispute Resolution",
      "Alternative Financing",
      "Art and Cultural Heritage",
      "Aviation",
      "Venture Capital",
      "Natural Resources",
      "Insolvency and Restructuring",
      "Manufacturing",
      "Media",
      "Real Estate",
      "Sports and Entertainment",
      "Taxation",
    ],
    [
      "Banking and Insurance",
      "Competition",
      "Construction",
      "Consumer Protection",
      "Corporate",
      "Cyber Regulation",
      "Data Protection",
      "Distribution",
      "Intellectual Property and Licensing",
      "International Trade and Investment",
      "Privacy",
      "Public and Administrative Law",
      "Public Procurement",
      "Technology and Innovation",
    ],
    [
      "Employment and Immigration",
      "Energy",
      "Environmental and Sustainability",
      "Finance",
      "Food and Beverage",
      "Franchising",
      "Healthcare and Life Sciences",
      "Hospitality and Leisure",
      "Mining",
      "Non-governmental Organizations",
      "Oil and Gas",
      "Telecommunication Regulation",
      "Transportation and Logistics",
    ],
  ];

  return (
    <div className="min-h-screen bg-sidebar-border flex items-center justify-center p-8">
      <div className="max-w-6xl w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {topics.map((column, i) => (
          <div key={i} className="flex flex-col space-y-1.5">
            {column.map((topic, j) => (
              <Card
                key={j}
                className="bg-secondary text-secondary-foreground  font-medium rounded shadow hover:shadow-md hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <CardContent className="py-0 px-3 text-left">{topic}</CardContent>
              </Card>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}