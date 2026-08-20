import { useEffect, useRef } from 'react'

/** Thin sky-blue progress bar pinned to the top of the viewport. */
export default function ScrollProgress() {
  const ref = useRef(null)
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight
      if (ref.current) ref.current.style.transform = `scaleX(${h > 0 ? Math.min(1, window.scrollY / h) : 0})`
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return <div id="prog" ref={ref} />
}
