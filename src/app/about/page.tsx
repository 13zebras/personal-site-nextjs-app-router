import About from "@/components/About";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

// todo - need mobile styling and breakpoints

export default function AboutPage() {

  return (
    <div className="w-full max-w-7xl flex flex-col justify-center items-center" >
      <Header />
      <About />
      <Footer />
    </div>
  )
}
