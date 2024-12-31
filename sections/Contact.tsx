"use client"
import {Button} from "@/components/ui/button";
import {AtSign, Github, Linkedin} from "lucide-react";
import {cn} from "@/lib/utils";
import Link from "next/link";
import {MY_EMAIL, MY_GITHUB_PROFILE, MY_LINKEDIN_PROFILE} from "@/constants";
import AnimatedText from "@/components/ui/AnimatedText";
import {motion} from "motion/react"
import {appearVariant} from "@/lib/animationVariants";

export default function ContactSection({className, withSubtitle = true} : {className?: string, withSubtitle?: boolean}) {
    return (
        <section className={cn("section", className)} >
            {
                withSubtitle && (
                    <div className={'text-center'}>
                        <AnimatedText whileInView={"visible"} initial={"hidden"} custom={1} className={'text-lead font-medium text-white-80 -rotate-6 pb-6'}>Wanna talk about something
                            ?</AnimatedText>
                        <AnimatedText whileInView={"visible"} initial={"hidden"} custom={4} className={'text-white-100 text-subtitle font-semibold  '}>Feel free to reach out</AnimatedText>
                    </div>
                )
            }
            <motion.div viewport={{ once : true}} variants={appearVariant}  whileInView={"visible"} initial={"hidden"} custom={4} className={'flex-row-center max-[460px]:flex-col gap-10'}>
                <Link  href={`mailto:${MY_EMAIL}`}>
                    <Button variant={'gradient'}>
                        <AtSign size={20}/>
                        ralaivoaovy.natanael@gmail.com
                    </Button>
                </Link>
                <div className={'space-x-4'}>
                    <Link target={'_blank'} href={MY_GITHUB_PROFILE}>
                        <Button variant={'tertiary'} className={'group'}  size={'icon'}>
                            <Github  size={20}/>
                        </Button>    
                    </Link>
                    <Link target={'_blank'} href={MY_LINKEDIN_PROFILE}>
                        <Button variant={'tertiary'}  size={'icon'}>
                            <Linkedin className={'text-secondary-100'} size={20}/>
                        </Button>                        
                    </Link>

                </div>
            </motion.div>
        </section>
    )
}