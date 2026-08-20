import { useEffect, useRef } from 'react'

/**
 * Animated 3D isometric building loop, drawn on canvas (no 3D library).
 * Set VIDEO_SRC to an mp4 path to use real site footage instead.
 */
export const VIDEO_SRC = ''

export default function SystemsBand({
  title = 'Every technical system in the building, under one contract.',
  text = 'AC, water, power, and finishes. Serviced on a schedule instead of after failure.',
}) {
  const canvas = useRef(null)

  useEffect(() => {
    if (VIDEO_SRC) return
    const c = canvas.current
    if (!c) return
    const ctx = c.getContext('2d')
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const W0 = 1.9, D0 = 1.3, FLOORS = 5, FH = 0.52
    const V = [], E = []
    for (let f = 0; f <= FLOORS; f++) {
      const y = -1.3 + f * FH, b = V.length
      V.push([-W0, y, -D0], [W0, y, -D0], [W0, y, D0], [-W0, y, D0])
      E.push([b, b + 1], [b + 1, b + 2], [b + 2, b + 3], [b + 3, b])
      if (f) for (let i = 0; i < 4; i++) E.push([b + i, b + i - 4])
    }
    const NODES = [
      [-W0, -0.9, D0, 'AC'],
      [W0, 0.2, -D0, 'PWR'],
      [0, 1.3, 0, 'H2O'],
      [-W0, 0.75, -D0, 'MEP'],
    ]

    const rotY = (p, a) => {
      const s = Math.sin(a), co = Math.cos(a)
      return [p[0] * co + p[2] * s, p[1], -p[0] * s + p[2] * co]
    }
    const proj = (p, W, H) => {
      const iso = [(p[0] - p[2]) * 0.86, (p[0] + p[2]) * 0.5 - p[1] * 1.25]
      const sc = Math.min(W / 7.4, H / 7.8)
      return [W * 0.56 + iso[0] * sc, H * 0.5 + iso[1] * sc]
    }

    let ry = 0, t0 = performance.now(), raf
    const fit = () => {
      const w = c.clientWidth, h = c.clientHeight
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      if (c.width !== w * dpr || c.height !== h * dpr) {
        c.width = w * dpr; c.height = h * dpr
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      }
    }

    const loop = (now) => {
      raf = requestAnimationFrame(loop)
      fit()
      const W = c.clientWidth, H = c.clientHeight
      if (!W || !H) return
      const dt = Math.min((now - t0) / 1000, 0.05); t0 = now
      if (!reduce) ry += dt * 0.28
      const el = now / 1000
      ctx.clearRect(0, 0, W, H)

      const P = V.map((v) => proj(rotY(v, ry), W, H))
      ctx.lineWidth = 1
      E.forEach(([a, b]) => {
        const depth = (V[a][1] + V[b][1]) / 2
        ctx.strokeStyle = `rgba(62,184,240,${(0.2 + ((depth + 1.3) / 2.6) * 0.5).toFixed(3)})`
        ctx.beginPath(); ctx.moveTo(P[a][0], P[a][1]); ctx.lineTo(P[b][0], P[b][1]); ctx.stroke()
      })
      NODES.forEach((n, i) => {
        const q = proj(rotY([n[0], n[1], n[2]], ry), W, H)
        const pulse = (Math.sin(el * 1.7 + i * 1.5) + 1) / 2
        ctx.beginPath(); ctx.arc(q[0], q[1], 4 + pulse * 2.5, 0, 6.283)
        ctx.fillStyle = `rgba(110,208,255,${(0.55 + pulse * 0.45).toFixed(2)})`; ctx.fill()
        ctx.beginPath(); ctx.arc(q[0], q[1], 10 + pulse * 13, 0, 6.283)
        ctx.strokeStyle = `rgba(62,184,240,${(0.32 * (1 - pulse)).toFixed(3)})`
        ctx.lineWidth = 1.4; ctx.stroke()
        ctx.font = "10px 'JetBrains Mono',monospace"
        ctx.fillStyle = 'rgba(110,208,255,.85)'
        ctx.fillText(n[3], q[0] + 16, q[1] - 10)
      })
      const sy = H * 0.18 + ((Math.sin(el * 0.6) + 1) / 2) * H * 0.6
      const g = ctx.createLinearGradient(0, sy, W, sy)
      g.addColorStop(0, 'rgba(62,184,240,0)')
      g.addColorStop(0.5, 'rgba(62,184,240,.32)')
      g.addColorStop(1, 'rgba(62,184,240,0)')
      ctx.strokeStyle = g; ctx.lineWidth = 1.5
      ctx.beginPath(); ctx.moveTo(0, sy); ctx.lineTo(W, sy); ctx.stroke()
    }
    raf = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <div className="vband">
      {VIDEO_SRC ? (
        <video src={VIDEO_SRC} autoPlay muted loop playsInline preload="metadata" />
      ) : (
        <canvas ref={canvas} />
      )}
      <div className="ov">
        <span className="live-dot">
          <i />
          Systems we maintain
        </span>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  )
}
