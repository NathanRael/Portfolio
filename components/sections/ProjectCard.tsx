"use client"
import Image from "next/image"
import Link from "next/link";
import {LinkIcon} from "lucide-react";
import {cn} from "@/lib/utils";
import {motion} from 'framer-motion';


export interface Project {
    _id: string;
    id: string;
    name: string;
    description: string;
    image: string;
    links: string[];
    projectType: {
        name: 'application' | 'mockup';
        display: string;
    };
    techStacks: string[];
    date: string;
    archived: string;
    isUnderDevelopment?: boolean;
}

export type ProjectCardType = Project;

export default function ProjectCard({
                                        description,
                                        image,
                                        links,
                                        name,
                                        projectType,
                                        techStacks,
                                        className,
                                        date,
    isUnderDevelopment,
                                    }: ProjectCardType & { className?: string }) {


    return (
        <motion.div
            whileHover={{scale: 1.04}}
            transition={{type: 'spring', stiffness: 300, damping: 20}}
            className={cn('flex flex-col relative items-start justify-start gap-6 w-[387px]', className)}>
            {
                isUnderDevelopment && (
                    <div className={"px-2 absolute -top-4 select-none -right-2 rotate-3 py-1 rounded-md text-[14px] bg-primary-100"}>Under development</div>
                )
            }
            <Image width={387} height={209} className={'object-cover overflow-hidden border border-white-60 rounded-xl'}
                   src={image} alt={name}/>
            <div className={'space-y-2 w-full'}>
                <div className={'flex flex-row items-center justify-between'}>
                    <h3 className={'text-white-100 text-lead font-medium'}>{name}</h3>
                    <div className={'flex-row-center gap-2'}>
                        {
                            techStacks?.map(techStack => (
                                <Image key={techStack} width={20} height={20} src={techStack}
                                       alt={`${techStack} logo`}/>
                            ))
                        }
                    </div>
                </div>
                <p className={'text-white-80 font-normal text-base'}>{description}</p>
            </div>
            {
                links  && <div className={'inline-flex flex-wrap gap-2'}>
                    {
                        links?.map(link => (
                            <div key={link}
                                 className={'flex  gap-1 text-nowrap bg-neutral-dark-80 hover:underline hover:bg-neutral-dark-60 text-small px-2 py-1 rounded-[12px]'}>
                                <LinkIcon size={16}/>
                                <Link target={'_blank'} href={link}>{link.slice(0, 50)}</Link>
                            </div>
                        ))
                    }
                </div>
            }

            <div className={"flex-row-center w-full !justify-between"}>
                <div className={'inline-flex items-center gap-2'}>
                    <div className={'size-2 rounded-full bg-secondary-100'}/>
                    <p className={'text-small text-white-80'}>{projectType?.display}</p>
                </div>
                <p className={'text-white-80 text-small'}>{date?.split("-")[0]}</p>
            </div>
        </motion.div>
    )
}