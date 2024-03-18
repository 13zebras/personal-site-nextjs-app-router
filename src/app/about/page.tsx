import AboutMotion from "@/components/AboutMotion";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

// todo - need mobile styling and breakpoints

export default function About() {

  return (
    <div className="w-full max-w-7xl px-4 xs:px-6 sm:px-10 flex flex-col items-center justify-center min-h-screen">
      <Header />
      <main className="max-w-3xl flex flex-col justify-center items-center px-0 pt-16 md:pt-28 pb-20">
        <h1 className="pb-8 sm:pb-12 md:pb-14 uppercase text-zinc-400 font-mono text-2xl tracking-wide2 xs:tracking-wide4 sm:tracking-wide6 z-10">who is tom stine?</h1>
        <AboutMotion />
      </main>
      <Footer />
    </div>
  )
}


// <Skills />
