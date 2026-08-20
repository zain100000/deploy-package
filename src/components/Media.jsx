import { SCENES, PHOTOS } from '../data/scenes'

/**
 * A single media tile. Renders a real photo when one is registered in
 * data/scenes.js -> PHOTOS[slug], otherwise the animated illustration.
 */
export default function Media({ slug, tag, showCap = true, onClick }) {
  const scene = SCENES[slug]
  const photo = PHOTOS[slug]

  return (
    <div className="media" onClick={onClick}>
      {photo ? (
        <img src={photo} alt={scene ? scene.cap : slug} loading="lazy" />
      ) : (
        scene && <div dangerouslySetInnerHTML={{ __html: scene.svg }} />
      )}
      {tag && <span className="tag">{tag}</span>}
      {showCap && scene && <span className="cap">{scene.cap}</span>}
    </div>
  )
}
