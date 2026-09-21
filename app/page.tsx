import HeroSection from "@/sections/Hero";
import SkillsSection from "@/sections/Skills";
import ContactSection from "@/sections/Contact";
import Footer from "@/sections/Footer";
import {
  CERTIFICATES_QUERY,
  PROJECT_QUERY,
  RESUME_QUERY,
  SKILL_QUERY,
} from "@/sanity/lib/query";
import { sanityFetch } from "@/sanity/lib/live";
import FeaturedProject from "@/sections/FeaturedProject";
import ExperiencesSection from "@/sections/Experiences";
import CertificateSection from "@/sections/Certificate";
import AboutMe from "@/sections/AboutMe";
import { Suspense } from "react";
import ServicesSection from "@/sections/Services";
import ProjectLinks from "@/sections/ProjectLinks";

export const revalidate = 3600;

export default async function Home() {
  const [resumeResult, projectsResult, certificatesResult, skillsResult] =
    await Promise.all([
      sanityFetch({ query: RESUME_QUERY }),
      sanityFetch({ query: PROJECT_QUERY }),
      sanityFetch({ query: CERTIFICATES_QUERY }),
      sanityFetch({ query: SKILL_QUERY }),
    ]);
  const { cvFrUrl, cvEnUrl } = resumeResult.data;
  const projects = projectsResult.data;
  const certificates = certificatesResult.data;
  const skills = skillsResult.data;


  return (
    <main className="mt-10 md:mt-20  w-full space-y-10">
      <HeroSection
        cvFrUrl={cvFrUrl}
        cvEnUrl={cvEnUrl}
      />
      <ProjectLinks />
      <div className="gap-[256px] max-md:gap-[128px]  app-padding flex  flex-col items-center justify-center">
        <ServicesSection />
        <ExperiencesSection />
        <Suspense fallback={null}>
          <FeaturedProject projectList={projects} />
        </Suspense>
        <SkillsSection skills={skills} />
        <CertificateSection certificates={certificates} />
        <AboutMe className={""} />
        <div id={"contact"} className={"w-full"}>
          <ContactSection />
        </div>
        <Footer />
      </div>
    </main>
  );
}
