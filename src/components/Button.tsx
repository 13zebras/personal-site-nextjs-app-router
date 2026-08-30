'use client'

import Link from 'next/link'
import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
  type?: 'button' | 'submit' | 'reset'
  id?: string
  className?: string
  onClick?(e: React.FormEvent | unknown): void
  onKeyDown?(): void
  style?: React.CSSProperties
  link?: string
  disabled?: boolean
}

const Button = ({ children, type, id, className, onClick, onKeyDown, disabled, style, link }: Props) => {
  const btn = (
    <button
      type={type}
      id={id}
      className={`flex items-center justify-center rounded-3xl border-2 border-zinc-400 bg-black/20 text-sm text-zinc-300 transition-all duration-300 hover:border-sky-300 hover:bg-black/40 hover:text-sky-200 active:border-sky-500 active:text-sky-400 ${className || ''}`}
      onClick={onClick}
      onKeyDown={onKeyDown}
      disabled={disabled}
      style={style}
    >
      {children}
    </button>
  )

  if (link && link.length > 0) return <Link href={link}>{btn}</Link>

  return btn
}

export default Button
