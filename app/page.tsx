import Navbar from "@/components/sections/Navbar";
import HeroSection from "@/sections/Hero";
import ProjectsSection from "@/sections/Projects";
import SkillsSection from "@/sections/Skills";
import ContactSection from "@/sections/Contact";
import Footer from "@/sections/Footer";
import {Suspense} from "react";
import {PROFILE_IMAGE_QUERY, PROJECT_QUERY, RESUME_QUERY, SKILL_QUERY} from "@/sanity/lib/query";
import {sanityFetch} from "@/sanity/lib/live";

export const revalidate = 3600

export default async function Home({searchParams}: { searchParams: Promise<{ filter?: string }> }) {
    const filter = (await searchParams).filter;
    const { data: resumeData } = await sanityFetch({ query : RESUME_QUERY});
    const { data: profileImage } = await sanityFetch({ query : PROFILE_IMAGE_QUERY});
    const { url: resumeUrl } = resumeData;
    const { url: profileImageUrl } = profileImage;

    const { data: projects } = await sanityFetch({query : PROJECT_QUERY});
    const { data: skills } = await sanityFetch({ query : SKILL_QUERY});


    return (
        <section className="p-6 flex gap-[256px]  flex-col items-center justify-center w-full">
            <Navbar/>
            <HeroSection profileImageUrl={profileImageUrl} resumeUrl={resumeUrl}/>
            <Suspense>
                <ProjectsSection projects={projects} filter={filter}/>
            </Suspense>
            <SkillsSection skills={skills}/>
            <div id={"contact"} className={'w-full'}>
                <ContactSection/>
            </div>
            <Footer/>
        </section>
    );
}
