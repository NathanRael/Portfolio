import Link from "next/link";
import {cn} from "@/lib/utils";
import {Button} from "@/components/ui/button";
import {AtSign, ExternalLink} from "lucide-react";

export default function HeroSection() {
    return (
        <section className={'flex-col-center gap-10'}>
            <div className={'flex-col-center'}>
                <ProfileImage className={'mb-4'}/>
                <p className={'text-lead text-white-100'}>👋 Hi, <Link className={'underline'} href={'/aboutMe'}> I’m Natanael</Link> . UI/UX designer and developer</p>
                <h1 className={'text-title font-bold text-center '}>Let’s design, develop and bring ideas to life</h1>
            </div>
            <div className={'flex-row-center gap-6'}>
                <Button size={'lg'}  variant={'gradient'}>
                    <AtSign size={20}/>
                    Contact
                </Button>
                <Button size={'lg'} variant={'tertiary'}>
                    See resume
                    <ExternalLink size={20}/>
                </Button>
            </div>
        </section>
    )
}


function ProfileImage({className} : {className?: string}){
    return (
        <div className={cn('size-[104px] bg-neutral-dark-80 rounded-full', className)}>
            
        </div>
    )
}