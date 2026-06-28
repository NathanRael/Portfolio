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
      id="projects"
      aria-labelledby="featured-projects-heading"
      className="bg-linear-to-bl relative from-background-100 via-background-50 to-background-100 border bordeer-t-2 border-t-background-200 max-md:w-[calc(100vw-10px)] w-[calc(100vw-40px)] min-h-screen h-full pt-20 max-lg:p-2 p-6">
      <div className="absolute hidden md:flex z-40  top-4 left-1/2 -translate-x-1/2 items-center justify-center gap-4">
        {featuredProjects.sort((a, b) => b.name.localeCompare(a.name)).map((project) => (
          <ProjectLink key={project._id} link={project.links[0]} name={project.name} />
        ))}
      </div>
      <div className={"mb-20 pt-6 space-y-4 max-w-[650px] mx-auto"}>
        <AnimatedText
          whileInView="visible"
          initial="hidden"
          custom={1}
          className="text-subtitle font-bold w-full text-center"
        >
          <h2 id="featured-projects-heading">From <span className={"text-secondary"}>Idea</span> To <span className={"text-secondary"}>Interface</span></h2>
        </AnimatedText>
        <AnimatedText
          whileInView="visible"
          initial="hidden"
          custom={2}
          className="text-lead w-full text-center "
        >
          <p>Explore a collection of my personal projects and those developed during my internship experience.</p>
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
            className={buttonVariants({ variant: "default", size: 'lg' })}
            href={"/project"}
          >
            See more projects
            <div className={" p-2 px-3 bg-white text-primary"}>
              {projectList.length > 10 ? roundUpToNearestTen(projectList.length) : projectList.length}+
            </div>
            <ArrowRight />
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
      className="flex flex-col gap-1 size-32 items-center justify-center bg-neutral-dark-80  border-2 border-neutral-dark-80">
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
          "flex absolute flex-col items-start  w-full h-full   justify-start  overflow-hidden top-2 -left-2 bg-background-100/10  border-background-200/50",
          backgroundColor
        )}
      />

      <div
        ref={ref}
        className={cn(
          "flex flex-col items-start relative w-full h-full   justify-start  overflow-hidden border-1 border-background-200",
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
          className="overflow-hidden absolute left-1/2 -bottom-2 border border-text/80"
        >
          <Image
            src={image}
            width={620}
            height={620}
            className="object-cover"
            alt={`${name} project preview`}
          />
        </motion.div>

        <div className="ps-6 space-y-4 pt-4">
          <div>
            <h3
              onClick={() => {
                if (!links.length) return;
                window.open(links[0], "_blank", "noopener,noreferrer");
              }}
              role={links.length ? "link" : undefined}
              tabIndex={links.length ? 0 : undefined}
              onKeyDown={(event) => {
                if (!links.length) return;
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  window.open(links[0], "_blank", "noopener,noreferrer");
                }
              }}
              className="text-subtitle  flex items-center gap-2 hover:underline cursor-pointer font-bold text-start"
            >
              {name}
              {links?.length && <ExternalLink />}
            </h3>
            <p className="text-white font-normal text-base">{description.length > 145 ? description.slice(0, 145) + "..." : description}</p>
          </div>
          <div className="flex flex-wrap items-center justify-start gap-4">
            <div className="flex items-center bg-background-200/50 backdrop-blur-2xl p-2 jsutify-start gap-2">
              {techStacks?.map((techStack) => (
                <Image
                  key={techStack}
                  width={20}
                  height={20}
                  src={techStack}
                  alt=""
                  aria-hidden="true"
                />
              ))}
            </div>
            {links &&
              links?.map((link) => (
                <div
                  key={link}
                  className={
                    "flex  gap-1 text-nowrap bg-neutral-dark-80 underline hover:bg-neutral-dark-60 text-small px-2 py-1"
                  }
                >
                  <LinkIcon size={16} />
                  <Link target={"_blank"} rel="noopener noreferrer" href={link} aria-label={`Open ${name} project link`}>
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
            "px-2 absolute -top-2 z-20 select-none right-4 rotate-3 py-1 text-[14px] bg-primary-100"
          }
        >
          Under development
        </div>
      )}

    </div>
  );
};


const ProjectLink = ({ link, name }: { link: string, name: string }) => {
  return (
    <Link target="_blank" rel="noopener noreferrer" href={link} className="py-2 px-8 border border-background-300/80 border-t-3 from-70% from-background-200 to-background-300 flex items-center text-text/80 transition-colors justify-center gap-2 hover:bg-white hover:text-black" aria-label={`Open ${name} project`}>
      <div className="size-2 bg-accent" />
      <p className="text-nowrap text-sm   truncate">{name}</p>
      <ExternalLink size={14} />
    </Link>
  )
}
