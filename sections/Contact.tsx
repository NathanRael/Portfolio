"use client"
import { Button } from "@/components/ui/button";
import { AtSign, CopyCheck, Github, Linkedin } from "lucide-react";
import { cn, copyToClipboard } from "@/lib/utils";
import Link from "next/link";
import { MY_EMAIL, MY_GITHUB_PROFILE, MY_LINKEDIN_PROFILE } from "@/constants";
import AnimatedText from "@/components/ui/AnimatedText";
import { motion } from "motion/react"
import { appearVariant } from "@/lib/animationVariants";
import { useState } from "react";
import Image from "next/image";

export default function ContactSection({ className, withSubtitle = true }: { className?: string, withSubtitle?: boolean }) {
    const [copied, setCopied] = useState(false);
    return (
        <section className={cn("section relative w-full p-2 lg:p-4 rounded-3xl border-2 border-background-200 lg:w-[80vw] xl:w-[60vw] h-full lg:h-[420px] flex items-center flex-col justify-center mx-auto overflow-hidden", className)} >
            <Image
                src={"/images/noise-texture.svg"}
                className={
                    "absolute left-1/2 -z-10 top-1/2 -translate-y-1/2 -translate-x-1/2 w-full h-full bg-no-repeat object-cover  inset-0"
                }
                alt={"Hero Noise"}
                width={512}
                height={512}
            />

            {
                withSubtitle && (
                    <div className={'text-center'}>
                        <AnimatedText whileInView={"visible"} initial={"hidden"} custom={0} className={'text-lead font-medium text-white-80 -rotate-6 pb-6'}>Wanna talk about something
                            ?</AnimatedText>
                        <AnimatedText whileInView={"visible"} initial={"hidden"} custom={2} className={'text-white-100 text-title font-bold  '}>Feel Free To <span className={"text-secondary"}>Reach Out</span></AnimatedText>
                    </div>
                )
            }
            <motion.div viewport={{ once: true }} variants={appearVariant} whileInView={"visible"} initial={"hidden"} custom={3} className={'flex-row-center max-[460px]:flex-col gap-10'}>
                <Link onClick={() => {
                    copyToClipboard(MY_EMAIL)

                    setCopied(true)

                    setTimeout(() => {
                        setCopied(false)
                    }, 3000)
                }} href={`mailto:${MY_EMAIL}`}>
                    <Button variant={'gradient'}>
                        {copied ? <CopyCheck size={20} /> : <AtSign size={20} />}
                        {
                            copied ? 'Email copied to clipboard' : 'ralaivoaovy.natanael@gmail.com'
                        }
                    </Button>
                </Link>
                <div className={'space-x-4'}>
                    <Link target={'_blank'} href={MY_GITHUB_PROFILE}>
                        <Button variant={'secondary'} className={'group px-5 rounded-full'} size={'lg'} >
                            <Github size={20} />
                        </Button>
                    </Link>
                    <Link target={'_blank'} href={MY_LINKEDIN_PROFILE}>
                        <Button variant={'secondary'} size={'lg'} className={"px-5 rounded-full"}>
                            <Linkedin className={'text-secondary-100 '} size={20} />
                        </Button>
                    </Link>

                </div>
            </motion.div>
        </section>
    )
}