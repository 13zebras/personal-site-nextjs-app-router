import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

// todo - need mobile styling and breakpoints

export default function Home() {

  return (
    <div className="overflow-hidden w-screen max-w-7xl flex flex-col items-center justify-center px-8">
      <Header />
      <main className="flex flex-col justify-center items-center w-full z-0 h-screen pt-[60px] pb-[50px]">
        <Hero />
      </main>
      <Footer />
    </div>
  )
}
