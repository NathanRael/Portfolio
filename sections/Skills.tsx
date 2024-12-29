import SkillList from "@/components/sections/SkillList";
import {BASE_URL} from "@/constants";

export  default async function SkillsSection(){
    const data = await fetch(`${BASE_URL}/api/skills`)
    const skills = await data.json();
    
    return (
        <section id={"skills"} className="section !gap-20">
            <div className={"flex flex-col items-center justify-start gap-10"}>
                <h2 className={'text-white-100 text-subtitle font-semibold -rotate-6 pb-10'}>I've been <span
                    className={'text-secondary-100'}>using</span></h2>
                <SkillList skills={skills}/>
            </div>            
            <div className={"flex flex-col items-center justify-start gap-10"}>
                <h2 className={'text-white-100 text-subtitle font-semibold '}>and <span
                    className={'text-yellow-300'}>exprimenting</span></h2>
                <SkillList skills={skills.slice(0,3)}/>
            </div>
        </section>
    )
}