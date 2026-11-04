import Link from "next/link"
import Image from "next/image"
import { Mail, Phone } from "lucide-react"

const expertise = ["Corporate Law", "Investment Law", "Commercial Transactions", "Dispute Resolution"]

export function Teams() {
  return (
    <section id="teams" className="bg-muted py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="eyebrow mb-5 justify-center">Our Team</p>
            <h2 className="section-title">Legal experts united by integrity</h2>
            <p className="section-lead mt-4">
              Meet the professionals dedicated to delivering exceptional service, sound judgement and excellent legal
              solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 overflow-hidden border border-border bg-card md:grid-cols-5">
            <div className="relative aspect-[4/5] bg-accent md:col-span-2 md:aspect-auto md:min-h-[460px]">
              <Image
                src="/sadam-teams.jpg"
                alt="Sadam Hussein, Founder & Principal Attorney"
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover object-top"
              />
            </div>

            <div className="flex flex-col justify-center p-8 md:col-span-3 md:p-12">
              <p className="eyebrow mb-3">Founder &amp; Principal Attorney</p>
              <h3 className="text-3xl font-semibold text-secondary dark:text-foreground">Sadam Hussein</h3>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                Sadam Hussein is the founding principal of SHLO with over five years of experience in Ethiopian law. He
                specialises in corporate law and commercial transactions, and has represented numerous multinational
                corporations and local businesses in complex legal matters.
              </p>

              <ul className="mt-6 flex flex-wrap gap-2">
                {expertise.map((e) => (
                  <li key={e} className="border border-border bg-accent px-3 py-1 text-xs font-medium text-secondary dark:text-foreground">
                    {e}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact#scheduling"
                  className="inline-flex items-center gap-2 rounded-sm bg-secondary px-5 py-2.5 text-sm font-semibold text-secondary-foreground transition-colors hover:bg-primary"
                >
                  <Phone className="h-4 w-4" /> Schedule a meeting
                </Link>
                <a
                  href="mailto:info@sadamhusseinlaw.com"
                  className="inline-flex items-center gap-2 rounded-sm border border-border px-5 py-2.5 text-sm font-semibold text-secondary transition-colors hover:border-primary hover:text-primary dark:text-foreground"
                >
                  <Mail className="h-4 w-4" /> Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Teams
