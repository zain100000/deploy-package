import { Link } from 'react-router-dom'
import Reveal from './Reveal'
import { whyPoints } from '../data/services'

export default function WhyUs() {
  return (
    <section id="why" className="max-w-7xl mx-auto px-5 md:px-8 py-24 md:py-32">
      <div className="grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <p className="eyebrow mb-5">Why Medskytech</p>
              <h2 className="font-display font-bold tracking-tightest text-4xl md:text-5xl leading-tight">
                Chosen for reliability. Kept for quality.
              </h2>
              <Link
                to="/why-us"
                className="inline-block mt-8 font-mono text-xs text-sky hover:text-skysoft transition-colors"
              >
                See the full comparison →
              </Link>
            </Reveal>
          </div>
        </div>
        <div className="lg:col-span-8">
          <div className="divide-y divide-fg/[0.08]">
            {whyPoints.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <div className="py-8 grid md:grid-cols-12 gap-4">
                  <span className="md:col-span-1 font-mono text-sm text-sky/70">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="md:col-span-4 font-display font-bold text-xl">{p.title}</h3>
                  <p className="md:col-span-7 text-muted text-sm leading-relaxed">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
