"use client";
import SkillList, { Skill } from "@/components/sections/SkillList";
import AnimatedText from "@/components/ui/AnimatedText";
import useResizeObserver from "use-resize-observer";

export default function SkillsSection({ skills }: { skills: Skill[] }) {
  const experimentedSkills = skills.filter((skill) => skill.experimented);
  const usedSkills = skills.filter((skill) => !skill.experimented);

  const { ref, height = 120 } = useResizeObserver();

  return (
    <section ref={ref} id="skills" className="section relative w-full gap-20!">
      <div
        style={{
          backgroundImage: "url(/images/noise-texture.svg)",
          height: height! + 320,
        }}
        className="absolute  left-1/2 -top-60 -translate-x-1/2 w-screen  z-0 bg-no-repeat bg-cover bg-center "
      />
      <div className={"mb-20 pt-6 space-y-4 max-w-[650px] mx-auto"}>
        <AnimatedText
          whileInView="visible"
          initial="hidden"
          custom={1}
          className="text-subtitle font-bold w-full text-center"
        >
          <h2>My <span className={"text-secondary"}>Development Stack</span></h2>
        </AnimatedText>
        <AnimatedText
          whileInView="visible"
          initial="hidden"
          custom={2}
          className="text-lead w-full text-center "
        >
          <p>The core set of frameworks, languages, and tools I rely on for building full-stack applications, designing interfaces, and managing efficient workflows.</p>
        </AnimatedText>
      </div>
      <SkillList skills={skills} />

    </section>
  );
}
