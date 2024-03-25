// PORTFOLIO PAGE

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Project } from "@/types/allTypes";
import { getAllProjects } from "@/utils/projects";
import Portfolio from "@/components/Portfolio";

export default function PortfolioPage() {
  const allProjects: Project[] = getAllProjects()

  return (
    <div className="bg-zinc-950 w-full max-w-7xl flex flex-col justify-center items-center" >
      <Header />
      <Portfolio allProjects={allProjects} />
      <Footer />
    </div>
  )
}