import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

const services = [
  ['AC & Ventilation Maintenance', '/services/air-conditioning-ventilation'],
  ['Electromechanical Services', '/services/electromechanical-services'],
  ['Plumbing & Sanitary Services', '/services/plumbing-sanitary-works'],
  ['Ceiling & Partition Works', '/services/ceiling-partition-works'],
  ['Floor & Wall Tiling', '/services/floor-wall-tiling'],
]

const pages = [
  ['Home', '/'],
  ['About', '/about'],
  ['Services', '/services'],
  ['Process', '/process'],
  ['Why Us', '/why-us'],
  ['Contact Us', '/contact'],
]

export default function Footer() {
  return (
    <footer className="border-t hairline bg-ink">
      <div className="max-w-7xl mx-auto px-5 md:px-8 pt-16 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.4fr_1.1fr_.9fr_1.3fr] gap-11">
          {/* About */}
          <div>
            <img src={logo} alt="Medsky Technical Services LLC" className="h-16 w-auto rounded-lg mb-5" />
            <h4 className="font-display font-bold text-lg mb-4">About Medskytech</h4>
            <p className="text-sm text-muted leading-relaxed max-w-sm">
              Medsky Technical Services L.L.C is a Dubai-based licensed company delivering
              reliable installation, repair, and maintenance solutions for residential and
              commercial properties with skilled technicians and quality-focused service.
            </p>
            <div className="flex gap-3 mt-6">
              {[
                ['Facebook', 'https://www.facebook.com/medskytechnicaluae/'],
                ['Instagram', 'https://www.instagram.com/medskyuae'],
                ['LinkedIn', 'http://www.linkedin.com/in/medsky-technical-services'],
              ].map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full border hairline grid place-items-center text-muted hover:text-sky hover:border-sky/50 hover:-translate-y-0.5 transition-all"
                >
                  {label[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="font-display font-bold text-lg mb-5">Our Services</h4>
            <ul className="space-y-3.5">
              {services.map(([label, to]) => (
                <li key={to}>
                  <Link to={to} className="text-sm text-white/80 hover:text-sky transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/services" className="text-sm text-sky">See All</Link>
              </li>
            </ul>
          </div>

          {/* Quick Access */}
          <div>
            <h4 className="font-display font-bold text-lg mb-5">Quick Access</h4>
            <ul className="space-y-3.5">
              {pages.map(([label, to]) => (
                <li key={to}>
                  <Link to={to} className="text-sm text-white/80 hover:text-sky transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-display font-bold text-lg mb-5">Contact Details</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm text-white/80 leading-relaxed">
                <span className="shrink-0 w-7 h-7 rounded-lg bg-sky/10 border border-sky/25 grid place-items-center text-sky">◎</span>
                Tamani Arts Building, Office 955, Business Bay, Dubai UAE
              </li>
              <li className="flex gap-3 text-sm">
                <span className="shrink-0 w-7 h-7 rounded-lg bg-sky/10 border border-sky/25 grid place-items-center text-sky">✆</span>
                <a href="tel:+97145773461" className="text-white/80 hover:text-sky transition-colors">+971 (04) 577 3461</a>
              </li>
              <li className="flex gap-3 text-sm">
                <span className="shrink-0 w-7 h-7 rounded-lg bg-sky/10 border border-sky/25 grid place-items-center text-sky">✉</span>
                <a href="mailto:info@medskytech.com" className="text-white/80 hover:text-sky transition-colors">info@medskytech.com</a>
              </li>
            </ul>
            <a
              href="https://maps.google.com/maps?q=Tamani%20Arts%20Offices%2C%20Office%20955%2C%20Business%20Bay%2C%20Dubai%20UAE"
              target="_blank"
              rel="noopener noreferrer"
              className="relative block mt-5 h-32 rounded-xl overflow-hidden border hairline grid-bg group"
            >
              <span className="absolute top-3 left-3 font-mono text-[10px] tracking-wider text-sky bg-ink/75 border border-sky/30 rounded-full px-2.5 py-1">
                Open in Maps ↗
              </span>
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-sky text-2xl">◉</span>
            </a>
          </div>
        </div>

        <div className="mt-11 pt-6 border-t hairline flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted font-mono">
            © {new Date().getFullYear()} Medskytech · Medsky Technical Services LLC, Dubai
          </p>
          <p className="text-xs text-white/40 font-mono">Powered by Medskytech</p>
        </div>
      </div>
    </footer>
  )
}
