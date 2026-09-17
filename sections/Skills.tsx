import SkillList, { Skill } from "@/components/sections/SkillList";
import AnimatedText from "@/components/ui/AnimatedText";

export default function SkillsSection({ skills }: { skills: Skill[] }) {
  return (
    <section
      id="skills"
      aria-labelledby="stack-heading"
      className="section relative w-full gap-10!"
    >
      <div className="mx-auto max-w-[650px] space-y-2 text-center">
        <AnimatedText
          whileInView="visible"
          initial="hidden"
          custom={1}
          className="text-subtitle-2 w-full font-bold text-white-80"
        >
          <h2 id="stack-heading" className="notranslate" translate="no">
            <span className="manual-translation-en">
              The stack behind the work
            </span>
            <span className="manual-translation-fr">
              La stack derrière le travail
            </span>
          </h2>
        </AnimatedText>
        <AnimatedText
          whileInView="visible"
          initial="hidden"
          custom={2}
          className="text-small w-full text-white-80"
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
