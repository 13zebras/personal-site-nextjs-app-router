import FlipCardMotion from "@/components/FlipCardMotion";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";
import { Project } from "@/types/projects-types";
import { getAllProjects } from "@/utils/projects";

export default function Portfolio() {
  console.log('>>> portfolio.tsx started')
  const allProjects: Project[] = getAllProjects()
  // console.log('>>> allProjects in allprojects page.tsx', allProjects)

  return (
    <div className="w-full max-w-7xl px-8 sm:px-12 flex flex-col justify-start items-center text-white pt-20 md:pt-28 pb-12">
      <Header />

      <main className="flex flex-col justify-start items-center px-0 border border-red-950">
        {/* <div className="w-full h-12 border border-zinc-800"></div> */}
        <h1 className="pb-16 text-center uppercase text-zinc-500 font-mono text-xl tracking-wide6 z-10">portfolio</h1>
        <div className="w-full flex justify-center flex-wrap gap-8 z-20">
          {allProjects.map((project: Project, index) => (
            <FlipCardMotion key={project.name} index={index} {...project} />
          ))}
        </div>
        <Link href="/#portfolio" className="mt-16 w-[320px] h-12 bg-slate-900 text-xl text-slate-100 rounded-2xl border-2 border-slate-600 hover:bg-slate-800 active:bg-slate-700 flex justify-center items-center">Return Home...</Link>

      </main>
      <Footer />
    </div>
  )
}