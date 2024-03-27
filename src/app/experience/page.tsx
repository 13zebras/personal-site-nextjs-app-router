import Footer from '@/components/Footer'
import Header from '@/components/Header'
import WorkExperience from '@/components/WorkExperience'
import type { WorkData } from '@/types/allTypes'
import { getAllWork } from '@/utils/work'

export default function ExperiencePage() {
  const allWork: WorkData[] = getAllWork()
  return (
    <div className="bg-zinc-950 w-full max-w-7xl flex flex-col justify-center items-center">
      <Header />
      <WorkExperience allWork={allWork} />
      <Footer />
    </div>
  )
}
