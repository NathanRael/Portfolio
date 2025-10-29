"use client";
import ProjectCard, { Project } from "@/components/sections/ProjectCard";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const MAX_DISPLAYED_PROJECTS = 6;

export default function ProjectList({ projects }: { projects: Project[] }) {
  const [localProjects, setLocalProjects] = useState<Project[]>([]);

  useEffect(() => {
    setLocalProjects(projects?.slice(0, MAX_DISPLAYED_PROJECTS));
  }, [projects]);

  return (
    <div className={"flex-col-center gap-6"}>
      <div className="grid grid-cols-3 max-[960px]:grid-cols-1 max-[1420px]:grid-cols-2 justify-items-stretch w-full  gap-20">
        {localProjects.map((project) => (
          <div key={project._id}>
            <ProjectCard
              className={"max-[460px]:w-full"}
              key={project._id}
              {...project}
            />
          </div>
        ))}
      </div>
      {projects.length > MAX_DISPLAYED_PROJECTS &&
        localProjects.length !== projects.length && (
          <Button onClick={() => setLocalProjects(projects)}>See all</Button>
        )}
    </div>
  );
}
