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
import CertificateSection from "@/sections/Certificate";
import AboutMe from "@/sections/AboutMe";

export const revalidate = 3600;

export default async function Home() {
  const { data: resumeData } = await sanityFetch({ query: RESUME_QUERY });
  const { url: resumeUrl } = resumeData;
  const { data: projects } = await sanityFetch({ query: PROJECT_QUERY });
  const { data: certificates } = await sanityFetch({
    query: CERTIFICATES_QUERY,
  });

  const { data: skills } = await sanityFetch({ query: SKILL_QUERY });

  return (
    <section className="p-6 mt-20  flex gap-[256px] max-md:gap-[128px]  flex-col items-center justify-center w-full">
      <HeroSection
        profileImageUrl={"/images/profile-transparent.png"}
        resumeUrl={resumeUrl}
      />
      <FeaturedProject projectList={projects} />
      <SkillsSection skills={skills} />
      <CertificateSection certificates={certificates} />
      <AboutMe className={""} />
      <div id={"contact"} className={"w-full"}>
        <ContactSection />
      </div>
      <Footer />
    </section>
  );
}
