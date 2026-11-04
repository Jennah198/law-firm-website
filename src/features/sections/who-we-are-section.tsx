import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle2 } from "lucide-react"

const clientele = ["Individual investors", "Start-ups & SMEs", "Government entities", "Multinational corporations"]

export function WhoWeAreSection() {
  return (
    <section id="who-we-are" className="bg-background py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative order-last aspect-[4/5] w-full overflow-hidden bg-accent lg:order-first">
            <Image
              src="/sadam-welcome-first.png"
              alt="Sadam Hussein Law Office"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>

          <div>
            <p className="eyebrow mb-5">Who We Are</p>
            <h2 className="section-title">Welcome to Sadam Hussein Law Office</h2>
            <blockquote className="mt-6 border-l-2 border-primary pl-5 font-serif text-lg italic text-secondary/90 dark:text-foreground/90">
              &ldquo;Empowering success with justice: strategic legal solutions for corporate and investment
              ambitions.&rdquo;
            </blockquote>

            <div className="mt-6 space-y-4 leading-relaxed text-muted-foreground">
              <p>
                Founded by Sadam Hussein, SHLO is a distinguished full-service legal practice based in Addis Ababa. We
                advise and represent clients in corporate law, finance and investment, taxation, real estate,
                intellectual property, mining and energy, fintech, labour and employment, immigration, hospitality,
                international trade, nonprofit law and alternative dispute resolution.
              </p>
              <p>
                We foster a personal working relationship built on mutual trust, so that each client&apos;s objectives
                are thoroughly understood and met with professionalism and excellence.
              </p>
            </div>

            <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {clientele.map((c) => (
                <li key={c} className="flex items-center gap-2 text-sm font-medium text-secondary dark:text-foreground">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" /> {c}
                </li>
              ))}
            </ul>

            <Link
              href="/who-we-are"
              className="mt-10 inline-flex items-center gap-2 rounded-sm border border-secondary px-6 py-3 text-sm font-semibold uppercase tracking-wider text-secondary transition-colors hover:bg-secondary hover:text-secondary-foreground dark:border-foreground dark:text-foreground"
            >
              More about us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
