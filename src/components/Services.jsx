import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { services } from '../data/services'
import Icon from './Icon'
import Reveal from './Reveal'

export default function Services() {
  return (
    <section id="services" className="max-w-7xl mx-auto px-5 md:px-8 py-24 md:py-32 border-t hairline">
      <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
        <Reveal>
          <p className="eyebrow mb-5">What we do</p>
          <h2 className="font-display font-bold tracking-tightest text-4xl md:text-5xl">Services</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="max-w-sm text-muted text-sm leading-relaxed">
            Eight specialist divisions under one contract: installation, repair, and planned
            maintenance.
          </p>
        </Reveal>
      </div>

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
              <h3 className="mt-2.5 font-display font-bold text-xl md:text-2xl tracking-tight leading-snug">
                {s.title}
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">{s.desc}</p>
            </Link>
          </motion.div>
        ))}
      </div>

      <Reveal delay={0.1}>
        <div className="mt-12 flex justify-center">
          <Link
            to="/services"
            className="px-7 py-3.5 rounded-full border hairline text-fg hover:border-sky hover:text-sky transition-colors"
          >
            View all services
          </Link>
        </div>
      </Reveal>
    </section>
  )
}
