import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

// todo - need mobile styling and breakpoints

export default function Home() {

  return (
    <div className="w-full max-w-7xl flex flex-col items-center justify-center px-8">
      <Header />
      <main className="flex justify-center items-center w-full min-h-screen md:px-9 z-0 m-0">
        <Hero />
      </main>
      <Footer />
    </div>
  )
}
