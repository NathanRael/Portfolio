"use client";
import { Project } from "@/components/sections/ProjectCard";
import { cn } from "@/lib/utils";
import { ExternalLink, LinkIcon, SquareArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import useResizeObserver from "use-resize-observer";
import { motion } from "motion/react";
import { useState } from "react";
import AnimatedText from "@/components/ui/AnimatedText";

const FeaturedProject = ({ projectList }: { projectList: Project[] }) => {
  const selectedProject = projectList[0];
  const raelAiProject = projectList.find(
    (p) => p.name.toLocaleLowerCase() === "rael ai",
  );
  const skillMatchrProject = projectList.find(
    (p) => p.name.toLowerCase() === "SkillMatchr".toLowerCase(),
  );

  const raelUIProject = projectList.find(
    (p) => p.name.toLowerCase() === "rael ui",
  );

  const mockups = projectList.filter(
    (p) => p.projectType.name.toLowerCase() === "mockup",
  );
  const webProjects = projectList.filter(
    (p) => p.projectType.name === "application",
  );

  // loog all the projects

  return (
    <section className="bg-gradient-to-br relative from-neutral-dark-100 via-neutral-dark-80 to-neutral-dark-100  border border-neutral-dark-80 rounded-xl max-md:w-[calc(100vw-10px)] w-[calc(100vw-40px)]  min-h-screen h-full pt-20 max-lg:p-2 p-6">
      <AnimatedText
        whileInView="visible"
        initial="hidden"
        custom={1}
        className="text-subtitle font-medium w-full text-center mb-20"
      >
        I&apos;ve designed & developed
      </AnimatedText>
      <div className="flex w-full flex-col items-center justify-start gap-10 pb-10">
        <FeaturedProjectCard
          className=" w-[90%] max-lg:w-full max-lg:h-[360px] h-[520px]"
          backgroundColor="bg-gradient-to-b from-[#29323f]/40 via-[#29323f] to-[#29323f]"
          project={raelAiProject!}
        />
        <div
          className={
            "flex w-full items-center justify-evenly  max-[1140px]:flex-col gap-y-10 max-[1140px]:items-center max-[1140px]:justify-center "
          }
        >
          <FeaturedProjectCard
            className={"max-[1140px]:w-full max-lg:h-[360px] w-[45vw]"}
            backgroundColor="bg-gradient-to-b   from-[#17181f]/40 via-[#17181f] to-[#17181f]"
            project={skillMatchrProject!}
          />{" "}
          <FeaturedProjectCard
            className={"max-[1140px]:w-full max-lg:h-[360px] w-[45vw]"}
            backgroundColor="bg-gradient-to-b  from-[#232526]/40 via-[#232526] to-[#232526]"
            project={raelUIProject!}
          />
        </div>
      </div>
      <div className="flex  items-center gap-10 bottom-18 absolute right-1/2 translate-x-1/2">
        <Metrics value={webProjects.length} title="Projects" />
        <Metrics value={mockups.length} title="Designs" />
      </div>
      <div className="flex flex-col pt-6 items-center justify-center gap-2 mt-20">
        <Link
          className="flex z-20 items-center justify-center gap-4 p-4 rounded-xl bg-gradient-to-r from-primary-100 to-secondary hover:to-primary-100"
          href={"/project"}
        >
          See more projects
          <SquareArrowUpRight className="text-white-100" />
        </Link>
      </div>
    </section>
  );
};

export default FeaturedProject;

const Metrics = ({ value, title }: { value: number; title: string }) => {
  return (
    <div className="flex flex-col gap-1 size-32 items-center justify-center bg-neutral-dark-80  rounded-lg border-2 border-neutral-dark-80">
      <span className="text-subtitle font-medium">{value}</span>
      <span>{title}</span>
    </div>
  );
};

const FeaturedProjectCard = ({
  project,
  className,
  backgroundColor,
}: {
  project: Project;
  className?: string;
  backgroundColor?: string;
}) => {
  const { techStacks, links, image, name, description, isUnderDevelopment } =
    project;
  const { ref } = useResizeObserver<HTMLDivElement>();

  return (
    <div className={cn(" h-[480px] flex flex-col gap-4 relative ", className)}>
      <div
        ref={ref}
        className={cn(
          "flex flex-col items-start relative w-full h-full  justify-start  overflow-hidden rounded-xl border border-neutral-dark-60/60",
          backgroundColor,
        )}
      >
        <motion.div
          initial={{
            rotate: 6,
            x: "-50%",
            y: "10%",
          }}
          whileHover={{
            rotate: 0,
            scale: 1.3,
            y: "-10%",
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
          className="overflow-hidden absolute left-1/2 -bottom-2 border border-neutral-dark-40 rounded-xl"
        >
          <Image
            src={image}
            width={620}
            height={620}
            className="object-cover"
            alt="project image"
          />
        </motion.div>

        <div className="ps-6 space-y-4 pt-4">
          <div>
            <h2
              onClick={() => {
                if (!links.length) return;
                window.open(links[0], "_blank");
              }}
              className="text-subtitle  flex items-center gap-2 hover:underline cursor-pointer font-bold text-start"
            >
              {name}
              {links?.length && <ExternalLink />}
            </h2>
            <p className="text-white-80 font-normal text-base">{description}</p>
          </div>
          <div className="flex flex-wrap items-center justify-start gap-4">
            <div className="flex items-center jsutify-start gap-2">
              {techStacks?.map((techStack) => (
                <Image
                  key={techStack}
                  width={20}
                  height={20}
                  src={techStack}
                  alt={`${techStack} logo`}
                />
              ))}
            </div>
            {links &&
              links?.map((link) => (
                <div
                  key={link}
                  className={
                    "flex  gap-1 text-nowrap bg-neutral-dark-80 underline hover:bg-neutral-dark-60 text-small px-2 py-1 rounded-[12px]"
                  }
                >
                  <LinkIcon size={16} />
                  <Link target={"_blank"} href={link}>
                    {link.slice(0, 50)}
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </div>

      {isUnderDevelopment && (
        <div
          className={
            "px-2 absolute -top-2 z-20 select-none right-4 rotate-3 py-1 rounded-md text-[14px] bg-primary-100"
          }
        >
          Under development
        </div>
      )}
    </div>
  );
};
