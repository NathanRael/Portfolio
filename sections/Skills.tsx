"use client";
import SkillList, { Skill } from "@/components/sections/SkillList";
import AnimatedText from "@/components/ui/AnimatedText";
import { appearVariant } from "@/lib/animationVariants";
import { Bot, Gauge, Globe, PenTool } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import useResizeObserver from "use-resize-observer";

const services = [
  {
    icon: Globe,
    title: "Full-Stack Web Apps",
    titleFr: "Apps Web Full-Stack",
    description:
      "Full-stack apps designed, built, and shipped from first wireframe to production launch.",
    descriptionFr:
      "Applications full-stack conçues, développées et livrées, du premier wireframe au lancement en production.",
  },
  {
    icon: Bot,
    title: "AI Integration & Automation",
    titleFr: "Intégration IA & Automatisation",
    description:
      "Automation, document processing, smart search, and chatbots that remove repetitive work.",
    descriptionFr:
      "Automatisation, traitement de documents, recherche intelligente et chatbots qui éliminent les tâches répétitives.",
  },
  {
    icon: PenTool,
    title: "UI/UX & Prototyping",
    titleFr: "UI/UX & Prototypage",
    description:
      "Clean, usable interfaces and clickable prototypes that validate ideas before you commit.",
    descriptionFr:
      "Des interfaces propres et utilisables et des prototypes cliquables qui valident vos idées avant de vous engager.",
  },
  {
    icon: Gauge,
    title: "Performance & Maintainability",
    titleFr: "Performance & Maintenabilité",
    description:
      "Fast, clean, scalable code that keeps running costs low and future changes easy.",
    descriptionFr:
      "Un code rapide, propre et scalable qui maintient des coûts faibles et facilite les évolutions futures.",
  },
];

export default function SkillsSection({ skills }: { skills: Skill[] }) {
  const { ref, height = 120 } = useResizeObserver();

  return (
    <section ref={ref} id="skills" aria-labelledby="skills-heading" className="section relative w-full gap-20!">
      <div
        style={{
          backgroundImage: "url(/images/noise-texture.svg)",
          height: height! + 320,
        }}
        className="absolute  left-1/2 -top-60 -translate-x-1/2 w-screen  z-0 bg-no-repeat bg-cover bg-center "
      />
      <div className={"mb-20 pt-6 space-y-4 max-w-[650px] mx-auto"}>
        <AnimatedText
          whileInView="visible"
          initial="hidden"
          custom={1}
          className="text-subtitle font-bold w-full text-center"
        >
          <h2 id="skills-heading" className="notranslate" translate="no">
            <span className="manual-translation-en">What I Can <span className={"text-secondary"}>Build For You</span></span>
            <span className="manual-translation-fr">Ce que je peux <span className={"text-secondary"}>construire pour vous</span></span>
          </h2>
        </AnimatedText>
        <AnimatedText
          whileInView="visible"
          initial="hidden"
          custom={2}
          className="text-lead w-full text-center "
        >
          <p className="notranslate" translate="no">
            <span className="manual-translation-en">From full-stack web apps to AI-powered automation, here's what I can take off your plate so you can focus on growing the business.</span>
            <span className="manual-translation-fr">Des applications web full-stack à l&apos;automatisation par l&apos;IA, voici ce que je peux prendre en charge pour que vous puissiez vous concentrer sur la croissance de votre activité.</span>
          </p>
        </AnimatedText>
      </div>

      <div className="grid w-full max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
        {services.map((service, index) => (
          <ServiceCard key={service.title} service={service} index={index} />
        ))}
      </div>

      <div className={"mt-10 space-y-2 max-w-[650px] mx-auto text-center"}>
        <AnimatedText
          whileInView="visible"
          initial="hidden"
          custom={1}
          className="text-subtitle-2 font-bold w-full text-center text-white-80"
        >
          <h3 className="notranslate" translate="no">
            <span className="manual-translation-en">The stack behind the work</span>
            <span className="manual-translation-fr">La stack derrière le travail</span>
          </h3>
        </AnimatedText>
        <AnimatedText
          whileInView="visible"
          initial="hidden"
          custom={2}
          className="text-small w-full text-center text-white-80"
        >
          <p className="notranslate" translate="no">
            <span className="manual-translation-en">The technologies I use daily to deliver.</span>
            <span className="manual-translation-fr">Les technologies que j&apos;utilise au quotidien pour livrer.</span>
          </p>
        </AnimatedText>
      </div>

      <SkillList skills={skills} />

    </section>
  );
}

function ServiceCard({ service, index }: { service: (typeof services)[number]; index: number }) {
  const Icon = service.icon;
  return (
    <motion.div
      variants={appearVariant}
      custom={index + 1}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="relative overflow-hidden border-2 border-background-200 p-6 bg-background-200"
    >
      <Image
        src={"/images/noise-texture.svg"}
        className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-full h-full bg-no-repeat object-cover inset-0 opacity-90"
        alt=""
        aria-hidden="true"
        width={512}
        height={512}
      />
      <div className="relative z-10 flex items-start gap-4">
        <div className="flex size-12 shrink-0 items-center justify-center   bg-secondary text-white">
          <Icon size={24} />
        </div>
        <div className="space-y-2">
          <h3 className="text-lead font-bold text-white-100 notranslate" translate="no">
            <span className="manual-translation-en">{service.title}</span>
            <span className="manual-translation-fr">{service.titleFr}</span>
          </h3>
          <p className="text-small text-white-80 notranslate" translate="no">
            <span className="manual-translation-en">{service.description}</span>
            <span className="manual-translation-fr">{service.descriptionFr}</span>
          </p>
        </div>
      </div>
    </motion.div>
  );
}
