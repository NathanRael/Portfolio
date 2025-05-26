import { sanityFetch } from "@/sanity/lib/live";
import { PROJECT_QUERY } from "@/sanity/lib/query";
import ProjectsSection from "@/sections/Projects";
import { Suspense } from "react";

const Page = async ({
  searchParams,
}: {
  searchParams: Promise<{ filter?: string }>;
}) => {
  const filter = (await searchParams).filter;

  const { data: projects } = await sanityFetch({ query: PROJECT_QUERY });

  return (
    <>
      <section>
        <Suspense fallback={<div>Loading...</div>}>
          <ProjectsSection projects={projects} filter={filter} />
        </Suspense>
      </section>
    </>
  );
};

export default Page;
