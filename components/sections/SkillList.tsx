import Image from "next/image";
import {Skill} from "@/app/api/skills/route";

export default function SkillList({skills} : {skills: Skill[]}) {
    return (
        <div className={'flex-row-center  !justify-evenly flex-wrap w-full  gap-20'}>
            {
                skills.map((skill) => (
                    <div key={skill.name} className={'flex-col-center gap-2'}>
                        <Image  width={40} height={40} src={`/skills/${skill.image}-logo.svg`} alt={'next js logo'}/>
                        <p className={'text-base text-white-80'}>{skill.name}</p>
                    </div>
                ))
            }
        </div>
    )
}