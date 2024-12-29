import {Project} from "@/app/api/projects/route";
import ProjectCard from "@/components/sections/ProjectCard";

export default function ProjectList({projects} : {projects: Project[]}) {
    return (
        <div className={'grid grid-cols-3 max-[960px]:grid-cols-1 max-[1420px]:grid-cols-2 justify-items-stretch w-full  gap-20'}>
            {
                projects.map(project => (
                    <ProjectCard className={'max-[460px]:w-full'} key={project.id} {...project}/>
                ))
            }
        </div>
    )
}