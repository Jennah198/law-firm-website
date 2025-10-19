import Link from "next/link"
import { Phone, Facebook, Linkedin } from "lucide-react"
import Image from "next/image"

export function Teams() {
  return (
    <section id="teams" className="bg-[hsl(var(--muted))]">
      <div className="max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-center space-y-12">
        {/* Header */}
        <div>
          <h2 className="text-3xl font-extrabold text-[hsl(var(--secondary))] mb-3">Teams</h2>
          <p className="text-base font-medium text-[hsl(var(--muted-foreground))]">
            A Team of Legal Experts United by Integrity, Excellent Legal Solution.
          </p>
          <p className="text-base text-[hsl(var(--muted-foreground))] leading-relaxed max-w-2xl mx-auto mt-2">
            Meet our experienced team of legal professionals dedicated to providing exceptional service and expertise.
          </p>
        </div>

        {/* Team Member Card */}
        <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-lg p-6 md:p-8 text-left flex flex-col md:flex-row items-center md:items-start gap-6 hover:shadow-md transition-shadow">
          {/* Real Image Placeholder */}
          <div className="w-40 h-52 bg-[hsl(var(--accent))] border border-[hsl(var(--border))] rounded-md overflow-hidden">
            <Image
              src="/practice-areas/Drll.jpg"
              alt="Sadam Hussein - Principal & General Attorney"
              width={160}
              height={208}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="flex-1">
            <div className="text-xl font-bold text-[hsl(var(--secondary))]">Sadam Hussein</div>
            <div className="text-sm font-semibold text-[hsl(var(--primary))] mb-3">Principal & General Attorney</div>
            <p className="text-sm text-[hsl(var(--muted-foreground))] leading-relaxed mb-4">
              Sadam Hussein is the founding principal of SHLO with over 5 years of experience in Ethiopian law. He specializes in corporate law, commercial transactions, and has represented numerous multinational corporations and local businesses in complex legal matters.
              Sadam Hussein is the founding principal of SHLO with over 5 years of experience in Ethiopian law. He specializes in corporate law, commercial transactions, and has represented numerous multinational corporations and local businesses in complex legal matters.
            </p>

            {/* Social / Contact */}
            <div className="flex items-center gap-3 mt-2">
              <Link
                href="#contact"
                className="flex items-center gap-1 text-sm font-medium rounded-md border px-3 py-1 bg-[hsl(var(--accent))] border-[hsl(var(--border))] text-[hsl(var(--secondary))] transition-colors hover:bg-[hsl(var(--secondary))] hover:text-[hsl(var(--secondary-foreground))] hover:border-[hsl(var(--secondary))]"
              >
                <Phone className="h-4 w-4" /> Contact
              </Link>
              <Link
                href="#"
                className="flex items-center gap-1 text-sm font-medium rounded-md border px-3 py-1 bg-[hsl(var(--accent))] border-[hsl(var(--border))] text-[hsl(var(--secondary))] transition-colors hover:bg-[hsl(var(--secondary))] hover:text-[hsl(var(--secondary-foreground))] hover:border-[hsl(var(--secondary))]"
              >
                <Facebook className="h-4 w-4" /> Facebook
              </Link>
              <Link
                href="#"
                className="flex items-center gap-1 text-sm font-medium rounded-md border px-3 py-1 bg-[hsl(var(--accent))] border-[hsl(var(--border))] text-[hsl(var(--secondary))] transition-colors hover:bg-[hsl(var(--secondary))] hover:text-[hsl(var(--secondary-foreground))] hover:border-[hsl(var(--secondary))]"
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