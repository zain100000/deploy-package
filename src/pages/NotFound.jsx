import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="min-h-[70vh] grid-bg grid place-items-center px-5">
      <div className="text-center max-w-lg">
        <p className="eyebrow mb-6">Error 404</p>
        <h1 className="font-display font-extrabold tracking-tightest text-5xl md:text-7xl">
          Page not found.
        </h1>
        <p className="mt-6 text-muted leading-relaxed">
          That page does not exist. Head back to the homepage or browse the full list of
          services.
        </p>
        <div className="mt-10 flex flex-wrap gap-4 justify-center">
          <Link to="/" className="px-7 py-3.5 rounded-full bg-sky text-ink font-medium hover:bg-skysoft transition-colors">
            Back to Home
          </Link>
          <Link to="/services" className="px-7 py-3.5 rounded-full border hairline text-white hover:border-sky hover:text-sky transition-colors">
            View Services
          </Link>
        </div>
      </div>
    </section>
  )
}
