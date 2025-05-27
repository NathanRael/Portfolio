"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { AtSign, ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import { appearVariant } from "@/lib/animationVariants";
import Image from "next/image";
import { ReactNode } from "react";

export default function HeroSection({
  resumeUrl,
  profileImageUrl,
}: {
  resumeUrl: string;
  profileImageUrl: string;
}) {
  return (
    <section
      className={
        "flex-row-center !justify-between w-full gap-10 max-[1250px]:flex-col   max-[1250px]:gap-40 max-md:mt-10 max-[1250px]:mt-32"
      }
    >
      <div className="flex flex-col items-start justify-start max-[1250px]:justify-center max-[1250px]:items-center gap-10">
        <div className={"flex-col-center !items-start "}>
          <motion.div
            custom={1}
            variants={appearVariant}
            initial={"hidden"}
            whileInView={"visible"}
            viewport={{ once: true }}
            className={"flex  w-full  !gap-6"}
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
              "text-title max-md:text-[32px] max-[1080px]:text-wrap text-nowrap w-full font-bold text-start max-[1250px]:text-center  "
            }
          >
            <p>
              Let&apos;s
              <span className={"text-secondary-100"}> design </span>
              <span className={"text-secondary-100"}>develop</span>
            </p>
            <p>
              and bring{" "}
              <span className={"light-bulb   relative ml-8 max-md:ml-6"}>
                <span className={"max-md:visible hidden"}>i</span>
                deas
              </span>{" "}
              to life
              <span className={"animate-blinkScale"}>_</span>
            </p>
          </motion.h1>
        </div>
        <motion.div
          viewport={{ once: true }}
          custom={5}
          variants={appearVariant}
          initial={"hidden"}
          whileInView={"visible"}
          className={"flex-row-center max-md:flex-wrap gap-6"}
        >
          <Link href={"#contact"}>
            <Button size={"lg"} variant={"gradient"}>
              <AtSign size={20} />
              Contact
            </Button>
          </Link>
          <Link target={"_blank"} href={resumeUrl}>
            <Button size={"lg"} variant={"tertiary"}>
              Download resume
              <ExternalLink size={20} />
            </Button>
          </Link>
        </motion.div>
      </div>
      <motion.div
        viewport={{ once: true }}
        custom={5}
        variants={appearVariant}
        initial={"hidden"}
        whileInView={"visible"}
        className="rounded-full max-[760px]:hidden relative flex items-center justify-center bg-transparent border border-neutral-dark-60 size-[512px] mr-20"
      >
        <ProfileImage profileImageUrl={profileImageUrl} className={"mb-4"} />
        <SkillItem
          className="absolute -left-6 top-1/2 -translate-y-1/2"
          icon={
            <Image
              src={"/skills/notion-logo.svg"}
              width={36}
              height={36}
              alt={"notion"}
            />
          }
        />
        <SkillItem
          className="absolute -top-6 left-1/2 -translate-x-1/2"
          icon={
            <Image
              src={"/skills/figma-logo.svg"}
              width={24}
              height={24}
              alt={"figma"}
            />
          }
        />

        <div className="absolute -right-[82px] top-1/2 -translate-y-1/2 size-[164px] ">
          <SkillItem
            className="absolute -top-6 left-1/2  -translate-x-1/2"
            icon={
              <Image
                src={"/skills/next-js-logo.svg"}
                width={36}
                height={36}
                alt={"next js"}
              />
            }
          />
          <SkillItem
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            icon={
              <Image
                src={"/skills/git-logo.svg"}
                width={36}
                height={36}
                alt={"git"}
              />
            }
          />
          <SkillItem
            className="absolute top-1/2 -left-6  -translate-y-1/2"
            icon={
              <Image
                src={"/skills/nest-js-logo.svg"}
                width={36}
                height={36}
                alt={"git"}
              />
            }
          />
          <SkillItem
            className="absolute -right-6 top-1/2 -translate-y-1/2"
            icon={
              <Image
                src={"/skills/fastapi-logo.svg"}
                width={36}
                height={36}
                alt={"fastapi"}
              />
            }
          />
          <SkillItem
            className="absolute -bottom-6 left-1/2 -translate-x-1/2"
            icon={
              <Image
                src={"/skills/react-logo.svg"}
                width={36}
                height={36}
                alt={"react"}
              />
            }
          />
        </div>
        <SkillItem
          className="absolute -bottom-6 left-1/2 -translate-x-1/2"
          icon={
            <Image
              src={"/skills/docker-logo.svg"}
              width={36}
              height={36}
              alt={"nest js"}
            />
          }
        />
      </motion.div>
      <Image
        className="absolute max-[1020px]:-top-[20%] max-[1020px]:-left-[50%] -top-[480px]  -left-[400px] -z-20"
        src={"/images/looper.svg"}
        alt={"looper"}
        width={1024}
        height={1024}
      />
    </section>
  );
}

function ProfileImage({
  className,
  profileImageUrl,
}: {
  className?: string;
  profileImageUrl: string;
}) {
  console.log(profileImageUrl);
  return (
    <Image
      src={profileImageUrl}
      width={216}
      height={216}
      className={cn(
        "flex items-center  justify-center text-subtitle object-cover overflow-hidden    rounded-full  bg-transparent",
        className,
      )}
      alt={"Image profile"}
    />
  );
}

const SkillItem = ({
  icon,
  className,
}: {
  icon: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "flex  border border-neutral-dark-60 items-center justify-center size-16 rounded-2xl bg-gradient-to-b from-neutral-dark-80 to-neutral-dark-60",
        className,
      )}
    >
      {icon}
    </div>
  );
};
