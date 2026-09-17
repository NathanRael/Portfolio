"use client";

import { useState } from "react";
import Link from "next/link";
import ScrollStack, { ScrollStackItem } from "@/components/shared/ScrollStack";
import SkillList, { Skill } from "@/components/sections/SkillList";
import AnimatedText from "@/components/ui/AnimatedText";
import { ArrowUpRight, Bot, Gauge, Globe, PenTool } from "lucide-react";

const services = [
  {
    icon: Globe,
    number: "01",
    title: "Full-Stack Web Apps",
    titleFr: "Applications web full-stack",
    description:
      "Launch polished digital products with one clear path from product thinking and interface design to reliable production code.",
    descriptionFr:
      "Lancez des produits numériques soignés, de la réflexion produit et du design d’interface jusqu’à un code fiable en production.",
    tags: ["Web apps", "APIs", "Deployments"],
  },
  {
    icon: Bot,
    number: "02",
    title: "AI Integration & Automation",
    titleFr: "Intégration IA et automatisation",
    description:
      "Turn repetitive operations into intelligent workflows with document processing, search, assistants, and automations built around your team.",
    descriptionFr:
      "Transformez les opérations répétitives en flux intelligents grâce au traitement de documents, à la recherche, aux assistants et aux automatisations adaptés à votre équipe.",
    tags: ["Chatbots", "Document AI", "Workflows"],
  },
  {
    icon: PenTool,
    number: "03",
    title: "UI/UX & Prototyping",
    titleFr: "UI/UX et prototypage",
    description:
      "Make the right idea tangible early with focused user flows, expressive interfaces, and prototypes that are ready to test.",
    descriptionFr:
      "Rendez la bonne idée concrète rapidement grâce à des parcours ciblés, des interfaces expressives et des prototypes prêts à être testés.",
    tags: ["User flows", "Design systems", "Prototypes"],
  },
  {
    icon: Gauge,
    number: "04",
    title: "Performance & Maintainability",
    titleFr: "Performance et maintenabilité",
    description:
      "Keep momentum after launch with fast experiences, structured code, and foundations that make the next change easier.",
    descriptionFr:
      "Gardez votre élan après le lancement grâce à des expériences rapides, un code structuré et des bases qui simplifient chaque évolution.",
    tags: ["Performance", "Clean code", "Testing"],
  },
];

