"use client"
import Link from "next/link";
import {cn} from "@/lib/utils";
import {Button} from "@/components/ui/button";
import {AtSign, ExternalLink} from "lucide-react";
import {motion} from "motion/react"
import {appearVariant} from "@/lib/animationVariants";
import Image from "next/image";


export default function HeroSection({resumeUrl, profileImageUrl} : {resumeUrl : string, profileImageUrl : string}) {
    
    return (
        <section className={'flex-col-center gap-10'}>
            <div className={'flex-col-center'}>
                <motion.div custom={1} variants={appearVariant} initial={"hidden"} whileInView={"visible"} viewport={{once : true}} className={'flex-col-center !gap-6'}>
                    <ProfileImage profileImageUrl={profileImageUrl} className={'mb-4'}/>
                    <p className={'text-lead text-center text-white-100'}>👋 Hi, <Link
                        className={'underline hover:text-primary-100 animate-pulse'} href={'/aboutMe'}> I&apos;m Natanael</Link> . UI/UX
                        designer and developer</p>
                </motion.div>
                <motion.h1 viewport={{once : true}} custom={4} variants={appearVariant} initial={'hidden'} whileInView={"visible"} className={'text-title max-md:text-[40px] max-[1080px]:text-wrap text-nowrap w-full font-bold text-center  '}>
                    Let&apos;s <span className={'text-secondary-100'}>design</span>, <span className={''}><span
                    className={'text-secondary-100'}>develop</span> and bring  <span
                    className={'light-bulb relative ml-6'}>deas</span> to life</span><span className={'animate-blinkScale'}>_</span>
                </motion.h1>
            </div>
            <motion.div viewport={{once : true}} custom={5} variants={appearVariant} initial={'hidden'} whileInView={"visible"} className={'flex-row-center gap-6'}>
                <Link href={'#contact'}>
                    <Button size={'lg'} variant={'gradient'}>
                        <AtSign size={20}/>
                        Contact
                    </Button>
                </Link>
                <Link target={'_blank'} href={resumeUrl}>
                    <Button size={'lg'} variant={'tertiary'}>
                        Download resume
                        <ExternalLink size={20}/>
                    </Button>
                </Link>
            </motion.div>
            <motion.div transition={{ delay : 0.3 * 9}} initial={{ height : '100vh', display : 'block' }} whileInView={{ height : 0, display : "none" }} viewport={{once : true}}  >
                
            </motion.div>
        </section>
    )
}


function ProfileImage({className, profileImageUrl}: { className?: string, profileImageUrl : string }) {
    console.log(profileImageUrl);
    return (
        <Image src={profileImageUrl} width={216} height={216} className={cn('flex items-center justify-center text-subtitle object-cover   bg-neutral-dark-80  rounded-full  border-2 border-neutral-dark-40', className)}  alt={"Image profile"}/>
    )
}