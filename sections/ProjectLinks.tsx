import { sanityFetch } from "@/sanity/lib/live";
import { PROJECT_LINKS_QUERY } from "@/sanity/lib/query";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

type ProjectLinkEntry = {
  _id: string;
  name: string;
  links: string[];
};

const ProjectLinkItem = ({ link, name }: { link: string; name: string }) => (
  <Link
    target="_blank"
    rel="noopener noreferrer"
    href={link}
    className="py-2 px-8 border border-background-300/80 border-t-3 from-70% from-background-200 to-background-300 flex items-center text-white/80 transition-colors justify-center gap-2 hover:bg-white hover:text-black"
    aria-label={`Open ${name} project`}
  >
    <div className="size-2 bg-accent" />
    <p className="text-nowrap text-sm truncate">{name}</p>
    <ExternalLink size={14} />
  </Link>
);

const MarqueeRow = ({
  items,
  reverse,
}: {
  items: { id: string; name: string; link: string }[];
  reverse?: boolean;
}) => (
  <div className="flex overflow-hidden py-2 [--gap:2rem] [gap:var(--gap)] flex-row max-w-full [--duration:40s] [mask-image:linear-gradient(to_right,rgba(0,0,0,0),rgba(0,0,0,1)_10%,rgba(0,0,0,1)_90%,rgba(0,0,0,0))]">
    {[false, true].map((hidden) => (
      <div
        key={String(hidden)}
        aria-hidden={hidden}
        className={`flex shrink-0 justify-around [gap:var(--gap)] flex-row min-w-full ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
      >
        {items.map((item) => (
          <ProjectLinkItem key={item.id} link={item.link} name={item.name} />
        ))}
      </div>
    ))}
  </div>
);

export default async function ProjectLinks() {
  const { data } = await sanityFetch({ query: PROJECT_LINKS_QUERY });
  const projects = (data as ProjectLinkEntry[]).filter((p) => p.links?.length);

  if (projects.length === 0) return null;

  const items = projects.map((p) => ({
    id: p._id,
    name: p.name,
    link: p.links[0],
  }));

  const mid = Math.ceil(items.length / 2);
  const firstRow = items.slice(0, mid);
  const secondRow = items.slice(mid);

  return (
    <section
      aria-label="Project links"
      className="flex flex-col max-w-full"
    >
      <MarqueeRow items={firstRow} />
      <MarqueeRow items={secondRow} reverse />
    </section>
  );
}
