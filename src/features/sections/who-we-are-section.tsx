import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"

export function WhoWeAreSection() {
  return (
    <section id="who-we-are" className="py-20 bg-[hsl(var(--background))]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[hsl(var(--secondary))] mb-6">
              Welcome to (SHLO)
            </h2>
            <p className="text-lg text-[hsl(var(--secondary))] mb-6 leading-relaxed">
              Founded by Sadam Hussien, SHLO Law Office is a distinguished full-service legal practice based in Ethiopia. 
              The office possesses substantial experience in advising and representing clients in matters primarily related 
              to corporate law, finance, and investment, taxation, real estate, intellectual property, mining and energy, 
              fintech, labor and employment, immigration, hospitality and leisure, international trade and commercial 
              transactions, Nonprofit law, and alternative dispute resolution in Ethiopia.
            </p>

            {/* Read More Button */}
            <Link
              href="/who-we-are"
              className="inline-block mt-4 px-5 py-2 border rounded-md 
                         text-[hsl(var(--secondary))] 
                         border-[hsl(var(--primary))] 
                         hover:border-[hsl(var(--secondary))] 
                         hover:text-[hsl(var(--primary))] 
                         transition-colors duration-300"
            >
              Read More...
            </Link>
          </div>

          {/* Right side - Image Placeholder */}
          <div className="relative">
            <Card className="overflow-hidden shadow-lg rounded-xl">
              <CardContent className="p-0">
                <div className="aspect-[4/3] bg-gradient-to-br from-[hsl(var(--primary))]/10 to-[hsl(var(--secondary))]/10 flex items-center justify-center">
                  <Image
                      src="/shOfficeRight.jpg"
                      alt="Professional law firm team"
                      width={300}
                      height={100}
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