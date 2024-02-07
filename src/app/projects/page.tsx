import FlipCardMotion from "@/components/FlipCardMotion";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";
import { Project } from "@/types/projects-types";
import { getAllProjects } from "@/utils/projects";

export default function AllProjects() {
  const allProjects: Project[] = getAllProjects()
  console.log('>>> allProjects in allprojects page.tsx', allProjects)

  return (
    <div className="w-full max-w-7xl px-8 sm:px-12 flex flex-col justify-start items-center text-white gap-y-20">
      <Header />

      <main className="flex flex-col justify-center items-center px-0 gap-x-12 pt-32 pb-16">
        {/* <div className="w-full h-12 border border-zinc-800"></div> */}
        <h1 className="pb-16 uppercase text-zinc-500 font-mono text-2xl tracking-wide6 z-30">full portfolio & all projects</h1>
        <div className="w-full flex justify-center flex-wrap gap-8 z-30">
          {allProjects.map((project: Project) => (
            <FlipCardMotion key={project.name} {...project} />
          ))}
        </div>
        <Link href="/#portfolio" className="mt-16 w-[320px] h-12 bg-slate-900 text-xl text-slate-100 rounded-2xl border-2 border-slate-600 hover:bg-slate-800 active:bg-slate-700 flex justify-center items-center">Return Home...</Link>

      </main>
      <Footer />
    </div>
  )
}