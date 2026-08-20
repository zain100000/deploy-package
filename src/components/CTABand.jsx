import { Link } from 'react-router-dom'
import Reveal from './Reveal'

export default function CTABand({
  title = 'Need this handled?',
  text = 'Send us the job details and we will come back with a clear, itemized quotation.',
}) {
  return (
    <section className="border-t hairline grid-bg">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-20 md:py-24">
        <Reveal>
          <div className="rounded-2xl border hairline bg-panel/50 p-8 md:p-14 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div>
              <h2 className="font-display font-bold tracking-tightest text-3xl md:text-4xl">{title}</h2>
              <p className="mt-4 text-muted max-w-lg leading-relaxed">{text}</p>
            </div>
            <div className="flex flex-wrap gap-4 shrink-0">
              <Link
                to="/contact"
                className="px-7 py-3.5 rounded-full bg-sky text-ink font-medium hover:bg-skysoft transition-colors"
              >
                Request a Quote
              </Link>
              <a
                href="tel:+97145773461"
                className="px-7 py-3.5 rounded-full border hairline text-white hover:border-sky hover:text-sky transition-colors"
              >
                Call Us
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
