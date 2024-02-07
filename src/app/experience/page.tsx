import Footer from "@/components/Footer";
import Header from "@/components/Header";
import WorkExperience from "@/components/WorkExperience";

export default function Experience() {

  return (
    <div className="w-full max-w-7xl flex flex-col justify-start items-center text-white gap-y-20">
      <Header />

      <main className="flex flex-col justify-center items-center px-0 gap-x-12 pt-32">
        {/* <div className="w-full h-12 border border-zinc-800"></div> */}
        <h1 className="pb-16 uppercase text-zinc-500 font-mono text-2xl tracking-wide6 z-30">work experience</h1>
        <WorkExperience />
      </main>

      <Footer />

    </div>
  )
}