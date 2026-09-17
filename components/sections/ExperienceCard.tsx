"use client";
import { motion } from "motion/react";
import Image from "next/image";
import { appearVariant } from "@/lib/animationVariants";

export interface Experience {
  roleEn: string;
  roleFr: string;
  company: string;
  period: string;
  remote: boolean;
  descriptionEn: string[];
  descriptionFr: string[];
  techs: string[];
  logo?: string;
}

export default function ExperienceCard({
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
      <div className="lg:hidden absolute -top-8 left-1/2 -translate-x-1/2 z-20 w-16 h-16 rounded-full bg-white border-2 border-background-200 overflow-hidden flex items-center justify-center">
        {exp.logo ? (
          <Image
            src={exp.logo}
            alt={exp.company}
            fill
            sizes="64px"
            className="object-contain p-2"
            loading="lazy"
          />
        ) : (
          <span className="text-black font-bold text-lead">
            {exp.company.charAt(0)}
          </span>
        )}
      </div>
      <div className="relative border-2 border-background-200 bg-background-100 overflow-hidden p-6 pt-12 lg:pt-6 space-y-4">
        <div className="pointer-events-none absolute inset-0 bg-[url('/images/white-noise.svg')] bg-repeat opacity-15" />
        <div className="relative z-10 space-y-4">
          <div className="space-y-2">
            <p className="lg:hidden md:text-subtitle-2 text-lead font-semibold text-white-80">
              {exp.company}
            </p>
            <h3
              className="md:text-subtitle-2 text-lead font-bold text-white-100 notranslate"
              translate="no"
            >
              <span className="manual-translation-en">{exp.roleEn}</span>
              <span className="manual-translation-fr">{exp.roleFr}</span>
            </h3>
            <div className="flex items-center gap-2">
              <span className="text-accent md:text-small text-small-2">
                {exp.period}
              </span>
              {exp.remote && (
                <span
                  className="md:text-small text-small-2 text-white-60 notranslate"
                  translate="no"
                >
                  <span className="manual-translation-en">Remote</span>
                  <span className="manual-translation-fr">Télétravail</span>
                </span>
              )}
            </div>
          </div>

          <ul className="space-y-2">
            {exp.descriptionEn.map((item, i) => (
              <li
                key={i}
                className="md:text-base text-small text-white-70 flex gap-2 notranslate"
                translate="no"
              >
                <span className="text-accent mt-1 shrink-0">&#x2022;</span>
                <span>
                  <span className="manual-translation-en">{item}</span>
                  <span className="manual-translation-fr">
                    {exp.descriptionFr[i]}
                  </span>
                </span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2 pt-2">
            {exp.techs.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-small-2 bg-neutral-dark-80 text-white-80 border border-background-200 opacity-60"
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
