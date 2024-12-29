import Navbar from "@/components/sections/Navbar";
import HeroSection from "@/sections/Hero";
import ProjectsSection from "@/sections/Projects";

export default async function Home({searchParams} : {searchParams : Promise<{filter? : string}>}) {
  const filter = (await searchParams).filter
    
  return (
      <section className="p-6 flex gap-[128px]  flex-col items-center justify-center w-full">
          <Navbar/>
          <HeroSection/>
          <ProjectsSection filter={filter}/>
      </section>
  );
}
