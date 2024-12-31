"use client"
import Link from "next/link";
import {cn} from "@/lib/utils";
import {Button} from "@/components/ui/button";
import {AtSign, ExternalLink} from "lucide-react";
import {client} from "@/sanity/lib/client";
import {RESUME_QUERY} from "@/sanity/lib/query";
import {useQuery} from "@tanstack/react-query";
import {motion} from "motion/react"
import {appearVariant} from "@/lib/animationVariants";


export default function HeroSection() {
    // const {url : resumeUrl} =  client.fetch(RESUME_QUERY);
    const {data, isLoading} = useQuery({
        queryFn: () => client.fetch(RESUME_QUERY),
        queryKey: ['resume'],
        staleTime: 1000 * 60 * 30,
    })
    

    return (
        <section className={'flex-col-center gap-10 pb-40'}>
            <div className={'flex-col-center'}>
                <motion.div custom={1} variants={appearVariant} initial={"hidden"} whileInView={"visible"} viewport={{once : true}} className={'flex-col-center'}>
                    <ProfileImage className={'mb-4'}/>
                    <p className={'text-lead text-center text-white-100'}>👋 Hi, <Link
                        className={'underline hover:text-primary-100'} href={'/aboutMe'}> I’m Natanael</Link> . UI/UX
                        designer and developer</p>
                </motion.div>
                <motion.h1 viewport={{once : true}} custom={4} variants={appearVariant} initial={'hidden'} whileInView={"visible"} className={'text-title max-md:text-[40px] max-[1080px]:text-wrap text-nowrap w-full font-bold text-center  '}>
                    Let’s <span className={'text-secondary-100'}>design</span>, <span className={''}><span
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
                <Link target={'_blank'} href={isLoading ? '' : data?.url}>
                    <Button size={'lg'} variant={'tertiary'}>
                        Download resume
                        <ExternalLink size={20}/>
                    </Button>
                </Link>
            </motion.div>
        </section>
    )
}


function ProfileImage({className}: { className?: string }) {
    return (
        <div
            className={cn(' flex items-center justify-center text-subtitle size-[104px] bg-neutral-dark-80 rounded-full', className)}>

        </div>
    )
}