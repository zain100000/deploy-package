import { services } from '../data/services'

export default function Marquee() {
  const items = [...services, ...services]
  return (
    <div className="border-y hairline bg-panel/40 overflow-hidden py-4" aria-hidden="true">
      <div className="marquee-track gap-10">
        {items.map((s, i) => (
          <span key={i} className="flex items-center gap-10 shrink-0">
            <span className="font-mono text-sm uppercase tracking-widest text-muted whitespace-nowrap">
              {s.title}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-sky/60" />
          </span>
        ))}
      </div>
    </div>
  )
}
