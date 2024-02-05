import About from "@/components/About";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import { Project } from "@/types/projects-types";
// import Skills from "@/components/Skills";
import WorkExperience from "@/components/WorkExperience";
import { getMainProjects } from "@/utils/projects";

// todo - need mobile styling and breakpoints

export default function Home() {
  const projects: Project[] = getMainProjects()
  console.log('>>> projects in page.tsx', projects)
  return (
    <div className="flex justify-center w-screen">
      <Header />
      <main className="flex flex-col items-center text-white w-full">
        <section id="hero" className="flex items-center w-full min-h-screen md:px-9 z-0 m-0">
          <Hero />
        </section>
        {/* <section id="portfolio" className="flex items-center w-full md:px-9 relative min-h-screen">
          <Portfolio projects={projects} />
        </section> */}
        {/* <section id="workExperience" className="AllMaxWidth flex items-center  w-full md:px-9 mt-20 min-h-screen">
          <WorkExperience />
        </section> */}
        <section id="about" className="AllMaxWidth flex items-center min-h-screen w-full md:px-9">
          <About />
        </section>
        <Footer />
      </main>
    </div>
  )
}


// <Skills />
