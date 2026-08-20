import { motion, useScroll, useTransform } from 'framer-motion'
import { lazy, Suspense, useRef } from 'react'
import { Link } from 'react-router-dom'

const Hero3D = lazy(() => import('./Hero3D'))

const ease = [0.22, 1, 0.36, 1]

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const textY = useTransform(scrollYProgress, [0, 1], [0, 120])
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0])
  const sceneY = useTransform(scrollYProgress, [0, 1], [0, -80])

  return (
    <section id="top" ref={ref} className="relative min-h-screen grid-bg overflow-hidden">
      {/* glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-sky/10 blur-[140px] pointer-events-none" />

      {/* 3D scene */}
      <motion.div style={{ y: sceneY }} className="hidden lg:block absolute inset-y-0 right-0 lg:w-[55%]">
        <Suspense fallback={null}>
          <Hero3D />
        </Suspense>
      </motion.div>

      <motion.div
        style={{ y: textY, opacity: fade }}
        className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 pt-40 pb-28 lg:pt-48"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease }}
          className="eyebrow mb-6"
        >
          Technical Services · Dubai, UAE
        </motion.p>

        <h1 className="font-display font-extrabold tracking-tightest leading-[0.95] text-5xl md:text-7xl lg:text-[86px] max-w-4xl">
          {['Built right.', 'Maintained', 'properly.'].map((line, i) => (
            <span key={line} className="block overflow-hidden">
              <motion.span
                className={`block ${i === 2 ? 'text-sky' : ''}`}
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, delay: 0.25 + i * 0.12, ease }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.75, ease }}
          className="mt-8 max-w-xl text-lg text-muted leading-relaxed"
        >
          Medskytech delivers end-to-end technical and maintenance services for
          residential and commercial properties across Dubai. From AC and
          electromechanical systems to complete interior fit works.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9, ease }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Link
            to="/contact"
            className="px-7 py-3.5 rounded-full bg-sky text-ink font-medium hover:bg-skysoft transition-colors"
          >
            Request a Quote
          </Link>
          <Link
            to="/services"
            className="px-7 py-3.5 rounded-full border hairline text-fg hover:border-sky hover:text-sky transition-colors"
          >
            View Services
          </Link>
        </motion.div>
      </motion.div>

      {/* scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted">Scroll</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          className="w-px h-8 bg-gradient-to-b from-sky to-transparent"
        />
      </motion.div>
    </section>
  )
}
