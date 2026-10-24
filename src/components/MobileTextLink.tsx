import { Link } from '@tanstack/react-router'
import type { ReactNode } from 'react'

import type { RoutePath } from '@/types/allTypes'

// Pass `to` for a page on this site, or `href` for an external site (opens in a new tab).
type Props = {
  children: ReactNode
  to?: RoutePath
  href?: string
  className?: string
}

const MobileTextLink = ({ children, to, href, className }: Props) => {
  const linkClass = `text-lg font-bold uppercase text-zinc-400 underline hover:text-zinc-200 active:text-sky-400 ${className || ''}`

  if (to) {
    return (
      <Link to={to} className={linkClass}>
        {children}
      </Link>
    )
  }

  return (
    <a href={href} className={linkClass} target='_blank' rel='noopener noreferrer'>
      {children}
    </a>
  )
}

export default MobileTextLink
