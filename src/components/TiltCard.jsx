import { useRef } from 'react'

/** Adds subtle 3D tilt + a cursor-following spotlight to card children. */
export default function TiltCard({ children, className = '', as: Tag = 'div', ...rest }) {
  const ref = useRef(null)
  const spot = useRef(null)

  const onMove = (e) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width
    const y = (e.clientY - r.top) / r.height
    el.style.transform = `perspective(900px) rotateX(${(0.5 - y) * 5}deg) rotateY(${(x - 0.5) * 5}deg) translateY(-6px)`
    if (spot.current) {
      spot.current.style.left = `${x * r.width}px`
      spot.current.style.top = `${y * r.height}px`
    }
  }
  const onLeave = () => {
    if (ref.current) ref.current.style.transform = ''
  }

  return (
    <Tag ref={ref} className={className} onMouseMove={onMove} onMouseLeave={onLeave} {...rest}>
      <span className="spot" ref={spot} />
      {children}
    </Tag>
  )
}
