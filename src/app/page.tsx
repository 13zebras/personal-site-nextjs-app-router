import About from "@/components/About";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import { Project } from "@/types/projects-types";
// import Skills from "@/components/Skills";
import WorkExperience from "@/components/WorkExperience";
import { getMainProjects } from "@/utils/projects";

export default function Home() {
  const projects: Project[] = getMainProjects()
  console.log('>>> projects in page.tsx', projects)
  return (
    <div className="flex justify-center w-screen scroll-smooth">
      <Header />
      <main className="flex flex-col justify-start items-center text-white gap-y-[10vh] w-full overflow-scroll">
        <section id="hero" className="allMaxWidth flex items-center min-h-[100vh] w-full md:px-9 z-0 m-0">
          <Hero />
        </section>
        <section id="portfolio" className="flex items-center min-h-[100vh] w-full md:px-9 relative">

          <Portfolio projects={projects} />
        </section>
        <section id="workExperience" className="allMaxWidth flex items-center min-h-[100vh] h-full w-full md:px-9 mt-20">
          <WorkExperience />
        </section>
        <section id="about" className="allMaxWidth flex items-center h-[70vh] w-full md:px-9">
          <About />
        </section>
        <Footer />
      </main>
    </div>
  )
}


// <Skills />
