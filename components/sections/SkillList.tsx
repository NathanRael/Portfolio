"use client"
import Image from "next/image";
import {motion} from "motion/react"
import {rotateVariant} from "@/lib/animationVariants";

export interface Skill {
    _id: string;
    name: string;
    image: string;
    experimented: boolean;
    category: 'framework' | 'language' | 'database' | 'tool'
}

export default function SkillList({skills}: { skills: Skill[] }) {

    const categories = ['framework', 'language', 'database', 'tool']
    
    return (
        <div className={'flex flex-col gap-y-20'}>
            {
                categories?.map(category => (
                    <div key={category} className={'flex-row-center flex-wrap w-full  gap-20'}>
                        {
                            skills.filter(skill => skill?.category?.toLowerCase() === category.toLowerCase()).map((skill, index) => (
                                <Skill index={index} key={skill.name} skill={skill}/>
                            ))
                        }
                    </div>

                ))
            }
        </div>
    )
}

function Skill({skill, index}: { skill: Skill, index : number }) {
    return (
        <motion.div variants={rotateVariant} initial={true} whileHover={{rotate : 64}} key={skill.name} className={'flex-col-center gap-2 '}>
           <motion.div custom={index} variants={rotateVariant}  initial={'initial'} whileInView={"rotate"}>
               <Image width={40} height={40} src={skill.image} alt={'next js logo'}/>
           </motion.div>
            <p className={'text-base text-white-80'}>{skill.name}</p>
        </motion.div>
    )
}
