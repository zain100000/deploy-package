import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { processSteps } from '../data/services'
import { Link } from 'react-router-dom'
import Reveal from './Reveal'
import Icon from './Icon'

export default function Process() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 80%', 'end 60%'] })
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <section id="process" className="bg-paper text-ink py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <Reveal>
          <p className="eyebrow mb-5">How we work</p>
          <h2 className="font-display font-bold tracking-tightest text-4xl md:text-5xl text-[#0B1220]">
            A process you can hold us to.
          </h2>
          <Link to="/process" className="inline-block mt-7 font-mono text-xs text-sky hover:text-[#0B1220] transition-colors">
            See the full process →
          </Link>
        </Reveal>

        <div ref={ref} className="relative mt-16 grid md:grid-cols-4 gap-10">
          {/* progress line: horizontal on desktop, vertical through the circles on mobile */}
          <div className="hidden md:block absolute top-5 left-0 right-0 h-px bg-[#0B1220]/10">
            <motion.div style={{ scaleX: lineScale }} className="h-full bg-sky origin-left" />
          </div>
          <div className="md:hidden absolute left-5 top-2 bottom-2 w-px bg-[#0B1220]/10">
            <motion.div style={{ scaleY: lineScale }} className="w-full h-full bg-sky origin-top" />
          </div>

          {processSteps.map((step, i) => (
            <Reveal key={step.id} delay={i * 0.12}>
              <div className="relative">
                <div className="flex items-start gap-4 md:block">
                  <div className="w-10 h-10 rounded-full bg-[#0B1220] text-sky font-mono text-sm grid place-items-center relative z-10 shrink-0">
                    {step.id}
                  </div>
                  <Icon step={i} className="step-visual block md:mt-6" boxed={false} />
                </div>
                <h3 className="mt-6 md:mt-2 pl-9 md:pl-0 font-display font-bold text-xl text-[#0B1220]">{step.title}</h3>
                <p className="mt-3 pl-9 md:pl-0 text-sm text-[#0B1220]/60 leading-relaxed">{step.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
