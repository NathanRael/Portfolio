"use client";
import Image from "next/image";
import { useMemo } from "react";
import { motion } from "motion/react";
import { rotateVariant } from "@/lib/animationVariants";
import AnimatedText from "@/components/ui/AnimatedText";

export interface Skill {
  _id: string;
  name: string;
  image: string;
  category: "framework" | "language" | "database" | "tool";
}

const categories = ["framework", "language", "database", "tool"];

export default function SkillList({ skills }: { skills: Skill[] }) {

  const skillsByCategory = useMemo(() => {
    const grouped: Record<string, Skill[]> = {};
    for (const category of categories) {
      grouped[category] = [];
    }
    for (const skill of skills) {
      const key = skill?.category?.toLowerCase();
      if (grouped[key]) {
        grouped[key].push(skill);
      }
    }
    return grouped;
  }, [skills]);
  const manualCategoryTranslations: Partial<Record<(typeof categories)[number], { en: string; fr: string }>> = {
    framework: {
      en: "Frameworks",
      fr: "Frameworks",
    },
    language: {
      en: "Languages",
      fr: "Langages",
    },
    database: {
      en: "Databases",
      fr: "Bases de données",
    },
    tool: {
      en: "Tools",
      fr: "Outils",
    },
  };

  return (
    <div className={"flex flex-col gap-y-36"}>
      {
        categories?.map((category, i) => (
          <div key={category} className={"flex flex-col gap-10 items-center justify-center"}>
            <AnimatedText className={"relative"} custom={i * 0.5} whileInView={"visible"} initial={i % 2 === 0 ? "fromL" : "fromR"} viewport={{once: true}}>
              <div className={"text-subtitle-2 -rotate-2 text-white relative"}>
                <h3>
                  {
                    manualCategoryTranslations[category] ? (
                      <span className="notranslate" translate="no">
                        <span className="manual-translation-en">
                          {manualCategoryTranslations[category]?.en}
                        </span>
                        <span className="manual-translation-fr">
                          {manualCategoryTranslations[category]?.fr}
                        </span>
                      </span>
                    ) : (
                      `${category.charAt(0).toUpperCase() + category.slice(1)}s`
                    )
                  }
                </h3>
                <svg className="absolute bottom-4  w-full h-full pointer-events-none" viewBox="0 0 400 100" fill="none">
                  <path d="M10,10 Q200,80 390,10 Q200,90 10,10 Z"
                    stroke="var(--secondary)" strokeWidth="6" fill="none" />
                </svg>
              </div>
            </AnimatedText>
            <div className={"flex flex-wrap items-center justify-center w-full max-w-[820px] mx-auto gap-x-12 gap-y-8"}>
              {
                skillsByCategory[category]?.map((skill) => (
                  <Skill key={skill.name} skill={skill} />
                ))
              }
            </div>
          </div>

        ))
      }
    </div>
  );
}

function Skill({ skill }: { skill: Skill }) {
  return (
    <motion.div variants={rotateVariant} initial={true} whileHover={{ rotate: 64 }} key={skill.name}
      className={"flex-col-center gap-1 "}>
      <motion.div custom={0} variants={rotateVariant} initial={"initial"} whileInView={"rotate"}>
        <Image width={40} height={40} src={skill.image} alt={`${skill.name} logo`} sizes="40px" loading="lazy" />
      </motion.div>
      <p className={"w-full text-center text-base text-white-80"}>
        <span className="notranslate" translate="no">{skill.name}</span>
      </p>
    </motion.div>
  );
}
