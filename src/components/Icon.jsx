import { ICONS, STEP_ICONS, SECTOR_ICONS } from '../data/icons'

/**
 * Renders an animated SVG icon.
 * Strokes draw in when the parent gets .in (scroll reveal); motion loops on hover.
 */
export default function Icon({ slug, step, sector, className = '', boxed = true, size }) {
  const markup =
    slug != null ? ICONS[slug] : step != null ? STEP_ICONS[step] : SECTOR_ICONS[sector]

  if (!markup) return null

  return (
    <span
      className={`${boxed ? 'icon-box' : ''} ${className}`}
      style={size ? { width: size, height: size } : undefined}
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: markup }}
    />
  )
}