export default function SkillsSection({ skills }: { skills: Skill[] }) {
  const [active, setActive] = useState(0);

  return (
    <>
      <section
        id="skills"
        aria-labelledby="skills-heading"
        className="relative isolate w-full border-y border-background-200/70 bg-background-100"
      >
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[url('/images/noise-texture.svg')] bg-cover bg-center opacity-20" />
        <div className="relative grid w-full lg:grid-cols-[minmax(16rem,0.72fr)_minmax(0,1fr)]">
          <aside className="relative z-10 flex flex-col border-background-200/70 p-6 sm:p-8 lg:sticky lg:top-0 lg:h-screen lg:border-r">
            <div className="flex flex-1 flex-col items-center justify-center gap-6 text-center">
              <h2
                id="skills-heading"
                className="text-subtitle font-bold notranslate"
                translate="no"
              >
                <span className="manual-translation-en">
                  What I Can{" "}
                  <span className="text-secondary">Build For You</span>
                </span>
                <span className="manual-translation-fr">
                  Ce que je peux{" "}
                  <span className="text-secondary">construire pour vous</span>
                </span>
              </h2>
              <p
                className="max-w-sm text-base text-white-80 notranslate"
                translate="no"
              >
                <span className="manual-translation-en">
                  I turn complex ideas into useful products: clear to use, built
                  to last, and ready to move your business forward.
                </span>
                <span className="manual-translation-fr">
                  Je transforme les idées complexes en produits utiles : simples
                  à utiliser, solides dans le temps et prêts à faire avancer
                  votre activité.
                </span>
              </p>
            </div>
            <div className="pt-6">
              <div className="flex items-baseline gap-2 font-bold text-white-100">
                <span className="text-[2.5rem] leading-none">
                  0{active + 1}
                </span>
                <span className="text-base text-white-80">
                  / 0{services.length}
                </span>
              </div>
              <div className="mt-4 h-0.5 overflow-hidden rounded bg-background-300/70">
                <div
                  className="h-full bg-secondary transition-[width] duration-200"
                  style={{
                    width: `${((active + 1) / services.length) * 100}%`,
                  }}
                />
              </div>
              <p className="mt-3 text-small text-white-80">
                {services[active].title}
              </p>
            </div>
          </aside>

          <ScrollStack onActiveChange={setActive} className="min-w-0">
            {services.map((service) => (
              <ScrollStackItem key={service.title}>
                <ServiceCard service={service} />
              </ScrollStackItem>
            ))}
          </ScrollStack>
        </div>
      </section>

      <section
        aria-labelledby="stack-heading"
        className="section relative w-full gap-10!"
      >
        <div className="mx-auto max-w-[650px] space-y-2 text-center">
          <AnimatedText
            whileInView="visible"
            initial="hidden"
            custom={1}
            className="text-subtitle-2 w-full font-bold text-white-80"
          >
            <h2 id="stack-heading" className="notranslate" translate="no">
              <span className="manual-translation-en">
                The stack behind the work
              </span>
              <span className="manual-translation-fr">
                La stack derrière le travail
              </span>
            </h2>
          </AnimatedText>
          <AnimatedText
            whileInView="visible"
            initial="hidden"
            custom={2}
            className="text-small w-full text-white-80"
          >
            <p className="notranslate" translate="no">
              <span className="manual-translation-en">
                The technologies I use daily to deliver.
              </span>
              <span className="manual-translation-fr">
                Les technologies que j&apos;utilise au quotidien pour livrer.
              </span>
            </p>
          </AnimatedText>
        </div>
        <SkillList skills={skills} />
      </section>
    </>
  );
}

function ServiceCard({ service }: { service: (typeof services)[number] }) {
  const Icon = service.icon;

  return (
    <article className="relative flex min-h-[68vh] w-full max-w-3xl flex-col justify-between overflow-hidden border border-background-300/70 bg-background-200 p-8 sm:p-12">
      <div className="pointer-events-none absolute inset-0 bg-[url('/images/noise-texture.svg')] bg-cover bg-center opacity-20" />
      <div className="relative z-10 flex items-start justify-between gap-4">
        <div className="flex size-16 items-center justify-center border border-secondary/70 bg-secondary text-white">
          <Icon size={28} strokeWidth={1.8} aria-hidden="true" />
        </div>
        <span className="font-mono text-small text-secondary">
          {service.number}
        </span>
      </div>
      <div className="relative z-10 my-10 max-w-xl space-y-5">
        <h3 className="text-subtitle font-bold notranslate" translate="no">
          <span className="manual-translation-en">{service.title}</span>
          <span className="manual-translation-fr">{service.titleFr}</span>
        </h3>
        <p
          className="max-w-prose text-lead leading-relaxed text-white-80 notranslate"
          translate="no"
        >
          <span className="manual-translation-en">{service.description}</span>
          <span className="manual-translation-fr">{service.descriptionFr}</span>
        </p>
      </div>
      <div className="relative z-10 flex items-end justify-between gap-4 border-t border-background-300/70 pt-6">
        <div className="flex flex-wrap gap-2">
          {service.tags.map((tag) => (
            <span
              key={tag}
              className="border border-background-300/70 px-3 py-1 text-small text-white-80"
            >
              {tag}
            </span>
          ))}
        </div>
        <Link
          href="/project"
          className="flex size-12 shrink-0 items-center justify-center rounded-full border border-background-300/70 text-white-80 transition-colors hover:bg-white hover:text-black"
          aria-label="See projects / Voir les projets"
        >
          <ArrowUpRight size={18} aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
