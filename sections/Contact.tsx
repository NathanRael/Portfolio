"use client";
import { Button } from "@/components/ui/button";
import { AtSign, CopyCheck, Github, Linkedin } from "lucide-react";
import { cn, copyToClipboard } from "@/lib/utils";
import Link from "next/link";
import { MY_EMAIL, MY_GITHUB_PROFILE, MY_LINKEDIN_PROFILE } from "@/constants";
import AnimatedText from "@/components/ui/AnimatedText";
import { motion } from "motion/react";
import { appearVariant } from "@/lib/animationVariants";
import { useState } from "react";
import { useTranslations } from "next-intl";

export default function ContactSection({
  className,
  withSubtitle = true,
}: {
  className?: string;
  withSubtitle?: boolean;
}) {
  const [copied, setCopied] = useState(false);
  const t = useTranslations("Contact");
  return (
    <section className={cn("section", className)}>
      {withSubtitle && (
        <div className={"text-center"}>
          <AnimatedText
            whileInView={"visible"}
            initial={"hidden"}
            custom={1}
            className={"text-lead font-medium text-white-80 -rotate-6 pb-6"}
          >
            {t("subtitle")}
          </AnimatedText>
          <AnimatedText
            whileInView={"visible"}
            initial={"hidden"}
            custom={4}
            className={"text-white-100 text-title font-bold  "}
          >
            {t.rich("title", {
              secondary: (chunks) => (
                <span className={"text-secondary"}>{chunks}</span>
              ),
            })}
          </AnimatedText>
        </div>
      )}
      <motion.div
        viewport={{ once: true }}
        variants={appearVariant}
        whileInView={"visible"}
        initial={"hidden"}
        custom={3}
        className={"flex-row-center max-[460px]:flex-col gap-10"}
      >
        <Link
          onClick={() => {
            copyToClipboard(MY_EMAIL);

            setCopied(true);

            setTimeout(() => {
              setCopied(false);
            }, 3000);
          }}
          href={`mailto:${MY_EMAIL}`}
        >
          <Button variant={"gradient"}>
            {copied ? <CopyCheck size={20} /> : <AtSign size={20} />}
            {copied ? t("emailCopied") : "ralaivoaovy.natanael@gmail.com"}
          </Button>
        </Link>
        <div className={"space-x-4"}>
          <Link target={"_blank"} href={MY_GITHUB_PROFILE}>
            <Button
              variant={"secondary"}
              className={"group px-4 rounded-full"}
              size={"lg"}
            >
              <Github size={20} />
            </Button>
          </Link>
          <Link target={"_blank"} href={MY_LINKEDIN_PROFILE}>
            <Button
              variant={"secondary"}
              size={"lg"}
              className={"px-4 rounded-full"}
            >
              <Linkedin className={"text-secondary-100"} size={20} />
            </Button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
