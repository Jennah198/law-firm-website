import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function CSRPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-20">
        <section className="py-24 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl lg:text-5xl font-bold text-[#2A3B72] mb-6">
                Corporate Social Responsibility
              </h1>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                At SHLO, we believe in giving back to our community and contributing to the betterment of society through our CSR initiatives.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-[#2A3B72] mb-4">Community Development</h3>
                <p className="text-gray-600 leading-relaxed">
                  Supporting local communities through educational programs, infrastructure development, and social welfare initiatives.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-[#2A3B72] mb-4">Legal Aid</h3>
                <p className="text-gray-600 leading-relaxed">
                  Providing pro bono legal services to underprivileged individuals and organizations that cannot afford legal representation.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-[#2A3B72] mb-4">Environmental Responsibility</h3>
                <p className="text-gray-600 leading-relaxed">
                  Promoting sustainable practices and environmental awareness within our organization and the broader community.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}
