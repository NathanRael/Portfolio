import Navbar from "@/components/sections/Navbar";
import HeroSection from "@/sections/Hero";
import ProjectsSection from "@/sections/Projects";
import SkillsSection from "@/sections/Skills";
import ContactSection from "@/sections/Contact";

export default async function Home({searchParams} : {searchParams : Promise<{filter? : string}>}) {
  const filter = (await searchParams).filter
    
  return (
      <section className="p-6 flex gap-[256px]  flex-col items-center justify-center w-full">
          <Navbar/>
          <HeroSection/>
          <ProjectsSection filter={filter}/>
          <SkillsSection/>
          <ContactSection/>
      </section>
  );
}
