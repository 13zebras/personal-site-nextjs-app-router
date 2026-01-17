import Footer from '@/components/Footer'
import Header from '@/components/Header'
import WorkExperience from '@/components/WorkExperience'
import type { WorkData } from '@/types/allTypes'
import { getAllWork } from '@/utils/work'

const keyframeCss = `
    @keyframes movingDiv {
        0% {
            opacity: 0;
            transform: translateY(25px);
            scale: 0.9;
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

export default function ExperiencePage() {
  const allWork: WorkData[] = getAllWork()
  return (
    <div className='flex h-full w-full flex-col items-center justify-center bg-zinc-950'>
      <style>{keyframeCss}</style>
      <Header />
      <WorkExperience allWork={allWork} />
      <Footer />
    </div>
  )
}
