import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-brand-gold-50 to-brand-navy-50 dark:from-brand-navy-950 dark:to-brand-gold-950 flex items-center"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-brand-navy-900 dark:text-brand-gold-100 leading-tight mb-8">
            Justice Begins
            <br />
            With <span className="text-brand-gold-500">Knowledge</span>
          </h1>

          <p className="text-brand-navy-700 dark:text-brand-navy-200 text-lg lg:text-xl leading-relaxed max-w-2xl mb-10">
            Explore a rigorous legal education grounded in ethics, driven by innovation, and designed to create
            real-world impact. Join a community of future legal leaders committed to justice, critical thinking, and
            transformative change in society.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-brand-gold-500 text-brand-gold-600 hover:bg-brand-gold-50 dark:hover:bg-brand-gold-900/20 px-8 py-6 rounded-lg bg-transparent text-base font-medium text-left"
            >
              Book online consultation
            </Button>
            <Button
              size="lg"
              className="bg-brand-navy-900 hover:bg-brand-navy-800 dark:bg-brand-gold-500 dark:hover:bg-brand-gold-600 dark:text-brand-navy-900 text-white px-8 py-6 rounded-lg text-base font-medium text-left"
            >
              Contact us
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
