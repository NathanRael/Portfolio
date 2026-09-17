"use client";
import AnimatedText from "@/components/ui/AnimatedText";
import { cn } from "@/lib/utils";
import { appearVariant } from "@/lib/animationVariants";
import { motion } from "motion/react";
import Image from "next/image";
import Logo from "@/components/ui/Logo";

const AboutMe = ({ className }: { className?: string }) => {
  return (
    <section
      aria-labelledby="about-heading"
      className={cn(
        "flex flex-row items-center  justify-center w-full",
        className
      )}
    >
      <div className={cn("space-y-6")}>
        <AnimatedText
          whileInView={"visible"}
          initial={"hidden"}
          custom={1}
          className={"text-subtitle w-full text-center flex items-center justify-center flex-col gap-6 text-white-100"}
        >
          <Logo />
          <h2 id="about-heading" className="notranslate" translate="no">

            <span className="manual-translation-en">How I <span className="text-secondary">Work</span></span>
            <span className="manual-translation-fr">Comment je <span className="text-secondary">Travaille</span></span>
          </h2>
        </AnimatedText>

        <motion.div
          custom={2.5}
          whileInView={"visible"}
          variants={appearVariant}
          initial={"fromL"}
          viewport={{once: true}}
          className={"w-full flex items-center justify-center"}
        >
          <div className={"space-y-4 text-justify text-lead text-white-80 max-w-[700px]"}>
            <article className="space-y-4 notranslate" translate="no">
              <p className="text-lg">
                <span className="manual-translation-en">
                  Most of my work starts with a <span className="font-semibold">problem</span>, not a tech stack.
                  I help you define the right solution, build it, and <span className="font-semibold text-secondary">launch it</span>.
                </span>
                <span className="manual-translation-fr">
                  La plupart de mes projets commencent par un <span className="font-semibold">problème</span>, pas par une stack technique.
                  Je vous aide à définir la bonne solution, à la construire et à la <span className="font-semibold text-secondary">lancer</span>.
                </span>
              </p>

              <p className="text-lg">
                <span className="manual-translation-en">
                  I work <span className="font-semibold">remotely</span> with tight communication: short iterations,
                  regular updates, and demos you can react to early, so nothing ships that isn&apos;t what you asked for.
                </span>
                <span className="manual-translation-fr">
                  Je travaille <span className="font-semibold">à distance</span> avec une communication resserrée : des itérations courtes,
                  des mises à jour régulières et des démos auxquelles vous réagissez tôt, pour que rien ne soit livré sans correspondre à ce que vous avez demandé.
                </span>
              </p>

              <p className="text-lg">
                <span className="manual-translation-en">
                  You get a <span className="font-semibold">clear estimate and timeline</span> up front, plus code that&apos;s
                  fast, maintainable, and easy to hand off to your own team.
                </span>
                <span className="manual-translation-fr">
                  Vous obtenez dès le départ une <span className="font-semibold">estimation et un calendrier clairs</span>, ainsi qu&apos;un code rapide,
                  maintenable et facile à transmettre à votre propre équipe.
                </span>
              </p>
            </article>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default AboutMe;
