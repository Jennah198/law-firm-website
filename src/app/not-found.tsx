import Link from "next/link"

export default function NotFound() {
  return (
    <main className="flex min-h-[60vh] items-center bg-background py-24">
      <div className="container mx-auto px-4 text-center">
        <p className="font-serif text-7xl font-semibold text-primary">404</p>
        <h1 className="mt-4 font-serif text-3xl font-semibold text-secondary dark:text-foreground">Page not found</h1>
        <p className="mx-auto mt-4 max-w-md text-muted-foreground">
          The page you are looking for may have moved or no longer exists.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Link href="/" className="rounded-sm bg-secondary px-6 py-3 text-sm font-semibold uppercase tracking-wider text-secondary-foreground hover:bg-primary">
            Back to home
          </Link>
          <Link href="/contact" className="rounded-sm border border-border px-6 py-3 text-sm font-semibold uppercase tracking-wider text-secondary hover:border-primary hover:text-primary dark:text-foreground">
            Contact us
          </Link>
        </div>
      </div>
    </main>
  )
}
