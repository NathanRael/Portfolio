"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AtSign, ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import { appearVariant } from "@/lib/animationVariants";
import { InteractiveGridPattern } from "@/components/ui/shadcn-io/interactive-grid-pattern";
import { Particles } from "@/components/ui/shadcn-io/particles";
import HeroSkillPreview from "@/components/hero/HeroSkillPreview";
import { useWindowSize } from "usehooks-ts";
import HandWrittenCircle from "@/components/shared/HandWrittenCircle";

export default function HeroSection({
                                      resumeUrl,
                                      profileImageUrl
                                    }: {
  resumeUrl: string;
  profileImageUrl: string;
}) {
  return (
    <section
      className={
        "flex justify-between! py-10 pb-80 lg:pb-20  w-full gap-10 h-[90vh] lg:h-[60vh]"
      }
    >
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color="#ffffff"
        refresh
      />
      <div className={"absolute rotate-6  -left-6 -bottom-6 w-[106vw] h-[350px]  overflow-hidden "}>
        <InteractiveGridPattern
          className="absolute inset-0"
          squares={[50, 25]}
          squaresClassName="hover:fill-primary  transition-colors duration-150"
        />
      </div>
      <div
        className="flex  flex-col items-start justify-start  gap-10">
        <div className={"flex flex-col items-center justify-center "}>
          <motion.div
            custom={1}
            variants={appearVariant}
            initial={"hidden"}
            whileInView={"visible"}
            viewport={{ once: true }}
            className={"flex  w-full  gap-6!"}
          >

            <p
              className={
                "text-lead w-full text-start max-[1250px]:text-center  text-white-100"
              }
            >
              👋 Hi, I&apos;m Natanael . UI/UX designer and developer
            </p>
          </motion.div>
          <motion.h1
            viewport={{ once: true }}
            custom={4}
            variants={appearVariant}
            initial={"hidden"}
            whileInView={"visible"}
            className={
              "lg:text-nowrap z-10 text-[32px] md:text-[56px] lg:text-[84px]  text-center lg:text-start w-full font-bold "
            }
          >
            <p>
              Let&apos;s

              <span className="relative z-10 font-bold  px-4 py-2">Design</span>
              <span className={"text-white bg-primary/10"}>Develop</span>
            </p>
            <div>
              and bring

              <div className="relative inline-block">
                {/*Desktop*/}
                <HandWrittenCircle width={"230"} height={"230"} className={"absolute max-lg:hidden -top-10 right-0"}
                                   color={"var(--secondary)"} />
                {/*Mobile*/}
                <HandWrittenCircle width={"96"} height={"96"} className={"absolute lg:hidden -top-6 right-0"}
                                   color={"var(--secondary)"} />
                <span className="relative z-10 font-bold  px-4 py-2">Idea</span>
              </div>
              <span className={""}>to Life</span>
              <span className={"animate-blink-scale"}>_</span>
            </div>
          </motion.h1>

        </div>
        <motion.div
          viewport={{ once: true }}
          custom={5}
          variants={appearVariant}
          initial={"hidden"}
          whileInView={"visible"}
          className={"flex w-full flex-wrap items-center justify-center  lg:justify-start gap-4 "}
        >
          <Link href={"#contact"}>
            <Button size={"lg"} variant={"default"}>
              <AtSign size={20} />
              Contact
            </Button>
          </Link>
          <Link target={"_blank"} href={resumeUrl}>
            <Button size={"lg"} variant={"secondary"}>
              Download resume
              <ExternalLink size={20} />
            </Button>
          </Link>
        </motion.div>
      </div>
      {/*Desktop */}
      <HeroSkillPreview
        minimized={false}
        className={"left-1/2 max-lg:hidden visible -translate-x-1/2 -bottom-40  lg:left-auto lg:bottom-auto lg:-right-32 lg:top-60 "}
        profileImageUrl={profileImageUrl} />
      {/*Mobile */}
      <HeroSkillPreview
        minimized={true}
        className={"left-1/2 visible lg:hidden -translate-x-1/2 -bottom-40  lg:left-auto lg:bottom-auto lg:-right-32 lg:top-60 "}
        profileImageUrl={profileImageUrl} />
    </section>
  );
}

