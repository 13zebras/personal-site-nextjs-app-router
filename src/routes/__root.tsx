import { createRootRoute, HeadContent, Outlet, Scripts } from '@tanstack/react-router'
import type { ReactNode } from 'react'

import appCss from '@/styles/globals.css?url'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Tom Stine Developer' },
      { name: 'description', content: 'The personal website and portfolio of Tom Stine, full stack developer' },
    ],
    links: [{ rel: 'stylesheet', href: appCss }],
  }),
  component: RootComponent,
})

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  )
}

function RootDocument({ children }: { children: ReactNode }) {
  return (
    <html lang='en' className='bg-zinc-950'>
      <head>
        <HeadContent />
      </head>
      <body id='body' className='flex h-full justify-center bg-zinc-950'>
        {children}
        <Scripts />
      </body>
    </html>
  )
}
