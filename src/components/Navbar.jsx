import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import logo from '../assets/logo.png'

const links = [
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Process', to: '/process' },
  { label: 'Why Us', to: '/why-us' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [pathname])

  const isHome = pathname === '/'

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled || !isHome ? 'bg-ink/85 backdrop-blur-md border-b hairline' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 h-[72px] flex items-center justify-between">
        <Link to="/" aria-label="Medskytech home">
          <img src={logo} alt="Medskytech" className="h-9 w-auto rounded-lg" />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `text-sm transition-colors duration-200 ${
                  isActive ? 'text-sky' : 'text-muted hover:text-white'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="text-sm font-medium px-5 py-2.5 rounded-full bg-sky text-ink hover:bg-skysoft transition-colors duration-200"
          >
            Get a Quote
          </Link>
        </nav>

        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className={`w-6 h-px bg-white transition-transform ${open ? 'rotate-45 translate-y-[3.5px]' : ''}`} />
          <span className={`w-6 h-px bg-white transition-transform ${open ? '-rotate-45 -translate-y-[3px]' : ''}`} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-ink/95 backdrop-blur-md border-b hairline"
          >
            <div className="px-5 py-6 flex flex-col gap-5">
              {links.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  className={({ isActive }) => `text-lg ${isActive ? 'text-sky' : 'text-white'}`}
                >
                  {l.label}
                </NavLink>
              ))}
              <Link to="/contact" className="text-center font-medium px-5 py-3 rounded-full bg-sky text-ink">
                Get a Quote
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
