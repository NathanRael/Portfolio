import ProjectFilter from "@/components/sections/ProjectFilter";
import ProjectList from "@/components/sections/ProjectList";
import { Project } from "@/components/sections/ProjectCard";
import { Suspense } from "react";
import AnimatedText from "@/components/ui/AnimatedText";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";


export default async function ProjectsSection({ filter, projects }: { filter?: string, projects: Project[] }) {

  const filteredProjects = filterProject(projects, filter);

  return (
    <section id={"projects"} className={"section "}>
      <div className={"mb-10 space-y-4 max-w-[650px] mx-auto"}>
        <div className="flex flex-col pt-6 items-center justify-center gap-2 mt-20">
          <Link
            className={buttonVariants({ variant: "secondary" })}
            href={"/"}
          >
            <ArrowLeft />
            Back
          </Link>
        </div>
        <AnimatedText
          whileInView="visible"
          initial="hidden"
          custom={1}
          className="text-subtitle font-bold w-full text-center"
        >
          From <span className={"text-secondary"}>Idea</span> to <span className={"text-secondary"}>Interface</span>
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

