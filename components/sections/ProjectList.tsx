"use client";
import ProjectCard, { Project } from "@/components/sections/ProjectCard";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const MAX_DISPLAYED_PROJECTS = 6;

export default function ProjectList({ projects }: { projects: Project[] }) {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll
    ? projects
    : projects.slice(0, MAX_DISPLAYED_PROJECTS);

  return (
    <div className={"flex-col-center gap-6"}>
      <ul className="grid grid-cols-3 max-[960px]:grid-cols-1 max-[1420px]:grid-cols-2 justify-items-stretch w-full  gap-20">
        {visibleProjects.map((project) => (
          <li key={project._id}>
            <ProjectCard
              className={"max-[460px]:w-full"}
              key={project._id}
              {...project}
            />
          </li>
        ))}
      </ul>
      {projects.length > MAX_DISPLAYED_PROJECTS && !showAll && (
        <Button onClick={() => setShowAll(true)}>See all</Button>
      )}
    </div>
  );
}
