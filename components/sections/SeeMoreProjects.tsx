"use client"
import {Button} from "@/components/ui/button";
import {Project} from "@/components/sections/ProjectCard";

const SeeMoreProjects = ({projects, allProjects} : {projects : Project[], allProjects : Project[]}) => {
    return (
        <Button onClick={() => { projects = allProjects }}>See more</Button>
    );
};

export default SeeMoreProjects;