﻿import {Project} from "@/app/api/projects/route";
import Image from "next/image"
import Link from "next/link";
import {LinkIcon} from "lucide-react";

export default function ProjectCard({description, image, links, name, type, techStacks} : Project){
    return (
        <div className={'flex flex-col items-start justify-start gap-6 w-[387px]'}>
            <Image width={387} height={209} className={'object-cover rounded-[12px]'} src={image} alt={name}/>
            <div className={'space-y-2 w-full'}>
                <div className={'flex flex-row items-center justify-between'}>
                    <h3 className={'text-white-100 text-lead font-medium'}>{name}</h3>
                    <p>Tech stack</p>
                </div>
                <p className={'text-white-80 font-normal text-base'}>{description}</p>
            </div>
            <div className={'inline-flex flex-wrap gap-2'}>
                {
                    links?.map(link => (
                        <div key={link} className={'flex  gap-1 text-nowrap bg-neutral-dark-80 hover:underline hover:bg-neutral-dark-60 text-small px-2 py-1 rounded-[12px]'}>
                            <LinkIcon size={16} />
                            <Link href={link}>{link.slice(0,30)}</Link>
                        </div>
                    ))
                }
            </div>
            <div className={'inline-flex items-center gap-2'}>
                <div className={'size-2 rounded-full bg-secondary-100'}/>
                <p className={'text-small text-white-80'}>{type.display}</p>
            </div>
        </div>
    )
}