import { createFileRoute } from '@tanstack/react-router'

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Portfolio from '@/components/Portfolio'
import type { Project } from '@/types/allTypes'
import { getAllProjects } from '@/utils/projects'

import portfolioCss from '@/styles/portfolio.css?url'

export const Route = createFileRoute('/portfolio')({
  head: () => ({ links: [{ rel: 'stylesheet', href: portfolioCss }] }),
  component: PortfolioPage,
})

function PortfolioPage() {
  const allProjects: Project[] = getAllProjects()

  return (
    <div id='portfolio' className='flex h-full w-full flex-col items-center justify-center bg-zinc-950'>
      <Header />
      <Portfolio allProjects={allProjects} />
      <Footer />
    </div>
  )
}
