import { useState } from 'react'
import Reveal from './Reveal'
import { services } from '../data/services'

const inputClass =
  'w-full bg-panel/60 border hairline rounded-xl px-4 py-3.5 text-sm text-fg placeholder:text-muted/60 focus:outline-none focus:border-sky/60 transition-colors'

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('sent')
      setForm({ name: '', phone: '', email: '', service: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="border-t hairline grid-bg">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-24 md:py-32 grid lg:grid-cols-2 gap-16">
        <div>
          <Reveal>
            <p className="eyebrow mb-5">Get in touch</p>
            <h2 className="font-display font-extrabold tracking-tightest text-4xl md:text-6xl leading-[1.02]">
              Tell us what needs fixing.
            </h2>
            <p className="mt-6 text-muted max-w-md leading-relaxed">
              Share the job details and we&apos;ll get back to you with a clear,
              itemized quotation. Urgent breakdown? Call us directly.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-12 space-y-5 font-mono text-sm">
              <a href="tel:+97145773461" className="block text-fg hover:text-sky transition-colors">
                +971 (04) 577 3461
              </a>
              <a href="mailto:info@medskytech.com" className="block text-fg hover:text-sky transition-colors">
                info@medskytech.com
              </a>
              <p className="text-muted">Tamani Arts Building, Office 955, Business Bay, Dubai</p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <form onSubmit={submit} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <input name="name" value={form.name} onChange={update} placeholder="Full name" required className={inputClass} />
              <input name="phone" value={form.phone} onChange={update} placeholder="Phone" required className={inputClass} />
            </div>
            <input name="email" type="email" value={form.email} onChange={update} placeholder="Email" className={inputClass} />
            <select name="service" value={form.service} onChange={update} required className={inputClass}>
              <option value="" disabled>Select a service</option>
              {services.map((s) => (
                <option key={s.id} value={s.title}>{s.title}</option>
              ))}
              <option value="Other">Other / Multiple services</option>
            </select>
            <textarea
              name="message"
              value={form.message}
              onChange={update}
              placeholder="Describe the job: location, issue, timeline"
              rows={5}
              className={inputClass}
            />
            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full py-4 rounded-xl bg-sky text-ink font-medium hover:bg-skysoft transition-colors disabled:opacity-60"
            >
              {status === 'sending' ? 'Sending…' : 'Send Request'}
            </button>
            {status === 'sent' && (
              <p className="text-sm text-sky">Request received. We&apos;ll contact you shortly.</p>
            )}
            {status === 'error' && (
              <p className="text-sm text-red-400">Couldn&apos;t send. Check your connection and try again, or call us directly.</p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  )
}
