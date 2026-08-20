import { useEffect } from 'react'

/**
 * SVG stroke-draw setup.
 *
 * Two jobs:
 *  1. Measure each stroke's true length and use it as the dash length, so the
 *     "draw in" animation covers exactly the path.
 *  2. Give every icon its own IntersectionObserver that adds `.in` when it
 *     scrolls into view. Icons must not depend on a parent having `.in`,
 *     because they render inside plain motion wrappers as well as Reveal.
 */
export function useStrokeDraw(deps = []) {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    document.querySelectorAll('.ic .s, .blueprint .s').forEach((el) => {
      if (el.dataset.measured) return
      let len = 200
      try {
        if (el.getTotalLength) len = Math.ceil(el.getTotalLength()) || 200
      } catch {
        /* non-path elements keep the fallback */
      }
      el.style.setProperty('--len', len)
      el.style.strokeDasharray = len
      el.style.strokeDashoffset = reduce ? 0 : len
      el.dataset.measured = '1'
    })

    if (reduce) return

    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (!e.isIntersecting) return
          e.target.classList.add('in')
          io.unobserve(e.target)
        }),
      { threshold: 0.25 }
    )

    document.querySelectorAll('.ic, .blueprint').forEach((svg) => {
      const host = svg.parentElement || svg
      if (host.dataset.drawObserved) return
      host.dataset.drawObserved = '1'
      io.observe(host)
    })

    return () => io.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}
