import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Home,
})

// Placeholder until the pages are ported from src/app (migration step 2).
function Home() {
  return (
    <main className='flex min-h-screen items-center text-zinc-300'>
      <p>TanStack Start on Cloudflare Workers: skeleton</p>
    </main>
  )
}
