import { sanityFetch } from "@/sanity/lib/live";
import { PROJECT_QUERY } from "@/sanity/lib/query";
import ProjectsSection from "@/sections/Projects";
import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore Natanaël RALAIVOAVY's frontend, AI integration, and interface projects.",
  alternates: {
    canonical: "https://nathanrael.vercel.app/project",
  },
  openGraph: {
    title: "Projects | Natanaël RALAIVOAVY",
    description:
      "A collection of frontend, AI integration, and interface projects by Natanaël RALAIVOAVY.",
    url: "https://nathanrael.vercel.app/project",
    type: "website",
  },
};

const Page = async ({
  searchParams,
}: {
  searchParams: Promise<{ filter?: string }>;
}) => {
  const filter = (await searchParams).filter;

  const { data: projects } = await sanityFetch({ query: PROJECT_QUERY });

  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <ProjectsSection projects={projects} filter={filter} />
      </Suspense>
    </main>
  );
};

export default Page;
