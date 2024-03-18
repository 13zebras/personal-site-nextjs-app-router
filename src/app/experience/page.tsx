import Footer from "@/components/Footer";
import Header from "@/components/Header";
import WorkExperience from "@/components/WorkExperience";

export default function Experience() {

  return (
    <div className="w-full max-w-7xl flex flex-col justify-start items-center text-white gap-y-20">
      <Header />
      <WorkExperience />
      <Footer />
    </div>
  )
}