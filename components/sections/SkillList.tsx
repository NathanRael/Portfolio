"use client";
import Image from "next/image";
import { motion } from "motion/react";
import { rotateVariant } from "@/lib/animationVariants";
import AnimatedText from "@/components/ui/AnimatedText";

export interface Skill {
  _id: string;
  name: string;
  image: string;
  experimented: boolean;
  category: "framework" | "language" | "database" | "tool";
}

export default function SkillList({ skills }: { skills: Skill[] }) {

  const categories = ["framework", "language", "database", "tool"];

  return (
    <div className={"flex flex-col gap-y-36"}>
      {
        categories?.map((category, i) => (
          <div key={category} className={"flex flex-wrap gap-10 items-center justify-center"}>
            <AnimatedText className={"relative"} custom={i * 0.5} whileInView={"visible"} initial={i % 2 === 0 ? "fromL" : "fromR"}>
              <h1 className={"text-subtitle-2 -rotate-2 text-white relative"}>
                {category.charAt(0).toUpperCase() + category.slice(1)}s
                <svg className="absolute bottom-4  w-full h-full pointer-events-none" viewBox="0 0 400 100" fill="none">
                  <path d="M10,10 Q200,80 390,10 Q200,90 10,10 Z"
                        stroke="var(--secondary)" strokeWidth="6" fill="none" />
                </svg>
              </h1>

            </AnimatedText>
            <div className={"flex-row-center flex-wrap w-full  gap-20"}>
              {
                skills.filter(skill => skill?.category?.toLowerCase() === category.toLowerCase()).map((skill, index) => (
                  <Skill index={index} key={skill.name} skill={skill} />
                ))
              }
            </div>
          </div>

        ))
      }
    </div>
  );
}

function Skill({ skill, index }: { skill: Skill, index: number }) {
  return (
    <motion.div variants={rotateVariant} initial={true} whileHover={{ rotate: 64 }} key={skill.name}
                className={"flex-col-center gap-2 "}>
      <motion.div custom={index} variants={rotateVariant} initial={"initial"} whileInView={"rotate"}>
        <Image width={40} height={40} src={skill.image} alt={"next js logo"} />
      </motion.div>
      <p className={"text-base text-white-80"}>{skill.name}</p>
    </motion.div>
  );
}
