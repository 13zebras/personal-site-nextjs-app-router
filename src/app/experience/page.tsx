import Footer from "@/components/Footer";
import Header from "@/components/Header";
import WorkExperience from "@/components/WorkExperience";
import { WorkData } from "@/types/projectTypes";
import { getAllWork } from "@/utils/work";

export default function ExperiencePage() {
  const allWork: WorkData[] = getAllWork();
  return (
    <div className="w-full max-w-7xl flex flex-col justify-center items-center" >
      <Header />
      <WorkExperience allWork={allWork} />
      <Footer />
    </div>
  )
}