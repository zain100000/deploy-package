import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import CTABand from '../components/CTABand'
import { sectors, services } from '../data/services'
import { BLUEPRINT } from '../data/icons'
import Icon from '../components/Icon'
import Counter from '../components/Counter'
import SystemsBand from '../components/SystemsBand'
import { Link } from 'react-router-dom'

const stats = [
  { count: 8, suffix: '+', label: 'Service divisions' },
  { value: '24/7', label: 'Support availability' },
  { count: 100, suffix: '%', label: 'Approved standards' },
  { count: 1, suffix: '', label: 'Point of contact' },
]

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="Who we are"
        title="One team for every technical need in your property."
        intro="Medskytech is a Dubai-based technical services company covering the full maintenance lifecycle of residential and commercial buildings."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'About' }]}
        art={<Icon sector={2} boxed={false} />}
      />

      <section className="max-w-7xl mx-auto px-5 md:px-8 py-20 md:py-28">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow mb-5">The company</p>
              <h2 className="font-display font-bold tracking-tightest text-3xl md:text-4xl leading-tight">
                Built to remove the coordination problem.
              </h2>
              <span className="h-line" />
              <div className="mt-8" dangerouslySetInnerHTML={{ __html: BLUEPRINT }} />
            </Reveal>
          </div>
          <div className="lg:col-span-7 space-y-6">
            <Reveal delay={0.1}>
              <p className="text-lg text-muted leading-relaxed">
                Most property owners in Dubai end up managing four or five separate
                contractors: one for AC, another for plumbing, another for the fit-out.
                Every gap between them becomes the owner&apos;s problem, and every delay gets
                blamed on the trade that came before.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="text-lg text-muted leading-relaxed">
                Medskytech was set up to remove that problem. Eight divisions operate under
                one company, so the handover between trades is ours to manage and there is a
                single team answerable for the finished result. Work is executed by trained
                technicians to approved technical standards, and quoted transparently before
                it starts.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-lg text-muted leading-relaxed">
                We work with villa and apartment owners, offices, retail units, restaurants,
                and facility management teams who need technical work done once and done
                correctly.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6 border-t hairline pt-10">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              {s.count != null ? (
                <Counter to={s.count} suffix={s.suffix} />
              ) : (
                <b className="stat-num">{s.value}</b>
              )}
              <p className="mt-2 text-sm text-muted">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t hairline">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-20 md:py-28">
          <Reveal>
            <p className="eyebrow mb-5">Who we work with</p>
            <h2 className="font-display font-bold tracking-tightest text-3xl md:text-4xl">
              Sectors we serve
            </h2>
            <span className="h-line" />
          </Reveal>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {sectors.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.08}>
                <div className="tile h-full rounded-2xl border hairline bg-panel/50 p-7 hover:border-sky/40 transition-colors">
                  <Icon sector={i} />
                  <h3 className="mt-5 font-display font-bold text-lg">{s.title}</h3>
                  <p className="mt-3 text-sm text-muted leading-relaxed">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t hairline">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-20 md:py-28">
          <Reveal>
            <p className="eyebrow mb-5">Capability</p>
            <h2 className="font-display font-bold tracking-tightest text-3xl md:text-4xl">
              What we cover
            </h2>
          </Reveal>
          <div className="mt-10 grid sm:grid-cols-2 gap-x-10">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 2) * 0.06}>
                <Link
                  to={`/services/${s.slug}`}
                  className="group flex items-center justify-between gap-4 py-5 border-b hairline"
                >
                  <span className="flex items-center gap-5">
                    <span className="font-mono text-sm text-sky/70">{s.id}</span>
                    <span className="font-display font-bold text-lg group-hover:text-sky transition-colors">
                      {s.title}
                    </span>
                  </span>
                  <span className="text-muted group-hover:text-sky group-hover:translate-x-1 transition-all">→</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t hairline">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-20 md:py-28">
          <Reveal>
            <p className="eyebrow mb-5">Live systems view</p>
            <h2 className="font-display font-bold tracking-tightest text-3xl md:text-4xl">
              Everything we keep running.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <SystemsBand />
          </Reveal>
        </div>
      </section>

      <CTABand
        title="Want to talk through a project?"
        text="Tell us the property type and what needs doing. We will assess the site before quoting."
      />
    </>
  )
}
