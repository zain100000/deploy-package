import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import Marquee from '../components/Marquee'
import About from '../components/About'
import Services from '../components/Services'
import Process from '../components/Process'
import WhyUs from '../components/WhyUs'
import Contact from '../components/Contact'
import WorkSlider from '../components/WorkSlider'
import SystemsBand from '../components/SystemsBand'
import Reveal from '../components/Reveal'

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <About />

      <section className="max-w-7xl mx-auto px-5 md:px-8 py-24 md:py-28 border-t hairline">
        <Reveal>
          <p className="eyebrow mb-5">On site</p>
          <h2 className="font-display font-bold tracking-tightest text-4xl md:text-5xl">
            Our teams, at work.
          </h2>
          <span className="h-line" />
        </Reveal>
        <Reveal delay={0.1}>
          <WorkSlider />
        </Reveal>
      </section>

      <Services />
      <Process />
      <WhyUs />

      <section className="max-w-7xl mx-auto px-5 md:px-8 py-24 md:py-28 border-t hairline">
        <Reveal>
          <p className="eyebrow mb-5">Live systems view</p>
          <h2 className="font-display font-bold tracking-tightest text-4xl md:text-5xl">
            One building. Every system.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <SystemsBand />
        </Reveal>
      </section>

      <Contact />
    </>
  )
}
