import type { HeaderPaths } from '@/types/allTypes'

export function getHeaderPaths(): HeaderPaths[] {
  return [
    {
      name: 'home',
      path: '/',
    },
    {
      name: 'portfolio',
      path: '/portfolio',
    },
    {
      name: 'experience',
      path: '/experience',
    },
    {
      name: 'about tom',
      path: '/about',
    },
  ]
}
