import type { CSSProperties } from 'react'

// Images are static files in public/images/portfolio/ (see AGENTS.md for how they're made). Each image has:
//   <key>.webp       full size
//   <key>-card.webp  520px wide, for the portfolio flip cards (project images only)
//   <key>-blur.webp  24px wide, shown as the <img> background until the real image loads
const imageDir = '/images/portfolio'

export function imageSrc(key: string, variant?: 'card') {
  return `${imageDir}/${key}${variant ? `-${variant}` : ''}.webp`
}

// The browser scales the tiny image up smoothly, which looks blurred.
// Give the <img> a width/height (or aspect ratio) so it has a size before it loads, or the background won't show.
export function blurPlaceholder(key: string): CSSProperties {
  return { backgroundImage: `url(${imageDir}/${key}-blur.webp)`, backgroundSize: 'cover' }
}
