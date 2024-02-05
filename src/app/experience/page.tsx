import FlipCardMotion from "@/components/FlipCardMotion";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";
import { Project } from "@/types/projects-types";
import { getAllProjects } from "@/utils/projects";

export default function WorkExperience() {
  const allProjects: Project[] = getAllProjects()
  console.log('>>> allProjects in allprojects page.tsx', allProjects)


  return (
    <main className="flex flex-col justify-start items-center text-white w-full gap-y-20">
      <Header />

      <div className="AllMaxWidth flex flex-col justify-center items-center px-0 gap-x-12 pt-32">
        {/* <div className="w-full h-12 border border-zinc-800"></div> */}
        <h3 className="pb-16 uppercase text-zinc-500 font-mono text-2xl tracking-widexl z-30">full portfolio & all projects</h3>
        <div className=" w-[90%] flex justify-center flex-wrap gap-10 z-30">
          {allProjects.map((project: Project) => (
            <FlipCardMotion key={project.name} {...project} />
          ))}
        </div>
        <Link href="/#portfolio" className="mt-16 w-[320px] h-12 bg-slate-900 text-xl text-slate-100 rounded-2xl border-2 border-slate-600 hover:bg-slate-800 active:bg-slate-700 flex justify-center items-center">Return Home...</Link>
        {/* <ReturnButton /> */}

      </div>
      <div className="w-screen min-w-screen flex justify-center">
        <Footer />
      </div>


    </main>
  )
}