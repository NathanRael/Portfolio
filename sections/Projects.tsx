import ProjectFilter from "@/components/sections/ProjectFilter";
import ProjectList from "@/components/sections/ProjectList";
import {BASE_URL} from "@/constants";

export default async function ProjectsSection({filter} : {filter?: string}) {
    const data = await fetch(`${BASE_URL}/api/projects?filter=${filter}`);
    const projects  = await data.json();
    
    return (
        <section className={'flex-col-center gap-10'}>
            <h2 className={'text-white-100 text-subtitle font-semibold'}>I've built, designed</h2>
            <ProjectFilter activeFilter={filter} />
            <ProjectList projects={projects}/>
        </section>
    )
} 