"use client";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useRef } from "react";
import AnimatedText from "@/components/ui/AnimatedText";
import ExperienceCard, {
  type Experience,
} from "@/components/sections/ExperienceCard";

const EXPERIENCES: Experience[] = [
  {
    roleEn: "Full-Stack Developer",
    roleFr: "Développeur Full-Stack",
    company: "Neorion-tech",
    period: "Sep 2026 - Present",
    remote: false,
    descriptionEn: [
      "Service-provider full-stack developer building microservice applications.",
      "Focused on security, scalability, and full test coverage across services.",
    ],
    descriptionFr: [
      "Développeur full-stack prestataire de service, construisant des applications en microservices.",
      "Concentré sur la sécurité, l'évolutivité et une couverture de tests complète.",
    ],
    techs: ["Nest", "Next", "Docker", "GraphQL"],
    logo: "/logo/companies/neorion-logo.png",
  },
  {
    roleEn: "Frontend Developer",
    roleFr: "D\u00e9veloppeur front-end",
    company: "BCI France",
    period: "Nov 2025 - Present",
    remote: true,
    descriptionEn: [
      "Paid remote service-provider for BCI France, delivering production frontend work with Next.js.",
      "Shipped interfaces from the design team's mockups into working, user-facing features.",
      "Cut regressions with unit testing, so quality and reliability stayed high.",
      "Standardized dev environments with Docker, so the team shipped consistently.",
    ],
    descriptionFr: [
      "Prestataire de service \u00e0 distance r\u00e9mun\u00e9r\u00e9 pour BCI France, livrant du travail frontend de production avec Next.js.",
      "Livr\u00e9 des interfaces \u00e0 partir des maquettes de l'\u00e9quipe design, transform\u00e9es en fonctionnalit\u00e9s pr\u00eates pour les utilisateurs.",
      "R\u00e9duit les r\u00e9gressions gr\u00e2ce aux tests unitaires, pour maintenir qualit\u00e9 et fiabilit\u00e9.",
      "Standardis\u00e9 les environnements de d\u00e9veloppement avec Docker, pour des livraisons coh\u00e9rentes.",
    ],
    techs: ["Next.js", "PHP", "Docker", "Cypress"],
    logo: "/logo/companies/bcifrance.png",
  },
  {
    roleEn: "Full-Stack Developer",
    roleFr: "D\u00e9veloppeur Full-Stack",
    company: "ITDC Mada",
    period: "Jun - Sep 2025",
    remote: false,
    descriptionEn: [
      "Automated homework grading and feedback with AI, giving teachers their time back and students instant responses.",
      "Designed a collaborative web app for online homework submission and tracking.",
      "Validated user journeys with Figma mockups and clickable prototypes before building.",
      "Shipped a full-stack architecture with Next.js (frontend) and NestJS (backend).",
    ],
    descriptionFr: [
      "Automatis\u00e9 la correction des devoirs et le feedback avec l'IA, rendant du temps aux enseignants et des r\u00e9ponses instantan\u00e9es aux \u00e9tudiants.",
      "Con\u00e7u une application web collaborative pour le d\u00e9p\u00f4t et le suivi des devoirs en ligne.",
      "Valid\u00e9 les parcours utilisateurs avec des maquettes et prototypes Figma avant le d\u00e9veloppement.",
      "Livr\u00e9 une architecture full-stack avec Next.js (frontend) et NestJS (backend).",
    ],
    techs: ["Next.js", "NestJS", "Docker", "LangChain", "Figma"],
    logo: "/logo/companies/itdc.jpg",
  },
  {
    roleEn: "Frontend Developer & Designer",
    roleFr: "Développeur Front-End et Designer",
    company: "NJCAM SYSTEM",
    period: "Jun - Aug 2024",
    remote: false,
    descriptionEn: [
      "Contributed to the front-end development of a freight transport service application.",
      "Created interface mockups with Figma.",
    ],
    descriptionFr: [
      "Participation au développement de la partie front-end d'une application de service de transport de marchandises.",
      "Réalisation de maquettes d'interface avec Figma.",
    ],
    techs: ["React", "Node", "Figma"],
  },
];

function CompanyBadge({ exp }: { exp: Experience }) {
  return (
    <div className="flex items-center gap-5">
      <div className="relative w-20 h-20 shrink-0 rounded-full bg-white border-2 border-background-200 overflow-hidden flex items-center justify-center">
        {exp.logo ? (
          <Image
            src={exp.logo}
            alt={exp.company}
            fill
            sizes="80px"
            className="object-contain p-2"
            loading="lazy"
          />
        ) : (
          <span className="text-black font-bold text-lead">
            {exp.company.charAt(0)}
          </span>
        )}
      </div>
      <p className="text-white-100 font-bold text-lead max-w-[240px]">
        {exp.company}
      </p>
    </div>
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
          <h2 id="experiences-heading" className="notranslate" translate="no">
            <span className="manual-translation-en">
              Professional <span className="text-secondary">Experience</span>
            </span>
            <span className="manual-translation-fr">
              Expérience <span className="text-secondary">Professionnelle</span>
            </span>
          </h2>
        </AnimatedText>
        <AnimatedText
          whileInView="visible"
          initial="hidden"
          custom={2}
          className="text-lead w-full text-white-70"
        >
          <p className="notranslate" translate="no">
            <span className="manual-translation-en">
              Working with clients to deliver real value: the impact, not just
              the job titles.
            </span>
            <span className="manual-translation-fr">
              Travailler avec des clients pour apporter une vraie valeur :
              l&apos;impact, pas seulement les intitulés de poste.
            </span>
          </p>
        </AnimatedText>
      </div>

      <div ref={curveRef} className="relative max-w-6xl mx-auto">
        {/* Straight connector line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-[1.5px] -translate-x-1/2 hidden lg:block">
          <div className="absolute inset-0 bg-white opacity-20" />
          <motion.div
            className="absolute inset-0 bg-[var(--color-accent)] origin-top"
            style={{ scaleY: pathLength, willChange: "transform" }}
          />
        </div>

        {EXPERIENCES.map((exp, index) => {
          const isLeft = index % 2 === 0;
          const topPadding = index > 0 ? "pt-16 lg:pt-24 max-lg:pt-8" : "";
          return (
            <div
              key={exp.company}
              className="flex w-full items-start justify-center"
            >
              {isLeft ? (
                <>
                  <div
                    className={`lg:flex-[1.2] flex-1 flex justify-end xl:pr-20 lg:pr-12 max-lg:justify-center max-lg:px-4 ${topPadding}`}
                  >
                    <ExperienceCard exp={exp} index={index} />
                  </div>
                  <div className="hidden lg:flex flex-col items-center w-8 pt-8 shrink-0" />
                  <div
                    className={`lg:flex-1 hidden lg:flex items-center justify-start xl:pl-20 lg:pl-12 ${topPadding}`}
                  >
                    <CompanyBadge exp={exp} />
                  </div>
                </>
              ) : (
                <>
                  <div className="lg:flex-1 hidden lg:flex items-center justify-end xl:pr-20 lg:pr-12 pt-16 lg:pt-24">
                    <CompanyBadge exp={exp} />
                  </div>
                  <div className="hidden lg:flex flex-col items-center w-8 shrink-0" />
                  <div className="lg:flex-[1.2] flex-1 flex justify-start xl:pl-20 lg:pl-12 pt-16 lg:pt-24 max-lg:justify-center max-lg:px-4 max-lg:pt-8">
                    <ExperienceCard exp={exp} index={index} />
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
