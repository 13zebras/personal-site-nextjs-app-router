// PORTFOLIO PAGE

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import type { Project } from '@/types/allTypes'
import { getAllProjects } from '@/utils/projects'
import Portfolio from '@/components/Portfolio'

const keyframeCss = `
    @keyframes movingDiv {
        0% {
            opacity: 0;
            transform: translateY(150px);
            scale: 0.7;
        }
        90% {
            opacity: 1;
            scale: 1;
        }
        100% {
            opacity: 1;
            transform: translateY(0);
            scale: 1;
        }
    }
  `

export default function PortfolioPage() {
  const allProjects: Project[] = getAllProjects()

  return (
    <div id='portfolio' className='bg-zinc-950 w-full h-full flex flex-col justify-center items-center'>
      <style>{keyframeCss}</style>
      <Header />
      <Portfolio allProjects={allProjects} />
      <Footer />
    </div>
  )
}
