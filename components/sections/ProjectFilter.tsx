"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useQueryParam } from "@/hook/useQueryParam";

export default function ProjectFilter({
  activeFilter,
}: {
  activeFilter?: string;
}) {
  const [selectedFilter, setSelectedFilter] = useState(activeFilter || "all");
  const { setQueryParam } = useQueryParam();
  const filters = ["All", "Application", "Mockup"];

  const handleSelectedFilter = (filter: string) => {
    setSelectedFilter(filter);
    setQueryParam("filter", filter);
  };

  return (
    <div className="text-white-100 flex-row-center gap-6">
      {filters.map((filter) => (
        <Button
          onClick={() => handleSelectedFilter(filter)}
          key={filter}
          variant={"tertiary"}
          className={
            selectedFilter.toLowerCase() === filter.toLowerCase()
              ? "bg-neutral-dark-60"
              : ""
          }
        >
          {filter}
        </Button>
      ))}
    </div>
  );
}
