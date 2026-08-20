import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const ease = [0.22, 1, 0.36, 1]

export default function PageHero({ eyebrow, title, intro, crumbs = [], art = null }) {
  return (
    <section className="relative grid-bg border-b hairline overflow-hidden">
      <div className="absolute -top-32 left-1/4 w-[600px] h-[320px] rounded-full bg-sky/10 blur-[120px] pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-5 md:px-8 pt-36 md:pt-44 pb-16 md:pb-20">
        <div className={art ? 'ph-grid in' : 'in'}>
        <div>
        {crumbs.length > 0 && (
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 font-mono text-xs text-muted mb-6"
            aria-label="Breadcrumb"
          >
            {crumbs.map((c, i) => (
              <span key={c.label} className="flex items-center gap-2">
                {c.to ? (
                  <Link to={c.to} className="hover:text-sky transition-colors">{c.label}</Link>
                ) : (
                  <span className="text-fg/70">{c.label}</span>
                )}
                {i < crumbs.length - 1 && <span className="text-fg/20">/</span>}
              </span>
            ))}
          </motion.nav>
        )}

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05, ease }}
          className="eyebrow mb-5"
        >
          {eyebrow}
        </motion.p>

        <h1 className="font-display font-extrabold tracking-tightest leading-[1.02] text-4xl md:text-6xl max-w-4xl">
          <span className="block overflow-hidden">
            <motion.span
              className="block"
              initial={{ y: '110%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.85, delay: 0.12, ease }}
            >
              {title}
            </motion.span>
          </span>
        </h1>

        {intro && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35, ease }}
            className="mt-6 max-w-2xl text-lg text-muted leading-relaxed"
          >
            {intro}
          </motion.p>
        )}
        </div>
        {art && (
          <motion.div
            className="art"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease }}
          >
            {art}
            <span className="scanline" />
          </motion.div>
        )}
        </div>
      </div>
    </section>
  )
}
