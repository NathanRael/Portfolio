import ProjectFilter from "@/components/sections/ProjectFilter";
import ProjectList from "@/components/sections/ProjectList";
import {sanityFetch} from "@/sanity/lib/live";
import {PROJECT_QUERY} from "@/sanity/lib/query";
import {Project} from "@/components/sections/ProjectCard";
import {Suspense} from "react";

export default async function ProjectsSection({filter}: { filter?: string }) {
    const {data: projects} = await sanityFetch({
        query: PROJECT_QUERY
    })

    const filteredProjects = filterProject(projects, filter)

    return (
        <section id={"projects"} className={'section '}>
            <h2 className={'text-white-100 text-subtitle font-semibold'}>I've built, designed</h2>
            <ProjectFilter activeFilter={filter}/>
            <Suspense fallback={<p className={'text-white-100'}>Loading feed...</p>}>
                <ProjectList projects={filteredProjects}/>
            </Suspense>
        </section>
    )
}


const filterProject = (projects: Project[], filter?: string): Project[] => {
    if (!filter || filter === 'undefined' || filter?.toLowerCase() === 'all') return projects;

    return projects.filter(project => project.projectType.name.toLowerCase() === filter.toLowerCase());
}