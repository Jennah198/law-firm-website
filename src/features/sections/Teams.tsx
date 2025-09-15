import Link from "next/link"
import { Phone, Facebook, Linkedin } from "lucide-react"

export function Teams() {
  return (
    <section className="bg-gray-50">
      <div className="max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-center space-y-12">
        {/* Header */}
        <div>
          <h2 className="text-3xl font-extrabold text-[#1e293b] mb-3">Teams</h2>
          <p className="text-base font-medium text-gray-600">
            A Team of Legal Experts United by Integrity, Excellent Legal Solution.
          </p>
          <p className="text-base text-gray-600 leading-relaxed max-w-2xl mx-auto mt-2">
            Meet our experienced team of legal professionals dedicated to providing exceptional service and expertise.
          </p>
        </div>

        {/* Team Member Card */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8 text-left flex flex-col md:flex-row items-center md:items-start gap-6 hover:shadow-md transition-shadow">
          {/* Image placeholder */}
          <div className="w-40 h-52 bg-gray-100 border border-gray-300 rounded-md flex items-center justify-center">
            <span className="text-gray-400">Photo</span>
          </div>

          {/* Text */}
          <div className="flex-1">
            <div className="text-xl font-bold text-[#1e293b]">Sadam Hussien</div>
            <div className="text-sm font-semibold text-[#947458] mb-3">Principal & General Attorney</div>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Saddam Hussein is the founding principal of SHLO with over 5 years of experience in Ethiopian law. He specializes in corporate law, commercial transactions, and has represented numerous multinational corporations and local businesses in complex legal matters.
Saddam Hussein is the founding principal of SHLO with over 5 years of experience in Ethiopian law. He specializes in corporate law, commercial transactions, and has represented numerous multinational corporations and local businesses in complex legal matters.
            </p>

            {/* Social / Contact */}
            <div className="flex items-center gap-3 mt-2">
              <Link
                href="#contact"
                className="flex items-center gap-1 text-sm font-medium rounded-md border px-3 py-1 bg-gray-100 border-gray-300 transition-colors hover:bg-[#23345b] hover:text-white hover:border-[#23345b]"
              >
                <Phone className="h-4 w-4" /> Contact
              </Link>
              <Link
                href="#"
                className="flex items-center gap-1 text-sm font-medium rounded-md border px-3 py-1 bg-gray-100 border-gray-300 transition-colors hover:bg-[#23345b] hover:text-white hover:border-[#23345b]"
              >
                <Facebook className="h-4 w-4" /> Facebook
              </Link>
              <Link
                href="#"
                className="flex items-center gap-1 text-sm font-medium rounded-md border px-3 py-1 bg-gray-100 border-gray-300 transition-colors hover:bg-[#23345b] hover:text-white hover:border-[#23345b]"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Teams