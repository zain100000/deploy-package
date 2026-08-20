import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import CTABand from '../components/CTABand'
import { services } from '../data/services'
import Icon from '../components/Icon'
import Gallery from '../components/Gallery'

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What we do"
        title="Eight divisions, one contract."
        intro="Installation, repair, and planned maintenance across every technical trade a property needs. Open any service to see the full scope of works."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Services' }]}
        art={<Icon slug="electromechanical-services" boxed={false} />}
      />

      <section className="max-w-7xl mx-auto px-5 md:px-8 py-20 md:py-28">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: (i % 4) * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                to={`/services/${s.slug}`}
                className="group relative flex flex-col h-full rounded-2xl border hairline bg-panel/50 p-7 md:p-8 overflow-hidden transition-all duration-300 hover:border-sky/40 hover:-translate-y-1.5"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-sky/[0.07] to-transparent pointer-events-none" />
                <span className="spot" />
                <div className="flex items-start justify-between">
                  <Icon slug={s.slug} />
                  <span className="w-8 h-8 rounded-full border hairline grid place-items-center text-muted group-hover:text-sky group-hover:border-sky/50 group-hover:rotate-45 transition-all duration-300">
                    ↗
                  </span>
                </div>
                <span className="block mt-6 font-mono text-sm text-sky/80">{s.id}</span>
                <h2 className="mt-2.5 font-display font-bold text-xl md:text-2xl tracking-tight leading-snug">
                  {s.title}
                </h2>
                <p className="mt-3 text-sm text-muted leading-relaxed">{s.desc}</p>
                <span className="mt-6 pt-5 border-t hairline font-mono text-xs text-sky/70 group-hover:text-sky transition-colors">
                  View scope of works
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="border-t hairline">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-20 md:py-28">
          <Reveal>
            <p className="eyebrow mb-5">Recent work</p>
            <h2 className="font-display font-bold tracking-tightest text-3xl md:text-4xl">
              On site across Dubai.
            </h2>
            <span className="h-line" />
          </Reveal>
          <Gallery />
        </div>
      </section>

      <section className="border-t hairline">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-20 md:py-28 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow mb-5">Maintenance contracts</p>
              <h2 className="font-display font-bold tracking-tightest text-3xl md:text-4xl leading-tight">
                Scheduled service costs less than reacting to failure.
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-7 lg:pt-2">
            <Reveal delay={0.1}>
              <p className="text-lg text-muted leading-relaxed">
                Most of what we get called for on an emergency basis was preventable on a
                schedule. An annual or quarterly maintenance contract covers the systems most
                likely to fail, AC, pumps, plumbing, and electrical, with fixed visits and
                priority response when something does go wrong.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <Link
                to="/contact"
                className="inline-block mt-8 px-7 py-3.5 rounded-full border hairline text-fg hover:border-sky hover:text-sky transition-colors"
              >
                Ask about a contract
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  )
}
