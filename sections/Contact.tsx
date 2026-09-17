"use client"
import { Button } from "@/components/ui/button";
import { AtSign, CopyCheck, Github, Linkedin } from "lucide-react";
import { cn, copyToClipboard } from "@/lib/utils";
import Link from "next/link";
import { MY_EMAIL, MY_GITHUB_PROFILE, MY_LINKEDIN_PROFILE, MY_PHONE_NUMBER } from "@/constants";
import AnimatedText from "@/components/ui/AnimatedText";
import { motion } from "motion/react"
import { appearVariant } from "@/lib/animationVariants";
import { useState } from "react";
import Image from "next/image";

const WhatsAppIcon = () => (
    <Image src="/logo/whatsapp.svg" alt="WhatsApp" width={20} height={20} />
);

export default function ContactSection({ className, withSubtitle = true }: { className?: string, withSubtitle?: boolean }) {
    const [copiedEmail, setCopiedEmail] = useState(false);
    const [copiedPhone, setCopiedPhone] = useState(false);
    const phoneDigits = MY_PHONE_NUMBER.replace(/\s+/g, "");

    return (
        <section aria-labelledby={withSubtitle ? "contact-heading" : undefined} className={cn("section relative w-full p-2 lg:p-4 border-2 border-background-200 lg:w-[80vw] xl:w-[60vw] h-full lg:h-[420px] flex items-center flex-col justify-center mx-auto overflow-hidden", className)} >
            <Image
                src={"/images/noise-texture.svg"}
                className={
                    "absolute left-1/2 -z-10 top-1/2 -translate-y-1/2 -translate-x-1/2 w-full h-full bg-no-repeat object-cover  inset-0"
                }
                alt=""
                aria-hidden="true"
                width={512}
                height={512}
            />

            {
                withSubtitle && (
                    <div className={'text-center'}>
                        <AnimatedText whileInView={"visible"} initial={"hidden"} custom={0} className={'text-lead font-medium text-white-80 -rotate-3 pb-6'}>
                            <p className="notranslate" translate="no">
                                <span className="manual-translation-en">Have a project, an idea, or a problem worth automating?</span>
                                <span className="manual-translation-fr">Un projet, une idée, ou un problème à automatiser ?</span>
                            </p>
                        </AnimatedText>
                        <AnimatedText whileInView={"visible"} initial={"hidden"} custom={2} className={'text-white-100 text-title font-bold  '}>
                            <h2 id="contact-heading" className="notranslate" translate="no">
                                <span className="manual-translation-en">
                                    Let&apos;s <span className={"text-secondary"}>Talk</span>
                                </span>
                                <span className="manual-translation-fr">
                                    Parlons de <span className={"text-secondary"}>votre projet</span>
                                </span>
                            </h2>
                        </AnimatedText>
                    </div>
                )
            }
            <motion.div viewport={{ once: true }} variants={appearVariant} whileInView={"visible"} initial={"hidden"} custom={3} className={'flex-row-center max-lg:flex-col gap-10'}>
                <Button asChild variant={'gradient'}>
                    <Link onClick={() => {
                        copyToClipboard(MY_EMAIL)

                        setCopiedEmail(true)

                        setTimeout(() => {
                            setCopiedEmail(false)
                        }, 3000)
                    }} href={`mailto:${MY_EMAIL}`}>
                        {copiedEmail ? <CopyCheck size={20} /> : <AtSign size={20} />}
                        {
                            copiedEmail ? 'Email copied to clipboard' : 'ralaivoavy.natanael@gmail.com'
                        }
                    </Link>
                </Button>
                <div className="h-10 w-0.5 bg-white max-lg:hidden" />
                <p
                    className="text-lead text-nowrap cursor-pointer hover:text-white-100 transition-colors"
                    onClick={() => {
                        copyToClipboard(MY_PHONE_NUMBER)
                        setCopiedPhone(true)
                        setTimeout(() => setCopiedPhone(false), 3000)
                    }}
                    title={copiedPhone ? "Copied!" : "Click to copy"}
                >
                    {MY_PHONE_NUMBER}
                </p>
                <div className="h-10 w-0.5 bg-white max-lg:hidden" />
                <div className={'flex gap-2 items-center justify-center'}>
                    <Button asChild variant={'secondary'} className={'group px-5'} size={'lg'} >
                        <Link target={'_blank'} rel="noopener noreferrer" href={MY_GITHUB_PROFILE} aria-label="Open Natanaël RALAIVOAVY GitHub profile">
                            <Github size={20} />
                        </Link>
                    </Button>
                    <Button asChild variant={'secondary'} size={'lg'} className={"px-5"}>
                        <Link target={'_blank'} rel="noopener noreferrer" href={MY_LINKEDIN_PROFILE} aria-label="Open Natanaël RALAIVOAVY LinkedIn profile">
                            <Linkedin className={'text-secondary-100 '} size={20} />
                        </Link>
                    </Button>
                    <Button asChild variant={'secondary'} size={'lg'} className={"px-5"}>
                        <Link target={'_blank'} rel="noopener noreferrer" href={`https://wa.me/${phoneDigits}`} aria-label="Chat with Natanaël on WhatsApp">
                            <WhatsAppIcon />
                        </Link>
                    </Button>
                </div>
            </motion.div>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 pt-6 text-small text-white-80 notranslate" translate="no">
                <span>
                    <span className="manual-translation-en">Reply within 24h</span>
                    <span className="manual-translation-fr">Réponse sous 24h</span>
                </span>
                <span className="text-accent">·</span>
                <span>
                    <span className="manual-translation-en">Clear estimate &amp; timeline</span>
                    <span className="manual-translation-fr">Estimation &amp; calendrier clairs</span>
                </span>
                <span className="text-accent">·</span>
                <span>
                    <span className="manual-translation-en">Remote  worldwide</span>
                    <span className="manual-translation-fr">À distance  dans le monde entier</span>
                </span>
            </div>
        </section>
    )
}
