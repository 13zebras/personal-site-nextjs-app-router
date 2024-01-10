import About from "@/components/About";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
// import Skills from "@/components/Skills";
import WorkExperience from "@/components/WorkExperience";

export default function Home() {
  return (
    <div className="flex justify-center">
      <Header />
      <main className="flex flex-col justify-start items-center gap-y-[30vh] text-white 
      w-full overflow-scroll">
        <section id="hero" className="flex items-center min-h-[100vh] w-full md:px-9 z-0 m-0">
          <Hero />
        </section>
        <section id="portfolio" className="flex items-center min-h-[100vh] w-full md:px-9 relative">
          <Portfolio />
        </section>
        <section id="workExperience" className="flex items-center min-h-[100vh] h-full w-full md:px-9 mt-20">
          <WorkExperience />
        </section>
        <section id="about" className="flex items-center h-[100vh] w-full md:px-9">
          <About />
        </section>
        <Footer />
      </main>
    </div>
  )
}


// <Skills />