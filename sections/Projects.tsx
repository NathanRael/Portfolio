import ProjectFilter from "@/components/sections/ProjectFilter";
import ProjectList from "@/components/sections/ProjectList";
import {Project} from "@/components/sections/ProjectCard";
import {Suspense} from "react";
import AnimatedText from "@/components/ui/AnimatedText";


export default async function ProjectsSection({filter, projects}: { filter?: string, projects : Project[] }) {
    
    const filteredProjects = filterProject(projects, filter)

    return (
        <section id={"projects"} className={'section '}>
            <AnimatedText  whileInView={"visible"} initial={"hidden"} custom={1} className={'text-white-100 text-subtitle font-semibold'}>I&apos;ve built, designed</AnimatedText>
            <ProjectFilter activeFilter={filter}/>
            <Suspense fallback={<p className={'text-white-100'}>Loading feed...</p>}>
                <ProjectList projects={filteredProjects}/>
            </Suspense>
        </section>
    )
}


const filterProject = (projects: Project[], filter?: string): Project[] => {
    const nonArchivedProjects = projects.filter(project => !project.archived)
    if (!filter || filter === 'undefined' || filter?.toLowerCase() === 'all') return nonArchivedProjects;
    
    
    return nonArchivedProjects.filter(project => project.projectType.name.toLowerCase() === filter.toLowerCase());
}

