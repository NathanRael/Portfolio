"use client";
import { ArrowUpRight, type LucideIcon } from "lucide-react";
import Link from "next/link";

export interface Service {
  icon: LucideIcon;
  number: string;
  title: string;
  titleFr: string;
  description: string;
  descriptionFr: string;
  tags: string[];
  theme: {
    bg: string;
    iconText: string;
    hover: string;
  };
}

export default function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;
  const { theme } = service;

  return (
    <article
      className={`relative flex min-h-[68vh] w-full max-w-3xl flex-col justify-between overflow-hidden rounded-xl text-white border-4 border-white ${theme.bg} p-8 sm:p-12`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[url('/images/white-noise.svg')] bg-repeat opacity-90 mix-blend-overlay" />
      <div className="relative text-center my-auto mx-auto z-10 max-w-xl space-y-5">
        <h3 className="text-subtitle font-bold notranslate" translate="no">
          <span className="manual-translation-en">{service.title}</span>
          <span className="manual-translation-fr">{service.titleFr}</span>
        </h3>
        <p
          className="max-w-prose text-lead leading-relaxed text-white notranslate"
          translate="no"
        >
          <span className="manual-translation-en">{service.description}</span>
          <span className="manual-translation-fr">{service.descriptionFr}</span>
        </p>
      </div>
      <div className="relative z-10 flex items-end justify-between gap-4 pt-6">
        <div className="flex flex-wrap gap-2">
          {service.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-xl border border-white/90 px-3 py-1 text-small"
            >
              {tag}
            </span>
          ))}
        </div>
        <Link
          href="/project"
          className={`flex size-12 shrink-0 items-center justify-center rounded-full bg-white transition-colors ${theme.iconText}`}
          aria-label="See projects / Voir les projets"
        >
          <ArrowUpRight size={18} aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
