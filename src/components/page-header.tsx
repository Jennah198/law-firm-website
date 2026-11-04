import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

type PageHeaderProps = {
  eyebrow: string
  title: string
  description?: string
  image?: string
}

export function PageHeader({ eyebrow, title, description, image = "/shOfficeFront.jpg" }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden bg-brand-navy-950 py-20 text-white md:py-28">
      <Image src={image} alt="" fill priority sizes="100vw" className="object-cover opacity-25" />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-navy-950 via-brand-navy-950/85 to-brand-navy-950/50" />
      <div className="container relative mx-auto px-4">
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs uppercase tracking-wider text-white/60">
          <Link href="/" className="hover:text-brand-gold-400">Home</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-brand-gold-400">{eyebrow}</span>
        </nav>
        <h1 className="max-w-3xl font-serif text-4xl font-semibold leading-tight md:text-5xl">{title}</h1>
        {description && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/75">{description}</p>}
      </div>
    </section>
  )
}
