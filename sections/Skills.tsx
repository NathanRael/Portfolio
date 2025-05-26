import SkillList, { Skill } from "@/components/sections/SkillList";
import AnimatedText from "@/components/ui/AnimatedText";

export default async function SkillsSection({ skills }: { skills: Skill[] }) {
  const experimentedSkills = skills.filter((skill) => skill.experimented);
  const usedSkills = skills.filter((skill) => !skill.experimented);

  return (
    <section id="skills" className="section !gap-20">
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
