"use client";
import SkillList, { Skill } from "@/components/sections/SkillList";
import AnimatedText from "@/components/ui/AnimatedText";
import useResizeObserver from "use-resize-observer";

export default function SkillsSection({ skills }: { skills: Skill[] }) {
  const experimentedSkills = skills.filter((skill) => skill.experimented);
  const usedSkills = skills.filter((skill) => !skill.experimented);

  const { ref, height } = useResizeObserver();

  return (
    <section ref={ref} id="skills" className="section relative w-full gap-20!">
      <div
        style={{
          backgroundImage: "url(/images/noise-texture.svg)",
          height: height! + 320,
        }}
        className="absolute  left-1/2 -top-60 -translate-x-1/2 w-screen  z-0 bg-no-repeat bg-cover bg-center "
      />
      <div className="flex flex-col items-center justify-start gap-10">
        <AnimatedText
          whileInView="visible"
          initial="hidden"
          custom={1}
          className="text-white-100 text-subtitle font-semibold -rotate-6 pb-10"
        >
          I&apos;ve been{" "}
          <span className="text-secondary-100">working with</span>
        </AnimatedText>
        <SkillList skills={usedSkills} />
      </div>

      <div className="flex flex-col items-center justify-start gap-10">
        <AnimatedText
          whileInView="visible"
          initial="hidden"
          custom={2}
          className="text-white-100 text-subtitle font-semibold"
        >
          and <span className="text-yellow-300">experimenting with</span>
        </AnimatedText>
        <SkillList skills={experimentedSkills} />
      </div>
    </section>
  );
}
