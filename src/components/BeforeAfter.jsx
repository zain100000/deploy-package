import { useRef, useState } from 'react'
import { BA_BEFORE, BA_AFTER } from '../data/scenes'

/** Draggable before/after comparison. Mouse, touch, and keyboard supported. */
export default function BeforeAfter() {
  const ref = useRef(null)
  const dragging = useRef(false)
  const [pos, setPos] = useState(50)

  const setFromX = (clientX) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    setPos(Math.max(4, Math.min(96, ((clientX - r.left) / r.width) * 100)))
  }

  const start = (e) => {
    dragging.current = true
    setFromX(e.touches ? e.touches[0].clientX : e.clientX)
  }
  const move = (e) => {
    if (!dragging.current) return
    setFromX(e.touches ? e.touches[0].clientX : e.clientX)
  }
  const end = () => (dragging.current = false)

  return (
    <div
      className="ba"
      ref={ref}
      role="slider"
      tabIndex={0}
      aria-label="Before and after comparison"
      aria-valuenow={Math.round(pos)}
      aria-valuemin={0}
      aria-valuemax={100}
      onMouseDown={start}
      onMouseMove={move}
      onMouseUp={end}
      onMouseLeave={end}
      onTouchStart={start}
      onTouchMove={move}
      onTouchEnd={end}
      onKeyDown={(e) => {
        if (e.key === 'ArrowLeft') setPos((p) => Math.max(4, p - 4))
        if (e.key === 'ArrowRight') setPos((p) => Math.min(96, p + 4))
      }}
    >
      <div className="layer" dangerouslySetInnerHTML={{ __html: BA_BEFORE }} />
      <div
        className="layer after"
        style={{ clipPath: `inset(0 0 0 ${pos}%)` }}
        dangerouslySetInnerHTML={{ __html: BA_AFTER }}
      />
      <span className="lbl l">Before</span>
      <span className="lbl r">After</span>
      <span className="handle" style={{ left: `${pos}%` }} />
      <span className="knob" style={{ left: `${pos}%` }}>
        ↔
      </span>
    </div>
  )
}
