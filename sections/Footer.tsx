"use client"
import Link from "next/link";
import {MY_GITHUB_PROFILE} from "@/constants";
import {ArrowUp} from "lucide-react";
import {buttonVariants} from "@/components/ui/button";
import {useEffect, useState} from "react";
import {AnimatePresence, motion} from "motion/react";
import {cn} from "@/lib/utils";

export default function  Footer() {
    const [showUpButton, setShowUpButton] = useState(false);

    useEffect(() => {
        const scrollId = () => {
            setShowUpButton(window.scrollY >= 1300);
        }
        window.addEventListener("scroll", scrollId);
        
        return () => window.removeEventListener("scroll", scrollId);
    }, []);
    
    return (
        <div className={" w-full"}>
            <AnimatePresence>
                {
                    showUpButton &&
                    <motion.button initial={{opacity : 0, scale : 0.5 }} animate={{ opacity : 1, scale : 1 }} exit={{ opacity : 0, scale : 0}}  onClick={() => window.scrollTo({top: 0})} className={cn('fixed bottom-10 right-20', buttonVariants({variant: "default", size : "icon"}))}>
                        <ArrowUp/>
                    </motion.button>
                }
            </AnimatePresence>
            <p className={'text-small w-full text-center  text-white-80 underline'}>
                <Link href={MY_GITHUB_PROFILE} >© Natanaël  RALAIVOAVY</Link>
            </p>
            
        </div>
    )
}