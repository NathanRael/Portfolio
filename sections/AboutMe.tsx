"use client";
import AnimatedText from "@/components/ui/AnimatedText";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { appearVariant } from "@/lib/animationVariants";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";

const AboutMe = ({ className }: { className?: string }) => {
  const t = useTranslations("AboutMe");
  return (
    <div
      className={cn(
        "flex flex-row items-center max-[1020px]:flex-col justify-between w-full",
        className
      )}
    >
      <div className={cn("space-y-6")}>
        <AnimatedText
          whileInView={"visible"}
          initial={"hidden"}
          custom={1}
          className={"text-subtitle w-full text-start text-white-100"}
        >
          {t("greeting")}
        </AnimatedText>

        <motion.div
          custom={2.5}
          whileInView={"visible"}
          variants={appearVariant}
          initial={"fromL"}
          className={"w-full flex items-center justify-center"}
        >
          <div className={"space-y-4 text-lead text-white-80 max-w-[700px]"}>
            <div className="space-y-4">
              <div className="text-lg">
                {t.rich("student", {
                  bold: (chunks) => <span className="font-bold">{chunks}</span>,
                  semibold: (chunks) => (
                    <span className="font-semibold">{chunks}</span>
                  ),
                })}
              </div>

              <div className="text-lg">
                {t.rich("role", {
                  semisecondary: (chunks) => (
                    <span className="font-semibold text-secondary">
                      {chunks}
                    </span>
                  ),
                })}
              </div>

              <div className="text-lg">
                {t.rich("tools", {
                  secondary: (chunks) => (
                    <span className="text-secondary">{chunks}</span>
                  ),
                })}
              </div>

              {/*              <div className="text-lg">
                🎯 My goal is to blend clean design with AI-powered systems that make technology
                more accessible, efficient, and enjoyable for everyone.
              </div>*/}
            </div>
          </div>
        </motion.div>
      </div>

      <Image
        className={"rounded-full "}
        src={"/images/profile-transparent.png"}
        alt={"profile"}
        width={256}
        height={256}
      />
    </div>
  );
};
export default AboutMe;
