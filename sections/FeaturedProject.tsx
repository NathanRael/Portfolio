"use client";
import { Project } from "@/components/sections/ProjectCard";
import { cn, roundUpToNearestTen } from "@/lib/utils";
import { ArrowRight, ExternalLink, LinkIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { motion } from "motion/react";
import AnimatedText from "@/components/ui/AnimatedText";
import { appearVariant } from "@/lib/animationVariants";
import { buttonVariants } from "@/components/ui/button";

const FeaturedProject = ({ projectList }: { projectList: Project[] }) => {
  const searchParams = useSearchParams();
  const lang = searchParams.get("lang");
  const langQuery = lang ? `?lang=${lang}` : "";

  const featuredProjects = projectList.filter((item) => item.isFeatured);
  const firstFProject = featuredProjects[1];
  const secondFProject = featuredProjects[0];
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
      className="relative max-md:w-[calc(100vw-10px)] w-[calc(100vw-40px)] min-h-screen h-full pt-20 max-lg:p-2 p-6">
      <div className={"mb-20 pt-6 space-y-4 max-w-[650px] mx-auto"}>
        <AnimatedText
          whileInView="visible"
          initial="hidden"
          custom={1}
          className="text-subtitle font-bold w-full text-center"
        >
          <h2 id="featured-projects-heading" className="notranslate" translate="no">
            <span className="manual-translation-en">From <span className={"text-secondary"}>Idea</span> To <span className={"text-secondary"}>Interface</span></span>
            <span className="manual-translation-fr">De l&apos;<span className={"text-secondary"}>Idée</span> à l&apos;<span className={"text-secondary"}>Interface</span></span>
          </h2>
        </AnimatedText>
        <AnimatedText
          whileInView="visible"
          initial="hidden"
          custom={2}
          className="text-lead w-full text-center "
        >
          <p className="notranslate" translate="no">
            <span className="manual-translation-en">Real problems, solved. Here&apos;s how I help teams ship products that save time, reduce costs, and improve user experience.</span>
            <span className="manual-translation-fr">De vrais problèmes, résolus. Voici comment j&apos;aide les équipes à livrer des produits qui font gagner du temps, réduisent les coûts et améliorent l&apos;expérience utilisateur.</span>
          </p>
        </AnimatedText>
      </div>

      <div className="flex w-full flex-col items-center justify-start gap-10 pb-10">

        <motion.div custom={1} whileInView={"visible"} viewport={{once: true}} className={"w-full flex items-center justify-center"}
          variants={appearVariant} initial={"fromL"}>
          <FeaturedProjectCard
            className=" w-full lg:w-[90%] h-[360px] lg:h-[520px]"
            backgroundColor="bg-linear-to-b from-[#21C5B7]/40 via-[#21C5B7] to-[#21C5B7]"
            project={firstFProject!}
            index={0}
          />
        </motion.div>

        <motion.div custom={2} whileInView={"visible"} viewport={{once: true}} className={"w-full flex items-center justify-center"}
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
              index={1}
            />{" "}
            <FeaturedProjectCard
              className={"max-[1140px]:w-full max-lg:h-[360px] w-[45vw]"}
              backgroundColor="bg-linear-to-b  from-background-200/40 via-background-200 to-background-200"
              project={thirdFProject!}
              index={2}
            />
          </div>
        </motion.div>
        <div className="flex flex-col z-20  md:pt-6 items-center justify-center gap-2 md:mt-12">
          <Link
            className={buttonVariants({ variant: "default", size: 'lg' })}
            href={`/project${langQuery}`}
          >
            <span className="notranslate" translate="no">
              <span className="manual-translation-en">See more projects</span>
              <span className="manual-translation-fr">Voir plus de projets</span>
            </span>
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

const shorten = (text?: string, max = 160) =>
  text && text.length > max ? text.slice(0, max).trimEnd() + "..." : text;

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
  backgroundColor,
  index = 0
}: {
  project: Project;
  className?: string;
  backgroundColor?: string;
  index?: number;
}) => {
  const { techStacks, links, image, name, description, problem, solution, impact, isUnderDevelopment } =
    project;

  return (
    <div className={cn("h-[480px] flex flex-col gap-4 relative ", className)}>
      <div
        className={cn(
          "flex absolute flex-col items-start  w-full h-full   justify-start  overflow-hidden top-2 -left-2 bg-background-100/10  border-background-200/50",
          backgroundColor
        )}
      />

      <div
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
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 620px"
            quality={85}
            priority={index === 0}
          />
        </motion.div>

        <div className="ps-6 space-y-3 pt-4">
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
          </div>
          <div className="space-y-1">
            <p className="text-white font-normal text-sm leading-snug">{shorten(description, 160)}</p>
          </div>
          {solution && (
            <div className="space-y-1">
              <p className="text-small font-semibold tracking-wide text-accent">Solution</p>
              <p className="text-white/85 font-normal text-sm leading-snug">{shorten(solution, 160)}</p>
            </div>
          )}
          {impact && (
            <div className="space-y-1">
              <p className="text-small font-semibold tracking-wide text-accent">Impact</p>
              <p className="text-white/85 font-normal text-sm leading-snug">{shorten(impact, 160)}</p>
            </div>
          )}
          <div className="flex flex-wrap items-center justify-start gap-x-4 gap-y-2 pt-1">
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
            {techStacks?.length > 0 && (
              <div className="flex items-center gap-2 bg-black/40 p-1" aria-hidden="true">
                {techStacks?.map((techStack) => (
                  <Image
                    key={techStack}
                    width={16}
                    height={16}
                    src={techStack}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {isUnderDevelopment && (
        <div
          className={
            "px-2 absolute -top-2 z-20 select-none right-4 rotate-3 py-1 text-[14px] bg-primary-100"
          }
        >
          <span className="notranslate" translate="no">
            <span className="manual-translation-en">Under development</span>
            <span className="manual-translation-fr">En développement</span>
          </span>
        </div>
      )}

    </div>
  );
};
