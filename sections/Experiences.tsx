"use client";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useRef } from "react";
import AnimatedText from "@/components/ui/AnimatedText";
import { appearVariant } from "@/lib/animationVariants";

interface Experience {
  role: string;
  company: string;
  period: string;
  remote: boolean;
  description: string[];
  techs: string[];
}

const EXPERIENCES: Experience[] = [
  {
    role: "D\u00e9veloppeur front-end",
    company: "BCI France - Certification Qualiopi",
    period: "Dec 2025 - Present",
    remote: true,
    description: [
      "Intervention en tant que prestataire de service au sein de BCI France, avec une contribution au d\u00e9veloppement d'applications web en tant que d\u00e9veloppeur frontend, principalement avec Next.js.",
      "Int\u00e9gration des interfaces con\u00e7ues par l'\u00e9quipe design et participation \u00e0 des d\u00e9veloppements frontend en PHP.",
      "Collaboration au sein d'une \u00e9quipe Agile en suivant les bonnes pratiques de d\u00e9veloppement.",
      "Utilisation de Docker pour la gestion et la standardisation des environnements de d\u00e9veloppement.",
      "R\u00e9alisation de tests unitaires afin d'assurer la qualit\u00e9, la fiabilit\u00e9 et la maintenabilit\u00e9 du code.",
      "Participation \u00e0 l'am\u00e9lioration continue des applications et de l'exp\u00e9rience utilisateur.",
    ],
    techs: ["Next.js", "PHP", "Docker", "Cypress"],
  },
  {
    role: "D\u00e9veloppeur Full-Stack",
    company: "ITDC - Madagascar",
    period: "Jun - Sep 2025",
    remote: false,
    description: [
      "Contribution \u00e0 la conception et au d\u00e9veloppement d'une application web collaborative pour le d\u00e9p\u00f4t et le suivi en ligne des devoirs.",
      "R\u00e9alisation de maquettes et prototypes d'interface avec Figma pour valider les parcours utilisateurs.",
      "Int\u00e9gration d'une couche d'intelligence artificielle avec LangChain pour automatiser l'\u00e9valuation et le feedback.",
      "Mise en place d'une architecture full-stack avec Next.js pour le frontend et NestJS pour le backend.",
      "Utilisation de Docker pour la conteneurisation et la standardisation des environnements de d\u00e9veloppement.",
    ],
    techs: ["Next.js", "NestJS", "Docker", "LangChain", "Figma"],
  },
];

function ExperienceCard({
  exp,
  index,
}: {
  exp: Experience;
  index: number;
}) {
  return (
    <motion.div
      variants={appearVariant}
      custom={index + 1}
      initial={"hidden"}
      whileInView={"visible"}
      viewport={{ once: true }}
      className="relative w-full max-w-[860px]"
    >
      <div className="relative border-2 border-background-200 overflow-hidden p-6 space-y-4">
        <Image
          src={"/images/noise-texture.svg"}
          className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-full h-full bg-no-repeat object-cover inset-0 opacity-90"
          alt=""
          aria-hidden="true"
          width={512}
          height={512}
        />
        <div className="relative z-10 space-y-4">
          <div className="flex items-start justify-between gap-2">
            <div>
              <h3 className="md:text-subtitle-2 text-lead font-bold text-white-100">{exp.role}</h3>
              <p className="md:text-lead text-base text-white-80">{exp.company}</p>
              {exp.remote && (
                <span className="md:text-base text-small text-accent notranslate" translate="no">
                  <span className="manual-translation-en">Remote</span>
                  <span className="manual-translation-fr">Télétravail </span>
                </span>
              )}
            </div>
            <span className="md:text-base text-small text-white-60 text-nowrap">{exp.period}</span>
          </div>

          <ul className="space-y-2">
            {exp.description.map((item, i) => (
              <li key={i} className="md:text-base text-small text-white-70 flex gap-2">
                <span className="text-accent mt-1 shrink-0">&#x2022;</span>
                {item}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2 pt-2">
            {exp.techs.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 md:text-base text-small bg-neutral-dark-80 text-white-80 border border-background-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function ExperiencesSection() {
  const curveRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: curveRef,
    offset: ["start 70%", "end 30%"],
  });
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      id="experiences"
      aria-labelledby="experiences-heading"
      className="relative w-full overflow-hidden py-20"
    >
      <div className="mb-16 space-y-4 max-w-[650px] mx-auto text-center">
        <AnimatedText
          whileInView="visible"
          initial="hidden"
          custom={1}
          className="text-subtitle font-bold w-full text-white-100"
        >
          <h2 id="experiences-heading">
            Professional <span className="text-secondary">Experience</span>
          </h2>
        </AnimatedText>
        <AnimatedText
          whileInView="visible"
          initial="hidden"
          custom={2}
          className="text-lead w-full text-white-70"
        >
          <p>A timeline of the roles and projects that shaped my career as a developer.</p>
        </AnimatedText>
      </div>

      <div ref={curveRef} className="relative max-w-6xl mx-auto">
        {/* Curved connector SVG */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          {/* White base line */}
          <path
            d="M 50 8 C 75 40, 25 60, 50 92"
            fill="none"
            stroke="white"
            strokeOpacity="0.2"
            strokeWidth="1.5"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
          />
          {/* Accent fill that grows downward from top */}
          <motion.path
            d="M 50 8 C 75 40, 25 60, 50 92"
            fill="none"
            stroke="var(--color-accent)"
            strokeWidth="1.5"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
            style={{ pathLength }}
          />
        </svg>

        {/* Row 1: Left card */}
        <div className="flex w-full items-start justify-center">
          <div className="lg:flex-[1.2] flex-1 flex justify-end xl:pr-20 lg:pr-12 max-lg:justify-center max-lg:px-4">
            <ExperienceCard exp={EXPERIENCES[0]} index={0} />
          </div>
          <div className="hidden lg:flex flex-col items-center w-8 pt-8 shrink-0" />
          <div className="lg:flex-1 hidden lg:block" />
        </div>

        {/* Row 2: Right card */}
        <div className="flex w-full items-start justify-center">
          <div className="lg:flex-1 hidden lg:block" />
          <div className="hidden lg:flex flex-col items-center w-8 shrink-0" />
          <div className="lg:flex-[1.2] flex-1 flex justify-start xl:pl-20 lg:pl-12 pt-16 lg:pt-24 max-lg:justify-center max-lg:px-4 max-lg:pt-8">
            <ExperienceCard exp={EXPERIENCES[1]} index={1} />
          </div>
        </div>
      </div>
    </section>
  );
}
