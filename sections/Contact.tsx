import {Button} from "@/components/ui/button";
import {AtSign, Github, Linkedin} from "lucide-react";
import {cn} from "@/lib/utils";
import Link from "next/link";
import {MY_EMAIL, MY_GITHUB_PROFILE, MY_LINKEDIN_PROFILE} from "@/constants";

export default function ContactSection({className, withSubtitle = true} : {className?: string, withSubtitle?: boolean}) {
    return (
        <section className={cn("section", className)} id="contact">
            {
                withSubtitle && (
                    <div className={'text-center'}>
                        <h4 className={'text-lead font-medium text-white-80 -rotate-6 pb-6'}>Wanna talk about something
                            ?</h4>
                        <h2 className={'text-white-100 text-subtitle font-semibold  '}>Feel free to reach out</h2>
                    </div>
                )
            }
            <div className={'flex-row-center max-[460px]:flex-col gap-10'}>
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
            </div>
        </section>
    )
}