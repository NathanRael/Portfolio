import Link from "next/link";
import {cn} from "@/lib/utils";
import {Button} from "@/components/ui/button";
import {AtSign, ExternalLink} from "lucide-react";

export default function HeroSection() {
    return (
        <section className={'flex-col-center gap-10'}>
            <div className={'flex-col-center'}>
                <ProfileImage className={'mb-4'}/>
                <p className={'text-lead text-center text-white-100'}>👋 Hi, <Link className={'underline hover:text-primary-100'} href={'/aboutMe'}> I’m Natanael</Link> . UI/UX designer and developer</p>
                <h1 className={'text-title max-md:text-[40px] max-[1080px]:text-wrap text-nowrap w-full font-bold text-center  '}>
                    Let’s <span className={'text-secondary-100'}>design</span>, <span className={''}><span className={'text-secondary-100'}>develop</span> and bring  <span className={'light-bulb relative ml-6'}>deas</span> to life</span>
                    </h1>
            </div>
            <div className={'flex-row-center gap-6'}>
                <Link href={'#contact'}>
                    <Button size={'lg'}  variant={'gradient'}>
                        <AtSign size={20}/>
                        Contact
                    </Button>
                </Link>
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
        <div className={cn(' flex items-center justify-center text-subtitle size-[104px] bg-neutral-dark-80 rounded-full', className)}>
            
        </div>
    )
}