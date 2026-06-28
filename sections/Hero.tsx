"use client";
import HeroSkillPreview from "@/components/hero/HeroSkillPreview";
import { Project } from "@/components/sections/ProjectCard";
import { Button } from "@/components/ui/button";
import { appearVariant } from "@/lib/animationVariants";
import { ExternalLink, Inbox } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection({
  resumeUrl,
  profileImageUrl,
  featured
}: {
  resumeUrl: string;
  profileImageUrl: string;
  featured: Project[];
}) {
  return (
    <section
      aria-labelledby="hero-heading"
      className={"flex overflow-hidden max-md:relative flex-col items-center justify-start gap-10 py-20"}
    >

      <motion.div
        variants={appearVariant}
        initial={"fromB"}
        whileInView={"visible"}
        className="flex max-md:py-40 max-md:px-10 h-fit w-[94%] md:w-[85%] lg:max-w-[80%] xl:w-[70%] p-4 md:p-10 lg:p-20 lg:px-40 relative border-2 border-background-200 overflow-hidden mt-6 md:mt-20 flex-col items-center justify-center gap-4 md:gap-12">
        <Image
          src={"/images/noise-texture.svg"}
          className={
            "absolute left-1/2 -z-10 top-1/2 -translate-y-1/2 -translate-x-1/2 w-full h-full bg-no-repeat object-cover  inset-0"
          }
          alt=""
          aria-hidden="true"
          width={512}
          height={512}
        />
        <div className="space-y-4 relative z-30 max-w-[660px] text-left">
          <h1 id="hero-heading" className="text-subtitle-2  sm:text-subtitle md:text-[5rem] font-bold leading-tight">
            <span className="text-primary italic">FullStack</span> Developer & <span className="text-primary italic mr-1">AI</span>  Integrator
          </h1>
          <p className="text-white/70  text-sm md:text-base font-semibold tracking-[12%]">
            I&apos;m <span className="text-white">RALAIVOAVY Natanaël</span>, a Fullstack Developer & AI Integrator from Madagascar.
            I build and design modern web apps with <span className="text-white">Next.js</span>, <span className="text-white">NestJS</span>, and <span className="text-white">FastAPI</span>, focused on clean UI and <span className="text-white">AI-powered</span> systems.
          </p>
          <motion.div
            className={
              "flex max-md:flex-wrap w-full items-center justify-start gap-2 lg:gap-8 pt-4"
            }
          >
            <Button asChild size={"lg"} variant={"default"} className="w-full md:w-[232px]">
              <Link href={"#contact"}>
                <Inbox size={20} />
                Get in touch
              </Link>
            </Button>
            <Button asChild size={"lg"} variant={"secondary"} className="w-full md:w-[232px]">
              <Link target={"_blank"} rel="noopener noreferrer" href={resumeUrl}>
                <span className="notranslate" translate="no">
                  <span className="manual-translation-en">Download CV</span>
                  <span className="manual-translation-fr">Télécharger le CV</span>
                </span>
                <ExternalLink size={20} />
              </Link>
            </Button>
          </motion.div>
        </div>
        <HeroSkillPreview />
      </motion.div>
    </section>
  );
}


