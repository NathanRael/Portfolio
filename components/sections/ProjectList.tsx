import {Project} from "@/app/api/projects/route";
import ProjectCard from "@/components/sections/ProjectCard";

export default function ProjectList({projects} : {projects: Project[]}) {
    return (
        <div className={'grid grid-cols-3 justify-items-stretch w-full  gap-20'}>
            {
                projects.map(project => (
                    <ProjectCard key={project.id} {...project}/>
                ))
            }
        </div>
    )
}