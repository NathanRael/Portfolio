"use client";
import AnimatedText from "@/components/ui/AnimatedText";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { appearVariant } from "@/lib/animationVariants";
import { motion } from "motion/react";

const AboutMe = ({ className }: { className?: string }) => {
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
          I&apos;m Natanael
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
                📚 A <span className="font-bold">Computer Science student</span> at
                <span className="font-semibold">
            {" "}
                  EMIT (Ecole de Management et d&apos;Innovation Technologique)
          </span>
                , part of the University of Fianarantsoa in Madagascar.
              </div>

              <div className="text-lg">
                💻 I’m a <span className="font-semibold text-secondary">Frontend Developer</span> and{" "}
                <span className="font-semibold text-secondary">AI Integrator</span> who loves building{" "}
                <span className="font-semibold text-secondary">intuitive</span> and{" "}
                <span className="font-semibold text-secondary">visually engaging</span>{" "}
                digital experiences. I enjoy combining design precision with smart, AI-driven functionality.
              </div>

              <div className="text-lg">
                ⚙️ My main tools include{" "}
                <span className="text-secondary">Next.js</span> and{" "}
                <span className="text-secondary">React</span> for frontend development,{" "}
                <span className="text-secondary">NestJS</span> and{" "}
                <span className="text-secondary">FastAPI</span> for backend and AI integration,{" "}
                along with some{" "}
                <span className="text-secondary">Flutter</span> for mobile apps.{" "}
                I usually work with{" "}
                <span className="text-secondary">TypeScript</span> and{" "}
                <span className="text-secondary">Python</span> as my core languages.
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
