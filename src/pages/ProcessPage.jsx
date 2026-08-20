import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import CTABand from '../components/CTABand'
import { processSteps } from '../data/services'
import Icon from '../components/Icon'
import BeforeAfter from '../components/BeforeAfter'

export default function ProcessPage() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 70%', 'end 70%'] })
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <>
      <PageHero
        eyebrow="How we work"
        title="A process you can hold us to."
        intro="Four stages, each with something you can check. Assess before quoting, quote before working, execute to standard, hand over with records."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Process' }]}
        art={<Icon step={0} boxed={false} />}
      />

      <section ref={ref} className="max-w-7xl mx-auto px-5 md:px-8 py-20 md:py-28">
        <div className="relative">
          <div className="hidden md:block absolute left-[19px] top-2 bottom-2 w-px bg-fg/10">
            <motion.div style={{ scaleY: lineScale }} className="w-full h-full bg-sky origin-top" />
          </div>

          <div className="space-y-14">
            {processSteps.map((step, i) => (
              <Reveal key={step.id} delay={i * 0.08}>
                <div className="grid md:grid-cols-12 gap-6 md:gap-10">
                  <div className="md:col-span-3 flex items-start gap-5">
                    <span className="w-10 h-10 shrink-0 rounded-full bg-panel border hairline text-sky font-mono text-sm grid place-items-center relative z-10">
                      {step.id}
                    </span>
                    <h2 className="font-display font-bold text-xl md:text-2xl tracking-tight pt-1.5">
                      {step.title}
                    </h2>
                  </div>
                  <div className="md:col-span-9 md:pl-4">
                    <Icon step={i} className="step-visual block" boxed={false} />
                    <p className="text-lg text-fg/85 leading-relaxed">{step.desc}</p>
                    <p className="mt-4 text-muted leading-relaxed">{step.detail}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t hairline">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-20 md:py-28">
          <Reveal>
            <p className="eyebrow mb-5">Before and after</p>
            <h2 className="font-display font-bold tracking-tightest text-3xl md:text-4xl">
              Drag to see the difference.
            </h2>
            <span className="h-line" />
          </Reveal>
          <Reveal delay={0.1}>
            <BeforeAfter />
          </Reveal>
        </div>
      </section>

      <section className="bg-paper text-ink">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-20 md:py-28 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow mb-5">What you get</p>
              <h2 className="font-display font-bold tracking-tightest text-3xl md:text-4xl text-[#0B1220] leading-tight">
                Documentation, not just finished work.
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <div className="divide-y divide-[#0B1220]/10">
              {[
                ['Itemised quotation', 'Every activity, material, and quantity priced separately so you can compare it against anyone else.'],
                ['Written variations', 'Any scope change is priced and approved in writing before the work happens, never after.'],
                ['Handover records', 'What was installed, where, and when, so the next service visit starts with facts rather than guesswork.'],
                ['Maintenance schedule', 'Contract clients get a fixed calendar of visits, so nothing gets serviced only after it fails.'],
              ].map(([title, desc], i) => (
                <Reveal key={title} delay={i * 0.08}>
                  <div className="py-6 grid md:grid-cols-12 gap-3">
                    <h3 className="md:col-span-4 font-display font-bold text-lg text-[#0B1220]">{title}</h3>
                    <p className="md:col-span-8 text-sm text-[#0B1220]/60 leading-relaxed">{desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Ready to start with an assessment?"
        text="We attend site, check what is actually installed, then quote against real conditions."
      />
    </>
  )
}
