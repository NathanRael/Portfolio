"use client";
import { Project } from "@/components/sections/ProjectCard";
import { cn, roundUpToNearestTen } from "@/lib/utils";
import { ArrowRight, ExternalLink, LinkIcon, SquareArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import useResizeObserver from "use-resize-observer";
import { motion } from "motion/react";
import AnimatedText from "@/components/ui/AnimatedText";
import { appearVariant } from "@/lib/animationVariants";
import { buttonVariants } from "@/components/ui/button";

const FeaturedProject = ({ projectList }: { projectList: Project[] }) => {
  const featuredProjects = projectList.filter((item) => item.isFeatured);
  const firstFProject = featuredProjects[0];
  const secondFProject = featuredProjects[1];
  const thirdFProject = featuredProjects[2];
/*    const firstFProject = projectList.find(
    (p) => p.name.toLocaleLowerCase() === "rael ai"
  );
  const secondFProject = projectList.find(
    (p) => p.name.toLowerCase() === "SkillMatchr".toLowerCase()
  );
  const thirdFProject = projectList.find(
    (p) => p.name.toLowerCase() === "rael ui"
  );*/

  const mockups = projectList.filter(
    (p) => p.projectType.name.toLowerCase() === "mockup"
  );
  const webProjects = projectList.filter(
    (p) => p.projectType.name === "application"
  );

  return (
    <section
      className="bg-linear-to-bl relative from-background-100 via-background-50 to-background-100 border bordeer-t-2  border-t-background-200 rounded-xl max-md:w-[calc(100vw-10px)] w-[calc(100vw-40px)]  min-h-screen h-full pt-20 max-lg:p-2 p-6">
      <div className={"mb-20 pt-6 space-y-4 max-w-[650px] mx-auto"}>
        <AnimatedText
          whileInView="visible"
          initial="hidden"
          custom={1}
          className="text-subtitle font-bold w-full text-center"
        >
          From <span className={"text-secondary"}>Idea</span> To <span className={"text-secondary"}>Interface</span>
        </AnimatedText>
        <AnimatedText
          whileInView="visible"
          initial="hidden"
          custom={2}
          className="text-lead w-full text-center "
        >
          Explore a collection of my personal projects and those developed during my internship experience.
        </AnimatedText>
      </div>

      <div className="flex w-full flex-col items-center justify-start gap-10 pb-10">

        <motion.div custom={1} whileInView={"visible"} className={"w-full flex items-center justify-center"}
                    variants={appearVariant} initial={"fromL"}>
          <FeaturedProjectCard
            className=" w-full lg:w-[90%] h-[360px] lg:h-[520px]"
            backgroundColor="bg-linear-to-b from-[#21C5B7]/40 via-[#21C5B7] to-[#21C5B7]"
            project={firstFProject!}
          />
        </motion.div>

        <motion.div custom={2} whileInView={"visible"} className={"w-full flex items-center justify-center"}
                    variants={appearVariant} initial={"fromB"}>
          <div
            className={
              "flex w-full items-center justify-evenly  max-[1140px]:flex-col gap-y-10 max-[1140px]:items-center max-[1140px]:justify-center "
            }
          >
            <FeaturedProjectCard
              className={"max-[1140px]:w-full max-lg:h-[360px] w-[45vw]"}
              backgroundColor="bg-linear-to-b from-[#29323f]/40 via-[#29323f] to-[#29323f]"

              project={secondFProject!}
            />{" "}
            <FeaturedProjectCard
              className={"max-[1140px]:w-full max-lg:h-[360px] w-[45vw]"}
              backgroundColor="bg-linear-to-b  from-background-200/40 via-background-200 to-background-200"
              project={thirdFProject!}
            />
          </div>
        </motion.div>
        <div className="flex flex-col z-20  md:pt-6 items-center justify-center gap-2 md:mt-12">
          <Link
            className={buttonVariants({variant: "default", size: 'lg'})}
            href={"/project"}
          >
            See more projects
            <div className={" p-2 px-3 bg-white rounded-full text-primary"}>
              {projectList.length > 10 ? roundUpToNearestTen(projectList.length) : projectList.length}+
            </div>
            <ArrowRight/>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;

const Metrics = ({ value, title }: { value: number; title: string }) => {
  return (
    <div
      className="flex flex-col gap-1 size-32 items-center justify-center bg-neutral-dark-80  rounded-lg border-2 border-neutral-dark-80">
      <span className="text-subtitle font-medium">{value}</span>
      <span>{title}</span>
    </div>
  );
};

const FeaturedProjectCard = ({
                               project,
                               className,
                               backgroundColor
                             }: {
  project: Project;
  className?: string;
  backgroundColor?: string;
}) => {
  const { techStacks, links, image, name, description, isUnderDevelopment } =
    project;
  const { ref } = useResizeObserver<HTMLDivElement>();

  return (
    <div className={cn("h-[480px] flex flex-col gap-4 relative ", className)}>
      <div
        ref={ref}
        className={cn(
          "flex absolute flex-col items-start  w-full h-full   justify-start  overflow-hidden rounded-xl top-2 -left-2 bg-background-100/10  border-background-200/50",
          backgroundColor
        )}
      />

      <div
        ref={ref}
        className={cn(
          "flex flex-col items-start relative w-full h-full   justify-start  overflow-hidden rounded-xl border-1 border-background-200",
          backgroundColor, "backdrop-blur-2xl"
        )}
      >
        <motion.div
          initial={{
            rotate: 6,
            x: "-50%",
            y: "10%"
          }}
          whileHover={{
            rotate: 0,
            scale: 1.3,
            y: "-10%"
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut"
          }}
          className="overflow-hidden absolute left-1/2 -bottom-2 border border-text/80 rounded-xl"
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
            <p className="text-white font-normal text-base">{description.length > 145 ? description.slice(0,145) + "..." : description}</p>
          </div>
          <div className="flex flex-wrap items-center justify-start gap-4">
            <div className="flex items-center bg-background-200/50 backdrop-blur-2xl p-2 rounded-lg jsutify-start gap-2">
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
                    {link.length > 30 ? link.slice(0, 30) + "..." : link}
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
