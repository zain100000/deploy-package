import { Link } from 'react-router-dom'
import Reveal from './Reveal'
import Counter from './Counter'

const stats = [
  { count: 8, suffix: '+', label: 'Service divisions' },
  { value: '24/7', label: 'Support availability' },
  { count: 100, suffix: '%', label: 'Approved standards' },
]

export default function About() {
  return (
    <section id="about" className="max-w-7xl mx-auto px-5 md:px-8 py-24 md:py-32">
      <div className="grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="eyebrow mb-5">Who we are</p>
            <h2 className="font-display font-bold tracking-tightest text-4xl md:text-5xl leading-tight">
              One team for every technical need in your property.
            </h2>
          </Reveal>
        </div>
        <div className="lg:col-span-7 lg:pt-8">
          <Reveal delay={0.1}>
            <p className="text-lg text-muted leading-relaxed max-w-2xl">
              Medskytech is a Dubai-based technical services company covering the full
              maintenance lifecycle of residential and commercial buildings. Instead of
              coordinating five different contractors, you work with one accountable team,
              certified, insured, and executing to approved technical standards.
            </p>
            <Link to="/about" className="inline-block mt-8 font-mono text-xs text-sky hover:text-skysoft transition-colors">
              More about the company →
            </Link>
          </Reveal>
          <div className="mt-12 grid grid-cols-3 gap-6 border-t hairline pt-8">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={0.15 + i * 0.1}>
                {s.count != null ? <Counter to={s.count} suffix={s.suffix} /> : <b className="stat-num">{s.value}</b>}
                <p className="mt-2 text-sm text-muted">{s.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
