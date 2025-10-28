import React from "react";
import { appearVariant } from "@/lib/animationVariants";
import SkillItem from "@/components/hero/SkillItem";
import Image from "next/image";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const HeroSkillPreview = ({ profileImageUrl, className, minimized = true }: {
  profileImageUrl: string,
  className: string,
  minimized?: boolean
}) => {
  return (
    <motion.div
      viewport={{ once: true }}
      custom={5}
      variants={appearVariant}
      initial={"hidden"}
      whileInView={"visible"}
      className={cn("rounded-full absolute flex  flex-col gap-6 items-center justify-center bg-transparent  border-background-200 size-[420px] mr-20", className, !minimized && "border")}
    >
      <ProfileImage profileImageUrl={profileImageUrl} className={"mb-4"} />
      <div className={cn(minimized && "flex    items-center justify-center gap-4")}>
        <SkillItem
          className={cn( !minimized && "absolute -left-6 top-1/2 -translate-y-1/2")}
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
          className={cn(!minimized && "absolute -top-6 left-1/2 -translate-x-1/2")}
          icon={
            <Image
              src={"/skills/figma-logo.svg"}
              width={24}
              height={24}
              alt={"figma"}
            />
          }
        />

        <div className={cn("flex gap-4", !minimized && "absolute -right-[82px] top-1/2 -translate-y-1/2 size-[164px]")}>
          <SkillItem
            className={cn("", !minimized && "absolute  -top-6 left-1/2  -translate-x-1/2")}
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
            className={cn("",!minimized && "absolute  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2")}
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
            className={cn(" ",!minimized && "absolute top-1/2 -left-6  -translate-y-1/2")}
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
            className={cn(" ",!minimized && "absolute -right-6 top-1/2 -translate-y-1/2")}
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
            className={cn(" ",!minimized && "absolute -bottom-6 left-1/2 -translate-x-1/2")}
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
          className={cn(" ",!minimized && "absolute -bottom-6 left-1/2 -translate-x-1/2")}
          icon={
            <Image
              src={"/skills/docker-logo.svg"}
              width={36}
              height={36}
              alt={"nest js"}
            />
          }
        />
      </div>
    </motion.div>
  );
};
export default HeroSkillPreview;

function ProfileImage({
                        className,
                        profileImageUrl
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
        className
      )}
      alt={"Image profile"}
    />
  );
}



