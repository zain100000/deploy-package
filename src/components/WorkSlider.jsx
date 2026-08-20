import { useEffect, useRef, useState } from 'react'
import { GALLERY, SCENES } from '../data/scenes'
import { services } from '../data/services'
import Media from './Media'

export default function WorkSlider({ interval = 5200 }) {
  const [i, setI] = useState(0)
  const paused = useRef(false)
  const total = GALLERY.length

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = setInterval(() => {
      if (!paused.current) setI((n) => (n + 1) % total)
    }, interval)
    return () => clearInterval(id)
  }, [interval, total])

  const go = (d) => setI((n) => (n + d + total) % total)

  return (
    <div
      className="slider"
      onMouseEnter={() => (paused.current = true)}
      onMouseLeave={() => (paused.current = false)}
    >
      <div className="slides" style={{ transform: `translateX(-${i * 100}%)` }}>
        {GALLERY.map((slug) => {
          const s = services.find((x) => x.slug === slug)
          return (
            <div className="slide" key={slug}>
              <Media slug={slug} showCap={false} />
              <div className="sl-info">
                <h3>{s?.title}</h3>
                <p>{s?.tagline}</p>
                <p className="loc">{SCENES[slug]?.cap}</p>
              </div>
            </div>
          )
        })}
      </div>
      <button className="sl-btn sl-prev" onClick={() => go(-1)} aria-label="Previous">
        ‹
      </button>
      <button className="sl-btn sl-next" onClick={() => go(1)} aria-label="Next">
        ›
      </button>
      <div className="dots">
        {GALLERY.map((slug, n) => (
          <b key={slug} className={n === i ? 'on' : ''} onClick={() => setI(n)} />
        ))}
      </div>
    </div>
  )
}
