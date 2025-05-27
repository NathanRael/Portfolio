"use client";
import AnimatedText from "@/components/ui/AnimatedText";
import { cn } from "@/lib/utils";
import Image from "next/image";

const AboutMe = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "flex flex-row items-center max-[1020px]:flex-col justify-between w-full",
        className,
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
        <div className={"space-y-4 text-lead text-white-80 max-w-[700px] "}>
          <div className="space-y-4">
            <div className="text-lg">
              📚 A <span className="font-bold">Computer Science student</span>{" "}
              at
              <span className="font-semibold">
                {" "}
                EMIT (Ecole de Management et d&apos;Innovation Technologique)
              </span>
              , part of the University of Fianarantsoa in Madagascar.
            </div>

            <div className="text-lg">
              💻 I’m passionate about creating{" "}
              <span className="text-primary-100 font-semibold">amazing</span>{" "}
              and
              <span className="text-primary-100 font-semibold">
                {" "}
                visually appealing websites
              </span>
              . My primary tools include{" "}
              <span className="text-primary-100">Next.js</span>,
              <span className="text-primary-100"> React</span>,
              <span className="text-primary-100"> Fastapi</span>,{" "}
              <span className="text-primary-100">JavaScript</span>,
              <span className="text-primary-100">TypeScript</span>,{" "}
              <span className="text-primary-100">Python</span>, and{" "}
              <span className="text-primary-100">Java</span>.
            </div>

            <div className="text-lg">
              🎯 My goal is to continuously enhance my skills to stay at the
              forefront of the tech industry and deliver exceptional results.
            </div>
          </div>
        </div>
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
