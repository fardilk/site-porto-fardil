import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/Hero";
import ShortStorySlider from "@/components/ShortStorySlider";
import ImFardil from "@/components/home/ImFardil";
import SkillSet from "@/components/home/SkillSet";
import WorkWith from "@/components/home/WorkWith";
import Fund from "@/components/home/Fund";
import ProjectFardilWorksWith from "@/components/home/ProjectFardilWorksWith";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="space-y-20">
        <Hero />
        <ImFardil />
        <ShortStorySlider />
        <SkillSet />
        <WorkWith />
        <Fund />
        <ProjectFardilWorksWith />
        <Footer />
      </main>
    </>
  );
}
