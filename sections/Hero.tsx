"use client";
import HeroSkillPreview from "@/components/hero/HeroSkillPreview";
import { Button } from "@/components/ui/button";
import { appearVariant } from "@/lib/animationVariants";
import { cn } from "@/lib/utils";
import { AtSign, ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection({
  resumeUrl,
  profileImageUrl,
}: {
  resumeUrl: string;
  profileImageUrl: string;
}) {
  return (
    <section
      className={"flex max-md:relative flex-col items-center justify-start gap-10  h-screen"}
    >
      <div
        className="flex h-[88vh] lg:h-fit w-[94%] md:w-[85%] lg:max-w-[80%] xl:w-fit  p-4 md:p-10 lg:p-20 lg:px-40 relative border-2 border-background-200  overflow-hidden mt-20 rounded-3xl  flex-col items-center justify-center gap-4 md:gap-12 ">
        <Image
          src={"/images/noise-texture.svg"}
          className={
            "absolute left-1/2 -z-10 top-1/2 -translate-y-1/2 -translate-x-1/2 w-full h-full bg-no-repeat object-cover  inset-0"
          }
          alt={"Hero Noise"}
          width={512}
          height={512}
        />
        <Image
          src={profileImageUrl}
          width={216}
          height={216}
          className={cn(
            "flex items-center  justify-center text-subtitle size-48 object-cover overflow-hidden    rounded-full  bg-transparent"
          )}
          alt={"Image profile"}
        />
        <div className="space-y-4 z-30 max-w-[660px] text-center">
          <h1 className="text-subtitle-2 max-sm:max-w-[380px] max-md:max-w-[460px] sm:text-subtitle md:text-[3.5rem] font-bold leading-tight">
            Turning Your Ideas Into Results
          </h1>
          <p className="text-accent text-lead md:text-[24px] font-semibold tracking-[12%]">
            I Craft Interfaces That Deliver
          </p>
        </div>
        <motion.div
          className={
            "flex w-full md:w-fit mx-auto flex-wrap items-center justify-center  lg:justify-start gap-8 mt-8"
          }
        >
          <Link href={"#contact"}>
            <Button size={"lg"} variant={"default"} className="w-[232px]">
              <AtSign size={20} />
              Get in touch
            </Button>
          </Link>
          <Link target={"_blank"} href={resumeUrl}>
            <Button size={"lg"} variant={"secondary"} className="w-[232px]">
              Download resume
              <ExternalLink size={20} />
            </Button>
          </Link>
        </motion.div>
        <HeroSkillPreview className="block md:hidden" />
      </div>
      <HeroSkillPreview className="hidden md:block" />
    </section>
  );
}
