import ProjectFilter from "@/components/sections/ProjectFilter";
import ProjectList from "@/components/sections/ProjectList";
import { Project } from "@/components/sections/ProjectCard";
import { Suspense } from "react";
import AnimatedText from "@/components/ui/AnimatedText";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Particles } from "@/components/ui/shadcn-io/particles";
import { InteractiveGridPattern } from "@/components/ui/shadcn-io/interactive-grid-pattern";


export default async function ProjectsSection({ filter, lang, projects }: { filter?: string; lang?: string; projects: Project[] }) {

  const filteredProjects = filterProject(projects, filter);
  const homeHref = lang ? `/?lang=${lang}` : "/";

  return (
    <section id={"projects"} aria-labelledby="projects-heading" className={"section "}>
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color="#ffffff"
        refresh
      />
      {/* <div className={"absolute rotate-6  -left-6  w-[100vw] h-[350px]  overflow-hidden "}>
        <InteractiveGridPattern
          className="absolute inset-0"
          squares={[50, 25]}
          squaresClassName="hover:fill-primary  transition-colors duration-150"
        />
      </div> */}
      <div className={"mb-10 z-10 space-y-4 max-w-[650px] mx-auto"}>
        <div className="flex flex-col pt-6 items-center justify-center gap-2 mt-20">
          <Link
            className={buttonVariants({ variant: "secondary", className: "notranslate" })}
            href={homeHref}
            translate="no"
          >
            <ArrowLeft />
            <span className="manual-translation-en">Back</span>
            <span className="manual-translation-fr">Retour</span>
          </Link>
        </div>
        <AnimatedText
          whileInView="visible"
          initial="hidden"
          custom={1}
          className="text-subtitle font-bold w-full text-center"
        >
          <h1 id="projects-heading" className="notranslate" translate="no">
            <span className="manual-translation-en">From <span className={"text-secondary"}>Idea</span> to <span className={"text-secondary"}>Interface</span></span>
            <span className="manual-translation-fr">De l&apos;<span className={"text-secondary"}>Idée</span> à l&apos;<span className={"text-secondary"}>Interface</span></span>
          </h1>
        </AnimatedText>
        <AnimatedText
          whileInView="visible"
          initial="hidden"
          custom={2}
          className="text-lead w-full text-center "
        >
          <span className="notranslate" translate="no">
            <span className="manual-translation-en">Real problems, solved. Here's how I help teams ship products that save time, reduce costs, and improve user experience.</span>
            <span className="manual-translation-fr">De vrais problèmes, résolus. Voici comment j&apos;aide les équipes à livrer des produits qui font gagner du temps, réduisent les coûts et améliorent l&apos;expérience utilisateur.</span>
          </span>
        </AnimatedText>
      </div>
      <ProjectFilter activeFilter={filter} />
      <Suspense fallback={<p className={"text-white-100"}>Loading feed...</p>}>
        <ProjectList projects={filteredProjects} />
      </Suspense>
    </section>
  );
}


const filterProject = (projects: Project[], filter?: string): Project[] => {
  const nonArchivedProjects = projects.filter(project => !project.archived);
  if (!filter || filter === "undefined" || filter?.toLowerCase() === "all") return nonArchivedProjects;


  return nonArchivedProjects.filter(project => project.projectType.name.toLowerCase() === filter.toLowerCase());
};

