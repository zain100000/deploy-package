import { useParams, Link, Navigate } from 'react-router-dom'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import CTABand from '../components/CTABand'
import { services, getService } from '../data/services'
import Icon from '../components/Icon'
import Media from '../components/Media'
import { SCENES } from '../data/scenes'

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = getService(slug)

  if (!service) return <Navigate to="/services" replace />

  const others = services.filter((s) => s.slug !== slug).slice(0, 3)

  return (
    <>
      <PageHero
        eyebrow={`Service ${service.id}`}
        title={service.title}
        intro={service.tagline}
        crumbs={[
          { label: 'Home', to: '/' },
          { label: 'Services', to: '/services' },
          { label: service.title },
        ]}
        art={<Icon slug={service.slug} boxed={false} />}
      />

      {SCENES[service.slug] && (
        <div className="max-w-7xl mx-auto px-5 md:px-8 svc-banner">
          <Reveal>
            <Media slug={service.slug} tag={`Service ${service.id}`} />
          </Reveal>
        </div>
      )}

      <section className="max-w-7xl mx-auto px-5 md:px-8 py-20 md:py-28">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="eyebrow mb-5">Overview</p>
              <p className="text-lg text-muted leading-relaxed">{service.overview}</p>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="mt-14 font-display font-bold tracking-tightest text-2xl md:text-3xl">
                Scope of works
              </h2>
            </Reveal>
            <ul className="mt-8 grid sm:grid-cols-2 gap-x-8">
              {service.scope.map((item, i) => (
                <Reveal key={item} delay={0.12 + (i % 2) * 0.05}>
                  <li className="flex gap-4 py-4 border-b hairline">
                    <span className="font-mono text-xs text-sky/70 pt-1">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="text-sm text-white/85 leading-relaxed">{item}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>

          <aside className="lg:col-span-5">
            <div className="lg:sticky lg:top-28 space-y-5">
              <Reveal delay={0.1}>
                <div className="rounded-2xl border hairline bg-panel/50 p-7">
                  <p className="eyebrow mb-5">Signs you need this</p>
                  <ul className="space-y-4">
                    {service.signals.map((sig) => (
                      <li key={sig} className="flex gap-3 text-sm text-muted leading-relaxed">
                        <span className="text-sky mt-0.5 shrink-0">•</span>
                        <span>{sig}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              <Reveal delay={0.15}>
                <div className="rounded-2xl border border-sky/30 bg-sky/[0.06] p-7">
                  <h3 className="font-display font-bold text-lg">Get this quoted</h3>
                  <p className="mt-3 text-sm text-muted leading-relaxed">
                    We assess the site before quoting, so the number you get reflects the
                    actual job.
                  </p>
                  <Link
                    to="/contact"
                    className="inline-block mt-6 px-6 py-3 rounded-full bg-sky text-ink text-sm font-medium hover:bg-skysoft transition-colors"
                  >
                    Request a Quote
                  </Link>
                </div>
              </Reveal>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-t hairline">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-20 md:py-24">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
              <h2 className="font-display font-bold tracking-tightest text-2xl md:text-3xl">
                Other services
              </h2>
              <Link to="/services" className="font-mono text-xs text-sky hover:text-skysoft transition-colors">
                View all eight →
              </Link>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-3 gap-5">
            {others.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.08}>
                <Link
                  to={`/services/${s.slug}`}
                  className="group block h-full rounded-2xl border hairline bg-panel/50 p-7 hover:border-sky/40 hover:-translate-y-1 transition-all duration-300"
                >
                  <Icon slug={s.slug} />
                  <span className="block mt-5 font-mono text-sm text-sky/80">{s.id}</span>
                  <h3 className="mt-2 font-display font-bold text-lg group-hover:text-sky transition-colors">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted leading-relaxed">{s.tagline}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        title={`Need ${service.title.toLowerCase()}?`}
        text="Send the job details and we will come back with a clear, itemized quotation."
      />
    </>
  )
}
