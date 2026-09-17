import SkillList, { Skill } from "@/components/sections/SkillList";
import AnimatedText from "@/components/ui/AnimatedText";

export default function SkillsSection({ skills }: { skills: Skill[] }) {
  return (
    <section
      id="skills"
      aria-labelledby="stack-heading"
      className="section relative w-full gap-24! p-18"
    >
      <div className="pointer-events-none absolute inset-0 bg-[url('/images/white-noise.svg')] bg-repeat opacity-15" />
      <div className="mx-auto max-w-[650px] space-y-2 text-center">
        <AnimatedText
          whileInView="visible"
          initial="hidden"
          custom={1}
          className="text-subtitle-2 w-full font-bold text-white-80"
        >
          <AnimatedText
            whileInView="visible"
            initial="hidden"
            custom={1}
            className="text-subtitle font-bold w-full"
          >
            <h2 id="certifications-heading" className="notranslate" translate="no">
              <span className="manual-translation-en"><span className={"text-secondary"}>The Stack</span> Behind The Work</span>
              <span className="manual-translation-fr"><span className={"text-secondary"}>La Stack</span> Derrière Le Travail</span>
            </h2>
          </AnimatedText>
        </AnimatedText>
        <AnimatedText
          whileInView="visible"
          initial="hidden"
          custom={2}
          className="text-lead w-full text-white-80"
        >
          <p className="notranslate" translate="no">
            <span className="manual-translation-en">
              The technologies I use daily to deliver.
            </span>
            <span className="manual-translation-fr">
              Les technologies que j&apos;utilise au quotidien pour livrer.
            </span>
          </p>
        </AnimatedText>
      </div>
      <SkillList skills={skills} />
    </section>
  );
}
