import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

// todo - need mobile styling and breakpoints

export default function Home() {

  return (
    <main className="w-screen flex flex-col items-center justify-center h-screen z-0">
      {/* <Header /> */}

      <Hero />
      <Footer />
    </main>
  )
}
