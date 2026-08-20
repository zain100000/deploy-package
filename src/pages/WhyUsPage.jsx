import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import CTABand from '../components/CTABand'
import { whyPoints } from '../data/services'
import Icon from '../components/Icon'

const comparison = [
  ['Multiple separate contractors', 'One contractor, eight divisions'],
  ['You coordinate the handovers', 'We manage the handovers'],
  ['Blame moves between trades', 'One company is answerable'],
  ['Costs appear as you go', 'Itemised before work starts'],
  ['Service happens after failure', 'Service happens on schedule'],
]

export default function WhyUsPage() {
  return (
    <>
      <PageHero
        eyebrow="Why Medskytech"
        title="Chosen for reliability. Kept for quality."
        intro="Anyone can quote a job. The difference shows up in how the work is scoped, executed, and supported after handover."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Why Us' }]}
        art={<Icon step={3} boxed={false} />}
      />

      <section className="max-w-7xl mx-auto px-5 md:px-8 py-20 md:py-28">
        <div className="space-y-12">
          {whyPoints.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.07}>
              <div className="grid md:grid-cols-12 gap-6 md:gap-10 pb-12 border-b hairline">
                <div className="md:col-span-4 flex items-start gap-5">
                  <span className="font-mono text-sm text-sky/70 pt-1">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h2 className="font-display font-bold text-xl md:text-2xl tracking-tight leading-snug">
                    {p.title}
                  </h2>
                </div>
                <div className="md:col-span-8">
                  <p className="text-lg text-fg/85 leading-relaxed">{p.desc}</p>
                  <p className="mt-4 text-muted leading-relaxed">{p.detail}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t hairline">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-20 md:py-28">
          <Reveal>
            <p className="eyebrow mb-5">The difference</p>
            <h2 className="font-display font-bold tracking-tightest text-3xl md:text-4xl">
              How most jobs run, and how ours do.
            </h2>
          </Reveal>

          <div className="mt-12 rounded-2xl border hairline overflow-hidden">
            <div className="grid grid-cols-2 bg-panel/60 border-b hairline">
              <p className="p-5 font-mono text-xs uppercase tracking-[0.2em] text-muted">Typical</p>
              <p className="p-5 font-mono text-xs uppercase tracking-[0.2em] text-sky border-l hairline">
                With Medskytech
              </p>
            </div>
            {comparison.map(([a, b], i) => (
              <Reveal key={a} delay={i * 0.06}>
                <div className={`grid grid-cols-2 ${i < comparison.length - 1 ? 'border-b hairline' : ''}`}>
                  <div className="p-5">
                    <p className="text-sm text-muted leading-relaxed">{a}</p>
                    <span className="bar"><i style={{ width: `${28 + i * 4}%` }} /></span>
                  </div>
                  <div className="p-5 border-l hairline bg-sky/[0.03]">
                    <p className="text-sm text-fg/90 leading-relaxed">{b}</p>
                    <span className="bar"><i style={{ width: `${88 + i * 2}%` }} /></span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        title="Judge us on the assessment."
        text="Book a site visit. You will see the difference in how the job gets scoped before you commit to anything."
      />
    </>
  )
}
