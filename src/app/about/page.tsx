import AboutMotion from "@/components/AboutMotion";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

// todo - need mobile styling and breakpoints

export default function About() {

  return (
    <div className="w-full max-w-7xl flex flex-col items-center justify-center min-h-screen">
      <Header />
      <AboutMotion />
      <Footer />
    </div>
  )
}


// <Skills />
