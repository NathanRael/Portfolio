import {Button} from "@/components/ui/button";
import {ChevronLeft} from "lucide-react";
import ContactSection from "@/sections/Contact";
import Link from "next/link";
import AnimatedText from "@/components/ui/AnimatedText";

export default function AboutMePage() {
    return (
        <section className={'section text-white-100 pt-20 !gap-10 w-fit mx-auto '}>

            <div className={'space-y-6'}>
                <AnimatedText whileInView={"visible"} initial={"hidden"} custom={1} className={'text-subtitle w-full text-start text-white-100'}>👋 Hi again, I&apos;m Natanaël</AnimatedText>
                <div className={'space-y-4 text-lead text-white-80 max-w-[700px] '}>
                    <div className="space-y-4">
                        <div className="text-lg">
                            📚 I&apos;m currently a <span className="font-bold">Computer Science student</span> at
                            <span
                                className="font-semibold"> EMIT (Ecole de Management et d&apo;Innovation Technologique)</span>,
                            part of the University of Fianarantsoa in Madagascar.
                        </div>

                        <div className="text-lg">
                            💻 I’m passionate about creating <span
                            className="text-primary-100 font-semibold">amazing</span> and
                            <span className="text-primary-100 font-semibold"> visually appealing websites</span>.
                            My primary tools include <span className="text-primary-100">Next.js</span>,
                            <span className="text-primary-100"> React</span>,
                            <span className="text-primary-100"> Fastapi</span>, <span
                            className="text-primary-100">JavaScript</span>,
                            <span className="text-primary-100">TypeScript</span>, <span
                            className="text-primary-100">Python</span>,
                            and <span className="text-primary-100">Java</span>.
                        </div>

                        <div className="text-lg">
                            🎯 My goal is to continuously enhance my skills to stay at the forefront of the tech industry
                            and
                            deliver exceptional results.
                        </div>
                    </div>
                </div>
            </div>
            <ContactSection withSubtitle={false}/>
            <Link href={'/'}>
                <Button  className={'absolute bottom-20 left-20'} variant={'tertiary'}>
                    <ChevronLeft/>
                    Back to portfolio
                </Button>
            </Link>
        </section>
    )
}

