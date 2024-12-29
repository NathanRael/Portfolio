import {Button} from "@/components/ui/button";
import {AtSign, Github, Linkedin} from "lucide-react";

export default function ContactSection() {
    return (
        <section className={"section"} id="contact">
            <div className={'text-center'}>
                <h4 className={'text-lead font-medium text-white-80 -rotate-6 pb-6'}>Wanna talk about something ?</h4>
                <h2 className={'text-white-100 text-subtitle font-semibold  '}>Feel free to reach out</h2>
            </div>
            <div className={'flex-row-center max-[460px]:flex-col gap-10'}>
                <Button variant={'gradient'}>
                    <AtSign size={20}/>
                    ralaivoaovy.natanael@gmail.com
                </Button>
                <div className={'space-x-4'}>
                    <Button variant={'tertiary'} className={'group'}  size={'icon'}>
                        <Github  size={20}/>
                    </Button>
                    <Button variant={'tertiary'}  size={'icon'}>
                        <Linkedin className={'text-secondary-100'} size={20}/>
                    </Button>
                </div>
            </div>
        </section>
    )
}