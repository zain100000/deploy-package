import { useEffect } from 'react'
import Media from './Media'

export default function Lightbox({ slug, onClose }) {
  useEffect(() => {
    if (!slug) return
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [slug, onClose])

  return (
    <div
      id="lightbox"
      className={slug ? 'on' : ''}
      onClick={(e) => e.target.id === 'lightbox' && onClose()}
    >
      <button className="x" onClick={onClose} aria-label="Close">
        ×
      </button>
      <div className="frame">{slug && <Media slug={slug} />}</div>
    </div>
  )
}
