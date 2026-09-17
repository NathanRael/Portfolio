"use client";

import ScrollStack, { ScrollStackItem } from "@/components/shared/ScrollStack";
import ServiceCard from "@/components/sections/ServiceCard";
import { Bot, Globe, PenTool } from "lucide-react";

const serviceThemes = {
  fullstack: {
    bg: "bg-[#21C5B7]",
    iconText: "text-[#21C5B7]",
    hover: "hover:bg-[#21C5B7] hover:text-black",
  },
  ai: {
    bg: "bg-primary",
    iconText: "text-primary",
    hover: "hover:bg-blue-500 hover:text-white",
  },
  ux: {
    bg: "bg-secondary",
    iconText: "text-secondary",
    hover: "hover:bg-yellow-400 hover:text-black",
  },
};

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
    theme: serviceThemes.fullstack,
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
    theme: serviceThemes.ai,
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
    theme: serviceThemes.ux,
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="relative isolate w-full  bg-background-100"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[url('/images/white-noise.svg')] bg-repeat opacity-15" />
      <div className="relative grid w-full lg:grid-cols-[minmax(16rem,0.72fr)_minmax(0,1fr)]">
        <aside className="relative z-10 flex flex-col border-background-200/70 p-6 sm:p-8 lg:sticky lg:top-0 lg:h-screen ">
          <div className="flex flex-1 flex-col items-center justify-center gap-6 text-center">
            <h2
              id="services-heading"
              className="text-subtitle font-bold notranslate"
              translate="no"
            >
              <span className="manual-translation-en">
                What I Can <span className="text-secondary">Build For You</span>
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
                Je transforme les idées complexes en produits utiles : simples à
                utiliser, solides dans le temps et prêts à faire avancer votre
                activité.
              </span>
            </p>
          </div>
        </aside>

        <ScrollStack className="min-w-0">
          {services.map((service) => (
            <ScrollStackItem key={service.title}>
              <ServiceCard service={service} />
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </div>
    </section>
  );
}
