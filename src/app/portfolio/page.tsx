// PORTFOLIO PAGE

import FlipCard from "@/components/FlipCard";
import Link from "next/link";
import { MdiGithub } from "@/utils/icons";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Project } from "@/types/projectTypes";
import { getAllProjects } from "@/utils/projects";
import Portfolio from "@/components/Portfolio";

export default function PortfolioPage() {
  const allProjects: Project[] = getAllProjects()

  return (
    <div className="w-full max-w-7xl flex flex-col justify-center items-center" >
      <Header />
      <Portfolio allProjects={allProjects} />
      {/* <main className="flex flex-col justify-start items-center px-0">
        <h1 className="pb-12 text-center uppercase text-zinc-400 font-mono text-2xl tracking-wide6 z-10">portfolio</h1>
        <div className="w-full flex justify-center flex-wrap gap-8 z-20">
          {allProjects.map((project: Project, index) => (
            <FlipCard key={project.name} index={index} {...project} />
          ))}
        </div>
        <Link href="https://github.com/13zebras?tab=repositories" className="mt-16 py-[7px] w-[250px] flex justify-center items-center gap-x-2 bg-zinc-900 hover:bg-zinc-800 active:bg-zinc-800 text-zinc-300 hover:text-zinc-200 active:text-zinc-100 text-sm rounded-2xl border border-zinc-600 hover:border-zinc-500 active:border-sky-500">
          <MdiGithub />
          Github Repositories
        </Link>
      </main> */}
      <Footer />
    </div>
  )
}