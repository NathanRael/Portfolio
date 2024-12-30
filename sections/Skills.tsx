import SkillList, {Skill} from "@/components/sections/SkillList";
import {sanityFetch} from "@/sanity/lib/live";
import {SKILL_QUERY} from "@/sanity/lib/query";


export  default async function SkillsSection(){
    const {data: skills} = await sanityFetch({
        query : SKILL_QUERY
    })
    
    const experimentedSkills = (skills as Skill[]).filter(skill => skill.experimented)
    const usedSkills = (skills as Skill[]).filter(skill => !skill.experimented)
    
    
    return (
        <section id={"skills"} className="section !gap-20">
            <div className={"flex flex-col items-center justify-start gap-10"}>
                <h2 className={'text-white-100 text-subtitle font-semibold -rotate-6 pb-10'}>I've been <span
                    className={'text-secondary-100'}>using</span></h2>
                    <SkillList skills={usedSkills}/>
            </div>            
            <div className={"flex flex-col items-center justify-start gap-10"}>
                <h2 className={'text-white-100 text-subtitle font-semibold '}>and <span
                    className={'text-yellow-300'}>exprimenting</span></h2>
                <SkillList skills={experimentedSkills}/>
            </div>
        </section>
    )
}