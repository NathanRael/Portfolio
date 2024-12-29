import {Button} from "@/components/ui/button";
import {AtSign, Github, Linkedin} from "lucide-react";

export default function ContactSection() {
    return (
        <section className={"section"} id="contact">
            <div className={'text-center'}>
                <h4 className={'text-lead font-medium text-white-80 -rotate-6 pb-6'}>Wanna talk about something ?</h4>
                <h2 className={'text-white-100 text-subtitle font-semibold  pb-10'}>Feel free to reach out</h2>
            </div>
            <div className={'flex-row-center gap-10'}>
                <Button variant={'gradient'}>
                    <AtSign size={20}/>
                    ralaivoaovy.natanael@gmail.com
                </Button>
                <Button variant={'ghost'} className={'group'}  size={'icon'}>
                    <Github className={'text-white-100 group-hover:text-black-100'} size={20}/>
                </Button>                
                <Button variant={'ghost'}  size={'icon'}>
                    <Linkedin className={'text-secondary-100'} size={20}/>
                </Button>
            </div>
        </section>
    )
}