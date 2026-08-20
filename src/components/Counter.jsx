import { useEffect, useRef, useState } from 'react'

/** Counts up from 0 to `to` the first time it scrolls into view. */
export default function Counter({ to, suffix = '', duration = 1300, className = 'stat-num' }) {
  const ref = useRef(null)
  const [value, setValue] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      setValue(to)
      return
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting || started.current) return
        started.current = true
        const t0 = performance.now()
        const tick = (now) => {
          const p = Math.min(1, (now - t0) / duration)
          setValue(Math.round(to * (1 - Math.pow(1 - p, 3))))
          if (p < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
        io.disconnect()
      },
      { threshold: 0.3 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [to, duration])

  return (
    <b ref={ref} className={className}>
      {value}
      {suffix}
    </b>
  )
}
