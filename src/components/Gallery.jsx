import { useState } from 'react'
import { GALLERY, SCENES } from '../data/scenes'
import { services } from '../data/services'
import Reveal from './Reveal'
import Media from './Media'
import Lightbox from './Lightbox'

export default function Gallery() {
  const [open, setOpen] = useState(null)
  return (
    <>
      <div className="gal">
        {GALLERY.map((slug, i) => {
          const s = services.find((x) => x.slug === slug)
          return (
            <Reveal key={slug} delay={(i % 3) * 0.08}>
              <Media slug={slug} tag={s?.id} onClick={() => setOpen(slug)} />
            </Reveal>
          )
        })}
      </div>
      <Lightbox slug={open} onClose={() => setOpen(null)} />
    </>
  )
}
