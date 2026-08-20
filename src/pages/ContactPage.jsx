import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import Contact from '../components/Contact'
import Icon from '../components/Icon'

const info = [
  ['Phone', '+971 (04) 577 3461', 'tel:+97145773461'],
  ['Email', 'info@medskytech.com', 'mailto:info@medskytech.com'],
  ['Location', 'Tamani Arts Building, Office 955, Business Bay, Dubai', null],
  ['Hours', 'Sun to Thu, 8:00 to 18:00. Emergency support 24/7.', null],
]

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title="Tell us what needs fixing."
        intro="Share the job details and we will get back to you with a clear, itemized quotation. Urgent breakdown? Call us directly."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Contact' }]}
        art={<Icon step={1} boxed={false} />}
      />

      <section className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {info.map(([label, value, href], i) => (
            <Reveal key={label} delay={i * 0.07}>
              <div className="h-full rounded-2xl border hairline bg-panel/50 p-7">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">{label}</p>
                {href ? (
                  <a href={href} className="mt-4 block text-white hover:text-sky transition-colors leading-relaxed">
                    {value}
                  </a>
                ) : (
                  <p className="mt-4 text-white leading-relaxed">{value}</p>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <Contact />
    </>
  )
}
